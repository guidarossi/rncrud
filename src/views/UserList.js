import { Avatar, ListItem, Button, Icon } from "@rneui/themed";
import React, { useContext } from "react";
import { View, Alert } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import UsersContext from "../context/UsersContext";


export default props => {

const { state, dispatch } = useContext(UsersContext)

//console.warn(Object.keys(ctx.state))

function confirmUserDeletion(user) {
    
    Alert.alert('Excluir Usuário', 'Deseja ecluir o usuário?', [
        {
            text: 'Sim',
            onPress() {
                dispatch({
                    type: 'deleteUser',
                    payload: user,
                })
            }
        },
        {
            text: 'Não'
        }
    ])
}


    function getActions(user) {
            
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange'></Icon>}
                >

                </Button>
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'></Icon>}
                >

                </Button>
            </>
        )
    }

    function getUserItem({ item: user }) {

 

        return (
            <ListItem
            key={user.id}
            bottomDivider
            topDivider
            onPress={() => props.navigation.navigate('UserForm')}
            >
                <Avatar source={{uri: user.avatarUrl}}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
                
                
            </ListItem>
        )
    }

    //console.warn('error')
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id}
                data={state.users}
                renderItem={getUserItem}
            >

            </FlatList>
        </View>
    )
}