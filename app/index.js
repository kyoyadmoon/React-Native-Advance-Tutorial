import React, { Component, PropTypes } from "react";
import { StyleSheet, Text } from 'react-native';
import { Router, Scene, Tabs, ActionConst } from 'react-native-router-flux';
import Home from './containers/Home';
import TabIcon from './components/TabIcon';
import Greeting from './components/Greeting';
import Specific from './containers/Specific';
import AnimationDemo from './containers/Animation';
import IconDemo from './containers/IconDemo';
import AsyncStorageSave from './containers/AsyncStorage-save';
import AsyncStorageRead from './containers/AsyncStorage-read';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "transparent", justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    backgroundColor: "#eee",
  },
  tabBarSelectedItemStyle: {
    backgroundColor: "#ddd",
  },
});

export default App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="specific" component={Specific} />
      <Scene key="animation" component={AnimationDemo} />
      <Scene key="asyncStorage-save" component={AsyncStorageSave} />
      <Scene key="asyncStorage-read" component={AsyncStorageRead} />
      <Scene key="iconDemo" component={IconDemo} />
      <Tabs key="tabbar" hideNavBar tabs tabBarStyle={styles.tabBarStyle} activeBackgroundColor="#ddd">
        <Scene initial key="tab0" title="Tab #0" icon={TabIcon}
          component={Home} />
        <Scene key="tab1" title="Tab #1" icon={TabIcon}>
          <Scene
            key="tab1_1"
            component={Home}
            title="Tab #1-1"
          />
        </Scene>
        <Scene key="tab2" title="Tab #2" icon={TabIcon}>
          <Scene
            key="tab1-2"
            component={Home}
            title="Tab #1-2"
          />
        </Scene>
        <Scene key="tab3" title="Tab #3" icon={TabIcon}>
          <Scene
            key="tab1-3"
            component={Home}
            title="Tab #1-3"
          />
        </Scene>
      </Tabs>
    </Scene>
  </Router>
);