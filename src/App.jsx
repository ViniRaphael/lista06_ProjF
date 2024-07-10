import React from 'react';
import Section from './components/Section';

function App() {
  const titApre = 'Acesso a Informação';
  const paraApre = [
      'Veja dados de transparência e governança.'
  ];

  const boxTextos = [
      'Texto 1 para Box',
      'Texto 2 para Box',
      'Texto 3 para Box',
      'texto 4 para box',
      'texto 5 para box'
  ];

  return (
      <div className='App'>
          <Section
              titulo={titApre}
              paragrafos={paraApre}
              boxTextos={boxTextos}
          />
      </div>
  );
}

export default App;