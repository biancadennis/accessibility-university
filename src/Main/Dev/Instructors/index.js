import React from 'react'
import { peeps } from './info.js'

function Instructors({onSetActiveView}) {
  return (
    <React.Fragment>
      <h2>Instructors</h2>
      {peeps.map(peep => (
        <div className="instructor-card">
            <h2>{peep.name}</h2>
            <img src={peep.imageUrl}/>
            <p>{peep.occupation}</p>
            <p>{peep.description}</p>
            {peep.more && (
              <a href={peep.more.link}>View More</a>
            )}
        </div>
      ))}
    </React.Fragment>
  );
}

export default Instructors;
