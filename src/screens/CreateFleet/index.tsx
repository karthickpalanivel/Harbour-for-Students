import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Header from 'components/Header';
import PrimaryCard from 'components/PrimaryCard';
import {IMAGE} from 'images';
import Textinput from 'components/Textinput';
import {FleetSize} from 'data';
import PrimaryButton from 'components/PrimaryButton';

type Props = PropsWithChildren<{
  navigation: any;
}>;
const CreateFleet = ({navigation}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const handleCardPress = (value: string) => {
    setSelectedValue(value);
    console.log('Selected Value:', value);
  };
  const handleNav = () => {
    navigation.navigate('SelectFleet');
  };
  return (
    <>
      <SafeAreaView>
        <Header title="Create your Fleet" />
        <View style={styles.content}>
          <PrimaryCard
            image={IMAGE.fleet2}
            title="Kolkatta"
            style={styles.card}
            contentStyle={styles.style}
          />
          <Textinput placeholder="Bengal Tigers" lable="Fleet Name" />
          <Textinput placeholder="Kolkatta" lable="CITY" />
          <Text style={styles.txt}>Fleet Size</Text>
          <FlatList
            style={styles.flatlist}
            data={FleetSize}
            numColumns={3}
            renderItem={({item}) => {
              return (
                <PrimaryCard
                  style={styles.fleetSize}
                  image={item.image}
                  title={item.title}
                  onPress={() => handleCardPress(item.title)}
                  isSelected={item.title === selectedValue}
                  imageStyle={styles.image}
                  contentStyle={styles.fleetCard}
                />
              );
            }}
            keyExtractor={item => item.title}
            columnWrapperStyle={styles.columnWrapper}
          />
          <View style={styles.note}>
            <Text style={styles.noteTitle}>Note:</Text>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}>
                {'\u2022'} $100 will be charged for creating a fleet
              </Text>
              <Text style={styles.bulletPoint}>
                {'\u2022'} Also you will become the commander of the fleet
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <PrimaryButton
        title="Create Fleet"
        style={styles.btn}
        textStyle={styles.text}
        onPress={handleNav}
      />
    </>
  );
};

export default CreateFleet;

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  content: {
    margin: 24,
  },
  fleetSize: {
    width: 100,
    height: 100,
  },
  image: {
    width: 50,
  },
  txt: {
    color: '#040415',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flatlist: {
    marginTop: 16,
  },
  note: {
    marginTop: 16,
  },
  noteTitle: {
    fontSize: 12,
    fontFamily: 'Quicksand',
    fontWeight: '400',
  },
  bulletContainer: {
    marginTop: 8,
    marginLeft: 16,
  },
  bulletPoint: {
    fontSize: 12,
    fontFamily: 'Quicksand',
    fontWeight: '400',
    marginBottom: 8,
  },
  text: {
    color: '#FFFFFF',
  },
  btn: {
    backgroundColor: '#02929A',
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: '35%',
    alignSelf: 'center',
  },
  style: {
    // marginHorizontal: '15%',
    marginTop: '10%',
  },
  fleetCard: {
    marginTop: '20%',
  },
});
