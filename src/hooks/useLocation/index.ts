import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { useMutation } from 'react-query';
import { IAutoCompleteSelectOption } from '../../components/autoComplete/types';
import { ModalType } from '../../components/modal/enums';
import { useAppContext } from '../../context';
import useLocationPermission from '../useLocationPermission';
import { IApiResponse, ICoordinates } from '../useWeather/types';
import { geoCode } from './api';
import { IAddress, IGeoCodeResponse, ILocationResultItem } from './types';

const useLocation = () => {
  const hasUserGrantedLocationPermission = useLocationPermission();
  const {
    ui: { showModal, hideModal },
    user: { addFavoriteLocation },
  } = useAppContext();

  const [deviceLocation, setDeviceLocation] = useState<ICoordinates>();
  const [address, setAddress] = useState<IAddress>();

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

  const { mutate: getAddressSuggestions } = useMutation(
    'getAddressSuggestions',
    (searchTerm: string) => geoCode(searchTerm, deviceLocation as ICoordinates),
    {
      onSuccess: ({ result, error, ok }: IApiResponse) => {
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
          const response = result as IGeoCodeResponse;

          const formattedSuggestions = formatLocationSearchResults(
            response.candidates,
          );

          setAddressSuggestions(formattedSuggestions);
        }
      },
    },
  );

  const addAddressToFavorites = () => {
    if (address) {
      addFavoriteLocation(address);
    }
  };

  useEffect(() => {
    if (hasUserGrantedLocationPermission && !deviceLocation) {
      getDeviceLocation();
    }
  }, [getDeviceLocation, hasUserGrantedLocationPermission, deviceLocation]);

  return {
    getAddressSuggestions,
    deviceLocation,
    addressSuggestions,
    updateAddress: setAddress,
    addAddressToFavorites,
    address,
  };
};

export default useLocation;
