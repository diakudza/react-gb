import s from './Message.module.css';
import {useRef} from "react";

const Message = (props) => {
    let itemMessage = useRef();
    // console.log(props)
    if(props===undefined){props.messages.ai=true}
    return (
        <div onClick={props.removeItem} id = {props.messages.id} className={props.messages.ai ? s.messageAI : s.message}>
            {props.messages.author} : {props.messages.text}
        </div>
    );

}

export default Message;
