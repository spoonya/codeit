/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TooltipMui, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface InnerProps {
  children: React.ReactElement<any, any>;
  title: string;
}

const TooltipStyled = styled(({ className, ...props }: TooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 12,
    boxShadow: theme.shadows[5],
  },
}));

export function Tooltip(props: InnerProps) {
  const { children, title } = props;

  return (
    <TooltipStyled title={title} arrow placement="bottom-end" disableInteractive>
      {children}
    </TooltipStyled>
  );
}
