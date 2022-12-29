import React from 'react';

const List = ({player}) => {
  return (
    <>
{player.map((person) => {
        const { id, name, ppg, image} = person;
        return (
          <article key = {id} className="person">
            <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{ppg} points per game</p>
              </div>
          </article>
        );
      })}
    </>
      
    
  );
};

export default List;
