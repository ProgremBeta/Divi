import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StatusBar } from "react-native";
import { MaterialIcons, FontAwesome5} from "@expo/vector-icons";

import Groups from "./Screens/Groups";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";

import ListaD_A from "./Screens/ScreensInicio/Lista";
import Movimiento from "./Screens/ScreensInicio/Movimiento";
import PagoRapido from "./Screens/ScreensInicio/PagoRapido";

import PagoGrupo from "./Screens/ScreensGrupo/PagoGrupo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavegacionHome = () => {
    return(
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Inicio" component={Home} />
            <Stack.Screen name="Listas" component={ListaD_A}/>
            <Stack.Screen name="Movimientos" component={Movimiento}/>
            <Stack.Screen name="Rapido" component={PagoRapido}/>
        </Stack.Navigator>
    );
}

const StackNavegacionGroups = () => {
    return(
        <Stack.Navigator initialRouteName="Grupos" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Grupos" component={Groups} />
            <Stack.Screen name="PagosGrupo" component={PagoGrupo} />
        </Stack.Navigator>
    );
}

const StackNavegacionSettings = () => {
    return(
        <Stack.Navigator initialRouteName="Ajustes" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Ajustes" component={Settings} />
        </Stack.Navigator>
    );
}

export default function BarraNavegacion () {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer >
            <StatusBar />
                <Tab.Navigator
                    initialRouteName="Principal"
                    screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === "Groups") {
                            iconName = "users";
                            return <FontAwesome5 name={iconName} size={size} color={color} />;
                        } else if (route.name === "Principal") {
                            iconName = "home";
                            return <MaterialIcons name={iconName} size={size} color={color} />;
                        } else if (route.name === "Settings") {
                            iconName = "settings";
                            return <MaterialIcons name={iconName} size={size} color={color} />;
                        }
                    },
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "black",
                    })}>

                    <Tab.Screen name="Groups" component={StackNavegacionGroups}  />
                    <Tab.Screen name="Principal" component={StackNavegacionHome} />
                    <Tab.Screen name="Settings" component={StackNavegacionSettings} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
