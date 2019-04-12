import React, { PureComponent } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'

import DeviceItem from './component/device_item'
import styles from './style'

class DeviceList extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const logout = navigation.getParam('logout')
        return {
            title: '设备列表',
            headerRight: <Button title="登出" onPress={logout} />
        }
    }

    componentWillMount() {
        this.props.navigation.setParams({
            logout: this.logout
        })
    }

    logout = () => {
        this.props.dispatch({ type: 'user/logout' })
    }

    renderItem = ({ item }) => <DeviceItem data={item} />

    renderSeparator = () => <View style={styles.separator} />

    render() {
        const { list } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        )
    }
}

export default connect(({ device }) => ({
    list: R.pathOr([], ['list'])(device)
}))(DeviceList)
