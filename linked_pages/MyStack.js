import * as React from 'react';
import StartPage from '../screens/introductionPage'
import homePage from "../screens/homePage"
import sephaAfterPrayer from '../screens/sephaAfterPrayer'
import azkar from '../screens/azkar'
import azkarSpecial from '../screens/azkarSpecial'
import qranKarem from '../screens/qranKarem'
import sewar from '../screens/sewar'
import sonaaElsalah from '../screens/sonaaElsalah';
import elrquaElsharia from '../screens/elrquaElsharia'
import elsepha from '../screens/elsepha'
import sepha_special from '../screens/sepha_special'
import elsonna from '../screens/elsonna'
import elsonnaElmansia from '../screens/elsonnaElmansia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="StartPage" component={StartPage} />
            <Stack.Screen name="homePage" component={homePage} />
            <Stack.Screen name="sephaAfterPrayer" component={sephaAfterPrayer} />
            <Stack.Screen name='azkar' component={azkar} />
            <Stack.Screen name='azkarSpecial' component={azkarSpecial} />
            <Stack.Screen name='qranKarem' component={qranKarem} />
            <Stack.Screen name='sewar' component={sewar} />
            <Stack.Screen name='sonaaElsalah' component={sonaaElsalah} />
            <Stack.Screen name='elrquaElsharia' component={elrquaElsharia} />
            <Stack.Screen name='elsepha' component={elsepha} />
            <Stack.Screen name='sepha_special' component={sepha_special} />
            <Stack.Screen name='elsonna' component={elsonna} />
            <Stack.Screen name="elsonnaElmansia" component={elsonnaElmansia} />
        </Stack.Navigator>
    );
}