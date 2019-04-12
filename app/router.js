import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import {
    createStackNavigator,
    createSwitchNavigator,
    NavigationActions
} from 'react-navigation'
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Login from './container/login'
import DeviceList from './container/main/device_list'
import DeviceDetail from './container/main/device_detail'

const MainNavigator = createStackNavigator({
    DeviceList,
    DeviceDetail
})

const AppNavigator = createSwitchNavigator({
    Login,
    Main: MainNavigator
})

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
    state => state.router
)

const App = createReduxContainer(AppNavigator)

class Router extends PureComponent {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
    }

    backHandle = () => {
        const { dispatch, router } = this.props
        if (router.index === 0) {
            return false
        }

        dispatch(NavigationActions.back())
        return true
    }

    render() {
        const { dispatch, router } = this.props
        return <App dispatch={dispatch} state={router} />
    }
}

export default connect(({ router }) => ({ router }))(Router)
