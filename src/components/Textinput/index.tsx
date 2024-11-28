import {StyleSheet, TextInput, View, Text, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  lable?: string;
  textStyle?: TextStyle;
}>;

const Textinput = ({
  onChangeText,
  value,
  placeholder,
  lable,
  textStyle,
}: Props) => {
  return (
    <View>
      <Text style={[styles.lable, textStyle]}>{lable}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#CDCDD0"
      />
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomColor: '#CDCDD0',
    borderBottomWidth: 1,
    paddingLeft: 10,
    color: '#040415',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 18,
  },
  lable: {
    fontFamily: 'Quicksand',
    color: '#040415',
    fontSize: 10,
    margin: 8,
  },
});
