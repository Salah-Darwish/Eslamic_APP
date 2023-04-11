import React, { useState, useEffect } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
const { height, width } = Dimensions.get('screen')
export default function elsonnaElmansia({ navigation, route }) {



    const [sona, setsona] = useState([
        {
            text: "1- المشي حافياً \n "
        },
        {
            text: "2- الأكل بثلاثة أصابع \n "
        },
        {
            text: "3- مسح أثر النوم باليد \n"
        },
        {
            text: "4- صلاة التوبة ، ركعتين بعد الذنب \n"
        },
        {
            text: "5- تغطية الاناء في الليل \n"
        },
        {
            text: "6- السواك \n"
        },
        {
            text: "7- الاستئذان قبل الدخول ثلاثاً ولا تتعدى \n"
        },
        {
            text: "8- صلاة ركعتين عند الخروج من المنزل وعند الدخول \n"
        },
        {
            text: "9- الترديد خلف المؤذن \n"
        },
        {
            text: "10- السلام على الصبيان \n"
        },
        {
            text: "11- أذكار الصعود (تكبير)، وأذكار النزول (تسبيح) \n"
        },
        {
            text: "12- السلام على من عرفت ومن لم تعرف \n"
        },
        {
            text: "13- الشرب ثلاثاً ، والجلوس عند الشراب\n"
        },
        {
            text: "14- التفل على اليسار ثلاثاً عند الوسوسة في الصلاة\n"
        },
        {
            text: "15- الوضوء عند النوم\n"
        },
        {
            text: "16- الإبتسامة في وجه المسلم\n"
        },
        {
            text: "17- الصلاة في النعال في الساحات\n"
        },
        {
            text: "18- عدم عيب الطعام\n"
        },
        {
            text: "19- الدعاء بعد الأذان\n"
        },
        {
            text: "20- الإخلاص والمعوذتين قبل النوم \n"
        },
        {
            text: "21- صلاة الضحى\n"
        },
        {
            text: "22- البدء بالوضوء عند الإغتسال\n"
        },
        {
            text: "23- دعاء لبس الثوب الجديد /n"
        },
        {
            text: "24- الدعاء عند سماع صياح الديك ، والإستعاذة عند سماع صوت الحمار \n"
        },
        {
            text: "25- قراءة آية الكرسي دبر كل صلاة \n"
        },
        {
            text: "26- تشميت العاطس ، إذا حمد الله تقول يرحمك الله \n"
        },
        {
            text: "27- المحافظة على السنن الرواتب (12ركعة ) \n"
        },
        {
            text: "28- صلاة الوتر \n"
        },
        {
            text: "29- تحية المسجد وإن كان الإمام يخطب \n"
        },


    ])
    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#fff',
                alignItems: 'center',
            }}>


                <LinearGradient
                    colors={['#8af12d', '#19a777']} style={{
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
                        السنن المنسيه
                    </Text>

                </LinearGradient>
                <ScrollView>
                    <Animatable.View style={{
                        backgroundColor: "#fff",
                        width: width * 0.7,
                        height: height * 0.475,
                        borderRadius: 10,
                        marginTop: height * 0.03,
                        justifyContent: 'center',
                        padding: 20,
                        elevation: 4


                    }}
                        duration={1000}
                        animation="zoomIn"

                    >

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'NotoKufiArabic-VariableFont_wght',
                            color: '#19a777',
                            justifyContent: 'space-evenly',


                        }}>

                            السنن المهجورة عن النبي هي السنن القولية والفعلية التي سنها النبي - صلى الله عليه وسلم- وشاع تركها بين المسلمين في هذا الزمان، وهذه السنن المهجورة تتفاوت في منزلتها، فبعض السنن أكدها النبي - عليه السلام- وواظب عليها في السفر والحضر، وبعضها لم يواظب عليها، ومما واظب عليه النبي السنن الرواتب قبل الصلوات وبعدها، وكذلك الوتر، وركعتي الفجر.

                        </Text>

                    </Animatable.View>


                    <Animatable.View
                        style={{
                            backgroundColor: "#fff",
                            width: width * 0.7,
                            // height: height * 0.475,
                            borderRadius: 10,
                            marginTop: height * 0.03,
                            justifyContent: 'center',
                            padding: 5,
                            marginBottom: height * 0.15,
                            elevation: 4

                        }}
                        duration={1000}
                        animation="zoomIn"
                    >

                        {sona.map((item, index) =>
                            <>
                                <Text style={{
                                    fontSize: 20,
                                    fontFamily: 'NotoKufiArabic-VariableFont_wght',
                                    color: '#19a777',

                                    justifyContent: 'space-evenly',


                                }}>
                                    {item.text}

                                </Text>

                            </>
                        )}
                    </Animatable.View>
                </ScrollView>

            </View>
        </>

    )
}