import s from './Message.module.css';

const Message = (props) => {
    // console.log(props)
    return (
        <div className={s.message}>
            <div> Имя : {props.state.author}</div>
            <div>Сообщение : {props.state.text }</div>
        </div>
    );
}

export default Message;
