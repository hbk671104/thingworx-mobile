import React, { PureComponent } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import { persist } from '../../index'

class Landing extends PureComponent {
    componentWillMount() {
        persist(this.init)
    }

    init = () => {
        this.props.dispatch({
            type: 'user/init'
        })
    }

    render() {
        return null
    }
}

export default connect()(Landing)
