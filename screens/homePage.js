import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, ImageBackground, Text, TouchableOpacity, Modal, FlatList, StatusBar } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import MyStack from "../linked_pages/MyStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { height, width } = Dimensions.get('screen')
export default function homePage({ route, navigation }) {
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [text1, settext1] = useState('')
    const [index, setindex] = useState(0)
    const [DarkMode, setDarkMode] = useState(false)
    useEffect(() => {
        (async () => {
            let Dark = await AsyncStorage.getItem("Dark")
            if (Dark == null) {
                Dark = false
            } else {
                Dark = JSON.parse(Dark)
            }
            setDarkMode(Dark)
        })()
    }, [])
    const [homePageView, sethomePageView] = useState([
        {
            name: 'القران الكريم',
            image: require('../img/quran.png'),
            pageName: "qranKarem"
        },
        {
            name: "الاذكار",
            image: require('../img/window.png'),
            pageName: "azkar"
        },

        {
            name: "السبحه",
            image: require('../img/beads.png'),
            pageName: "elsepha"
        },


        {
            name: "الرقيه الشرعيه",
            image: require('../img/elroquia.png'),
            pageName: "elrquaElsharia"
        },
        {
            name: "السنن",
            image: require('../img/sonna.png'),
            pageName: "elsonna"
        },
        {
            name: "الادعيه",
            image: require('../img/open-hands.png')
        }

    ])
    const [Adia, setAdia] = useState([
        {
            image: require("../img/62.png"),
            text: " اللهمّ إنّي أسألك فهم النبيّين، وحفظ المرسلين والملائكة المقرّبين، برحمتك يا أرحم الرّاحمين، اللهمّ اجعل ألسنتنا عامرة بذكرك، وقلوبنا بخشيتك، وأسرارنا بطاعتك، إنّك على كلّ شيءٍ قدير، وحسبي الله ونعم الوكيل",
            name: "الدراسه"
        },
        {
            image: require("../img/63.png"),
            text: "اللهم إني أحبه حبا يجهله هو وتعلمه أنت، يا رب بقدر حبي له اسعده واحفظه ولا تريني فيه بأسا يبكيني. اللهم وفق حبيبي اللهم لا سهل إلا ما جعلته سهلا اللهم اجعل الصعب سهلا ميسرا لحبيبي. اللهم إني أسألك لحبيبي توفيقا يلازم خطاه وتيسيرا لما يخاف تعسيره يارب اجعل له من التوفيق والراحة نصيب",
            name: "الحب"
        },
        {
            image: require("../img/64..png"),
            text: "اللهم بك أستعين وعليك أتوكل، اللهم ذلل لي صعوبة أمري، وسهل لي مشقته، وارزقني الخير كله أكثر مما أطلب، واصرف عني كل شر رب اشرح لي صدري ويسر لي أمري يا كريم. يا رب لا تدع أمرًا في صدري ٳلا حللته لي، ولا حلمًا سكن في قلبي طويلًا ٳلا ويسّرته لي. اللهم أحسن عاقبتنا في الأمور كلها، وأجرنا من خزي الدنيا وعذاب الآخرة",
            name: "الكسل",
        },
        {
            image: require("../img/64.png"),
            text: "اللهم أسعدني في أبسط تفاصيل حياتي و قرب لي الخير حيث كان. ... اللهم أسعدني سعاده لا نهايه لها. يارب بشرني بشاره فرح اللهم اسعدني سعاده ابكي من جمالها وافتح لي ابواب الخير. اللهم أسعدني ، وأشرح صدري و أرح قلبي اللهم إني أستودعك راحتي فإجعلني أسعد خلقك",
            name: "السعاده"
        },
        {
            image: require("../img/67.png"),
            text: "يا عزيز أعزني، ويا كافي اكفني، ويا قوي قوني، ويا لطيف الطف بي في أموري كلها والطف بي فيما نزل، اللهم إني أسألك سلامًا ما بعده كدر، ورضى ما بعده سخط، وفرحًا ما بعده حزن، اللهم املأ قلبي بكلّ ما فيه الخير لي، اللهم اجعل طريقي مسهلًا وأيامي القادمة أفضل من سابقاتها",
            name: "الحزن"
        },
    ])

    function flat(index) {
        let ar = Adia[index].text
        settext1(ar)
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
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#fff'
            }}>
                <ImageBackground source={require('../img/homeImg.png')}
                    resizeMode="cover"
                    style={{
                        width: width,
                        height: height * 0.2
                    }}>
                </ImageBackground>

                <View style={{
                    flexDirection: "row", justifyContent: "space-around",
                    alignItems: 'center', flexWrap: "wrap", height: height,
                    marginTop: height * 0.02
                }}>
                    {homePageView.map((item) =>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            margin: height * .01
                        }}>
                            <TouchableOpacity style={{
                                height: height * 0.17,
                                width: width * 0.4,
                                backgroundColor: '#4e696f',
                                elevation: 4,
                                borderRadius: 20,
                                alignItems: 'center',
                            }}
                                onPress={() =>
                                    navigation.navigate(item.pageName, {

                                        'arr': DarkMode
                                    }

                                    )}
                            >
                                <Image source={item.image}
                                    style={{
                                        width: width * 0.23,
                                        height: height * 0.11,
                                        marginLeft: width * 0.03,
                                        resizeMode: "contain",
                                        marginTop: height * 0.01
                                    }} />
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: 'ArefRuqaa-Bold',
                                    color: '#fff',
                                    fontWeight: 'bold'
                                }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>

                        </View>

                    )}

                </View>
            </View >
            <Modal visible={show}
                onRequestClose={() => setshow(false)}
                transparent={true}
            >
                <Animatable.View
                    duration={2000}
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    animation="slideInDown"
                >
                    <LinearGradient
                        colors={["#baad0d", "#d27a1a", "#de5824"]}
                        style={{
                            width: width * 0.94,
                            height: height * 0.16,
                            alignItems: "center",
                            marginTop: height * 0.295,
                            borderRadius: 30,
                        }}
                    >
                        {<FlatList
                            data={Adia}
                            horizontal={true}
                            renderItem={({ item, index }) =>
                                <>
                                    <TouchableOpacity style={{
                                        width: width * 0.217,
                                        height: height * 0.117,
                                        borderRadius: 15,
                                        backgroundColor: "#fff",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        marginTop: height * 0.032,
                                        marginRight: width * 0.01,
                                        marginLeft: width * 0.009
                                    }}
                                        onPress={() => {
                                            flat(index)
                                            setshow(false)
                                            setshow1(true)
                                        }}
                                    >
                                        <Image source={item.image} style={{
                                            width: width * 0.14,
                                            height: height * 0.07,
                                            resizeMode: 'contain'

                                        }} />
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: 'ReemKufi-VariableFont_wght',
                                            color: "#000"
                                        }}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            }
                        />}
                        <TouchableOpacity style={{
                            position: 'absolute',
                            top: height * 0.007,
                            right: width * 0.03,
                        }}
                            onPress={() => setshow(false)}
                        >
                            <Image source={require('../img/65.png')} style={{
                                width: width * 0.09,
                                height: height * 0.02
                            }}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </Animatable.View>
            </Modal>
            <Modal visible={show1}
                onRequestClose={() => setshow1(false)}
                transparent={true}
            >
                <Animatable.View duration={2000}

                    style={{
                        width: width * 0.9,
                        maxHeight: height,
                        backgroundColor: "#19a777",
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: height * 0.4,
                        marginLeft: width * 0.05
                    }}
                    animation="fadeInUpBig"
                >
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'ReemKufi-VariableFont_wght',
                        color: "#fff",
                        padding: 20
                    }}>
                        {text1}
                    </Text>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: height * 0.02,
                            left: width * 0.01
                        }}
                        onPress={() => {
                            setshow1(false)
                        }}
                    >
                        <Image source={require('../img/65.png')} style={{
                            width: width * 0.09,
                            height: height * 0.03
                        }} />
                    </TouchableOpacity>
                </Animatable.View>
            </Modal>

        </>
    )
}



