import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation, Link } from 'react-router-dom';

import { InfoImage, UploadInfoImage } from './components';
import { mockData } from './data';

const App = () => {
  const [activeText, setActiveText] = useState(['', '']);
  const exampleData = mockData[0];

  return (
    <>
      <nav>
        <Link to="/display">Display</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Switch>
        <Route path="/display">
          <section>
            <InfoImage data={exampleData} activeTextCallback={setActiveText} />
            <div className="text-display">
              <h3>{activeText[0]}</h3>
              <p>{activeText[1]}</p>
            </div>
          </section>
        </Route>
        <Route path="/upload">
          <section>
            <UploadInfoImage> </UploadInfoImage>
          </section>
        </Route>
        <Redirect to={'/display'} />
      </Switch>
    </>
  );
};

export default App;
