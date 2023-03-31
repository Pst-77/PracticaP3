import React, { useState, useEffect } from "react";

function Cards(props) {
  const [cardYoGi, setcardYoGi] = useState({});
  const [setName, setSetName] = useState("");

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${props.cardId}`)
      .then((response) => response.json())
      .then((result) => {
        setcardYoGi(result.data[0]);
        setSetName(result.data[0].card_sets[0].set_name); // assuming you want to display the first set name only
      })
      .catch((error) => console.log(error));
  }, [props.cardId]);

  return (
    

   

      <div className="cards">
         <div className="card-items" style={{backgroundColor: '#e6fcd9', width:'80%', margin: '0 auto' }}>
              <div className="card">
                <h2>Descripción de Tarjeta:</h2>
                <p>{cardYoGi.desc}</p>
              </div>
            </div>
        

          {cardYoGi.card_sets && (
            <div className="card-gri">
              {cardYoGi.card_sets.map((set) => (
                <div className="card-items" key={set.set_code} style={{backgroundColor: '#e6fcd9', width:'80%', margin: '0 auto' }}>
                    <h2>Juego de cartas:</h2>                  
                    <p>* {set.set_name}: </p>
                    <p>  {set.set_rarity}</p>
                  
                </div>
              ))}
            </div>
          )}
      </div>
  
  );
}

export default Cards;
