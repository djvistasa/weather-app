/**
 *
 * ApplicationWrapper
 *
 */

import React from 'react';
import BackButton from '../backButton';
import {
  StyledApplicationWrapper,
  StyledHeaderWrapper,
  StyledTitle,
} from './styles';
import { IApplicationWrapperProps } from './types';

function ApplicationWrapper({
  children,
  hasBackButton,
  title,
}: IApplicationWrapperProps): JSX.Element {
  return (
    <StyledApplicationWrapper>
      <StyledHeaderWrapper>
        {hasBackButton && <BackButton />}
        <StyledTitle>{title}</StyledTitle>
      </StyledHeaderWrapper>
      {children}
    </StyledApplicationWrapper>
  );
}

export default ApplicationWrapper;
