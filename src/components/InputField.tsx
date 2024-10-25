import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputFieldProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    icon?: keyof typeof Ionicons.glyphMap; // Restricts icon names to valid Ionicons names
    secureTextEntry?: boolean; // Correct spelling
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, icon, secureTextEntry = false }) => {
    return (
        <View style={styles.container}>
            {/* Conditionally renders an icon if provided */}
            {icon && <Ionicons name={icon} size={20} color="#888" style={styles.icon} />}
            <TextInput
                style={styles.input}
                placeholder={placeholder} // Sets placeholder text
                placeholderTextColor="#888" // Color of the placeholder text
                value={value} // Current input value
                onChangeText={onChangeText} // Updates value on text change
                secureTextEntry={secureTextEntry} // Enables secure input if true
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 8,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default InputField;
