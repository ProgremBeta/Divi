import React from "react";
import { View,Text, TextInput,Button } from "react-native";

const PagoGrupo = () => {
    return(
        <View>
            <Text style={{fontSize:20,textAlign:'center'}}>Crear nuevo grupo</Text>

            <Text style={{textAlign:'center', marginTop:'20'}}>Agrega a :</Text>
            <TextInput style={{textAlign:'center'}}
                placeholder="Ingresa un numero de contacto"
                value="10"
            />

            <Button
                title="Confirmar"
            />
        </View>
    );
};

export default PagoGrupo;