import s from './Message.module.css';

const Message = (props) => {

     return (

            <div className={props.state.ai ? s.messageAI : s.message}>
                <div>Имя : {props.state.author}</div>
                <div>Сообщение : {props.state.text }</div>
            </div>
        );

}

export default Message;
