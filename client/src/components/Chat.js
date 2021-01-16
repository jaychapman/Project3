import React, { Component } from 'react';
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from 'axios';

const id = Math.random();

class Chat extends Component {

    componentDidMount() {
        addResponseMessage("Welcome to Age in Place Experts. How can I help you today?");
    }

    handleNewUserMessage(message) {
        axios.post("https://appointment-backend-5495.twil.io/chat", {
            message,
            id
        }).then((response) => {
            response.data.response.says.forEach((say) => {
                addResponseMessage(say.text)
            })
        })
    }


    render(){
        return(
            <>
            <Widget handleNewUserMessage={this.handleNewUserMessage} />
            </>
        )
    }
}

export default Chat;