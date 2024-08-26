import React from 'react';

interface CardProps {
  avatarUrl: string;
  name: string;
  isUserOnline: boolean;
  characterLink: string;
}

const Card: React.FC<CardProps> = ({ avatarUrl, name, isUserOnline, characterLink }) => {
  return (
    <a
      href={characterLink} // Define o link para redirecionamento
      target='_blank' // Abre o link em uma nova aba
      className="card flex items-center space-x-4 bg-stone-300 rounded-lg p-4 transition transform hover:scale-105 hover:transition-delay-100 cursor-pointer"
    >
      <div
        className={`h-24 w-24 ring-2 rounded-full overflow-hidden ${isUserOnline ? "ring-green-500" : "ring-red-700"} p-1`}
      >
        <img src={avatarUrl} alt={name} className='h-full w-full object-cover rounded-full' />
      </div>
      <div>
        <h2 className='text-2xl font-bold'>{name}</h2>
      </div>
    </a>
  );
};

export { Card };
