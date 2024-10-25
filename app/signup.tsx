// app/signup.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from "@/components/InputField";
import ButtonComp from "@/components/ButtonComp";
// import { signUp } from '../src/services/authService';

const Signup = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUp(email, password, name);
            console.log('Signup successful:', response.data);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join us for a secure home experience</Text>

            <InputField
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                icon="person-outline"
            />
            <InputField
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                icon="mail-outline"
            />
            <InputField
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon="lock-closed-outline"
            />

            <ButtonComp title="Sign Up" onPress={handleSignUp} />

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                    Already have an account? <Text style={styles.loginLink}>Log in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f9fafe',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    loginText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#888',
    },
    loginLink: {
        color: '#4b9cd3',
        fontWeight: 'bold',
    },
});

export default Signup;
