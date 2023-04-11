import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MyStack from './MyStack';
import Icon from "react-native-vector-icons/AntDesign"
import PrayerTime from '../screens/PrayerTime';
import { Dimensions } from 'react-native';
import Icon1 from "react-native-vector-icons/FontAwesome"
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('screen')
export default function MyTab(navigation, route) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

            }}>
            <Tab.Screen name="MyStack" component={MyStack}

                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={20} color={color} />

                    ),
                    tabBarActiveTintColor: "#000",
                    tabBarLabel: "HomePage",
                    tabBarLabelStyle: ({
                        fontSize: 15,
                        fontWeight: "bold"

                    }),
                    tabBarStyle: ({
                        backgroundColor: "#ccc",
                        height: height * 0.07,
                        borderColor: "#000",
                        borderTopColor: "#000",
                        borderWidth: 2,
                        elevation: 4,
                        borderRadius: 4,
                    })
                }}
            />
            <Tab.Screen name='PayerTime' component={PrayerTime}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="calendar-times-o" size={20} color={color} />
                    ),
                    tabBarActiveTintColor: "#000",
                    tabBarLabel: "PayerTime",
                    tabBarLabelStyle: ({
                        fontSize: 15,
                        fontWeight: "bold"
                    }),
                    tabBarStyle: ({
                        backgroundColor: "#ccc",
                        height: height * 0.07,
                        borderColor: "#000",
                        borderTopColor: "#000",
                        borderWidth: 2,
                        elevation: 4,
                        borderRadius: 4,

                    })
                }} />
        </Tab.Navigator>
    );
}