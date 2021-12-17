import styled from 'styled-components/macro';
import ContentContainer from '../../container/styles/container.style';

export const Container = styled.header`
  height: 42px;

  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.divider};
`;

export const Inner = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7px 0;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  text-transform: uppercase;

  margin-right: 20px;

  span {
    color: ${({ theme }) => theme.brand.primary};
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.6rem;
`;

export const SignIn = styled.button`
  font-size: 14px;

  padding: 5px;

  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 3px;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.brand.secondary};
  }
`;
