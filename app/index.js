import React from 'react'
import { AppRegistry } from 'react-native'
import { create } from 'dva-core'
import { Provider } from 'react-redux'

const dvaInit = options => {
    const app = create(options)
    // HMR workaround
    if (!global.registered) options.models.forEach(model => app.model(model))
    global.registered = true

    app.start()
    // eslint-disable-next-line no-underscore-dangle
    const store = app._store

    app.start = container => () => (
        <Provider store={store}>{container}</Provider>
    )
    app.getStore = () => store

    return app
}

import Router, { routerMiddleware, routerReducer } from './router'
import userModel from './model/user'
import deviceModel from './model/device'
import { name as appName } from '../app.json'

const app = dvaInit({
    initialState: {},
    models: [userModel, deviceModel],
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    }
})

const App = app.start(<Router />)

AppRegistry.registerComponent(appName, () => App)
