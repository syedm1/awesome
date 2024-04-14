import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MainContainer />
    </ApplicationProvider>
  );
}
export default App;
