import React from 'react';
import {View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import constants from '../Utils/constants';

const Stars = ({ realVotes }) => {
	let iconName = 'star-o';

	return (
		<View style={styles.starsContainer}>
			{[...Array(5).keys()].map((position) => {
				if (position < realVotes) {
					iconName = 'star';
				} else {
					iconName = 'star-o';
				}

				return (
					<FontAwesome
						key={position}
						name={iconName}
						size={16}
						color={constants.COLOR.WARNING}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	starsContainer: {
		flexDirection: 'row',
	},
});

export default Stars;