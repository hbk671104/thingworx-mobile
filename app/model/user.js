import { NavigationActions } from 'react-navigation'

export default {
    namespace: 'user',
    state: {},
    reducers: {},
    effects: {
        *login({ payload }, { call, put }) {
            yield put(NavigationActions.navigate({ routeName: 'Main' }))
        },
        *logout(action, { call, put }) {}
    },
    subscriptions: {}
}
