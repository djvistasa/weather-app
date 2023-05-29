import { useCallback } from 'react';
import { Linking } from 'react-native';

function useAppSettings() {
  const openAppSettings = useCallback(
    async () => await Linking.openSettings(),
    [],
  );

  return openAppSettings;
}

export default useAppSettings;
