import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { IStyledHeaderProps } from './types';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledModal = styled(Modal)`
  flex: 1;
`;

const StyledModalHeader = styled.View<IStyledHeaderProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px;
  align-items: center;
`;
const StyledModalBody = styled.View`
  padding: 20px;
  flex: 1;
`;
const StyledModalFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledModalWrapper = styled.View`
  flex: 1;
  background-color: ${({
    theme: {
      colors: { transparency },
    },
  }) => transparency};
  align-items: center;
  justify-content: center;
`;

const StyledModalInner = styled.View`
  min-height: 40%;
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  width: ${({
    theme: {
      dimensions: { screenWidth },
    },
  }) => screenWidth - 40}px;
  border-radius: 10px;
  overflow: hidden;
`;

export {
  StyledModal,
  StyledModalBody,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalInner,
  StyledModalWrapper,
};
