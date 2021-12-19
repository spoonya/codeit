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

  padding: 15px 7px 0;
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

    ${({ isActive }) => isActive && 'height: 170%;'}
  }

  &:hover {
    color: ${({ theme }) => theme.brand.primary};
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Tab = styled.div<TSidebar.Tab>`
  display: none;

  width: 245px;
  height: 100%;

  border-left: 1px solid ${({ theme }) => theme.divider};

  ${({ isActive }) => isActive && 'display: block;'}
`;

export const TabHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.divider};

  text-transform: uppercase;
`;

export const TabHeaderInner = styled.div`
  padding: 15px 10px;
`;

export const TabList = styled.ul`
  padding: 20px 15px;

  overflow-y: auto;
  height: calc(100vh - 90px);

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.background.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.brand.primary};
  }
`;

export const TabSubList = styled.ul`
  padding-left: 10px;
`;

export const TabListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const TabSubListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TabListName = styled.p`
  margin-bottom: 8px;
`;

export const TabSwitch = styled.div`
  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
    color: ${({ theme }) => theme.brand.primary};
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.brand.primary};
  }

  .MuiTypography-root {
    font-size: 14px;
    user-select: none;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const TabSelect = styled.div`
  .MuiFormControl-root {
    margin: 0;
    min-width: 145px;
  }

  .MuiInput-root {
    font-size: 14px;
    color: ${({ theme }) => theme.text.secondary};
  }

  .MuiInputLabel-root {
    font-size: 19px;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: 15px;
  }

  .MuiSelect-nativeInput {
    font-size: 14px;
  }

  .MuiInput-underline::before {
    border-bottom: 1px solid ${({ theme }) => theme.white.secondary};
  }

  .MuiInput-underline::after {
    content: none;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${({ theme }) => theme.white.secondary};
  }

  .css-10ascl4-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.text.primary};
  }

  svg {
    color: ${({ theme }) => theme.text.secondary};
  }

  .MuiSelect-select:focus {
    background: none;
  }
`;
