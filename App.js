  
import React from 'react';
import { View, StatusBar } from 'react-native';

import Router from './Router';

import LoadAssets from './src/Utils/loadAssets';

import { fonts } from './src/Utils/fonts';

const assets = [];

const App = () => {
	return (
		<LoadAssets fonts={fonts} assets={assets}>
			<View style={{ flex: 1 }}>
				<StatusBar barStyle={'light-content'}></StatusBar>
				<Router></Router>
			</View>
		</LoadAssets>
	);
};

export default App;