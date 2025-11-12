import React from 'react';
import { Match } from '../types';
import MatchCard from './MatchCard';
import { SearchIcon, ChevronDownIcon } from './icons';

interface MapViewProps {
    matches: Match[];
    onSelectMatch: (match: Match) => void;
    onCreateGame: () => void;
}

const sportsFilters = ['All', 'Volleyball', 'Futsal', 'Soccer', 'Basketball', 'Tennis'];

const MapView: React.FC<MapViewProps> = ({ matches, onSelectMatch, onCreateGame }) => {
    const [activeFilter, setActiveFilter] = React.useState('All');

    return (
        <div className="p-4">
            <header className="mb-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-3 pl-10 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>
                <div className="mt-4 flex items-center space-x-2 overflow-x-auto pb-2">
                    {sportsFilters.map(sport => (
                        <button
                            key={sport}
                            onClick={() => setActiveFilter(sport)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                                activeFilter === sport
                                    ? 'bg-brand-primary text-white'
                                    : 'bg-white text-brand-text border border-gray-200 hover:bg-gray-100'
                            }`}
                        >
                            {sport}
                        </button>
                    ))}
                     <button className="flex items-center px-3 py-2 text-sm font-semibold bg-white text-brand-text border border-gray-200 rounded-full">
                        More <ChevronDownIcon className="w-4 h-4 ml-1"/>
                    </button>
                </div>
            </header>

            <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
            </div>
            
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Nearby Games</h2>
                <button 
                    onClick={onCreateGame}
                    className="bg-brand-primary text-white font-bold py-2 px-4 rounded-xl text-sm hover:bg-blue-600 transition"
                >
                    + Create
                </button>
            </div>


            <div className="space-y-4">
                {matches.map(match => (
                    <MatchCard key={match.id} match={match} onSelect={onSelectMatch} />
                ))}
            </div>
        </div>
    );
};

export default MapView;
