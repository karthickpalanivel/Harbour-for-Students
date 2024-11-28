import React, {memo} from 'react';
import {View, StyleSheet, Image, ImageSourcePropType, Text} from 'react-native';

interface OnboardingPageProps {
  image?: ImageSourcePropType;
  title: string;
  description: string;
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

const OnboardPage = memo(
  ({
    image,
    description,
    isFirstItem,
    isLastItem,
    title,
  }: OnboardingPageProps) => {
    return (
      <View style={styles.page}>
        <View
          style={[
            styles.container,
            isFirstItem && styles.isFirstItem,
            isLastItem && styles.isLastItem,
          ]}>
          <Image source={image} style={styles.image} resizeMode="stretch" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
      </View>
    );
  },
);

export default OnboardPage;

const styles = StyleSheet.create({
  page: {
    // width: Constants.width,
  },
  container: {
    // alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Quicksand',
    fontSize: 40,
    fontWeight: '600',
    lineHeight: 42,
    marginTop: 16,
  },

  desc: {
    color: '#fff',
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginVertical: 8,
  },
  isFirstItem: {},
  isLastItem: {},
});
