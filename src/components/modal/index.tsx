/**
 *
 * Modal
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import { useAppContext } from '../../context/';
import Button from '../button';
import { ButtonVariant } from '../button/enums';
import { StyledSafeAreaView, StyledText } from '../common';
import { ModalType } from './enums';
import {
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalInner,
  StyledModalWrapper,
} from './styles';

function Modal(): JSX.Element {
  const {
    ui: {
      hideModal,
      modalState: {
        message,
        isVisible,
        primaryAction,
        primaryActionTitle,
        secondaryAction,
        secondaryActionTitle,
        title,
        children,
        type,
        presentationStyle,
        isTransparent,
      },
    },
  } = useAppContext();
  const {
    colors: { cloudy, success, error, warning },
  } = useTheme();

  const getBackgroundColorByType = () => {
    switch (type) {
      case ModalType.Success:
        return success;
      case ModalType.Error:
        return error;
      case ModalType.Warning:
        return warning;
      default:
        return success;
    }
  };

  return (
    <StyledModal
      visible={isVisible}
      presentationStyle={presentationStyle || 'pageSheet'}
      transparent={isTransparent}
      onRequestClose={hideModal}
    >
      <StyledSafeAreaView>
        {children || (
          <StyledModalWrapper>
            <StyledModalInner>
              <StyledModalHeader backgroundColor={getBackgroundColorByType()}>
                <StyledText fontSize={20}>{title}</StyledText>
              </StyledModalHeader>
              <StyledModalBody>
                <StyledText color={cloudy} fontSize={15}>
                  {message}
                </StyledText>
              </StyledModalBody>

              <StyledModalFooter>
                {secondaryAction && secondaryActionTitle && (
                  <Button
                    onPress={() => {
                      hideModal();
                      secondaryAction();
                    }}
                    title={secondaryActionTitle}
                    variant={ButtonVariant.Secondary}
                  />
                )}
                {primaryAction && primaryActionTitle && (
                  <Button
                    onPress={() => {
                      hideModal();
                      primaryAction();
                    }}
                    title={primaryActionTitle}
                    variant={ButtonVariant.Primary}
                  />
                )}
              </StyledModalFooter>
            </StyledModalInner>
          </StyledModalWrapper>
        )}
      </StyledSafeAreaView>
    </StyledModal>
  );
}

export default Modal;
