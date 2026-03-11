import './App.css';
import './cssFiles/style.css'
import SpanishFlag from './images/Spanish_Flag.png'
import Description from './pages/DescriptionFiles/Description';
import TaskFrase from './pages/TaskFrase';
import TaskFrase2 from './pages/TaskFrase2';
import TaskFrase3 from './pages/TaskFrase3';
import TaskFrase4 from './pages/TaskFrase4';
import TaskFrase5 from './pages/TaskFrase5';
import TaskFrase6 from './pages/TaskFrase6';
import TaskFrase7 from './pages/TaskFrase7';
import TaskFrase8 from './pages/TaskFrase8';
import TaskFrase9 from './pages/TaskFrase9';
import TaskFrase10 from './pages/TaskFrase10';
import TextCompletion from './pages/TextCompletion';
import TextCompletion2 from './pages/TextCompletion2';
import TextCompletion3 from './pages/TextCompletion3';
import TextCompletion4 from './pages/TextCompletion4';
import TextCompletion5 from './pages/TextCompletion5';
import TextCompletion6 from './pages/TextCompletion6';
import TextCompletion6conector from './pages/TextCompletion6conctor';
import TextCompletion7conector from './pages/TextCompletion7conector';
import TextCompletion8conector from './pages/TextCompletion8conector';
import TextCompletion9conector from './pages/TextCompletion9conector';
import TextCompletion10conector from './pages/TextCompletion10conector';

import TextCompletion7 from './pages/TextCompletion7';
import TextCompletion8 from './pages/TextCompletion8';
import TextCompletion9 from './pages/TextCompletion9';
import TextCompletion10 from './pages/TextCompletion10';

import CartaFormal1 from './pages/CartaFormal1';
import CartaFormal2 from './pages/CartaFormal2';
import CartaFormal3 from './pages/CartaFormal3';
import CartaFormal4 from './pages/CartaFormal4';
import CartaFormal5 from './pages/CartaFormal5';

import Articulo1 from './pages/Articulo1';
import Articulo2 from './pages/Articulo2';
import Articulo3 from './pages/Articulo3';
import Articulo4 from './pages/Articulo4';
import Articulo5 from './pages/Articulo5';







//Importuje  odpowiednie biblioteki pozwalające aplikacji na posiadanie wielu widoków
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

//Funkcja wyświetlająca Hiszpaństką flagę
function FlagImage() {
  return (
    <div className='b'>
      <img src={SpanishFlag} alt="flaga" style={{ width: '400px' }}/>
    </div>
  );
}

//Części strony internetowej, które są widoczne w kazdym widoku (Górny pasek NavBar oraz dolny pasek strony)
function Layout() {
    const navigate = useNavigate();

  return (
    <>
      <div className="top-line">

        <div className='topLineNav'>
        <img src={SpanishFlag} alt="flaga" style={{ width: '100px' }}/>

            <button onClick={() => navigate("/")}>Pagina Principal</button>
        
        <button onClick={() => navigate("/Description")}>Sobre Profe Bea</button>
       
       </div>
      </div>
      <Outlet />

      <div className="bottom-line"></div>
    </>
  );
}

