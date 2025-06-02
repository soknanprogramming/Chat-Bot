import "../scss/ListChat.scss";
import type { chatType } from "../types/type";
import ReactMarkdown from "react-markdown";

const ListChat = ({ content, isBot }: chatType) => {
  if(isBot){
    return (
      <div className="list-chat-bot-container">
        <div className="list-chat-bot">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <button>Copy</button>
      </div>
      )
  }
  else{
    return (
      <div className="list-chat-user-container">
        <div className="list-chat-user">
          {content}
        </div>
        <button>Copy</button>
      </div>
      
    );
  }
};

export default ListChat;
