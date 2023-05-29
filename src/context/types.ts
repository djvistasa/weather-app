import { ModalType } from '../components/modal/enums';
import { ICoordinates } from '../hooks/useWeather/types';

interface IModalContext {
  children: JSX.Element;
}

interface IModalState {
  message?: string;
  isVisible?: boolean;
  title: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
  primaryActionTitle?: string;
  secondaryActionTitle?: string;
  type: ModalType;
  children?: JSX.Element;
  presentationStyle?:
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'overFullScreen';
  isTransparent?: boolean;
}

interface IUiContext {
  modalState: IModalState;
  showModal: (modalState: IModalState) => void;
  hideModal: () => void;
}

interface IUserProfileState {
  id: string;
  favoriteLocations: ICoordinates[];
}

interface IUserContext {
  profile: IUserProfileState | undefined;
  updateProfile: (profile: IUserProfileState) => void;
}

export type {
  IModalContext,
  IModalState,
  IUiContext,
  IUserContext,
  IUserProfileState,
};
