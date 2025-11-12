import React, { useState, useEffect } from 'react';
import { User, UserRole, View, Match, Court, Location, SkillLevel } from './types';
import LoginModal from './components/LoginModal';
import MatchDetailView from './components/MatchDetailView';
import BottomNav from './components/BottomNav';
import { MapPinIcon, HeroIllustration } from './components/icons';
import MapView from './components/MapView';
import CreateGameView from './components/CreateGameView';
import ProfileView from './components/ProfileView';

// MOCK DATA
const mockUsers: User[] = [
    { id: 'u1', name: 'Juliana Santos', avatarUrl: 'https://i.pravatar.cc/150?u=juliana', role: UserRole.PLAYER, age: 28, skillLevel: 'Intermediário', favoriteSports: ['Vôlei', 'Futebol'], city: 'São Paulo' },
    { id: 'u2', name: 'Carlos', avatarUrl: 'https://i.pravatar.cc/150?u=carlos', role: UserRole.PLAYER, age: 32, skillLevel: 'Avançado', favoriteSports: ['Futebol'], city: 'São Paulo' },
    { id: 'u3', name: 'Ana', avatarUrl: 'https://i.pravatar.cc/150?u=ana', role: UserRole.PLAYER, age: 25, skillLevel: 'Iniciante', favoriteSports: ['Basquete'], city: 'São Paulo' },
    { id: 'u4', name: 'Pedro', avatarUrl: 'https://i.pravatar.cc/150?u=pedro', role: UserRole.PLAYER, age: 30, skillLevel: 'Intermediário', favoriteSports: ['Tênis', 'Vôlei'], city: 'São Paulo' },
    { id: 'u5', name: 'Julia', avatarUrl: 'https://i.pravatar.cc/150?u=julia', role: UserRole.PLAYER, age: 22, skillLevel: 'Avançado', favoriteSports: ['Futebol'], city: 'São Paulo' },
];

const mockCourts: Court[] = [
    { id: 'c1', ownerId: 'owner1', name: 'City Park', sports: ['Futebol'], pricePerHour: 120, imageUrl: 'https://images.unsplash.com/photo-1551771191-7191a243c7ea?w=300', location: { lat: -23.5505, lng: -46.6333, address: 'Av. Paulista, 1578 - São Paulo' } },
    { id: 'c2', ownerId: 'owner1', name: 'Sports Complex', sports: ['Vôlei', 'Basquete'], pricePerHour: 90, imageUrl: 'https://images.unsplash.com/photo-1521413813104-fe5d2f61a156?w=300', location: { lat: -23.5614, lng: -46.6565, address: 'Rua Augusta, 1200 - São Paulo' } },
];

