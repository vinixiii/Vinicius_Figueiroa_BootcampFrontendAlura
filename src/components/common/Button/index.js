import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';

const GhostButton = css`
  background: transparent;
  color: ${({ theme }) => theme.dark.secondaryText};
`;

const DefaultButton = css`
  background: ${({ theme }) => theme.dark.primary};
  color: ${({ theme }) => theme.dark.secondaryText};
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  padding: 16px 22px;
  text-decoration: none;
  cursor: pointer;

  ${TextStyleVariantsMap.smallestExceptionBold}

  ${({ ghost }) => (ghost ? GhostButton : DefaultButton)};
`;
