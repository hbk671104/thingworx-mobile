import React, { PureComponent } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
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
            logout: this.handleLogout
        })
    }

    handleLogout = () => {
        this.props.dispatch({ type: 'user/logout' })
    }

    handleItemPress = data => () => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'DeviceDetail',
                params: {
                    data
                }
            })
        )
    }

    handleRefresh = () => {
        this.props.dispatch({ type: 'device/fetch' })
    }

    renderItem = ({ item }) => (
        <DeviceItem data={item} onPress={this.handleItemPress(item)} />
    )

    renderSeparator = () => <View style={styles.separator} />

    render() {
        const { list, loading } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => `${item.id}`}
                    refreshing={loading}
                    onRefresh={this.handleRefresh}
                />
            </View>
        )
    }
}

export default connect(({ device, loading }) => ({
    list: R.pathOr([], ['list'])(device),
    loading: loading.global
}))(DeviceList)
