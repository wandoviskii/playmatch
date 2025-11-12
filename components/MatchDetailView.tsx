import React, { useState, useEffect } from 'react';
// FIX: Import UserRole to use the enum for type safety.
import { Match, User, ChatMessage, UserRole } from '../types';
import ChatWindow from './ChatWindow';
import { generateGameSpiritMessage } from '../services/geminiService';
import { MapPinIcon } from './icons';

interface MatchDetailViewProps {
  match: Match;
  currentUser: User;
  onBack: () => void;
}

const MatchDetailView: React.FC<MatchDetailViewProps> = ({ match, currentUser, onBack }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [spiritMessage, setSpiritMessage] = useState('');
  const [isLoadingSpirit, setIsLoadingSpirit] = useState(false);

  // Mock initial chat messages
  useEffect(() => {
    setChatMessages([
      { id: '1', user: match.playersJoined[0], text: 'E aí, galera! Prontos pra hoje?', timestamp: new Date() },
      // FIX: Use UserRole.PLAYER enum instead of the string 'PLAYER' to match the User type definition.
      { id: '2', user: match.playersJoined.length > 1 ? match.playersJoined[1] : { id: 'bot', name: 'Sistema', avatarUrl: 'https://picsum.photos/50/50', role: UserRole.PLAYER, age: 99, city: 'internet', favoriteSports: [], skillLevel: 'Avançado' }, text: 'Com certeza! Bora jogar!', timestamp: new Date() },
    ]);
  }, [match.playersJoined]);
  
  const handleSendMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: String(Date.now()),
      user: currentUser,
      text,
      timestamp: new Date(),
    };
    setChatMessages(prev => [...prev, newMessage]);
  };
  
  const handleGenerateSpirit = async () => {
    setIsLoadingSpirit(true);
    const time = match.dateTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const message = await generateGameSpiritMessage(match.sport, `hoje às ${time}`);
    setSpiritMessage(message);
    setIsLoadingSpirit(false);
  };

  return (
    <div className="p-4 md:p-6 text-brand-dark bg-brand-light min-h-screen">
      <header className="flex items-center mb-6">
        <button onClick={onBack} className="text-brand-primary font-semibold flex items-center">&larr; <span className="ml-2">Voltar</span></button>
        <h1 className="text-xl font-bold text-center flex-grow">Detalhes da Partida</h1>
      </header>
      
      <div className="bg-brand-surface rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold">{match.sport} em {match.court.name}</h2>
            <p className="text-gray-500 mt-1 flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              {match.court.location.address}
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <p className="text-2xl font-bold text-brand-primary">R${match.costPerPlayer.toFixed(2)}</p>
            <p className="text-sm text-gray-500">por jogador</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <ChatWindow messages={chatMessages} currentUser={currentUser} onSendMessage={handleSendMessage} />
        </div>
        
        <div className="space-y-6">
            <div className="bg-brand-surface rounded-lg p-4 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Jogadores Confirmados ({match.playersJoined.length}/{match.playersNeeded})</h3>
                <ul className="space-y-3">
                {match.playersJoined.map(player => (
                    <li key={player.id} className="flex items-center">
                    <img src={player.avatarUrl} alt={player.name} className="w-10 h-10 rounded-full mr-3" />
                    <span className="font-medium text-gray-700">{player.name}</span>
                    </li>
                ))}
                </ul>
            </div>
            
            <div className="bg-gradient-to-br from-brand-primary to-blue-400 rounded-lg p-4 text-center text-white shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Motivação da Partida</h3>
                {spiritMessage ? (
                    <p className="italic">"{spiritMessage}"</p>
                ) : (
                    <p className="text-blue-100 text-sm">Clique no botão para gerar uma mensagem motivacional com IA!</p>
                )}
                <button 
                    onClick={handleGenerateSpirit} 
                    disabled={isLoadingSpirit}
                    className="mt-4 bg-white text-brand-primary font-bold py-2 px-4 rounded-full transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoadingSpirit ? 'Gerando...' : 'Gerar Mensagem'}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailView;
