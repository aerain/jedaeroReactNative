import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native'
import { normalize, ListItem } from 'react-native-elements';


async function getdate(uri) {
    try {
        let res = await fetch(uri);
        let resJson = await res.json();
        return resJson.search_list; 
    } catch (error) {
        console.log(error);
    }
}

export default async function(search){
    var uri = `http://captanp20.cafe24.com/api/search_word.php?search_word=${search}&lan`;
    var data = await getdate(uri);
    return data;
}