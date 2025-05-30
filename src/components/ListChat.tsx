import "../scss/ListChat.scss";
import type { chatType } from "../types/type";
const ListChat = ({ content, isBot }: chatType) => {
  if(isBot){
    return (
      <div className="list-chat-bot">
        {"🤖"} {content}
      </div>)
  }
  else{
    return (
      <div className="list-chat-user">
        {content} {"👤"}
      </div>
    );
  }
};

export default ListChat;
