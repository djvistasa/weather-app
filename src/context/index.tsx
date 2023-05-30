import React, { createContext, useCallback, useContext, useState } from 'react';
import Modal from '../components/modal';
import { defaultModal } from './mockData';
import {
  IModalContext,
  IModalState,
  IUiContext,
  IUserContext,
  IUserProfileState,
} from './types';

const AppContext = createContext<{
  ui: IUiContext;
  user: IUserContext;
}>({
  ui: {
    modalState: defaultModal,
    showModal: () => false,
    hideModal: () => false,
  },
  user: {
    profile: undefined,
    updateProfile: () => false,
  },
});

export const useModalContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: IModalContext) => {
  const [modalState, setModalState] = useState<IModalState>(defaultModal);
  const [profile, setProfile] = useState<IUserProfileState>();

  const showModal = useCallback(
    ({
      title,
      primaryAction,
      secondaryAction,
      primaryActionTitle,
      secondaryActionTitle,
      type,
      message,
      children: modalChildren,
      presentationStyle,
    }: IModalState) => {
      setModalState({
        message,
        isVisible: true,
        title,
        primaryAction,
        secondaryAction,
        primaryActionTitle,
        secondaryActionTitle,
        type,
        children: modalChildren,
        presentationStyle,
      });
    },
    [],
  );

  const hideModal = useCallback(() => {
    setModalState(defaultModal);
  }, []);

  const updateProfile = useCallback(
    (newProfile: IUserProfileState) => setProfile(newProfile),
    [],
  );

  return (
    <AppContext.Provider
      value={{
        ui: {
          modalState,
          showModal,
          hideModal,
        },
        user: {
          profile,
          updateProfile,
        },
      }}
    >
      {children}
      <Modal />
    </AppContext.Provider>
  );
};

export default AppContextProvider;
