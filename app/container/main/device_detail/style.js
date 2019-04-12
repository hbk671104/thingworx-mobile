import { human } from 'react-native-typography'

export default {
    container: {
        flex: 1
    },
    contentContainer: {
        paddingVertical: 12
    },
    group: {
        title: {
            container: {
                paddingHorizontal: 12
            },
            text: {
                ...human.calloutObject
            }
        }
    }
}
