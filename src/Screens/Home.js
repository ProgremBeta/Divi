import React, { cloneElement } from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

function Home(){

    var Debes = 100
    var TeDeben = 1000
    var Balance = Debes + TeDeben

    return(
        <View style={styles.ContenidoPrincipal}>
            <Text style={styles.TituloApartado}>Resumen</Text>
            
            <View style = {styles.CuadroInfo}>
                <Text>Debes: {Debes}</Text>
                <Text>Te deben: {TeDeben}</Text>
                <Text>Balance: {Balance}</Text>
            </View>

            <View style={styles.Cuadro1}>
                <TouchableOpacity style={styles.Cuadro2}>
                    <Text>Lista D/A</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.Cuadro2}>
                    <Text>Movimientos</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.BotonRapido}>
                 <Text style={{fontSize : 30}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ContenidoPrincipal :{
        width: '90%',
        height: '92%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        margin:'5%'
    },
    TituloApartado:{
        fontSize:20,
        textAlign:'center',
        color:'red',
        marginBottom:30
    },

    BotonRapido:{
        paddingVertical: 2,
        paddingHorizontal: 15,
        position:'absolute',
        bottom:20,
        right:'2%',
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:50
    },
    Cuadro1:{
        padding:20,
        display:1,
        flexDirection: 'row',
        position:'absolute',
        bottom:90,
        borderRadius:1,
    },
    Cuadro2:{
        padding:10,
        width:150,
        height:100,
        borderRadius:1,
        elevation:2,
        margin:5
    },
    CuadroInfo:{
        width:'99%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default Home;