import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Navigator } from '@pam/navigators';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
