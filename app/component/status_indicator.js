import React from 'react'
import { View } from 'react-native'
import { iOSColors } from 'react-native-typography'

const statusIndicator = ({ abnormal = false }) => (
    <View style={[styles.container, abnormal && styles.abnormal]} />
)

const styles = {
    container: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: iOSColors.green
    },
    abnormal: {
        backgroundColor: iOSColors.red
    }
}

export default statusIndicator
