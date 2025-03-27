import React, { useState } from "react";
import { View,Text,Button, TextInput } from "react-native";

const PagoRapido = ({navigation}) =>{

    const [Numero, setNumero] = useState('')
    const [NumeroM, setNumeroM] = useState('')

    const enviar = () =>{
        setNumeroM(Numero)
    };

    return(
        <View>
            <Text style={{fontSize:20,textAlign:'center',margin:'20'}}>Añadir gastos</Text>

            <Text style={{textAlign:'center', marginTop:'20'}}>Agrega a :</Text>
            <TextInput style={{textAlign:'center'}}
                placeholder="Ingresa un numero de contacto"
                value={ Numero }
                onChangeText={ setNumero }
            />

            <Button
                title="Confirmar"
                onPress={enviar}
            />

            <Text>{NumeroM}</Text>

            <Button 
                title = "Regrasar"
                onPress = {() => navigation.goBack() }
            />
        </View>
    );
};

export default PagoRapido;