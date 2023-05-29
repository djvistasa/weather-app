import { ModalType } from '../../components/modal/enums';
import { IModalState } from '../types';

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

export { defaultModal };
