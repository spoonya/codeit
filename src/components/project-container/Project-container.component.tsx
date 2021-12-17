import React from 'react';

import Inner from './styles/project-container.style';
import * as TContainer from './types/project-container.type';

export default function ProjectContainer(props: TContainer.Inner): JSX.Element {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
