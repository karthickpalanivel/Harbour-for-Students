import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}>;

const PrimaryButton = ({title, onPress, style, textStyle}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginVertical: 16,
  },
});

export default PrimaryButton;
