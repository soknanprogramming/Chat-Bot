// src\components\BoxPrompt.jsx
import '../scss/BoxPrompt.scss';
import { useRef, useEffect } from 'react';
import type { chatType } from '../types/type';
import answerBot from '../func/answerBot';

interface Props {
  setAllChat: React.Dispatch<React.SetStateAction<chatType[]>>;
}

function BoxPrompt({setAllChat} : Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const boxPromptRef = useRef<HTMLDivElement>(null);

  // Function to resize the textarea and the box prompts
  const resizeAll = () : void => {
    const EXTRA_HEIGHT = 72; 
    const MAX_HEIGHT = 354; 
    const textarea  = textareaRef.current;
    const boxPrompts = boxPromptRef.current;
    if (!textarea || !boxPrompts) return; 

    textarea.style.height = 'auto'; 
    if(textarea.scrollHeight < MAX_HEIGHT){
      textarea.style.height = `${textarea.scrollHeight}px`;
      boxPrompts.style.height = `${textarea.scrollHeight + EXTRA_HEIGHT}px`;
      document.documentElement.style.setProperty('--match-height', `${textarea.scrollHeight + EXTRA_HEIGHT}px`)
    }
    else{
      textarea.style.height = `${MAX_HEIGHT}px`; 
      boxPrompts.style.height = `${MAX_HEIGHT + EXTRA_HEIGHT + 20}px`; 
      document.documentElement.style.setProperty('--match-height', `${MAX_HEIGHT + EXTRA_HEIGHT + 20}px`)
      textarea.style.overflow = 'visible'; 
    }
  }

  // Function to handle sending the message
  const handleSend = async () : Promise<void> => {
    const textarea  = textareaRef.current;
    if(!textarea) return;
    if(textarea.value.trim() === '') return;
    console.log(textarea.value.trim());

    const newChat: chatType = {
      id: Date.now(),
      content: textarea.value.trim(),
      isBot: false
    };

    setAllChat((prevChats : chatType[]) => [...prevChats, newChat]);
    const botResponse: chatType = await answerBot(textarea.value.trim());
    textarea.value = ''
    resizeAll();
    setAllChat((prevChats : chatType[]) => [...prevChats, botResponse]);
  }
  
  // Check if user presses key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) : void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  useEffect(() => {
    resizeAll();
  }, []);
  return (
    <div className="box-prompt" ref={boxPromptRef}>
      <div className="box-text">
        <textarea
            name="prompt" id="prompt"
            ref={textareaRef}
            onInput={resizeAll}
            onKeyDown={handleKeyDown}
            rows={1}
        />
      </div>
      <div className="box-more-func">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
export default BoxPrompt;