function MainPage() {
return (
    <div className="center">
      <FlagImage />
      <h1 className='Map'>Manual Interactivo de la Profe Bea</h1>

      <h2>Parte I</h2> 
       EJERCICIOS DE CONECTORES TEXTUALES  <br />
      Encuentra los conectores textuales para:  

      <ul>
      <Link to="/TaskFrase">Organizar el texto</Link>
      </ul>
       <ul>
      <Link to="/TaskFrase2">Anadir Ideas</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase3">Indicar Causa</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase4">Afirmar</Link>
      </ul>
       <ul>
      <Link to="/TaskFrase5">Introducir una opinion</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase6">Introducir un tema</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase7">Oponer Ideas</Link>
      </ul>
       <ul>
      <Link to="/TaskFrase8">Indicar concequencia</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase9">Expresar duda o probabilidad</Link>
      </ul>
      <ul>
      <Link to="/TaskFrase10">Explicar y ejemplificar</Link>
      </ul>
     
     <h2>Parte II</h2>
      EJERCICIOS DE REDACCIÓN PARA EL EXAMEN DE SELECTIVIDAD - "PROGRAMA AMPLIADO" (matura rozszerzona) <br />
      II.1 Textos argumentativos <br />
      <br />
      A. Tipo "Ventajas y desventajas"
      <ul>
      <Link to="/TextCompletion">A.1 Los beneficios y los peligros de las redes sociales </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion2">A.2 Carrera Universitaria de los jóvenes </Link>
      </ul>
       <ul>
      <Link to="/TextCompletion3">A.3 Presenta ventajas y desventajas de la  educación online </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion4">A.4 Hay tantas ventajas como desventajas del consumo responsable</Link>
      </ul>
       <ul>
      <Link to="/TextCompletion5">A.5 Las ventajas y desventajas del turismo masivo</Link>
      </ul>
      <br />
      B. Tipo "Opinión"  
      <ul>
      <Link to="/TextCompletion6">B.1 ¿Vale la pena ir a la universidad? </Link>
      </ul>
      
      
      <ul>
      <Link to="/TextCompletion7">B.2 Cada vez más personas abandonan la idea de comprar una vivienda para optar por el alquiler. ¿Es una buena idea?? </Link>
      </ul>
      
      <ul>
      <Link to="/TextCompletion8">B.3 Algunas personas opinan que quienes viven en bloques de pisos no deberían tener perros </Link>
      </ul>
      
      <ul>
      <Link to="/TextCompletion9">B.4 Cada vez más personas exigen el endurecimiento de las penas para los delincuentes juveniles </Link>
      </ul>
      
      <ul>
      <Link to="/TextCompletion10">B.5 ¿Es una buena idea regalar un salto en paracaídas? </Link>
      </ul>
      _______________________________________________________________________
      <ul>
      <Link to="/TextCompletion6conector">B.1. CONECTOR --- ¿Vale la pena ir a la universidad?  </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion7conector">B.2. CONECTOR --- Cada vez más personas abandonan la idea de comprar una vivienda para optar por el alquiler. ¿Es una buena idea?? </Link>
      </ul>
<ul>
      <Link to="/TextCompletion8conector">B.3. CONECTOR --- Algunas personas opinan que quienes viven en bloques de pisos no deberían tener perros </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion9conector">B.4. CONECTOR --- Cada vez más personas exigen el endurecimiento de las penas para los delincuentes juveniles </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion10conector">B.5. CONECTOR --- ¿Es una buena idea regalar un salto en paracaídas? </Link>
      </ul>
      <br/>
      II.2 Cartas Formales
<ul>
      <Link to="/CartaFormal1">II.2.1 A la atención de la Dirección del Centro Cultural del Barrio </Link>
      </ul>
      <ul>
      <Link to="/CartaFormal2">II.2.2 A la atención del Sr. Alcalde </Link>
      </ul>
      <ul>
      <Link to="/CartaFormal3">II.2.3 A la atención del Sr. Alcalde de la Ciudad </Link>
      </ul>
      <ul>
      <Link to="/CartaFormal4">II.2.4 A la redacción del periódico escolar </Link>
      </ul>
      <ul>
      <Link to="/CartaFormal5">II.2.5 A la redacción del periódico </Link>
      </ul>
      <br/>
      II.3 Articulos
      <ul>
      <Link to="/Articulo1">II.3.1 Cuando el voluntariado se convierte en una verdadera lección de vida </Link>
      </ul>
      <ul>
      <Link to="/Articulo2">II.3.2 ¿Adicción o simple mala educación? </Link>
      </ul>
      <ul>
      <Link to="/Articulo3">II.3.3 Cuando el agua lo cambia todo: la fuerza de una comunidad unida </Link>
      </ul>
      <ul>
      <Link to="/Articulo4">II.3.4 Vacaciones desconectadas: la nueva forma de escapar del mundo </Link>
      </ul>
      <ul>
      <Link to="/Articulo5">II.3.5 ¿Libertad o distracción? Así se vivió la protesta contra el veto a los móviles </Link>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout wspólny */}
        <Route path="/" element={<Layout />}>
          
          {/* strona główna */}
          <Route index element={<MainPage />} />

          {/* Strona About */}
    <Route path="Description" element={<Description />} />

          {/* Ćwiczenia typu TaksFrase*/}
          <Route path="TaskFrase" element={<TaskFrase />} />
          <Route path="TaskFrase2" element={<TaskFrase2 />} />
          <Route path="TaskFrase3" element={<TaskFrase3 />} />
           <Route path="TaskFrase4" element={<TaskFrase4 />} />
          <Route path="TaskFrase5" element={<TaskFrase5 />} />
          <Route path="TaskFrase6" element={<TaskFrase6 />} />
           <Route path="TaskFrase7" element={<TaskFrase7 />} />
          <Route path="TaskFrase8" element={<TaskFrase8 />} />
          <Route path="TaskFrase9" element={<TaskFrase9 />} />
           <Route path="TaskFrase10" element={<TaskFrase10 />} />
          

           {/* Ćwiczenia typu - Uzupełnianie tekstu */}
          <Route path="TextCompletion" element={<TextCompletion />} />
          
          <Route path="TextCompletion2" element={<TextCompletion2 />} />
          <Route path="TextCompletion3" element={<TextCompletion3 />} />
          <Route path="TextCompletion4" element={<TextCompletion4 />} />
          <Route path="TextCompletion5" element={<TextCompletion5 />} />


          <Route path="TextCompletion6" element={<TextCompletion6 />} />
          <Route path="TextCompletion7" element={<TextCompletion7 />} />
          <Route path="TextCompletion8" element={<TextCompletion8 />} />
          <Route path="TextCompletion9" element={<TextCompletion9 />} />
          <Route path="TextCompletion10" element={<TextCompletion10 />} />
          <Route path="TextCompletion6conector" element={<TextCompletion6conector />} />
          <Route path="TextCompletion7conector" element={<TextCompletion7conector />} />
          <Route path="TextCompletion8conector" element={<TextCompletion8conector />} />
          <Route path="TextCompletion9conector" element={<TextCompletion9conector />} />
          <Route path="TextCompletion10conector" element={<TextCompletion10conector />} />


          <Route path="CartaFormal1" element={<CartaFormal1 />} />
          <Route path="CartaFormal2" element={<CartaFormal2 />} />
          <Route path="CartaFormal3" element={<CartaFormal3 />} />
          <Route path="CartaFormal4" element={<CartaFormal4 />} />
          <Route path="CartaFormal5" element={<CartaFormal5 />} />

          <Route path="Articulo1" element={<Articulo1 />} />
          <Route path="Articulo2" element={<Articulo2 />} />
          <Route path="Articulo3" element={<Articulo3 />} />
          <Route path="Articulo4" element={<Articulo4 />} />
          <Route path="Articulo5" element={<Articulo5 />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;