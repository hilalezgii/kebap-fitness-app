import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const MemberResult =({route}) => {
    const {user} =route.params;
    return(
        <View>
            <Text style={styles.message}>Kayıt Başarılı !</Text>
            <Text style={styles.label}>Üye adı:{user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı:{user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı:{user.userAge}</Text>
            <Text style={styles.label}>Üye Mail Adresi:{user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi:{user.userHometown}</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    label:{
        fontweight: 'bold',
        fontSize:20,
        margin:5,

    },
    message:{
        fontWeight: '800',
        fontSize:50,
        textAlign: 'center'
    },
})
export default MemberResult;