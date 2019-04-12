import React, { PureComponent } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import styles from './style'

class Login extends PureComponent {
    handleLogin = () => {
        this.props.dispatch({
            type: 'user/login'
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.title.container}>
                    <Text style={styles.title.text}>Thingworx</Text>
                </View>
                <View style={styles.input.wrapper}>
                    <View>
                        <TextInput
                            autoFocus
                            style={styles.input.text}
                            placeholder="用户名"
                        />
                    </View>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            secureTextEntry
                            returnKeyType="go"
                            style={styles.input.text}
                            placeholder="密码"
                        />
                    </View>
                </View>
                <View style={styles.button.container}>
                    <Button title="登录" onPress={this.handleLogin} />
                </View>
            </SafeAreaView>
        )
    }
}

export default connect()(Login)
