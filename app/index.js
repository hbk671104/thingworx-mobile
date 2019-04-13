import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { create } from 'dva-core'
import { Provider } from 'react-redux'
import createLoading from 'dva-loading'
import { autoRehydrate, persistStore } from 'redux-persist'

const dvaInit = options => {
    const app = create(options)

    // HMR workaround
    if (!global.registered) options.models.forEach(model => app.model(model))
    global.registered = true

    // dva-loading
    app.use(
        createLoading({
            only: ['device/fetch']
        })
    )

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
    extraEnhancers: [autoRehydrate()],
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    }
})

export const persist = callback => {
    persistStore(
        app.getStore(),
        {
            storage: AsyncStorage,
            whitelist: ['user']
        },
        callback
    )
}

AppRegistry.registerComponent(appName, () => app.start(<Router />))
