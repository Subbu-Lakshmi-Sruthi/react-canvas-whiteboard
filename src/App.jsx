import { Fragment, useEffect } from 'react'
import { AppHeader } from './components/AppHeader'

import './styles/global.scss';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    window.addEventListener('resize', resizeCanvas, false);
          
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
  }, []);
  return (
    <Fragment>
      <AppHeader/>
      <canvas id='canvas'></canvas>
    </Fragment>
  )
}

export default App
