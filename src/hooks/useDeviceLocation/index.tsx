import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { ModalType } from '../../components/modal/enums';
import { useModalContext } from '../../context';
import useLocationPermission from '../useLocationPermission';
import { ICoordinates } from '../useWeather/types';

const useDeviceLocation = () => {
  const hasUserGrantedLocationPermission = useLocationPermission();
  const {
    ui: { showModal, hideModal },
  } = useModalContext();

  const [deviceLocation, setDeviceLocation] = useState<ICoordinates>();

  const getDeviceLocation = useCallback(
    () =>
      Geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          if (!deviceLocation) {
            setDeviceLocation({ latitude, longitude });
          }
        },
        (error) => {
          showModal({
            message: error.message,
            title: 'Location Error',
            type: ModalType.Error,
            primaryAction: () => {
              getDeviceLocation();
            },
            primaryActionTitle: 'Retry',
            secondaryActionTitle: 'Cancel',
            secondaryAction: () => {
              hideModal();
            },
          });
        },
        {
          accuracy: {
            android: 'high',
            ios: 'nearestTenMeters',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          forceLocationManager: false,
          showLocationDialog: true,
        },
      ),
    [deviceLocation, showModal, hideModal],
  );

  useEffect(() => {
    if (hasUserGrantedLocationPermission) {
      getDeviceLocation();
    }
  }, [getDeviceLocation, hasUserGrantedLocationPermission]);

  return {
    deviceLocation,
  };
};

export default useDeviceLocation;
