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

export const SignIn = styledMUI(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: 14,
  boxShadow: 'none',
  height: '28px',
  padding: '5px 10px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
}));

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;
