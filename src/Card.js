import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AirIcon from '@mui/icons-material/Air';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PetsIcon from '@mui/icons-material/Pets';
import FastForwardIcon from '@mui/icons-material/FastForward';
import HighlightIcon from '@mui/icons-material/Highlight';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
function Card(props) {
  const [cardYugi, setcardYugi] = useState({});

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${props.cardId}`)
      .then(response => response.json())
      .then(result => setcardYugi(result.data[0]))
      .catch(error => console.log(error));
  }, [props.cardId]);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image" style={{ float: 'left' }}>
          <img src={cardYugi.card_images && cardYugi.card_images[0].image_url} alt={cardYugi.name} />
        </div>
        <div className="card-info" style={{ display: 'inline-block', marginLeft: '20px'}}>
          <h2 style={{ margin:'0', padding:'0'}}>{cardYugi.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon style={{ color: 'gray', marginLeft: '1vh' }} />
              <h5 style={{ marginLeft: '5px' }}>Vistas: 1,358,012</h5>
              <SearchIcon style={{ color: 'gray', marginLeft: '1vh' }} />
              <h5 style={{ marginLeft: '5px' }}>Vistas en esta semana: 2451</h5>
          </div>
          <div className="card-grid"  style={{ with:'30px'}}   >
          
          <div className="card-item" >
          <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>
             <p style={{ fontWeight: 'bold', marginLeft: '2vh' }}>Tipo:</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <InsertDriveFileIcon style={{ marginRight: '5px' }}></InsertDriveFileIcon>
            <p>{cardYugi.type}</p>
          </div>
          </div>
            </div>

            <div className="card-item" >
              <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Atributo:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <AirIcon></AirIcon>;
                <p>{cardYugi.attribute}</p>
                </div>
              </div>
            </div>

            <div className="card-item"  >
              <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>ID:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <FingerprintIcon></FingerprintIcon>
                <p>{cardYugi.id}</p>
              </div>
              </div>
            </div>

            <div className="card-item" >
              <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>                                
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Nombre:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <PetsIcon></PetsIcon>
                <p>{cardYugi.name}</p>
              </div>
            </div>
            </div>


            <div className="card-item" >
              <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Attack:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <FastForwardIcon></FastForwardIcon>
                <p>{cardYugi.atk}</p>
              </div>
            </div>
            </div>

            <div className="card-item" >
              <div className="card" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Tipo de cuadro:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <HighlightIcon></HighlightIcon>
                <p>{cardYugi.frameType}</p>
              </div>
            </div>
            </div>

            <div className="card-item" >
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Defense:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <LocalPoliceIcon></LocalPoliceIcon>
                <p>{cardYugi.def}</p>
              </div>
              </div>
            </div>
            <div className="card-item" >
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Level/Rank:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <AutoGraphIcon></AutoGraphIcon>
                <p>{cardYugi.level ? cardYugi.level : cardYugi.rank}</p>
              </div>
              </div>
            </div>
            <div className="card-item" >
              <div className="card" style={{ flexDirection: 'column', display: 'flex', alignItems: 'center',  height:'100%', width:'100%', backgroundColor: '#b88000' }}>
                <p style={{ fontWeight: 'bold',marginLeft: '2vh' }}>Raza:</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <FlagCircleIcon></FlagCircleIcon>
                <p>{cardYugi.race}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
