import React from 'react';
import Container from './Container';

function Apresentacao(props) {
    const { titulo, paragrafos, boxTextos } = props;

    return (
        <section className='apresentacao'>
            <h2>{titulo}</h2>
            {paragrafos.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
            ))}
            <Container textos={boxTextos} />
        </section>
    );
}

export default Apresentacao;

// function Apresentacao() {
//     return (
//         <>
//         <div className='apresentacao'>
//         <h2>Acesso a Informação</h2>
//         <p>Veja dados de transparencia e governança</p>
//         </div>
//         </>
//     );
// }

// export default Apresentacao;