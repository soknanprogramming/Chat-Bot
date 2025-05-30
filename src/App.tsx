// src/App.tsx
import './scss/App.scss'
import type { chatType } from './types/type';
import NavBar from './components/NavBar';
import BoxPrompt from './components/BoxPrompt';
import ChatInfo from './components/ChatInfo';
import { useState } from 'react'
function App() {
  const [allChat, setAllChat] = useState<chatType[]>([]);

  return (
    <div className="app">
      <NavBar />
      <div className="app-container">
        <ChatInfo allChat={allChat}/>
        <BoxPrompt setAllChat={setAllChat} />
      </div>
    </div>
  )
}

export default App
