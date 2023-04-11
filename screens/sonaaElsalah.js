import React, { useState, useEffect } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
//import AsyncStorage from "@react-native-community/async-storage";
import { TextInput } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('screen')
export default function sonaaElsalah({ navigation, route }) {
    const [show, setshow] = useState(false)
    const [index, setindex] = useState(0)
    const [elsona, setelsona] = useState([
        {
            name: 'سنة الفجر ',
            elson: " ركعتين قبل الفرض",
            apear: false
        },

        {
            name: 'سنة الظهر',
            elson: "  ركعتين قبل الفرض واربعة ركعات بعد الفرض",
            apear: false
        },
        {
            name: 'سنة العصر',
            elson: "لا يوجد ",
            apear: false
        },
        {
            name: 'سنة المغرب',
            elson: " ركعتين بعد الفرض",
            apear: false
        },
        {
            name: 'سنة العشاء',
            elson: " ركعتين بعد الفرض",
            apear: false
        },
    ])
    useEffect(() => {
        go()
    }, [])
    async function go() {
        //    await AsyncStorage.setItem('arrayStored', "[]")
        let arrayStored = await AsyncStorage.getItem('arrayStored')
        if (arrayStored == null) {
            arrayStored = []
        }
        else {
            arrayStored = JSON.parse(arrayStored)
        }
        setelsona(arrayStored)
    }

    async function end(index) {
        let arr = []
        arr = elsona
        arr[index].apear = true
        arr = JSON.stringify(arr)
        setelsona(JSON.parse(arr))
        await AsyncStorage.setItem('arrayStored', arr)
    }

    async function end2(index) {
        let ar = []
        ar = elsona
        if (index == ar.length - 1) {
            setshow(true)
        }
        await AsyncStorage.setItem('arrayStored', ar)
    }

    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#fff',

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
                        onPress={() => navigation.navigate('elsonna')}
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
                        سنن الصلاه
                    </Text>
                </LinearGradient>
                <FlatList
                    data={elsona}
                    renderItem={({ item, index }) =>
                        <>
                            <Animatable.View style={{
                                width: width,
                                alignItems: 'center',
                                padding: 20
                            }}
                                duration={1000}
                                animation="zoomIn"
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        end(index)
                                        end2(index)
                                    }}
                                    style={{
                                        width: width * 0.7,
                                        elevation: 4,
                                        backgroundColor: item.apear ? "#ddd" : '#fff',
                                        alignItems: 'center',
                                        marginBottom: index == elsona.length - 1 ? 100 : 2,
                                        borderRadius: 20
                                    }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'NotoKufiArabic-VariableFont_wght',
                                        color: '#000',
                                        padding: 10
                                    }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'NotoKufiArabic-VariableFont_wght',
                                        color: '#19a777',
                                        marginBottom: height * 0.005
                                    }}>
                                        {item.elson}
                                    </Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </>

                    }

                />
            </View>
            <Modal visible={show}
                onRequestClose={() => setshow(false)
                }
                transparent={true}
            >
                <Animatable.View
                    duration={1000}
                    style={{
                        width: width * 0.8,
                        height: height * 0.2,
                        borderRadius: 20,
                        backgroundColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginTop: height * 0.4,
                        marginLeft: width * 0.09
                    }} animation="slideInDown"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>
                        تم بنجاح
                    </Text>
                    <LinearGradient
                        colors={['#19a777', '#2E7474']}
                        style={{
                            width: width * 0.2,
                            height: height * 0.07,
                            borderRadius: 15
                        }}
                    >
                        <TouchableOpacity style={{
                            width: width * 0.2,
                            height: height * 0.07,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                            onPress={() => setshow(false)}
                            activeOpacity={-2}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>
                                تم
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </Animatable.View>

            </Modal>
        </>

    )
}