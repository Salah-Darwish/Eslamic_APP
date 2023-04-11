import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
const { height, width } = Dimensions.get('screen')

export default function elsepha({ navigation, route }) {
    const [DarkMode, setDarkMode] = useState();
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
    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <LinearGradient
                colors={DarkMode ? ['#fff', "#000"] : ['#8af12d', '#19a777']}
                style={{
                    width: width,
                    height: height,
                }}>

                <View style={{
                    width,
                    height: height * 0.08,
                    backgroundColor: DarkMode ? '#000' : '#015641',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 10
                }}>
                    <TouchableOpacity
                        style={{
                            width: width * 0.1,
                            height: height * 0.04,
                        }}
                        onPress={() => navigation.navigate('homePage')}
                    >
                        <Image source={require('../img/57.png')} style={{
                            width: width * 0.1,
                            height: height * 0.04,
                            //  marginTop: height * 0.03,
                            resizeMode: 'cover',
                            //    marginLeft: width * 0.02
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 30,
                        color: DarkMode ? '#fff' : '#bcc01f',
                        fontFamily: 'NotoNastaliqUrdu-Bold'
                    }}>
                        السبحه
                    </Text>
                </View>
                <View style=
                    {{
                        alignItems: "center",

                        width: width,
                        height: height
                    }}>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.1,
                        borderRadius: 20,
                        backgroundColor: DarkMode ? '#000' : '#015641',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderWidth: 2,
                        borderColor: '#bcc01f',
                        elevation: 4,
                        marginTop: height * 0.3
                    }}
                        onPress={() => navigation.navigate('sephaAfterPrayer', {
                            'arr': DarkMode
                        })}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'NotoNastaliqUrdu-Bold',
                            color: "#bcc01f"
                        }}>
                            سبحه بعد الصلاه
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.1,
                        borderRadius: 20,
                        backgroundColor: DarkMode ? '#000' : '#015641',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderWidth: 2,
                        borderColor: '#bcc01f',
                        elevation: 4,
                        marginTop: height * 0.03
                    }}
                        onPress={() =>
                            navigation.navigate("sepha_special", {
                                'arr': DarkMode
                            })
                        }
                    >
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'NotoNastaliqUrdu-Bold',
                            color: "#bcc01f"
                        }}>
                            السبحه الخاصه بك
                        </Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>




        </>

    )
}