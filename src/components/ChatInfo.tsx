import "../scss/ChatInfo.scss";
import ListChat from "./ListChat";
import type { JSX } from "react";
import type { chatType } from "../types/type";
interface Prop{
  allChat: chatType[];
}

const ChatInfo = ({allChat} : Prop) => {
  return (
    <div className="chat-info">
        {
            allChat.map((chat: chatType) : JSX.Element => {
                const { id, content, isBot } = chat;
                return <ListChat key={id} id={id} content={content} isBot={isBot} />
            })
        }
    </div>
  );
};

export default ChatInfo;
