import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from 'components/Header';
import {TabView, SceneMap, Route, TabBar} from 'react-native-tab-view';

type State = {index: number; routes: Route[]};

export const Feed = () => (
  <View style={styles.scene}>
    <Text>Feed</Text>
  </View>
);

export const Proposal = () => (
  <View style={styles.scene}>
    <Text>Proposal</Text>
  </View>
);

export const Circles = () => (
  <View style={styles.scene}>
    <Text>Circles</Text>
  </View>
);

const renderScene = SceneMap({
  first: Feed,
  second: Proposal,
  thired: Circles,
});

const Home = () => {
  const [index, setIndex] = useState<State['index']>(0);
  const [routes] = useState<State['routes']>([
    {key: 'first', title: 'Feed'},
    {key: 'second', title: 'Proposal'},
    {key: 'thired', title: 'Circles'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <Header
            title="Hi, Chaal 👋🏻"
            tabBar={
              <TabBar
                {...props}
                style={styles.tabBar}
                pressColor="transparent"
                pressOpacity={1}
                renderLabel={({route, focused}) => (
                  <Text
                    style={[
                      styles.label,
                      focused ? styles.activeLabel : styles.label,
                    ]}>
                    {route.title}
                  </Text>
                )}
                indicatorStyle={styles.indicatorStyle}
              />
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: '#fff', // Blue color for the selected tab
    borderRadius: 10, // Rounded corners for the indicator
    height: '80%',
    bottom: 4, // Make the indicator fill the tab height
  },
  label: {
    color: '#686873',
    fontWeight: '600',
    fontSize: 14,
    bottom: 8,
    fontFamily: 'Quicksand',
  },
  activeLabel: {
    color: '#6B73FF', // Blue color for active tab text
    fontWeight: '600',
    fontSize: 14,
    bottom: 8,
    fontFamily: 'Quicksand',
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#EAECF0',
    borderRadius: 8, // Rounded corners for the tab bar
    marginTop: 12,
    // marginHorizontal: 16, // Adds some space on the sides
    height: 36, // Adjust height for the tab bar
  },
});
