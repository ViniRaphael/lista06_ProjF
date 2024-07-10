import React from 'react';
import Box from './Box';

// function Container(props) {
//     const {textos} = props
//     return (
//         <div className='container'>
//             {textos.map((texto, index) => (
//                 <Box key={index} texto={texto}/>
//             ))}
//         </div>
//     );
// }

function Container(props) {
    const { textos } = props;

    return (
        <div className='container'>
            {textos.map((texto, index) => (
                <Box key={index} texto={texto} />
            ))}
        </div>
    );
}

export default Container;