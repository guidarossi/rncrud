import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import UsersContext from "../context/UsersContext";


export default ({ route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        
        <View style={style.form}>
            <Text style={style.title}>Nome</Text>
            <TextInput
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            >
            </TextInput>
        
        
            <Text style={style.title}>Email</Text>
            <TextInput
            style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            >
            </TextInput>

            <Text style={style.title}>URL do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            >
            </TextInput>

            <Button
                title="Salvar"
                onPress={() =>{

                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })

                    navigation.goBack()
                }}
            >
            </Button>
        </View>
        
        
        
    )
}

const style = StyleSheet.create({

    form:{
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginHorizontal: 5,
        borderRadius: 15,
    },
    title: {
        marginHorizontal: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        
    }
})