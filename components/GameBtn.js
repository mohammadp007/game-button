import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class GameBtn extends Component {

    constructor (props) {
        super(props);
        this.state = {
            position: {
                top: 0,
                left: 0,
            }
        }
    }

    clicked =  () => {
        this.setState({
           position: {
               top: Math.round(Math.random() * 600),
               left: Math.round(Math.random() * 300),
           }
        });
    };

    render () {
        return (
            <View style={{position: 'absolute', flexDirection: 'column', top: this.state.position.top, left: this.state.position.left}}>
                <Button onPress={this.clicked} title="ClickMe" color="#429bf5"/>
            </View>
        )
    }
}
