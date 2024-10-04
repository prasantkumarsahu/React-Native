import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

// Data
import {PRODUCTS_LIST} from '../data/contents';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productList}
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  productList: {
    width: '100%',
  },
});
