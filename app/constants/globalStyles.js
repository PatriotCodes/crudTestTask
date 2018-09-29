import React from "react";
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    primaryText: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: '#096484',
        padding: 10,
        marginBottom: 10,
        width: '50%',
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
    }
});

export const highlightColor = '#bcbcbc';

export default globalStyles;