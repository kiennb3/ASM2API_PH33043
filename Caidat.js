import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Caidat = ({navigation}) => {
    
    // Thông tin cá nhân
    const personalInfo = {
        fullName: 'Đỗ Trung Kiên',
        studentID: 'PH33043',
        className: 'Md18304',
    };

    // Thông tin điện thoại
    const phoneInfo = {
        type: 'Smartphone',
        cpu: 'Helio G99',
        ram: '16 GB',
        storage: '256 GB',
    };

    const handleThemeChange = () => {
        // Xử lý thay đổi theme
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    const handleChangePassword = () => {
        // Xử lý đổi mật khẩu
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                <View style={styles.block}>
                    <Text style={styles.title}>USER INFOR</Text>
                    <View style={{ marginLeft: 15 ,marginTop:10}}>
                        <Text>Name: {personalInfo.fullName}</Text>
                        <Text>Mã sv: {personalInfo.studentID}</Text>
                        <Text>Lớp: {personalInfo.className}</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>PHONE INFO</Text>
                    <View style={{ marginLeft: 26,marginTop:10 }}>
                    <Text>Loại: {phoneInfo.type}</Text>
                    <Text>CPU: {phoneInfo.cpu}</Text>
                    <Text>RAM: {phoneInfo.ram}</Text>
                    <Text>ROM: {phoneInfo.storage}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.block1}>
                <Text style={styles.title}>Thiết lập riêng</Text>
                <TouchableOpacity onPress={handleThemeChange} style={styles.option}>
                    <Text>Đổi theme                 </Text>
                    <Text style={{fontSize:20,color:'#DCDCDC'}}>{'>'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChangePassword} style={styles.option}>
                    <Text>Đổi mật khẩu           </Text>
                    <Text style={{fontSize:20,color:'#DCDCDC'}}>{'>'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={styles.option}>
                    <Text>Đăng xuất                 </Text>
                    <Text style={{fontSize:20,color:'#DCDCDC'}}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#DCDCDC'
    },
    block: {

        alignItems: 'flex-start',

        backgroundColor: '#fff',
        borderRadius: 10,

        height: 200,
        width: 160,

    },
    block1: {
alignItems: 'flex-start',

        backgroundColor: '#fff',
        borderRadius: 10,

        height: 230,
        width: 330,
        marginBottom:80

    },
    title: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        color: '#fff',
        gap:150
      
       
      
        
    },
});

export default Caidat;