import React, { useState } from 'react';
import './prueba.scss';
//Importamos React para el componente y useState para usarlo

export function Example() {
  //componente de ejemplo
  let [changeColor, setChangeColor] = useState(false);
  //declaramos el useState que tendra un valor default true
  //changeColor va a ser el valor que cambie, y setChageColor
  //va a ser para cambiar el valore de changeColor
  console.table(useState(changeColor));
  return (
    <div>
      <p className={changeColor ? 'red' : 'blue'}>Frase</p>
      <button onClick={() => setChangeColor(!changeColor)}>Click me</button>
    </div>
  );
}

// el className tenemos un ternario que decimos si es verdadero se le pondra una clase que se llame 'red' y si changeColor es falso se pondra de nombre de clase 'blue'

//Tenemos un boton que con el evento onClick vamos a cambiar el valor de changeColor con setChangeColor
//Lo que estoy haciendo es cambia el color de changeColor al contrario de changeColor, la exclamacion es el contrario de algo entonces como changeColor tiene un valor default de TRUE vamos a poner el contrario y entonces sera de color false, entonces se pondra de color blue, si le damos otra vez, como el valor ahora es false vamos a poner el contrario de false y sera true y asi constantemente
// https://discordapp.com/channels/@me/1070009781265383494/1076076598740123649
