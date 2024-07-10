import React from 'react';
import Apresentacao from './Apresentacao';
//import Container from './Container';

function Section(props) {
    const { titulo, paragrafos, boxTextos } = props;

    return (
        <section className='section'>
            <Apresentacao titulo={titulo} paragrafos={paragrafos} boxTextos={boxTextos} />
        </section>
    );
}

// function Section() {
//     return (
//         <>
//         <Apresentacao/>
//         <Container/>
//         </>        
//     );
// }

export default Section;