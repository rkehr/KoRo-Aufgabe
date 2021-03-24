import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import InfoImage from './components/InfoImage';
import { mockData } from './data';

const App = () => {
  const exampleData = mockData[0];

  return <InfoImage data={exampleData}></InfoImage>;
};

export default App;
