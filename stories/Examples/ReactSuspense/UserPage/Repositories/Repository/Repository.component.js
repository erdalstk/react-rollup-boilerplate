// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as styles from './Repository.style.js';

const Item = styled.li`
  ${styles.item}
`;

export type Props = {
  name: string,
  description: string,
  url: string
};

export default ({ description, name, url }: Props): React.Node => (
  <Item>
    <strong><a href={url}>{name}</a></strong>
    <div>{description}</div>
  </Item>
);
