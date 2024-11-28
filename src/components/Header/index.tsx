import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  title: string;
  profileImage?: any | null;
  tabBar?: React.ReactNode;
  children?: React.ReactNode;
}>;

const Header = ({title, profileImage, tabBar, children}: Props) => {
  return (
    <View style={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        {profileImage && (
          <Image source={profileImage} style={styles.profileImage} />
        )}
      </View>
      {tabBar}
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EAECF0',
    padding: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Quicksand',
    fontSize: 24,
    fontWeight: '600',
    color: '#040415',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
