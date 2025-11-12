import React from 'react';
import { View, UserRole } from '../types';
import { MapPinIcon, ShieldCheckIcon, UserCircleIcon, ClipboardListIcon } from './icons';

interface BottomNavProps {
  activeView: View;
  onNavigate: (view: View) => void;
  userRole: UserRole;
}

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? 'text-brand-primary' : 'text-gray-400 hover:text-brand-primary'}`}
        >
            {icon}
            <span className="text-xs mt-1 font-medium">{label}</span>
        </button>
    )
};

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate, userRole }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-brand-surface border-t border-gray-200 flex justify-around items-center md:hidden z-40 shadow-[0_-1px_4px_rgba(0,0,0,0.05)]">
        <NavItem 
            icon={<MapPinIcon className="w-6 h-6" />}
            label="Mapa"
            isActive={activeView === View.MAP}
            onClick={() => onNavigate(View.MAP)}
        />
        <NavItem 
            icon={<ShieldCheckIcon className="w-6 h-6" />}
            label="Meus Jogos"
            isActive={activeView === View.MY_GAMES}
            onClick={() => onNavigate(View.MY_GAMES)}
        />
        {userRole === UserRole.COURT_OWNER && (
             <NavItem 
                icon={<ClipboardListIcon className="w-6 h-6" />}
                label="Minhas Quadras"
                isActive={activeView === View.COURTS}
                onClick={() => onNavigate(View.COURTS)}
            />
        )}
        <NavItem 
            icon={<UserCircleIcon className="w-6 h-6" />}
            label="Perfil"
            isActive={activeView === View.PROFILE}
            onClick={() => onNavigate(View.PROFILE)}
        />
    </div>
  );
};

export default BottomNav;