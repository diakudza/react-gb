import s from './Message.module.css';

const Message = (props) => {

    return (
        <div className={props.messages.ai ? s.messageAI : s.message}>
            {props.messages.author} : {props.messages.text}
        </div>
    );

}

export default Message;
