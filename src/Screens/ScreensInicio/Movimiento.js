import React from "react";
import { View,Text, Button } from "react-native";

const Movimiento = ({navigation}) => {
    return(
        <View>
            <Text>Estas en el apartado de movimientos</Text>
            <Button 
                title="Regresar"
                onPress={()=> navigation.goBack()}
            />
        </View>
    );  
};

export default Movimiento;