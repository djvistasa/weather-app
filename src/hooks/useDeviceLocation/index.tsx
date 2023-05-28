import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import useLocationPermission from '../useLocationPermission';
import { ICoordinates } from '../useWeather/types';
const useDeviceLocation = () => {
  const hasUserGrantedLocationPermission = useLocationPermission();

  const [deviceLocation, setDeviceLocation] = useState<ICoordinates>();
  const [shouldRetry, setShouldRetry] = useState<boolean>(false);
  // const [userAddress, setUserAddress] = useState<Address>();
  // const [geoCodeResults, setGeoCodeResults] = useState<
  //   AutoCompleteSelectOption[]
  // >([]);

  // const handleRetry: () => void = useCallback(() => {
  //   setShouldRetry(true);
  // }, [hideModal]);

  const getDeviceLocation = useCallback(
    () =>
      Geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setShouldRetry(false);
          setDeviceLocation({ latitude, longitude });
        },
        (_error) => {
          setShouldRetry(false);
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
    [],
  );

  // const formatLocationSearchResults = (
  //   results: LocationSearchResult[],
  // ): AutoCompleteSelectOption[] =>
  //   results.map(({ address: title, location: value }) => ({
  //     title,
  //     value,
  //   }));

  // const handleGeoCode = debounce(async (address: string) => {
  //   if (userAddress) {
  //     const { ok, error, result } = await LocationApi.geoCode(
  //       address,
  //       userAddress.coords,
  //     );

  //     if (error) {
  //       return showModal({
  //         message: error,
  //         primaryAction: () => false,
  //         primaryActionTitle: 'Okay',
  //         secondaryAction: hideModal,
  //         secondaryActionTitle: 'Cancel',
  //         type: DialogType.Error,
  //       });
  //     }

  //     if (ok && result && result.candidates) {
  //       const formattedResults = formatLocationSearchResults(result.candidates);
  //       setGeoCodeResults(formattedResults);
  //     }
  //   }
  // }, 600);

  // const handleReverseGeoCode = useCallback(
  //   async ({ latitude, longitude }: Coords) => {
  //     const { error, ok, result } = await LocationApi.reverseGeoCode({
  //       longitude,
  //       latitude,
  //     });

  //     if (error) {
  //       return showModal({
  //         message: error,
  //         primaryAction: () => false,
  //         primaryActionTitle: 'Okay',
  //         secondaryAction: hideModal,
  //         secondaryActionTitle: 'Cancel',
  //         type: DialogType.Error,
  //       });
  //     }

  //     if (ok && result) {
  //       const {
  //         address: { LongLabel },
  //       } = result;

  //       setUserAddress({
  //         coords: { latitude, longitude },
  //         description: LongLabel,
  //       });
  //     }
  //   },
  //   [hideModal, showModal],
  // );

  useEffect(() => {
    if (hasUserGrantedLocationPermission || shouldRetry) {
      getDeviceLocation();
    }
  }, [getDeviceLocation, hasUserGrantedLocationPermission, shouldRetry]);

  // useEffect(() => {
  //   if (deviceLocation?.latitude && deviceLocation?.longitude) {
  //     handleReverseGeoCode({
  //       latitude: deviceLocation.latitude,
  //       longitude: deviceLocation.longitude,
  //     });
  //   }
  // }, [hideModal, deviceLocation, showModal, handleReverseGeoCode]);

  return {
    deviceLocation,
  };
};

export default useDeviceLocation;
