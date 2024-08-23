import React from 'react';

// Definimos as propriedades que o componente `Card` aceitará.
// Aqui, `title` e `content` são obrigatórios, e `footer` é opcional.
interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

// Este é o componente `Card`.
// Ele recebe as propriedades definidas na interface `CardProps`.
const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    // Usamos as classes do Tailwind CSS para estilizar o container do card.
    // Aqui temos um fundo branco, bordas arredondadas, sombra e espaçamento interno.
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">

      {/* Renderizamos o título do card */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Renderizamos o conteúdo do card */}
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Se a propriedade `footer` foi fornecida, renderizamos o rodapé do card */}
      {footer && (
        <div className="pt-4 mt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm">{footer}</p>
        </div>
      )}
    </div>
  );
};

export { Card };
