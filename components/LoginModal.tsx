import React, { useState } from 'react';
import { UserRole } from '../types';
import { GoogleIcon } from './icons';

interface LoginModalProps {
  onLogin: (role: UserRole) => void;
  onGoogleLogin: () => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onGoogleLogin, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.PLAYER);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-brand-surface border border-gray-200 rounded-2xl p-8 w-full max-w-md m-4 shadow-2xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-primary">PlayMatch</h2>
            <p className="text-gray-500 mt-2">Sua próxima partida começa aqui.</p>
        </div>

        <div className="mt-8">
            <label className="text-sm font-medium text-brand-text">Selecione seu perfil</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <button
                    onClick={() => setSelectedRole(UserRole.PLAYER)}
                    className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 ${selectedRole === UserRole.PLAYER ? 'bg-brand-primary text-white ring-2 ring-brand-primary' : 'bg-brand-light text-brand-text hover:bg-gray-200'}`}
                >
                    Jogador
                </button>
                <button
                    onClick={() => setSelectedRole(UserRole.COURT_OWNER)}
                    className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 ${selectedRole === UserRole.COURT_OWNER ? 'bg-brand-primary text-white ring-2 ring-brand-primary' : 'bg-brand-light text-brand-text hover:bg-gray-200'}`}
                >
                    Dono de Quadra
                </button>
            </div>
        </div>

        <div className="mt-6">
            <label className="text-sm font-medium text-brand-text" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="voce@exemplo.com" className="w-full mt-2 p-3 bg-brand-light border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
        </div>
        <div className="mt-4">
            <label className="text-sm font-medium text-brand-text" htmlFor="password">Senha</label>
            <input id="password" type="password" placeholder="••••••••" className="w-full mt-2 p-3 bg-brand-light border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
        </div>
        
        <div className="mt-8">
             <button onClick={() => onLogin(selectedRole)} className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-200 hover:scale-105">
                Entrar
            </button>
        </div>

        <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OU</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button onClick={onGoogleLogin} className="w-full bg-white hover:bg-gray-50 text-brand-text font-semibold py-3 px-4 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center transition-all duration-200">
            <GoogleIcon className="w-5 h-5 mr-3" />
            Entrar com Google
        </button>


        <div className="text-center mt-6">
            <button onClick={onClose} className="text-sm text-gray-400 hover:text-gray-600">
                Cancelar
            </button>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;