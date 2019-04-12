import React, { PureComponent } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'
import { VictoryChart, VictoryPie, VictoryLine } from 'victory-native'
import { iOSColors } from 'react-native-typography'

import styles from './style'

class DeviceDetail extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const data = navigation.getParam('data', {})
        const id = R.pathOr(0, ['id'])(data)
        return {
            title: `设备${id}`
        }
    }

    componentDidMount() {
        const { data } = this.props
        this.props.dispatch({ type: 'device/markItemRead', payload: data.id })
    }

    render() {
        const { data } = this.props
        const temperature = R.pathOr(0, ['temperature'])(data)
        const cpu_usage = R.pathOr(0, ['cpu_usage'])(data)
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View pointerEvents="none">
                    <View style={styles.group.title.container}>
                        <Text style={styles.group.title.text}>
                            当前设备温度：
                            <Text style={{ fontWeight: 'bold' }}>
                                {temperature}°C
                            </Text>
                        </Text>
                    </View>
                    <VictoryChart>
                        <VictoryLine
                            style={{
                                data: { stroke: '#c43a31' },
                                parent: { border: '1px solid #ccc' }
                            }}
                            data={[
                                { x: 1, y: 2 },
                                { x: 2, y: 3 },
                                { x: 3, y: 5 },
                                { x: 4, y: 4 },
                                { x: 5, y: 7 }
                            ]}
                        />
                    </VictoryChart>
                </View>
                <View pointerEvents="none">
                    <View style={styles.group.title.container}>
                        <Text style={styles.group.title.text}>
                            当前 CPU 使用率：
                            <Text style={{ fontWeight: 'bold' }}>
                                {cpu_usage * 100}%
                            </Text>
                        </Text>
                    </View>
                    {/* <VictoryPie
                        data={[
                            { x: '已使用', y: cpu_usage },
                            {
                                x: '未使用',
                                y: 1 - cpu_usage
                            }
                        ]}
                        colorScale={[iOSColors.purple, iOSColors.lightGray]}
                    /> */}
                    <VictoryChart>
                        <VictoryLine
                            style={{
                                data: { stroke: '#c43a31' },
                                parent: { border: '1px solid #ccc' }
                            }}
                            data={[
                                { x: 1, y: 2 },
                                { x: 2, y: 3 },
                                { x: 3, y: 5 },
                                { x: 4, y: 4 },
                                { x: 5, y: 7 }
                            ]}
                        />
                    </VictoryChart>
                </View>
            </ScrollView>
        )
    }
}

export default connect((state, { navigation }) => {
    const data = navigation.getParam('data', {})
    return {
        data
    }
})(DeviceDetail)
