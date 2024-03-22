import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Especies = ({ navigation }) => {

  const data = [
    {
      name: "Elefantes",
      population: 12,
      color: "#FFCD56",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Leones",
      population: 8,
      color: "#FF6384",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Jirafas",
      population: 6,
      color: "#36A2EB",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tigres",
      population: 10,
      color: "#4BC0C0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Pandas",
      population: 4,
      color: "#9966FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#FAFAE4",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#FAFAE4",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    style: {
      borderRadius: 16,
    },
    decimalPlaces: 2,
  };

  return (
    <View style={styles.page}>
      <View style={{ flex: 1 }}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 10]}
          absolute
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.transparency} source={require('../assets/chimenea-de-la-casa.png')} />
          <Text style={styles.title7}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image style={styles.transparency} source={require('../assets/ubicacion-del-terreno.png')} />
          <Text style={styles.title7}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Especies')}>
          <Image style={styles.transparency} source={require('../assets/periodico.png')} />
          <Text style={styles.title7}>Especies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Gallery')}>
          <Image style={styles.transparency} source={require('../assets/miniaturas-de-la-galeria.png')} />
          <Text style={styles.title7}>Galería</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAE4',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#edf3a7',
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

export default Especies;
