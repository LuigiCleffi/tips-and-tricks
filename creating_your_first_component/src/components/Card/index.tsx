import React from 'react';
/**
 * 
 * Tarefa: 
 * 1. Tipar as props do componente Card
 * 2. Adicionar um arquivo de estilo para o componente Card e importá-lo
 * 3. Estilizar o componente Card de acordo com o arquivo de estilo (Use sua criatividade)
 */
function Card(props) {
  return (
    <div className="card">
      <img src={props.avatarUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export { Card };
