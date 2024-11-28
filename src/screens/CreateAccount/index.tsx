import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Header from 'components/Header';
import Textinput from 'components/Textinput';
import PrimaryCard from 'components/PrimaryCard';
import {Gender} from 'data';
import PrimaryButton from 'components/PrimaryButton';

type Props = PropsWithChildren<{
  navigation: any;
}>;

const CreateAccount = ({navigation}: Props) => {
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
        <Header title="Create Account" />
        <View style={styles.container}>
          <Textinput placeholder="Name" lable="Name" />
          <Textinput placeholder="abc@gmail.com" lable="Email" />
          <Text style={styles.txt}>Are you a student</Text>
          <FlatList
            style={styles.flatlist}
            data={Gender}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <PrimaryCard
                  image={item.image}
                  title={item.title}
                  onPress={() => handleCardPress(item.title)}
                  isSelected={item.title === selectedValue}
                  contentStyle={styles.style}
                />
              );
            }}
            keyExtractor={item => item.title}
            columnWrapperStyle={styles.columnWrapper}
          />
          <Text style={styles.txt}>Referral Code (if any)</Text>
          <Textinput placeholder="SK242025" />
        </View>
      </SafeAreaView>
      <PrimaryButton
        title="Create Account"
        style={styles.btn}
        textStyle={styles.text}
        onPress={handleNav}
      />
    </>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  text: {
    color: '#FFFFFF',
  },
  btn: {
    backgroundColor: '#02929A',
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: '30%',
    alignSelf: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flatlist: {
    marginTop: 16,
  },
  txt: {
    color: '#040415',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 16,
  },
  style: {
    marginHorizontal: '15%',
    marginTop: '20%',
  },
});
