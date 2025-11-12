import React, { useState } from 'react';
import { User, Match, SkillLevel } from '../types';
import { CalendarIcon, ClockIcon, MapPinIcon } from './icons';

interface CreateGameViewProps {
    currentUser: User;
    onBack: () => void;
    onCreate: (newMatchData: Omit<Match, 'id' | 'playersJoined' | 'location' | 'court'>) => void;
}

const CreateGameView: React.FC<CreateGameViewProps> = ({ currentUser, onBack, onCreate }) => {
    const [sport, setSport] = useState('Volleyball');
    const [location, setLocation] = useState('City Park');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newMatchData = {
            sport,
            // In a real app, date and time would be combined into a single Date object
            dateTime: new Date(`${date}T${time}`),
            playersNeeded: 10, // Example value
            costPerPlayer: 15, // Example value
            skillLevel: ['Intermediário'] as SkillLevel[], // Example value
            imageUrl: `https://images.unsplash.com/photo-1549487431-b96d9920392b?w=300` // Example value
        };
        onCreate(newMatchData);
    };

    return (
        <div className="p-4 bg-white min-h-screen">
            <header className="flex items-center mb-8">
                <button onClick={onBack} className="text-brand-primary font-semibold text-lg">&larr;</button>
                <h1 className="text-xl font-bold text-center flex-grow">Create Game</h1>
            </header>

            <div className="flex flex-col items-center mb-8">
                <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-24 h-24 rounded-full mb-2" />
                <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                <p className="text-gray-500">{currentUser.age}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="text-sm font-bold text-gray-500">SPORT</label>
                    <div className="mt-2 p-4 bg-gray-100 rounded-xl flex justify-between items-center">
                        <span className="font-semibold">{sport}</span>
                        <select value={sport} onChange={e => setSport(e.target.value)} className="bg-transparent font-semibold focus:outline-none appearance-none">
                            <option>Volleyball</option>
                            <option>Futsal</option>
                            <option>Basketball</option>
                            <option>Soccer</option>
                            <option>Tennis</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-bold text-gray-500">LOCATION</label>
                    <div className="mt-2 p-4 bg-gray-100 rounded-xl flex items-center">
                        <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="bg-transparent w-full font-semibold focus:outline-none" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold text-gray-500">DATE</label>
                        <div className="mt-2 p-4 bg-gray-100 rounded-xl flex items-center">
                             <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="bg-transparent w-full font-semibold focus:outline-none text-gray-700" />
                        </div>
                    </div>
                     <div>
                        <label className="text-sm font-bold text-gray-500">TIME</label>
                        <div className="mt-2 p-4 bg-gray-100 rounded-xl flex items-center">
                            <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
                            <input type="time" value={time} onChange={e => setTime(e.target.value)} required className="bg-transparent w-full font-semibold focus:outline-none text-gray-700" />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl text-lg transition-transform duration-200 hover:scale-105">
                        Create Game
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGameView;