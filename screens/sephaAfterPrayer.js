import React, { useState, useEffect } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
import ProgressCircle from 'react-native-progress-circle'
const { height, width } = Dimensions.get('screen')

export default function sephaAfterPrayers({ navigation, route }) {

    const [Text1, setText1] = useState('سبحان الله')
    const [count, setcount] = useState(0)
    const [num, setnum] = useState(0)
    const [DarkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const { arr } = route.params
        setDarkMode(arr)
        //     (async () => {
        //         let Dark = await AsyncStorage.getItem("Dark")
        //         if (Dark == null) {
        //             Dark = false
        //         } else {
        //             Dark = JSON.parse(Dark)
        //         }
        //         //setDarkMode(Dark)
        //     })()
    }, [])
    function plus() {
        let s = []
        s = num
        s++
        setnum(s)
    }
    function Change() {
        let text = Text1
        let counter = count + 1
        setcount(counter);
        if (counter > 33 && text == "سبحان الله") {
            setcount(0)
            setText1("الحمد لله")
        }
        if (counter > 33 && text == "الحمد لله") {
            setcount(0)
            setText1("الله اكبر")
        }
        if (counter > 33 && text == "الله اكبر") {
            setText1(" لا اله الا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو علي كل شئ قدير")
            setcount(0)
        }
        if (text == " لا اله الا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو علي كل شئ قدير") {
            setcount(0)

        }
    }
    function reload() {
        setcount(0)
        setText1("سبحان الله")
        setnum(0)
    }
    async function Dark() {
        let ar = DarkMode
        if (ar == false) {
            setDarkMode(true)
        }
        else {
            setDarkMode(false)
        }
        ar = JSON.stringify(ar)
        DarkMode(JSON.parse(ar))
        await AsyncStorage.setItem("Dark", ar)
    }


    return (
        <>

            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <LinearGradient
                colors={DarkMode ? ['#fff', "#000"] : ['#8af12d', '#19a777']}
                style={{
                    width: width,
                    height: height,
                    alignItems: "center",
                }}>
                <View style={{
                    width: width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>

                    <TouchableOpacity
                        style={{
                            width: width * 0.1,
                            height: height * 0.04,
                        }}
                        onPress={() => navigation.navigate('elsepha')}
                    >
                        <Image source={require('../img/57.png')} style={{
                            width: width * 0.1,
                            height: height * 0.04,
                            marginTop: height * 0.03,
                            resizeMode: 'cover',
                            marginLeft: width * 0.02
                        }} />
                    </TouchableOpacity>
                    <Image source={require('../img/101.png')} style={{
                        width: width * 0.22,
                        height: height * 0.16,
                        resizeMode: 'contain'
                    }} />
                </View>
                <View style={{
                    width: width * 0.85,
                    //height: height * 0.35,
                    backgroundColor: DarkMode ? '#000' : "#015641",
                    //marginTop: height * 0.1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: "#bcc01f",
                    marginBottom: height * 0.02,

                }}>
                    <Image source={require('../img/61.png')} style={{
                        width: 100,
                        height: 100,
                    }} />
                    <Text style={{
                        fontSize: 30,
                        fontFamily: 'NotoNastaliqUrdu-Bold',
                        color: "#bcc01f"
                    }}>
                        {Text1}
                    </Text>
                </View>
                <ProgressCircle
                    percent={num}
                    radius={50}
                    borderWidth={8}
                    color={DarkMode ? '#000' : "#015641"}
                    shadowColor={"#fff"}
                    bgColor={DarkMode ? '#000' : "#fff"} >
                    <TouchableOpacity
                        onPress={() => {
                            Change()
                            plus()
                        }}
                    >
                        <Image source={require('../img/addition.png')} style={{
                            width: width * 0.25,
                            height: height * 0.14,
                            borderRadius: 504,
                            resizeMode: "contain",

                        }} />

                    </TouchableOpacity>

                </ProgressCircle>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: width,
                    height: 50

                }}>
                    <View

                        style={{
                            width: width * 0.19,
                            height: height * 0.1,
                            borderRadius: 37,

                            borderWidth: 2,
                            borderColor: "#bcc01f",
                            alignItems: 'center',
                            justifyContent: "center",
                            backgroundColor: DarkMode ? "#000" : "#015641"
                        }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#fff"
                        }}>
                            {count}/33
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            reload()
                        }}

                    >
                        <Image source={require('../img/56.png')} style={{
                            width: width * 0.14,
                            height: height * 0.065,
                            resizeMode: 'contain'
                        }} />
                    </TouchableOpacity>
                </View>


            </LinearGradient>




        </>

    )
}