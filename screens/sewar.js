import React, { useEffect, useState } from "react";
import { Dimensions, View, StatusBar, Image, Text, TouchableOpacity, ImageBackgroundBase, Modal, FlatList, Alert, ImageBackground } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from 'react-native-vector-icons/Ionicons'
import axios from "axios";
const { height, width } = Dimensions.get('screen')
export default function sewar({ route, navigation }) {
    const { arr } = route.params;
    const [Qran, setQran] = useState(arr)

    return (
        <>
            <StatusBar backgroundColor='#000' barStyle="light-content" />

            <View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: '#fff',
                    alignItems: "center",

                }} >

                <View
                    style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Image source={require('../img/sowar_page.png')}
                        style={{
                            width: width * 0.97,
                            height: height * 0.3,
                            borderRadius: 20,
                            marginTop: height * 0.002,
                        }}
                    >
                    </Image>
                    <Text style={{
                        fontSize: 30,
                        // fontWeight: 'bold',
                        color: '#000',
                        position: 'absolute',
                        left: width * 0.3,
                        top: height * 0.20,
                        color: "#000",
                        fontFamily: 'NotoNastaliqUrdu-Regular'
                    }}>
                        سوره {Qran.name}
                    </Text>
                    <TouchableOpacity
                        style={{

                            position: 'absolute',
                            top: height * 0.02,
                            left: width * 0.04,

                        }}
                        onPress={() => {
                            navigation.navigate("qranKarem")
                        }}
                    >
                        <Icon1 name="chevron-back" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 25,
                        color: DarkMode ? '#fff' : "#000",
                        fontFamily: 'NotoNastaliqUrdu-Regular'
                    }}>
                        {Qran.besm}
                    </Text>
                </View>
                <FlatList
                    data={Qran.verses}
                    renderItem={({ item, index }) =>
                        <>
                            <View style={{
                                width: width
                            }}>
                                <View style={{
                                    borderBottomWidth: 1,
                                    borderColor: DarkMode ? "#fff" : '#000',
                                    flexDirection: 'row',
                                    width: width,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    marginBottom: index == Qran.length - 1 ? 200 : 3
                                }} >

                                    <Text style={{
                                        fontSize: 18,
                                        color: DarkMode ? "#fff" : '#000',
                                        fontFamily: 'NotoNastaliqUrdu-Regular',
                                        direction: 'rtl',
                                        marginRight: width * 0.02,
                                    }}>
                                        {item.content}   ({item.verse_number})
                                    </Text>
                                </View>
                            </View>
                        </>
                    }
                />


            </View>



        </>
    )
}