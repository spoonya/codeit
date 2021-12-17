import React from 'react';

import Inner from './styles/container.style';
import * as TContainer from './types/container.type';

export default function Container(props: TContainer.Inner): JSX.Element {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
