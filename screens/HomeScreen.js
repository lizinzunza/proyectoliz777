import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      
      <View style={styles.sectionTitle}>
        <View style={styles.div}>
          <Text style={styles.textWrapper}>Bienvenidos al Zoológico</Text>
          <Text style={styles.subtitle}>¡Descubre la vida silvestre!</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title2}>Explorar más</Text>
          <Image style={styles.icon} source={require('../assets/corazon-de-busqueda.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.list5}>
        <View style={styles.row5}>
          <View style={styles.card5}>
            <View style={styles.imageContainer5}>
              <Image style={styles.image5} source={require('../assets/elefante.jpg')} />
              <View style={styles.tag5}>
                <Text style={styles.text5}>Nuevo</Text>
              </View>
            </View>
            <View style={styles.textContent5}>
              <Text style={styles.textWrapper5}>Elefante</Text>
              <Text style={styles.subtitle5}>Mamífero, Herbívoro</Text>
            </View>
          </View>
          <View style={styles.div5}>
            <View style={styles.imageContainer5}>
              <Image style={styles.image5} source={require('../assets/leo.jpg')} />
            </View>
            <View style={styles.textContent5}>
              <Text style={styles.textWrapper5}>León</Text>
              <Text style={styles.subtitle5}>Mamífero, Carnívoro</Text>
            </View>
          </View>
        </View>
      </View>




      {/* Resto del contenido */}

      <View style={styles.list6}>
      <View style={styles.row6}>
        <View style={styles.post6}>
          <View style={styles.user6}>
              <View style={styles.div6} />
              <View style={styles.frame6}>
                <Text style={styles.title6}>Carlos Medina</Text>
                <Text style={styles.subtitle6}>Hace 1 semana - Zoológico</Text>
              </View>
           
          </View>
          <View style={styles.imageContainer6}>
            <View style={styles.image6}>
              <Image style={styles.image6} source={require('../assets/pinguino.jpg')} />
              <View style={styles.pagination6}>
              </View>
            </View>
          </View>
          <View style={styles.textContent6}>
            <Text style={styles.p6}>Este es uno de los lugares más hermosos que he visitado. ¡Altamente recomendado!</Text>
          </View>
        </View>
      </View>
    </View>


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
          <Text style={styles.title7}>Noticias</Text>
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

const styles = {
  page: {
    backgroundColor: '#FAFAE4',
  },
  topBar: {
    padding: 16,
    backgroundColor: '#edf3a7',
    borderBottomWidth: 1,
    borderBottomColor: '#0000001f',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
  },
  transparency: {
    width: 28,
    height: 28,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  div: {
    flex: 1,
  },
  textWrapper: {
    fontSize: 18,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    // color: '#00000080',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: '#000000',
    borderRadius: 4,
    padding: 8,
  },
  title2: {
    fontSize: 12,
    fontWeight: '400',
    // color: '#000000',
  },
  icon: {
    width: 12,
    height: 12,
  },
  list5: {
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row5: {
    flexDirection: 'row',
    marginTop: 0,
  },
  card5: {
    width: 150,
    borderWidth: 1,
    borderColor: '#0000001a',
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 2,
  },
  imageContainer5: {
    height: 150,
    width: '100%',
  },
  image5: {
    flex: 1,
    width: '100%',
  },
  tag5: {
    // backgroundColor: '#0000000d',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 1,
  },
  text5: {
    // color: '#000000',
    fontWeight: '500',
  },
  textContent5: {
    backgroundColor: '#a7f3ca85',
    padding: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  textWrapper5: {
    // color: '#000000',
    fontWeight: '400',
  },
  subtitle5: {
    // color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    height: 24,
    lineHeight: 24,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: 1,
  },
  div5: {
    width: 150,
    marginLeft: 8,
    borderWidth: 1,
    // borderColor: '#0000001a',
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 1,
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




list6: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  row6: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginTop: 1,
  },
  post6: {
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: '#0000001a',
    borderRadius: 6,
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  user6: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#a7f3ca85',
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    position: 'relative',
    width: '100%',
  },
  avatar6: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    gap: 8,
    position: 'relative',
  },
  div6: {
    // backgroundColor: '#0000001a',
    borderRadius: 24,
    height: 24,
    position: 'relative',
    width: 24,
  },
  frame6: {
    alignItems: 'flex-start',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
  },
  title6: {
    // color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: -1,
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  subtitle6: {
    // color: '#00000080',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 14,
    marginTop: -1,
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  iconButtons6: {
    alignItems: 'center',
    display: 'inline-flex',
    flex: 0,
    flexDirection: 'row',
    gap: 8,
    position: 'relative',
  },
  icon6: {
    // color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: -1,
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 24,
  },
  imageContainer6: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    display: 'flex',
    height: 336,
    position: 'relative',
    width: '100%',
  },
  image6: {
    alignSelf: 'stretch',
    // backgroundColor: '#0000000d',
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  textWrapper6: {
    // color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    position: 'absolute',
    textAlign: 'center',
    top: 159,
    left: 16,
    width: 304,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  pagination6: {
    alignItems: 'center',
    display: 'inline-flex',
    gap: 4,
    justifyContent: 'center',
    position: 'absolute',
    top: 324,
    left: 146,
  },
  rectangle6: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    height: 4,
    position: 'relative',
    width: 20,
  },
  rectangle26: {
    backgroundColor: '#0000004c',
    borderRadius: 100,
    height: 4,
    position: 'relative',
    width: 4,
  },
  textContent6: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#a7f3ca85',
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    gap: 8,
    padding: 12,
    position: 'relative',
    width: '100%',
  },
  p6: {
    alignSelf: 'stretch',
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: -1,
    position: 'relative',
  },
  selection6: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    gap: 6,
    position: 'relative',
    width: '100%',
  },
  labelNormal6: {
    alignItems: 'center',
    backgroundColor: '#0000000d',
    border: '0.5px solid',
    borderColor: '#0000001a',
    borderRadius: 2,
    display: 'inline-flex',
    flex: 0,
    gap: 2,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2px 4px',
    position: 'relative',
  },
  labelText6: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
    marginTop: -0.5,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },
};

export default HomeScreen;
