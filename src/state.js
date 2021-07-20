import React from "react";
import {rerenderApp} from "./index";

export let state = {
        messages: [
            {author: "mixa", text: "Привет", ai: false},
            {author: "toxa", text: "Хай , мэн", ai: false},
            {author: "ROBOT", text: "Смерть кожаными мешкам", ai: true},
            {author: "lexa", text: "Аллоха!", ai: false},
        ],

        setMessage(message, login) {
            debugger
            this.messages.push({author: login, text: message, ai: false});
            this.messages.push({author: 'ROBOT', text: `Человек ${login} детектед!`, ai: true})
            // setTimeout(() => {
            //         this.messages.push({author: 'ROBOT', text: `Человек ${login} детектед!`, ai: true})
            //     }, 2000);

            rerenderApp(state);
        }
    }