const mockMatches: Match[] = [
    { id: 'm1', sport: 'Volleyball', dateTime: new Date(new Date().setDate(new Date().getDate() + 1)), playersNeeded: 8, playersJoined: mockUsers.slice(0, 4), court: mockCourts[0], costPerPlayer: 15, location: mockCourts[0].location, skillLevel: ['Iniciante', 'Intermediário'], imageUrl: 'https://images.unsplash.com/photo-1549487431-b96d9920392b?w=300' },
    { id: 'm2', sport: 'Futsal', dateTime: new Date(new Date().setDate(new Date().getDate() + 2)), playersNeeded: 10, playersJoined: mockUsers.slice(0, 9), court: mockCourts[1], costPerPlayer: 10, location: mockCourts[1].location, skillLevel: ['Avançado'], imageUrl: 'https://images.unsplash.com/photo-1628891553493-575d55268c74?w=300' },
    { id: 'm3', sport: 'Basketball', dateTime: new Date(new Date().setDate(new Date().getDate() + 2)), playersNeeded: 10, playersJoined: mockUsers.slice(0, 5), court: mockCourts[1], costPerPlayer: 12, location: mockCourts[1].location, skillLevel: ['Intermediário'], imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300' },
];

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
    return (
        <div className="min-h-screen bg-brand-surface flex flex-col items-center justify-center text-center p-6 font-sans">
            <div className="flex-grow flex flex-col justify-center items-center w-full max-w-sm">
                <header className="flex items-center space-x-2 mb-8">
                    <MapPinIcon className="w-8 h-8 text-brand-primary" />
                    <span className="text-3xl font-bold text-brand-dark">PlayMatch</span>
                </header>
                
                <main>
                    <HeroIllustration className="w-full h-auto mx-auto"/>
                    <h1 className="text-4xl font-extrabold mt-10 leading-tight text-brand-dark">
                        Find local<br/>sports enthusiasts
                    </h1>
                </main>
            </div>
            
            <footer className="w-full max-w-sm pb-4">
                <button 
                    onClick={onGetStarted}
                    className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-2xl text-lg transition-transform duration-200 hover:scale-105 shadow-lg"
                >
                    Get started
                </button>
                <button 
                    onClick={onGetStarted}
                    className="w-full text-center mt-6 text-sm font-semibold text-gray-500 hover:text-gray-700"
                >
                    Already have an account?
                </button>
            </footer>
        </div>
    );
};

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [view, setView] = useState<View>(View.WELCOME);
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLogin = (role: UserRole) => {
        const user = role === UserRole.COURT_OWNER
            ? { id: 'owner1', name: 'Court Owner', avatarUrl: 'https://i.pravatar.cc/150?u=owner', role: UserRole.COURT_OWNER, age: 45, city: 'São Paulo', favoriteSports: [], skillLevel: 'Intermediário' as SkillLevel }
            : mockUsers[0]; // Login as Juliana Santos
        
        setCurrentUser(user);
        setView(role === UserRole.COURT_OWNER ? View.COURTS : View.MAP);
        setShowLoginModal(false);
    };

    const handleGoogleLogin = () => {
        // Mock Google login always succeeds as a player
        const user = mockUsers[0];
        setCurrentUser(user);
        setView(View.MAP);
        setShowLoginModal(false);
    };
    
    const handleSelectMatch = (match: Match) => {
        setSelectedMatch(match);
        setView(View.MATCH_DETAIL);
    };
    
    const handleNavigation = (newView: View) => {
        setSelectedMatch(null);
        setView(newView);
    };

    const handleCreateMatch = (newMatchData: Omit<Match, 'id' | 'playersJoined' | 'location' | 'court'>) => {
        // In a real app, this would send data to a backend. Here we just log it and go back to the map.
        console.log("New match created:", newMatchData);
        setView(View.MAP);
    }

    if (!currentUser) {
        if (showLoginModal) {
            return <LoginModal onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} onClose={() => setShowLoginModal(false)} />;
        }
        return <WelcomeScreen onGetStarted={() => setShowLoginModal(true)} />;
    }

    const renderContent = () => {
        if (selectedMatch && view === View.MATCH_DETAIL) {
            return <MatchDetailView match={selectedMatch} currentUser={currentUser} onBack={() => handleNavigation(View.MAP)} />;
        }
    
        switch (view) {
            case View.MAP:
                return <MapView matches={mockMatches} onSelectMatch={handleSelectMatch} onCreateGame={() => setView(View.CREATE_GAME)} />;
            case View.CREATE_GAME:
                return <CreateGameView currentUser={currentUser} onBack={() => setView(View.MAP)} onCreate={handleCreateMatch} />;
            case View.PROFILE:
                return <ProfileView currentUser={currentUser} onLogout={() => setCurrentUser(null)} />;
            case View.MY_GAMES:
                 return <div className="p-4 md:p-6"><h1 className="text-2xl font-bold">Meus Jogos</h1><p className="text-gray-500 mt-2">Aqui aparecerão os jogos que você confirmou presença.</p></div>;
            case View.COURTS:
                return <div className="p-4 md:p-6"><h1 className="text-2xl font-bold">Minhas Quadras</h1><p className="text-gray-500 mt-2">Gerencie suas quadras, reservas e pagamentos aqui.</p></div>;
            default:
                return <MapView matches={mockMatches} onSelectMatch={handleSelectMatch} onCreateGame={() => setView(View.CREATE_GAME)} />;
        }
    };
    
    return (
        <div className="min-h-screen bg-brand-light text-brand-text pb-20 md:pb-0">
            <main>
                {renderContent()}
            </main>
            {view !== View.MATCH_DETAIL && (
                 <BottomNav activeView={view} onNavigate={handleNavigation} userRole={currentUser.role} />
            )}
        </div>
    );
};

export default App;