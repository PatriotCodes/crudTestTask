import React from "react";
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    primaryText: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    secondaryText: {
        fontFamily: 'Roboto',
        fontSize: 18,
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: '#0073AA',
        padding: 10,
        marginBottom: 10,
        width: '50%',
    },
    secondaryButton: {
        alignItems: 'center',
        backgroundColor: '#DC3232',
        padding: 10,
        marginBottom: 10,
        width: '50%',
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
    }
});

export const highlightColor = '#00A0D2';
export const highlightColorSecondary = '#ff5151';

export default globalStyles;