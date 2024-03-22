import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { ListItem } from 'react-native-elements';

const Gallery = ({navigation}) => {
  const images = [
    { id: 1, uri: 'https://zoomorelia.michoacan.gob.mx/wp-content/uploads/2023/07/1.jpg' },
    { id: 2, uri: 'https://zoomorelia.michoacan.gob.mx/wp-content/uploads/2024/01/1-1.jpg' },
    // Agrega más URLs de imágenes según sea necesario
  ];

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </ListItem>
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('Home')}>
          <Image style={styles.transparency} source={require('../assets/chimenea-de-la-casa.png')} />
          <Text style={styles.title7}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image style={styles.transparency} source={require('../assets/ubicacion-del-terreno.png')} />
          <Text style={styles.title7}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('Especies')}>
          <Image style={styles.transparency} source={require('../assets/periodico.png')} />
          <Text style={styles.title7}>Especies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('Gallery')}>
          <Image style={styles.transparency} source={require('../assets/miniaturas-de-la-galeria.png')} />
          <Text style={styles.title7}>Galería</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAE4',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#edf3a7',
    // shadowColor: '#0000001f',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  transparency: {
    width: 28,
    height: 28,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title7: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000000',
    marginTop: 1,
  },
});

export default Gallery;
