import { useNavigation } from "@react-navigation/core";
import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import homeStyle from "../styles/homeStyles";

function HomeComponent() {

    return (
        <View>
            <View style={homeStyle.topBar}>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={homeStyle.fruit}/>
                </TouchableOpacity>
                {/* <Image
                    source={require('')}
                /> */}
            </View>
        </View>
    )
}

export default HomeComponent;