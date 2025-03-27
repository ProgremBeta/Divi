import react from "react";
import { View, Text, Button } from "react-native";

const ListaD_A = ({navigation}) => {
    return(
        <View>
            <Text>Apartado de lista</Text>
            <Button 
                title="Regresar"
                onPress={()=> navigation.goBack()}
            />
        </View>
    );
};

export default ListaD_A;