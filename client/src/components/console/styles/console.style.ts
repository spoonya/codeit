import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

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

  background-color: ${({ theme }) => theme.background.secondary};
`;

export const Title = styled.p``;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.background.static};
  height: calc(100% - 25px);
  overflow-y: auto;
`;

export const Clear = styledMUI(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.primary,
  fontSize: 14,
  fontWeight: 400,
  boxShadow: 'none',
  height: '20px',
  padding: '2px 6px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
}));
