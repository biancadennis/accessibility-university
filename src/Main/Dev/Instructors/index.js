import React from 'react'
import Card from './Card'
import { peeps } from './info.js'

import './index.css'

function Instructors({onSetActiveView}) {
  return (
    <React.Fragment>
      <h2 className="instructors-heading">Instructors</h2>
      <div className="instructors-wrapper">
        {peeps.map(peep => (
          <Card peep={peep}/>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Instructors;
