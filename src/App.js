import React from 'react';
import Split from './composition/Split'
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './drills/HelloWorld';
import Bomb from './drills/Bomb';
import Roulette from './drills/RouletteGun'


  // after
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)


function App() {
  return (
    <main className='App'>

      <Split className='left' flexBasis={4}>
      <Roulette />
      <Counter count={123} step={3}/>
      {firstTooltip}
      This is the content for the left `Split`. <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?</h1>

      <Tooltip message='one more tooltip message'>
          Necessitatibus?
      </Tooltip>
      </Split>
      <Split className='right'>
      <HelloWorld />
      <Bomb />
      {secondTooltip}
      </Split>

    </main>
  );
}

export default App;
