import { useCallback, useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import useAppSettings from '../useAppSettings';

function useLocationPermission() {
  const openAppSettings = useAppSettings();
  const [hasGrantedPermission, setHasGrantedPermission] =
    useState<boolean>(false);

  const openSettings = useCallback(() => {
    openAppSettings();
  }, [openAppSettings]);

  const showErrorDialog = useCallback(
    () =>
      Alert.alert(
        'Confirmation',
        'Are you sure you want to proceed?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => false,
          },
          {
            text: 'OK',
            onPress: () => {
              // Handle OK action
              openSettings();
            },
          },
        ],
        { cancelable: true },
      ),

    [openSettings],
  );

  const checkPermissionIOS = useCallback(async () => {
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'denied' || status === 'disabled') {
      return showErrorDialog();
    }

    setHasGrantedPermission(status === 'granted');
  }, [showErrorDialog]);

  const checkPermissionAndroid = useCallback(async () => {
    const hasPermissionAlreadyBeenGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermissionAlreadyBeenGranted) {
      return setHasGrantedPermission(hasPermissionAlreadyBeenGranted);
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (
      status === PermissionsAndroid.RESULTS.DENIED ||
      status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
    ) {
      return showErrorDialog();
    }

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return setHasGrantedPermission(true);
    }
  }, [showErrorDialog]);

  useEffect(() => {
    const requestLocationPermission = () => {
      if (Platform.OS === 'ios') {
        return checkPermissionIOS();
      }

      checkPermissionAndroid();
    };
    requestLocationPermission();
  }, [checkPermissionIOS, checkPermissionAndroid]);

  return hasGrantedPermission;
}

export default useLocationPermission;
