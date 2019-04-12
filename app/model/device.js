export default {
    namespace: 'device',
    state: {
        list: [
            {
                id: 1,
                is_abnormal: false,
                temperature: '40°C',
                cpu_usage: '20%'
            },
            {
                id: 2,
                is_abnormal: false,
                temperature: '38°C',
                cpu_usage: '16%'
            },
            {
                id: 3,
                is_abnormal: true,
                temperature: '70°C',
                cpu_usage: '80%'
            },
            {
                id: 4,
                is_abnormal: false,
                temperature: '42°C',
                cpu_usage: '22%'
            },
            {
                id: 5,
                is_abnormal: true,
                temperature: '68°C',
                cpu_usage: '75%'
            }
        ]
    },
    reducers: {},
    effects: {},
    subscriptions: {}
}
