import React, { useState } from 'react'
import { Translator } from './Translator';

export const Principal = () => {
    

    const [textoTraducido, setTextoTraducido] = useState("");
    const vocales = ["a", "e", "o", "u"];
    const vocalesMayusculas = ["A", "E", "I", "O", "U"];

    const traducir = ({target}) => {
      
      const inputValue = target.value;

        const  textTraduccion = inputValue.split('');
        textTraduccion.map((char)=>{
          if(vocales.includes(char)){
            textTraduccion.splice(textTraduccion.indexOf(char), 1, "i");
          }
          else if (vocalesMayusculas.includes(char)){
            textTraduccion.splice(textTraduccion.indexOf(char), 1, "I");
          }
        })
        setTextoTraducido(textTraduccion.join(''));
      }

  return (
   <>
    <textarea name="" id="" cols="30" rows="10" onChange={traducir}>

    </textarea>
    <Translator textoRecibido={textoTraducido}/>
   </>
  )
}
