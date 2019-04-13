import { NavigationActions } from 'react-navigation'
import R from 'ramda'

export default {
    namespace: 'user',
    state: {
        is_loggedin: false
    },
    reducers: {
        toggleLoginState(state) {
            return {
                ...state,
                is_loggedin: !state.is_loggedin
            }
        }
    },
    effects: {
        *init(action, { select, put }) {
            const is_loggedin = yield select(state =>
                R.pathOr(false, ['user', 'is_loggedin'])(state)
            )
            yield put(
                NavigationActions.navigate({
                    routeName: is_loggedin ? 'Main' : 'Login'
                })
            )
        },
        *login({ payload }, { put }) {
            yield put({ type: 'toggleLoginState' })
            yield put(NavigationActions.navigate({ routeName: 'Main' }))
        },
        *logout(action, { put }) {
            yield put({ type: 'toggleLoginState' })
            yield put(NavigationActions.navigate({ routeName: 'Login' }))
        }
    },
    subscriptions: {}
}
