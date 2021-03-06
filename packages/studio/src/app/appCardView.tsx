import React from 'react';
import { Gallery } from '@patternfly/react-core';
import {AppCard} from './appCard';
import data from '../api-data.json';

export const AppCardView: React.FunctionComponent<any> = (props) => {
  const apiData = data.apis;
  const cardList = apiData.map((api, index) =>
    <AppCard
      key={index}
      id={api.id}
      name={api.name}
      description={api.description}
      tags={api.tags}
    />
  );

  return (
    <Gallery gutter="md">
      {cardList}
    </Gallery>
  );
}

export default AppCardView;