import s from './Message.module.css';
import Card from '@material-ui/core/Card';

const Message = (props) => {
    return (

        <div className={props.ai ? s.messageAI : s.message}>
            <div>Имя : {props.author}</div>
            <div>Сообщение : {props.text}</div>
        </div>
    );

}

export default Message;
