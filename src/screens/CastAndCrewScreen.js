import React from 'react'
import { View, StyleSheet, Pressable, Image, Dimensions, Platform } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

import Text from '../components/TextConstum';

import constants from '../Utils/constants';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const CastAndCrewScreen = ({ navigation, route}) => {

    const {cast, crew} = route.params;

    let items = cast ? cast : crew;

    React.useEffect(() => {
        navigation.setOptions({
            title: cast ? 'Actores' : 'Equipo de producción',
            headerBackTitleVisible: false,
        });
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.castContainer}>
                {items.map((item, index) => (
                    <View key={index} style={styles.card}>
                        {item.profile_path ? (
                            <Image 
                                resizeMode="cover"
                                style={styles.image}
                                source={{ 
                                    uri: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
                                }}
                            />
                        ) : (
                                <View style={styles.iconContainer}>
                                    <Ionicons name="md-person" size={60} color={constants.COLOR.GRAY} />
                                </View>
                        )}
                        <Text style={{ alignItems: 'center'}}>
                            {cast ? item.character : item.department}</Text>
                        <Text>{item.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'android' ? 0 : 20,
        },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        color: constants.COLOR.TEXT_COLOR,
        fontWeight: "bold",
        flexGrow: 1,
        flexWrap: "wrap",
        marginRight: 12,
        fontSize: 16,
    },
    castContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    seemore:{
        color: constants.COLOR.GRAY,
        fontSize: 12,
        flexDirection: "row",
        alignItems: 'center',
    },
    iconContainer: {
		backgroundColor: constants.COLOR.LIGHT_GRAY,
		width: 80,
		height: 80,
		borderRadius: 80,
		justifyContent: 'center',
		alignItems: 'center',
    },
    card: {
        width: (width - 40) /3,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 24,
    },
});
