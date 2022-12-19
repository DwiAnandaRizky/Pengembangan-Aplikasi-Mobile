import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Home = ({ navigation }) => {
const [keberangkatan, setKeberangkatan] = useState("");
const [tujuan, setTujuan] = useState("");
const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <Feather name="menu" size={24} color="white" />
              <Text style={styles.header}>Hiling.id</Text>
              <FontAwesome name="user" size={24} color="white" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Bandara keberangkatan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-takeoff" size={24} color="#46C646" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Bandara Tujuan</Text>
              <View style={styles.maininputan}>
                <Entypo name="aircraft-landing" size={24} color="#46C646" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                    <MaterialIcons name="date-range" size={24} color="#46C646" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Penerbangan')}><Text style = {styles.search}
              >Cari</Text></TouchableOpacity>
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Dwi Ananda Rizky - 120140027</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#46C646',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:0,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
},
header: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
},
    search: {
    color : '#ffff',
    margin : 15,
    backgroundColor: "#FF6700",
    fontSize: 20,
    borderRadius: 40,
    alignSelf: "center",
    paddingHorizontal: 100,
    fontweight : "Bold"
},
    header2: {
    margin: 5,
    fontWeight : "bold",

},
card: {
    top : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    width: "100%",
    flex:1,
    borderRadius:10,
    backgroundColor: '#E5E4E2',
    marginTop : 300,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;