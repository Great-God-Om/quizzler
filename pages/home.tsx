import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles= StyleSheet.create({
	main: {
		flex: 1,
		alignItems: 'center',
		paddingTop: '5%'
	}
})

export default function Home() {
	return (
		<View style={styles.main}>
			<Text>Home Page</Text>
		</View>
	)
}
