import { Button } from '@mui/material';
import styled from 'styled-components/macro';
import { styled as styledMUI } from '@mui/material/styles';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.myDivider};
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
  font-size: 24px;
  text-transform: uppercase;

  margin-right: 20px;

  span {
    color: ${({ theme }) => theme.primary.main};
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 16px;
`;

export const SignIn = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.white.primary};

  padding: 5px;

  background-color: ${({ theme }) => theme.primary.main};
  border-radius: 3px;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.primary.dark};
  }
`;

export const Run = styledMUI(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.common.green.primary,
  fontSize: 14,
  boxShadow: 'none',
  height: '28px',
  padding: '5px 10px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.common.green.secondary,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
}));
