import { ModalType } from '../components/modal/enums';
import { IAddress } from '../hooks/useLocation/types';

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
  favoriteLocations: IAddress[];
}

interface IUserContext {
  profile: IUserProfileState;
  updateProfile: (profile: IUserProfileState) => void;
  addFavoriteLocation: (address: IAddress) => void;
}

export type {
  IModalContext,
  IModalState,
  IUiContext,
  IUserContext,
  IUserProfileState,
};
