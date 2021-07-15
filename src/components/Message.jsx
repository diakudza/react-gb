import s from './Message.module.css';
import Text from "./Text";
const  Message = (props) => {
  return (
    <div className={s.message}>
       <Text message={props.message}/>
    </div>
  );
}

export default Message;
