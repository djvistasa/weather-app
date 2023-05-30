import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { IAutoCompleteSelectOption } from '../../components/autoComplete/types';
import { ModalType } from '../../components/modal/enums';
import { useModalContext } from '../../context';
import useLocationPermission from '../useLocationPermission';
import { ICoordinates } from '../useWeather/types';
import { geoCode } from './api';
import { GeoCodeResponse, ILocationResultItem } from './types';

const useLocation = () => {
  const hasUserGrantedLocationPermission = useLocationPermission();
  const {
    ui: { showModal, hideModal },
  } = useModalContext();

  const [deviceLocation, setDeviceLocation] = useState<ICoordinates>();

  const [addressSuggestions, setAddressSuggestions] = useState<
    IAutoCompleteSelectOption[]
  >([]);

  const getDeviceLocation = useCallback(
    () =>
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          setDeviceLocation(coords);
        },
        (error) =>
          showModal({
            message: new Error(error.message).message,
            primaryAction: () => false,
            primaryActionTitle: 'Okay',
            secondaryAction: hideModal,
            secondaryActionTitle: 'Cancel',
            type: ModalType.Error,
            title: 'Location Error',
          }),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      ),
    [showModal, hideModal],
  );

  const formatLocationSearchResults = (
    results: ILocationResultItem[],
  ): IAutoCompleteSelectOption[] =>
    results.map(({ address: title, location: value }) => ({
      title,
      value,
    }));

  const getAddressSuggestions = useCallback(
    async (address: string) => {
      if (deviceLocation) {
        const { result, ok, error } = await geoCode(
          address,
          deviceLocation as ICoordinates,
        );

        if (error) {
          return showModal({
            message: new Error(error as string).message,
            primaryAction: () => false,
            primaryActionTitle: 'Okay',
            secondaryAction: hideModal,
            secondaryActionTitle: 'Cancel',
            type: ModalType.Error,
            title: 'Location Error',
          });
        }

        if (ok && result) {
          const response = result as GeoCodeResponse;

          const formattedSuggestions = formatLocationSearchResults(
            response.candidates,
          );

          setAddressSuggestions(formattedSuggestions);
        }
      }
    },
    [deviceLocation, hideModal, showModal],
  );

  useEffect(() => {
    if (hasUserGrantedLocationPermission && !deviceLocation) {
      getDeviceLocation();
    }
  }, [getDeviceLocation, hasUserGrantedLocationPermission, deviceLocation]);

  return {
    getAddressSuggestions,
    deviceLocation,
    addressSuggestions,
  };
};

export default useLocation;
