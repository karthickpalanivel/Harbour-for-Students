import {
  StyleSheet,
  Text,
  ViewStyle,
  Image,
  TouchableOpacity,
  View,
  ImageStyle,
} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  image: undefined;
  isSelected?: boolean;
  imageStyle?: ImageStyle;
  subTitle?: string;
  contentStyle?: ViewStyle;
}>;

const PrimaryCard = ({
  title,
  onPress,
  style,
  image,
  isSelected,
  imageStyle,
  subTitle,
  contentStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isSelected && styles.selectedCard, style]}>
      <View style={[styles.content, contentStyle]}>
        <Image source={image} style={imageStyle} resizeMode="contain" />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAECF0',
    alignItems: 'center',
    // padding: '15%',
    height: 135,
    // width: 160,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    textAlign: 'center',
    marginTop: 8,
  },
  selectedCard: {
    borderColor: '#02929A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  subTitle: {
    color: '#040415',
    textAlign: 'center',
    // marginVertical: 12,
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Quicksand',
    marginBottom: 12,
  },
});
