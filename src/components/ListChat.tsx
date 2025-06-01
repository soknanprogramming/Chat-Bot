import "../scss/ListChat.scss";
import type { chatType } from "../types/type";
import ReactMarkdown from "react-markdown";
const ListChat = ({ content, isBot }: chatType) => {
  if(isBot){
    return (
      <div className="list-chat-bot">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>)
  }
  else{
    return (
      <div className="list-chat-user">
        {content}
      </div>
    );
  }
};

export default ListChat;
