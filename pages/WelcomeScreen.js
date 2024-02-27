import {View,Text,StyleSheet} from 'react-native';
import Button from '../components/Buttons';
const WelcomeScreen = ({navigation}) =>{
    const goToMemberSign = () => {
        navigation.navigate('MemberSignScreen');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text ="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
        </View>
    );
};
const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
},
header:{
    fontWeight: 'bold',
    fontSize:30,
    textAlign: 'center',
    margin:10,
}
});
export default WelcomeScreen;