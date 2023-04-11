import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
// const [postbase, setpostbase] = React.useState('');
const url = 'https://official-joke-api.appspot.com/random_joke';
// React.useEffect(() => {
//     axios.get(url).then((response) => {
//         setpostbase(response.data);
//     }).catch((error) => {
//         Alert('error');
//     })
// }, []);
export default function PrayerTime() {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 300
        }}>
            <Text>
                {/* {postbase.type} */}
                hello in payerTime
            </Text>
        </View>
    );
}