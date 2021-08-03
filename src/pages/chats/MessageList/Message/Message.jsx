import s from './Message.module.css';
import {useRef} from "react";

const Message = (props) => {
    //console.log(props)
    const removeItemMessage = () => props.removeChatMessage(props.chatid,props.id)
    let userPrinted =(id) => props.findContactById(id)
    return (
        <div onClick={removeItemMessage} id={props.id} className={props.author === 100 ? s.messageAI : s.message} >
            {userPrinted(props.author)} : {props.messages}
        </div>
    );
}

export default Message;
