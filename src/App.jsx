import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer';
import NoteList from './NoteList';

const notes = [
  {
    id:1,
    titulo : "Comprar jamon",
    contenido: "Mi mujer quiere que compre un jamon",
    color:"yellow",
    activada: true
  },
  {
    id:2,
    titulo : "Subir las notas en seneca",
    contenido: "Tengo que subir las notas en seneca antes de la evaluacion",
    color:"red",
    activada: false
  }
];

function App() {

  return (
    <>
      <h1>Notas App</h1>
      <NoteList notes={notes}/>
      <Footer/>
    </>
  )
}

export default App
