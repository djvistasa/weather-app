import { ModalType } from '../../components/modal/enums';
import { IModalState, IUserContext } from '../types';

const defaultModal: IModalState = {
  message: 'Hello',
  isVisible: false,
  title: 'Delete',
  primaryAction: () => false,
  secondaryAction: () => false,
  primaryActionTitle: 'Delete',
  secondaryActionTitle: 'Cancel',
  type: ModalType.Warning,
  isTransparent: true,
  presentationStyle: 'overFullScreen',
};

const defaultUserProfile: IUserContext = {
  profile: { favoriteLocations: [], id: '' },
  updateProfile: () => false,
  addFavoriteLocation: () => false,
};

export { defaultModal, defaultUserProfile };
