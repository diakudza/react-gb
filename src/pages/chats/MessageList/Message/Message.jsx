import s from './Message.module.css';
import {messageApi} from "../../../../api/requests/message";

const Message = (props) => {


    const removeItemMessage = () => messageApi.removeMessageFromDB(props.chatid, props.id)
    let userPrinted = (id) => props.findContactById(id)
    return (
        <div onClick={removeItemMessage} id={props.id} className={props.author === 100 ? s.messageAI : s.message}>
            {userPrinted(props.author)} : {props.messages}
        </div>
    );
}

export default Message;
