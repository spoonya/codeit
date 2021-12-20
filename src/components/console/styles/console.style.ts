import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-width: 200px;
  max-width: 100%;

  background-color: ${({ theme }) => theme.background.secondary};
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
  height: calc(100% - 30px);
  overflow-y: auto;
`;
