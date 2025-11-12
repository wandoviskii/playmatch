import React from 'react';
import { User } from '../types';

interface ProfileViewProps {
    currentUser: User;
    onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ currentUser, onLogout }) => {
    
    const getSportEmoji = (sport: string) => {
        switch (sport.toLowerCase()) {
            case 'futebol': return '⚽';
            case 'basquete': return '🏀';
            case 'vôlei': return '🏐';
            case 'tênis': return '🎾';
            default: return '🏅';
        }
    };

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
             <header className="flex items-center mb-8">
                <h1 className="text-xl font-bold text-center flex-grow">Profile</h1>
            </header>

            <div className="flex flex-col items-center mb-8">
                <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-24 h-24 rounded-full mb-2" />
                <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                <p className="text-gray-500">{currentUser.age}</p>
            </div>
            
            <div className="space-y-6">
                 <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-500 mb-3">FAVORITE SPORTS</h3>
                    <div className="flex items-center space-x-4">
                        {currentUser.favoriteSports.map(sport => (
                            <div key={sport} className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                                <span className="text-2xl">{getSportEmoji(sport)}</span>
                                <span className="text-xs font-semibold mt-1">{sport}</span>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-500 mb-3">ABOUT YOU</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Skill Level</span>
                            <span className="font-semibold">{currentUser.skillLevel}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-gray-500">City</span>
                            <span className="font-semibold">{currentUser.city}</span>
                        </div>
                    </div>
                 </div>

                 <div className="pt-4 space-y-3">
                    <button className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-3 rounded-2xl text-md">
                        Edit Profile
                    </button>
                    <button onClick={onLogout} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-2xl text-md">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
