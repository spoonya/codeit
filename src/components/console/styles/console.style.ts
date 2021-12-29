import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-width: 200px;
  max-width: 100%;

  background-color: ${({ theme }) => theme.background.primary};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;

  background-color: ${({ theme }) => theme.background.primary};
`;

export const Title = styled.p``;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.background.static};
  height: calc(100% - 25px);
  overflow-y: auto;
`;

export const Clear = styled.button`
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;

  padding: 2px 5px;

  border-radius: 3px;

  transition: color 0.1s linear, background-color 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.white.primary};
  }
`;
