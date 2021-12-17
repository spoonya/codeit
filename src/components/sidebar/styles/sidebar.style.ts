import styled from 'styled-components/macro';

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

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  transition: color 0.1s linear;

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
