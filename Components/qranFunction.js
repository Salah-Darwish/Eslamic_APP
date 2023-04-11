import React, { useState } from 'react';
import { } from 'react-native'


const [show, setshow] = useState(false)
const [show1, setshow1] = useState(false)
function End(index) {
    let ar = []
    ar = sowar
    ar[index].icon = 'check-circle'
    ar = JSON.stringify(ar)
    setsowar(JSON.parse(ar))
    ar = JSON.parse(ar)
    let check = true
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].icon == 'circle') {
            check = false
            break;
        }
    }
    if (check) {
        setshow(true)
    }
}
function Search(value) {
    let array = sowar
    for (let i = 0; i < array.length; i++) {
        if ((array[i].name.toUpperCase()).includes(value.toUpperCase())) {
            array[i].apear = true
        } else {
            array[i].apear = false
        }
    }
    array = JSON.stringify(array);
    setsowar(JSON.parse(array))
}
export default { qranFunction };