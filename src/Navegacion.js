import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Groups from "./Screens/Groups";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";

const Tab = createBottomTabNavigator();

function Navegacion (){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Groups" component={Groups} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navegacion;