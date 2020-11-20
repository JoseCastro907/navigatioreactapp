import React from 'react';
import { View, StyleSheet, Pressable, Image,} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Text from './TextConstum';
import constants from '../Utils/constants';

const CastAndCrew = ({ navigation,cast, crew }) => {

    let newItems;
    if(cast){
        newItems =[... cast].slice(0,4);
    }else{
        newItems =[... crew].slice(0,4);
    }

    const gotoCastCrewDetails=()=> {
        navigation.navigate(constants.SCREEN.CASTANDCREW,{
            crew,
            cast,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text fontFamily="bold" style={styles.title}>{cast ? 'Actores' : 'Productores'}</Text>
                <Pressable onPress={gotoCastCrewDetails}>
                <Text style={styles.seemore}>
						Ver Todos <AntDesign name="right" size={12} color={constants.COLOR.GRAY} />
					</Text>
                </Pressable>
            </View>
            <View style={styles.castContainer}>
                {newItems.map((item, index) => 
                        item.profile_path ? (
                            <Image 
                                key={index}
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
                        )
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
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
        justifyContent: 'space-between',
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
});

export default CastAndCrew;