import './App.css';
import './cssFiles/style.css'
import SpanishFlag from './images/Spanish_Flag.png'
import TaskFrase from './pages/TaskFrase';
import TextCompletion from './pages/TextCompletion';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function FlagImage() {
  return (
    <div className='b'>
      <img src={SpanishFlag} alt="flaga" style={{ width: '400px' }}/>
    </div>
  );
}

function Layout() {
  return (
    <>
      <div className="top-line"></div>
      
      
      {/* STRONY BĘDĄ WSTAWIANE TUTAJ */}
      <Outlet />

      <div className="bottom-line"></div>
    </>
  );
}

function MainPage() {
  const cars = [
    'Leccion 1 -> Praca z tekstem',
    'Leccion 2 -> Praca ze zdaniami',
    'Leccion 3 -> przydatne argumenty'
  ];

  return (
    <div className="center">
      <FlagImage />
      <h1 className='Map'>Apka Profe Beata</h1>
{/* 
      <ul className="text">
        {cars.map(car => <li key={car}>{car}</li>)}
      </ul> */}

      Parte I <br />
       EJERCICIOS DE CONTECTORES TEXTUALES  <br />
      Encuentra los conectores textuales para:  

      <ul>
      <Link to="/TaskFrase">Organizar el texto</Link>
      </ul>

      Parte II <br />
      EJERCICIOS DE REDACCIÓN PARA EL EXAMEN DE SELECTIVIDAD - "PROGRAMA AMPLIADO" (matura rozszerzona)
      1. Textos argumentativos <br />
      A. Textos argumentativos tipo "Ventajas y desventajas"
      <ul>
      <Link to="/TextCompletion">zad1 – Uporządkowanie zgodnie z kolejnością</Link>
      </ul>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wspólny */}
        <Route path="/" element={<Layout />}>
          
          {/* Strona główna */}
          <Route index element={<MainPage />} />

          {/* Zadanie 1*/}
          <Route path="TaskFrase" element={<TaskFrase />} />
          

           {/* Zadanie 2  */}
          <Route path="TextCompletion" element={<TextCompletion />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;