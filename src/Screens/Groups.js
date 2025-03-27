import React from "react";
import { View,Text,Button, TouchableOpacity } from "react-native";

function Groups({navigation}){
    return(
        <View>
            <Text style={{fontSize:20, textAlign:'center'}}>Grupos</Text>
            <TouchableOpacity style={{position:'absolute',right:10}}
            onPress={()=> navigation.navigate('PagosGrupo')}
            >
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Groups;