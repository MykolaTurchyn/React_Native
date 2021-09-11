import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getUsers} from "../services/Api";
import User from "./User";

const Users = () => {
    let [users, setUsers] = useState();
    useEffect(() => {
        getUsers().then(value => setUsers)
    }, [])
    return (
        <View>
            <FlatList
                data={users}
                renderItem={(item) => {
                    return <User item={item}/>

                }}
                keyExtractor={item => {item.id}}
            >
            </FlatList>
        </View>
    );
};
export default Users;

// let styles = StyleSheet.create({});