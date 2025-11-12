import React from 'react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  onSelect: (match: Match) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onSelect }) => {
  const playersStatus = `${match.playersJoined.length} / ${match.playersNeeded}`;

  return (
    <div 
        onClick={() => onSelect(match)}
        className="bg-brand-surface rounded-xl overflow-hidden shadow-md border border-gray-200 flex items-center space-x-4 p-3 cursor-pointer hover:shadow-lg hover:border-brand-primary transition-all duration-200"
    >
        <img src={match.imageUrl} alt={match.sport} className="w-24 h-24 rounded-lg object-cover" />
        <div className="flex-grow">
            <h3 className="text-lg font-bold text-brand-dark">{match.sport} Game</h3>
            <p className="text-sm text-gray-500">{match.court.name}</p>
            <p className="text-sm text-gray-500 mt-1">
                {match.dateTime.toLocaleDateString('pt-BR', { weekday: 'short' })}, {match.dateTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <div className="flex items-center justify-between mt-2">
                 <div className="flex items-center -space-x-2">
                    {match.playersJoined.slice(0, 4).map(p => (
                        <img key={p.id} src={p.avatarUrl} alt={p.name} className="w-6 h-6 rounded-full border-2 border-white"/>
                    ))}
                 </div>
                <span className="text-sm font-semibold text-brand-primary bg-blue-100 px-2 py-1 rounded-full">{playersStatus}</span>
            </div>
        </div>
    </div>
  );
};

export default MatchCard;