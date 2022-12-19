import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Jakarta',
    tujuan: 'Lampung',
    maskapai: 'Elang',
    waktu : '20 Februari 2025, 18:00',
  },
  {
    id: '2',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Tapis Air',
    waktu : '1 Maret 2025, 18:00',
  },
  {
    id: '3',
    asal: 'Jakarta',
    tujuan: 'Lampung',
    maskapai: 'Majapahit Air',
    waktu : '10 Mei 2025, 18:00',
  },

];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <Entypo name="aircraft" size={24} color="#46C646" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={Jadwal}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Dwi Ananda Rizky - 120140027</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  header:{
    width:'100%',
    backgroundColor: '#46C646',
    padding:20,
    
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Penerbangan;