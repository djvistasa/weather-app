import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { useAppContext } from '../../context';
import { IUserProfileState } from '../../context/types';

function useHydration() {
  const {
    user: { updateProfile },
  } = useAppContext();

  const [isSandboxHydrated, setIsSandboxHydrated] = useState(false);

  const hydrateContext = useCallback(async () => {
    const profileFromSandbox = await AsyncStorage.getItem('profile');

    if (profileFromSandbox) {
      const parsedProfile = JSON.parse(profileFromSandbox) as IUserProfileState;

      updateProfile(parsedProfile);
    }
  }, [updateProfile]);

  const hydrateSandbox = useCallback(
    async (updatedProfile: IUserProfileState) => {
      await AsyncStorage.setItem('profile', JSON.stringify(updatedProfile));

      setIsSandboxHydrated(true);
    },
    [],
  );

  return {
    isSandboxHydrated,
    hydrateContext,
    hydrateSandbox,
  };
}

export default useHydration;
