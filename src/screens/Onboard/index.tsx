import {
  Animated,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import OnboardPage from 'components/OnBoard';
import {ONBOARD} from 'data';
import PrimaryButton from 'components/PrimaryButton';
// import {useNavigation} from '@react-navigation/native';

type Props = PropsWithChildren<{
  navigation: any;
}>;

const Onboard = ({navigation}: Props) => {
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  //   const navigation = useNavigation();

  const totalPages = ONBOARD.length;

  const setPage = (index: number) => {
    if (pagerRef.current) {
      pagerRef.current.setPage(index);
    }
  };

  const handlePageChange = (event: any) => {
    const {position} = event.nativeEvent;
    const pageIndex = Math.round(position);
    setCurrentPage(pageIndex);
    animateButtons();
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const animateButtons = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderButtons = ({pages}: {pages: number}) => {
    const buttons = [];

    for (let i = 0; i < pages; i++) {
      const buttonOpacity = buttonAnimation.interpolate({
        inputRange: [i - 1, i, i + 1],
        outputRange: [0.5, 0.5, 0.5],
        extrapolate: 'clamp',
      });

      buttons.push(
        <Animated.View
          key={i.toString()}
          style={[
            styles.buttonContainer,
            {
              opacity: buttonOpacity,
            },
          ]}>
          <TouchableOpacity
            onPress={() => setPage(i)}
            style={[styles.button, i === currentPage && styles.activeButton]}
          />
        </Animated.View>,
      );
    }

    return <View style={styles.buttonGroup}>{buttons}</View>;
  };
  const handleNav = () => {
    navigation.navigate('CreateAccount');
  };
  return (
    <LinearGradient
      colors={['#C0E4E6', '#02929A']}
      style={styles.gradiant}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.1, y: 0.1}}
      useAngle={true}
      angle={135}
      angleCenter={{x: 0.4, y: 0.8}}>
      <View style={styles.content}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          ref={pagerRef}
          onPageScroll={handlePageChange}
          useNext={false}>
          {ONBOARD.map((item, index) => (
            <View key={item.id.toString()}>
              <OnboardPage
                {...item}
                isFirstItem={index === 0}
                isLastItem={index === ONBOARD.length - 1}
              />
            </View>
          ))}
        </PagerView>
        <RenderButtons pages={totalPages} />
        <View style={styles.buttons}>
          <PrimaryButton
            title="Connect with Metamask"
            style={styles.metamaskBtn}
            textStyle={styles.text}
            onPress={handleNav}
          />
          <PrimaryButton
            title="Connect with WalletConnect"
            style={styles.walletConnectBtn}
            textStyle={styles.btnText}
            onPress={handleNav}
          />
        </View>
      </View>
      <Text style={styles.privacy}>
        By continuing you agree Terms of Services & Privacy Policy{' '}
      </Text>
    </LinearGradient>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  privacy: {
    color: '#fff',
    fontFamily: 'Quicksand-Regular',
    marginTop: 12,
    fontWeight: '400',
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 22,
  },
  text: {
    color: '#040415',
    marginHorizontal: '22%',
    // width: '20%',
    textAlign: 'center',
    // marginHorizontal: '10%',
  },
  btnText: {
    color: '#040415',
    marginHorizontal: '18%',
    // width: '20%',
    textAlign: 'center',
  },
  buttons: {
    // marginVertical: '10%',
    flex: 1,
    alignItems: 'center',
  },
  metamaskBtn: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 90,

    // alignSelf: 'center',
  },
  walletConnectBtn: {
    backgroundColor: '#fff',
    marginTop: 12,
    position: 'absolute',
    bottom: 30,
    // paddingHorizontal: '30%',
    // alignSelf: 'center',
  },
  gradiant: {
    height: '100%',
  },
  container: {
    flex: 1,
  },
  pagerView: {},
  buttonGroup: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  button: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  activeButton: {
    width: 10,
  },
  titleStyle: {
    marginVertical: 15,
  },
  content: {
    margin: 22,
    flex: 1,
  },
});
