/* eslint-disable @typescript-eslint/quotes */
import styled from 'styled-components/macro';

import * as TSidebar from '../types/sidebar.type';

export const Container = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.divider};
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 42px;

  padding: 0 7px;
`;

export const MenuItem = styled.li<TSidebar.Item>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme, isActive }) => (isActive ? theme.text.primary : theme.text.secondary)};
  cursor: pointer;

  transition: color 0.1s linear;

  &::before {
    position: absolute;

    top: 50%;
    left: -6px;

    transform: translateY(-50%);

    display: block;

    content: '';

    background-color: ${({ theme }) => theme.brand.primary};

    width: 2px;
    height: 0;

    transition: height 0.1s linear;

    ${({ isActive }) => isActive && 'height: 100%;'}
  }

  &:hover {
    color: ${({ theme }) => theme.brand.primary};
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Tab = styled.div`
  width: 245px;
  height: 100%;

  border-left: 1px solid ${({ theme }) => theme.divider};
`;

export const TabHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.divider};

  text-transform: uppercase;
`;

export const TabInner = styled.div`
  padding: 15px 10px;
`;
