import React, { useState, useEffect } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('screen')
export default function elsonna({ navigation, route }) {
    const [num, setnum] = useState(0)
    const [show3, setshow3] = useState(false)
    const [show, setshow] = useState(false)
    const [show2, setshow2] = useState(false)
    const [name_task, setname_task] = useState('')
    const [id, setid] = useState("")
    const [taskwarn, settaskwarn] = useState('')
    const [idwarn, setidwarn] = useState('')
    const [index, setindex] = useState(0)
    const [counter, setcounter] = useState(0)

    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#ddd',

            }}>
                <LinearGradient
                    colors={['#8af12d', '#19a777']}
                    style={{
                        width: width,
                        height: height * 0.06,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('homePage')}
                    >
                        <Image source={require('../img/100.png')} style={{

                            width: width * 0.07,
                            height: height * 0.03,
                            resizeMode: "contain"
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'NotoKufiArabic-VariableFont_wght',
                        color: '#000'
                    }}>
                        السنن
                    </Text>

                </LinearGradient>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: width,
                    height: height,
                }}>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.08,
                        backgroundColor: '#fff',
                        elevation: 4,
                        borderRadius: 15,
                        marginBottom: height * 0.02,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => navigation.navigate('sonaaElsalah')}
                    >
                        <Text style={{
                            fontSize: 30,
                            fontFamily: 'NotoKufiArabic-VariableFont_wght',
                            color: "#000"
                        }}>
                            سنن الصلاه
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.08,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        elevation: 4,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() =>
                            navigation.navigate('elsonnaElmansia')
                        }
                    >
                        <Text style={{
                            fontSize: 30,
                            fontFamily: 'NotoKufiArabic-VariableFont_wght',
                            color: '#000'
                        }}>
                            السنن المنسيه
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    )
}