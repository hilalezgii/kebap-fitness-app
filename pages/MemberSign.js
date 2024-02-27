import React, { useState } from 'react';
import { View, Text,alert, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Buttons/Button';
const MemberSign = ({navigation}) => {
    const [userName, setUserName ] = useState('');
    const [userSurname, setUserSurname ] = useState('');
    const [userAge, setUserAge ] = useState('');
    const [userMail, setUserMail ] = useState('');
    const [userHometown, setUserHometown]  = useState('');

    const handleSubmit = () => {
        if(!userName || !userSurname || !userAge || !userMail || !userHometown) 
        {
           Alert.alert('Kebap Fitness Salonu','Bilgiler boş bırakılamaz!');
           return;
        };
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        };
        navigation.navigate('MemberResultScreen',{user});
    };


    return (
        <View>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz..." onChangeText={setUserName} />
            <Input label="Üye Soyadı" placeholder="Üye soyismini giriniz..." onChangeText={setUserSurname} />
            <Input label="Üye Yaş" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge} />
            <Input label="Üye E-posta" placeholder="Üyenin E-posta adresini giriniz..." onChangeText={setUserMail} />
            <Input label="Üye Memleketi" placeholder="Üyenin memleketini giriniz..." onChangeText={setUserHometown} />


            <Button text="KaydıTamamla" onPress={handleSubmit} />

        </View>
    );
};

export default MemberSign;