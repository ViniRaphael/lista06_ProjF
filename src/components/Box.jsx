import React from 'react';

function Box(props) {
    return (
        <div className='box'>
            {props.texto && <p className='boxInfo'>{props.texto}</p>}
        </div>
    );
}

// function Box(props) {
//     return (
//         <>
//         <div className='box'>
//             <p className='boxInfo'>{props.texto}</p>
//         </div>
//         </>
//     );
// }

export default Box;