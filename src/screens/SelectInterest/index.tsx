import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Header from 'components/Header';
import PrimaryCard from 'components/PrimaryCard';
import {Interest} from 'data';
import PrimaryButton from 'components/PrimaryButton';

type Props = PropsWithChildren<{
  navigation: any;
}>;

const SelectInterest = ({navigation}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleCardPress = (value: string) => {
    setSelectedValue(value);
    console.log('Selected Value:', value);
  };

  const handleNav = () => {
    navigation.navigate('BottomNavigator');
  };
  return (
    <>
      <SafeAreaView>
        <Header title="Your are almost there!" />
        <View style={styles.content}>
          <Text style={styles.txt}>Select your Interest</Text>
          <Text style={styles.subtxt}>
            Choose the things you are interested in
          </Text>
          <FlatList
            style={styles.flatlist}
            data={Interest}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <PrimaryCard
                  image={item.image}
                  title={item.title}
                  subTitle={item.subTitle}
                  onPress={() => handleCardPress(item.title)}
                  isSelected={item.title === selectedValue}
                  contentStyle={styles.style}
                  imageStyle={styles.img}
                />
              );
            }}
            keyExtractor={item => item.title}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </SafeAreaView>
      <PrimaryButton
        title="Join"
        style={styles.btn}
        textStyle={styles.text}
        onPress={handleNav}
      />
    </>
  );
};

export default SelectInterest;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 24,
  },
  txt: {
    color: '#040415',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 16,
  },
  subtxt: {
    color: '#686873',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 8,
  },
  flatlist: {
    marginTop: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  text: {
    color: '#FFFFFF',
  },
  btn: {
    backgroundColor: '#02929A',
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: '40%',
    alignSelf: 'center',
  },
  style: {
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: '20%',
    // backgroundColor: 'red',
    width: 115,
    // alignContent: 'center',
  },
  img: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
