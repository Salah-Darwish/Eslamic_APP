import React, { useEffect, useState } from "react";
import { Dimensions, View, StatusBar, Image, Text, TouchableOpacity, Modal, FlatList, Alert } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { setAppInfo } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { set } from "react-native-reanimated";
import { forceTouchHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler";
const { height, width } = Dimensions.get('screen')
export default function azkarSpecial({ route, navigation }) {

    const [num, setnum] = useState(0)
    const [show, setshow] = useState(false)
    const [index, setindex] = useState(0)
    const [azkar2, setazkar2] = useState([])

    useEffect(() => {
        const { arr } = route.params;
        setazkar2(arr)
    }, []);


    function Finish(index) {
        let arr = []
        arr = azkar2.azkar1
        arr[index].number--
        if (arr[index].number <= 0) {
            arr[index].number = 0
        }
        arr = JSON.stringify(arr.number)
        setazkar2(JSON.parse(arr.number))
        arr = JSON.parse(arr)
        let check = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].number > 0) {
                check = false
                break
            }
        }
        if (check) {
            setshow(true)
        }
    }
    return (
        <>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#fff',
                alignItems: "center"
            }}>

                <LinearGradient
                    colors={['#19a777', '#8af12d']}
                    style={{
                        width: width,
                        height: height * 0.07,
                        backgroundColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,

                    }}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: height * 0.022,
                        left: width * 0.03
                    }}
                        onPress={() => navigation.navigate('Four')}
                    >
                        <Image source={require('../img/99.png')} style={{

                            width: width * 0.07,
                            height: height * 0.03
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 25,
                        color: '#fff',
                        fontFamily: 'ArefRuqaa-Bold',
                    }}>
                        {azkar2.name}
                    </Text>
                </LinearGradient>

                <FlatList
                    data={azkar2.azkar1}
                    renderItem={({ item, index }) =>
                        <>
                            <View style={{
                                flex: 1,

                            }}>
                                <View style={{
                                    width: width,
                                    // flexDirection: 'row',
                                    alignItems: 'center',

                                    //   marginTop: height * 0.02,
                                    //  borderBottomWidth: 2,
                                    // borderColor: "#fff",
                                    //  marginBottom: height * 0.01,

                                }}>
                                    <View style={{
                                        width: width * 0.7,
                                        alignItems: 'center',
                                        //   padding: 1,
                                        justifyContent: 'center',
                                        backgroundColor: '#fff',
                                        elevation: 4,
                                        borderRadius: 10,
                                        marginTop: height * 0.02
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontFamily: 'ArefRuqaa-Bold',
                                            color: 'gray',
                                            direction: 'rtl'
                                            //  marginTop: height * 0.01
                                        }}>
                                            {item.adi1}
                                        </Text>
                                        <Text style={{
                                            fontSize: 25,
                                            color: "#000",
                                            marginTop: height * 0.01,
                                            direction: 'rtl',
                                            marginLeft: width * 0.05,
                                            fontFamily: 'ArefRuqaa-Bold'
                                        }}
                                        >
                                            {item.adi}
                                        </Text>
                                    </View>
                                    <LinearGradient
                                        colors={['#19a777', '#8af12d']}

                                        style={{
                                            width: width * 0.8,
                                            height: height * 0.08,
                                            borderRadius: 20,
                                            marginLeft: width * 0.02,
                                            marginTop: height * 0.015,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#000',
                                            marginRight: width * 0.03,

                                            marginBottom: index == azkar2.length - 1 ? 130 : 3
                                        }}
                                    >
                                        <TouchableOpacity style={{
                                            width: width * 0.8,
                                            height: height * 0.08,
                                            alignItems: 'center',
                                            justifyContent: 'space-evenly',
                                            flexDirection: 'row'

                                        }}

                                            onPress={() => {
                                                Finish(index)
                                            }
                                            }
                                        >
                                            <Text style={{
                                                fontSize: 25,
                                                fontWeight: 'bold',
                                                color: "#fff",
                                                // marginTop: height * 0.02,

                                            }}>
                                                {item.number}
                                            </Text>

                                        </TouchableOpacity>

                                    </LinearGradient>
                                </View>
                            </View>
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
                        لقد اتممت الذكر بنجاح
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