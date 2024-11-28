import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Header from 'components/Header';
import {Fleet} from 'data';
import PrimaryCard from 'components/PrimaryCard';
import PrimaryButton from 'components/PrimaryButton';

type Props = PropsWithChildren<{
  navigation: any;
}>;

const SelectFleet = ({navigation}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleCardPress = (value: string) => {
    setSelectedValue(value);
    console.log('Selected Value:', value);
  };

  const handleNav = () => {
    if (selectedValue === 'Create') {
      navigation.navigate('CreateFleet');
    } else {
      navigation.navigate('SelectShip');
    }
  };

  return (
    <>
      <SafeAreaView>
        <Header title="Your are almost there!" />
        <View style={styles.content}>
          <Text style={styles.txt}>Select your Fleet</Text>
          <Text style={styles.subtxt}>Choose the city you are from</Text>
          <FlatList
            style={styles.flatlist}
            data={Fleet}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <PrimaryCard
                  image={item.image}
                  title={item.title}
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
        title="Next"
        style={styles.btn}
        textStyle={styles.text}
        onPress={handleNav}
      />
    </>
  );
};

export default SelectFleet;

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 16,
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
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
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
