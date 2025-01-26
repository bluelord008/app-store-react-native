import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Banner />
        <ProductList />
      </ScrollView>
    </View>
  );
};

export default App;
