import React from 'react';

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 3.045 12.02 12.02 0 009-3.045 12.02 12.02 0 00-1.618-14.944z" />
  </svg>
);

export const UserCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ClipboardListIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

export const CalendarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
export const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export const HeroIllustration = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="volleyball-lines" d="M 0,-15 A 15 15 0 0 1 0,15" stroke="#3B82F6" strokeWidth="1.5" fill="none"/>
    </defs>

    {/* Floating Sports Equipment */}
    <g transform="translate(488 65)">
      <circle cx="0" cy="0" r="15" fill="#fff" stroke="#9CA3AF" strokeWidth="1"/>
      <use href="#volleyball-lines" transform="rotate(30)"/>
      <use href="#volleyball-lines" transform="rotate(90)"/>
      <use href="#volleyball-lines" transform="rotate(150)"/>
    </g>
    <g transform="translate(305 73)">
      <circle cx="0" cy="0" r="14" fill="#F97316"/>
      <path d="M -13,-5 Q 0 -1, 13 -5 M -13,5 Q 0 1, 13 5 M 0 -14 A 20 20 0 0 1 0 14 M 0 -14 A 20 20 0 0 0 0 14" stroke="#000" strokeWidth="1" fill="none"/>
    </g>
    <g transform="translate(560 80)">
      <circle cx="0" cy="0" r="9" fill="#fff" stroke="#D1D5DB"/>
      <path d="M-6-6q0 6 6 6m0-6q0 6-6 6" stroke="#EF4444" strokeWidth="1.2" fill="none" strokeDasharray="2 1.5"/>
    </g>
     <g transform="translate(590 100) rotate(-20)">
      <ellipse cx="0" cy="0" rx="8" ry="12" fill="none" stroke="#6B7280" strokeWidth="1.5"/>
      <rect x="-1" y="12" width="2" height="15" fill="#6B7280"/>
       <rect x="-4" y="27" width="8" height="3" fill="#6B7280"/>
    </g>
    <g transform="translate(230 110)">
      <circle cx="0" cy="0" r="8" fill="#A3E635"/>
      <path d="M-5 5 A 7 7 0 0 1 5 -5" stroke="#fff" strokeWidth="1.5" fill="none"/>
    </g>
     <circle cx="630" cy="130" r="5" fill="#F97316"/>
     <path d="M 440 85 l 5 5 m -5 0 l 5 -5" stroke="#3B82F6" strokeWidth="1.5" />
     <path d="M 455 82 l 5 5 m -5 0 l 5 -5" stroke="#3B82F6" strokeWidth="1.5" />

    {/* Person 1 (left) */}
    <g transform="translate(195, 170)">
      <path d="M-5 40 c-10 -10 -5 -30 5 -35 10 -5 20 5 20 15 0 10 -10 20 -25 20z" fill="#A16207"/>
      <path d="M0 0 C 15 -10, 20 15, 10 30 S -20 50, -10 30 C 0 10, -5 -5, 0 0" fill="#fff"/>
      <path d="M-10 30 L 15 30 L 10 100 L -15 100 z" fill="#F87171"/>
      <path d="M-15 100 L 0 100 L 5 150 L -10 150 z M 10 100 L 25 100 L 20 150 L 5 150 z" fill="#374151"/>
      <circle cx="-15" cy="40" r="8" fill="#A3E635"/>
    </g>

    {/* Person 2 (center left) */}
    <g transform="translate(320, 155)">
      <path d="M-5 40 c-10 -10 -5 -30 5 -35 10 -5 20 5 20 15 0 10 -10 20 -25 20z" fill="#4B322E"/>
      <path d="M0 0 C 15 -10, 20 15, 10 30 S -20 50, -10 30 C 0 10, -5 -5, 0 0" fill="#EF4444"/>
      <path d="M-10 30 L 15 30 L 10 100 L -15 100 z" fill="#1F2937"/>
      <path d="M-15 100 l 10 0 l 10 60 l -15 -5 z m 25 0 l 10 0 l -10 65 l -10 -5 z" fill="#374151"/>
    </g>
    
    {/* Soccer Ball */}
    <g transform="translate(355, 320)">
      <circle cx="0" cy="0" r="20" fill="white" stroke="black" strokeWidth="1"/>
      <path d="M0 -20 L 8.7 -5 L 5.3 11 L -5.3 11 L -8.7 -5 Z" fill="black" transform="scale(0.4)"/>
      <path d="M0 -20 L 8.7 -5 L 5.3 11 L -5.3 11 L -8.7 -5 Z" fill="black" transform="rotate(72) scale(0.4) translate(0, 35)"/>
      <path d="M0 -20 L 8.7 -5 L 5.3 11 L -5.3 11 L -8.7 -5 Z" fill="black" transform="rotate(-72) scale(0.4) translate(0, 35)"/>
    </g>

    {/* Person 3 (center right, jumping) */}
    <g transform="translate(460, 130)">
      <path d="M-5 40 c-10 -10 -5 -30 5 -35 10 -5 20 5 20 15 0 10 -10 20 -25 20z" fill="#78350F"/>
      <path d="M15 10 a 15 10 0 0 0 -30 0" fill="none"/>
      <path d="M-15 10 C 0 0, 30 0, 15 10 C 25 30, -5 30, -15 10" fill="#3B82F6"/>
      <path d="M-15 10 l -20 -20 l 10 -5 z m 30 0 l 20 -20 l -10 -5 z" fill="#FBBF24"/>
      <path d="M-10 30 L 15 30 L 10 100 L -15 100 z" fill="#1F2937"/>
      <path d="M-15 100 l 10 0 l 5 60 l -10 5 z m 25 0 l 10 0 l 0 65 l -10 -5 z" fill="#374151"/>
    </g>

    {/* Person 4 (right) */}
    <g transform="translate(590, 175)">
      <path d="M-5 40 c-10 -10 -5 -30 5 -35 10 -5 20 5 20 15 0 10 -10 20 -25 20z" fill="#4B322E"/>
      <path d="M0 0 C 15 -10, 20 15, 10 30 S -20 50, -10 30 C 0 10, -5 -5, 0 0" fill="#10B981"/>
      <path d="M-10 30 L 15 30 L 10 100 L -15 100 z" fill="#F87171"/>
      <path d="M-15 100 L 0 100 L 5 150 L -10 150 z M 10 100 L 25 100 L 20 150 L 5 150 z" fill="#374151"/>
      <g transform="translate(-10, 50)">
         <circle cx="0" cy="0" r="14" fill="#F97316"/>
         <path d="M -13,-5 Q 0 -1, 13 -5 M -13,5 Q 0 1, 13 5 M 0 -14 A 20 20 0 0 1 0 14 M 0 -14 A 20 20 0 0 0 0 14" stroke="#000" strokeWidth="1" fill="none"/>
      </g>
    </g>
  </svg>
);


export const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);