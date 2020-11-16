import { useState } from 'react'
import Expand from './expand.png'

import './index.css';

function Card({peep}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="instructor-card">
        <div className="instructor-photo-wrapper">
          <img src={peep.imageUrl}/>
        </div>
        <div className="instructor-info">
          <h2 className="instructor-name">{peep.name}</h2>
          <p className="instructor-occupation">{peep.occupation}</p>
          <p>{peep.description}</p>
          {peep.more && (
            <button className="instructor-expand-button" onClick={() => setOpen(!open)}>
              <img src={Expand}/>
            </button>
          )}
          {open && (
            <div className="more-link">
              <a
                className="instructor-card-link"
                href={peep.more.link}>
                YouTube
              </a>
            </div>
          )}
        </div>
    </div>
  );
}

export default Card;
