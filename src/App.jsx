import './App.css'
import Footer from './Footer';
import NoteList from './NoteList';

const notes = [
  {
    id:1,
    titulo : "Comprar jamon",
    contenido: "Mi mujer quiere que compre un jamon",
    color:"brown",
    activada: true
  },
  {
    id:2,
    titulo : "Subir las notas en seneca",
    contenido: "Tengo que subir las notas en seneca antes de la evaluacion",
    color:"green",
    activada: false
  },
  {
    id:3,
    titulo : "Recoger los miguelitos del examen de Santi",
    contenido: "Tengo que comprar los miguelitos que puso Santi en el examen",
    color:"blue",
    activada: true
  },
  {
    id:4,
    titulo : "Android y PSP Navideño",
    contenido: "Se van a tener que realizar un poco de ejercicios de android y psp.",
    color:"violet",
    activada: true
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
