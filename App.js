import React from 'react';
import {LogBox} from 'react-native';
import RootStack from './navigators/RootStack';
import {AuthProvider} from './src/Constants/AuthContext';
//const {_v, _id, avata, description, name} = route.params.item
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}

export default App;
