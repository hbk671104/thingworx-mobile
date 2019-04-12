import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { human, iOSColors } from 'react-native-typography'
import R from 'ramda'
import StatusIndicator from 'component/status_indicator'

const deviceItem = ({ data, onPress }) => {
    const is_abnormal = R.pathOr(false, ['is_abnormal'])(data)
    const temperature = R.pathOr(0, ['temperature'])(data)
    const cpu_usage = R.pathOr(0, ['cpu_usage'])(data)
    return (
        <TouchableOpacity
            disabled={!is_abnormal}
            style={styles.container}
            onPress={onPress}
        >
            <StatusIndicator abnormal={is_abnormal} />
            <View style={styles.content.wrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>设备{data.id}</Text>
                </View>
                <View style={styles.content.container}>
                    <Text style={styles.content.text}>
                        温度：
                        <Text style={{ fontWeight: 'bold' }}>
                            {temperature}
                        </Text>
                        °C
                    </Text>
                    <Text style={styles.content.text}>
                        CPU使用率：
                        <Text style={{ fontWeight: 'bold' }}>
                            {cpu_usage * 100}%
                        </Text>
                    </Text>
                </View>
            </View>
            <Text
                style={[
                    styles.status,
                    { color: is_abnormal ? iOSColors.red : iOSColors.green }
                ]}
            >
                {is_abnormal ? '异常' : '正常'}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    content: {
        wrapper: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 12
        },
        container: {
            marginRight: 12
        },
        text: {
            ...human.caption1Object
        }
    },
    title: {
        ...human.title3Object
    },
    status: {
        ...human.subheadObject
    }
}

export default deviceItem
