import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { create_user } from '../../services/authentication/user_actions'

const styles = StyleSheet.create({
	form: {
		width: '100%',
		alignItems: 'center'
	},
	input: {
		width: '70%',
		height: '20%',
		color: '#000000',
		borderColor: '#cdcdcd',
		paddingLeft: 10,
		borderWidth: 2,
		borderRadius: 5,
	}
})


export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const submit = () => {
		console.log(`This is the email ${email}, and password ${password}`)
		create_user(email, password).catch(e => console.log(e))
	}
	return (
		<View style={styles.form}>
			<TextInput placeholder='Enter Your Email' style={styles.input} value={email} onChangeText={setEmail}/>
			<TextInput secureTextEntry={true} placeholder='Enter Your Password' style={styles.input} value={password} onChangeText={setPassword}/>
			<Button
				onPress={submit}
				title='SUBMIT'
				color='#841584'
				accessibilityLabel='Learn more about this purple button'
			/>
		</View>
	)
}
