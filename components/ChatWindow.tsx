import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, User } from '../types';

interface ChatWindowProps {
  messages: ChatMessage[];
  currentUser: User;
  onSendMessage: (text: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, currentUser, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  return (
    <div className="bg-brand-surface border border-gray-200 rounded-lg flex flex-col h-full shadow-sm" style={{maxHeight: '600px'}}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-brand-dark">Chat da Partida</h3>
      </div>
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start mb-4 ${msg.user.id === currentUser.id ? 'justify-end' : 'justify-start'}`}>
            {msg.user.id !== currentUser.id && (
              <img src={msg.user.avatarUrl} alt={msg.user.name} className="w-8 h-8 rounded-full mr-3" />
            )}
            <div className={`rounded-lg p-3 max-w-xs lg:max-w-md ${msg.user.id === currentUser.id ? 'bg-brand-primary text-white' : 'bg-gray-200 text-brand-text'}`}>
              <p className="text-sm font-semibold mb-1">{msg.user.name}</p>
              <p className="text-sm">{msg.text}</p>
            </div>
            {msg.user.id === currentUser.id && (
              <img src={msg.user.avatarUrl} alt={msg.user.name} className="w-8 h-8 rounded-full ml-3" />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200 flex bg-white rounded-b-lg">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Digite sua mensagem..."
          className="flex-grow bg-brand-light border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <button onClick={handleSend} className="bg-brand-primary hover:bg-blue-600 text-white font-bold px-4 rounded-r-lg">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;