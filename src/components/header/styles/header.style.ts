import { Button } from '@mui/material';
import styled from 'styled-components/macro';
import { styled as styledMui } from '@mui/material/styles';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.divider};

  height: 42px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7px 15px;

  width: 100%;
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
  color: ${({ theme }) => theme.white.primary};

  padding: 5px;

  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 3px;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.brand.secondary};
  }
`;

export const Run = styledMui(Button)({
  textTransform: 'none',
  backgroundColor: '#1DB954',
  fontSize: 14,
  boxShadow: 'none',
  height: '28px',
  padding: '5px 10px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: '#139f44',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: '#157938',
    color: '#bdbdbd',
  },
});
