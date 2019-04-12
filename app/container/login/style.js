import { human } from 'react-native-typography'

export default {
    container: {
        flex: 1,
        marginTop: 144
    },
    title: {
        container: {
            alignItems: 'center'
        },
        text: {
            ...human.largeTitleObject
        }
    },
    input: {
        wrapper: {
            marginTop: 36,
            marginHorizontal: 24
        },
        container: {},
        text: {
            ...human.bodyObject
        }
    },
    button: {
        container: {
            marginTop: 36
        }
    }
}
