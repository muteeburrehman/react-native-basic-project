import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
    loading?: boolean;
}

const ButtonComp: React.FC<ButtonProps> = ({title, onPress, color = '#4b9cd3', loading = false}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
            disabled={loading}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#fff"/>
            ):
                (
                    <Text style={styles.buttonText}>{title}</Text>
                )
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ButtonComp;
