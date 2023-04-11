import React, { } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity, ActivityIndicator, SafeArea, StatusBar, ImageBackground } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { color, max } from "react-native-reanimated";
import Two from "./homePage"
const { height, width } = Dimensions.get('screen')
export default function introductionPage({ navigation }) {
    const [timer, settimer] = React.useState(true)

    React.useEffect(() => {
        let x = 0
        setTimeout(() => {
            navigation.replace('homePage')
        }, 1500);
    })
    return (
        <>
            <StatusBar backgroundColor='#e9e8e6' barStyle={'dark-content'} />
            <ImageBackground
                source={require('../img/introduction.png')}
                resizeMode='cover'
                style={{
                    // width: width,
                    height: height * 0.875,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginTop: height * 0.3,
                    color: '#4a666c'
                }}>
                    By : Eng Salah Darwish 🧑‍💻😊
                </Text>

                <ActivityIndicator color='#4a666c' size={40} style={{
                    marginTop: height * 0.09
                }} />

            </ImageBackground>
        </>
    )
}