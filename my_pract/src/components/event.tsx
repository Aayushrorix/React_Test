import React from 'react';

function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
        {children}
        </button>
    );
}

export default function Event() {
    return (
        <div>
        <Button onSmash={() => alert('Playing!')}>
            Play Movie
        </Button>
        <Button onSmash={() => alert('Uploading!')}>
            Upload Image
        </Button>
        </div>
    );
}



// export default function Event() {
//     function handleClick() {
//         alert('You clicked me!');
//     }

//     return (
//         <button onClick={handleClick}>
//         Click me
//         </button>
//     );
// }


function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
export function Event1() {
    return (
        <div>
        <AlertButton message="Playing!">
            Play Movie !
        </AlertButton>
        <AlertButton message="Uploading!">
            Upload Image !
        </AlertButton>
        </div>
    );
}