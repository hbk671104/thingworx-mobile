import R from 'ramda'

const initialList = [
    {
        id: 1,
        is_abnormal: false,
        temperature: 40,
        cpu_usage: 0.2
    },
    {
        id: 2,
        is_abnormal: false,
        temperature: 38,
        cpu_usage: 0.16
    },
    {
        id: 3,
        is_abnormal: true,
        temperature: 70,
        cpu_usage: 0.8
    },
    {
        id: 4,
        is_abnormal: false,
        temperature: 42,
        cpu_usage: 0.22
    },
    {
        id: 5,
        is_abnormal: true,
        temperature: 68,
        cpu_usage: 0.75
    }
]

export default {
    namespace: 'device',
    state: {
        list: initialList
    },
    reducers: {
        resetList(state) {
            return {
                ...state,
                list: initialList
            }
        },
        markItemRead(state, { payload: id }) {
            return {
                ...state,
                list: R.pipe(
                    R.path(['list']),
                    R.map(i => {
                        if (i.id === id) {
                            return {
                                ...i,
                                is_abnormal: false
                            }
                        }
                        return i
                    })
                )(state)
            }
        }
    },
    effects: {
        *fetch({}, { call, put }) {
            try {
                const delay = () =>
                    new Promise(resolve => setTimeout(resolve, 1000))
                yield call(delay)
                yield put({ type: 'resetList' })
            } catch (error) {
                console.log(error)
            }
        }
    },
    subscriptions: {}
}
