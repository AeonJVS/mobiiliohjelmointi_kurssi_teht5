import React from'react';
import { View, Text, FlatList } from'react-native';

export default function History({ route, navigation }) {
    const { data } = route.params;

    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
            <Text>History</Text>
            <FlatList 
                data={data}
                renderItem={({ item }) => <Text>{ item.key }</Text>}
            />
        </View>
    </View> 
    );
};