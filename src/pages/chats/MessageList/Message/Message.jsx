import s from './Message.module.css';
import {useRef} from "react";


const Message = (props) => {
    //console.log(props)
    //if(props.im === undefined){ props.im = true }
    let removeChatItem = () => {
        props.removeItem(props.id)
    }
    return (
        <div onClick={removeChatItem} id={props.id} className={props.im ? s.messageAI : s.message} >
            {props.author} : {props.messages}
        </div>
    );

}

export default Message;
