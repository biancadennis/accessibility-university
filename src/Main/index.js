import { useState } from 'react'
import Dev from './Dev'
import Design from './Design'
import Qa from './Qa'

const views = {
  dev: Dev,
  design: Design,
  qa: Qa,
}
function Main({ activeView }) {
  const Comp = views[activeView] || 'dev'
  return (
    <div className="App">
      <Comp/>
    </div>
  );
}

export default Main;
