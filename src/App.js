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
      <h1 className='Map'>Manual Interactivo de Profe Bea</h1>

      Parte I <br />
       EJERCICIOS DE CONTECTORES TEXTUALES  <br />
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
     
      Parte II <br />
      EJERCICIOS DE REDACCIÓN PARA EL EXAMEN DE SELECTIVIDAD - "PROGRAMA AMPLIADO" (matura rozszerzona)
      1. Textos argumentativos <br />
      A. Textos argumentativos tipo "Ventajas y desventajas"
      <ul>
      <Link to="/TextCompletion">Ia. Los beneficios y los peligros de las redes sociales </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion2">Ib. Carrera Universitaria de los jóvenes </Link>
      </ul>
       <ul>
      <Link to="/TextCompletion3">Ic. Presenta ventajas y desventajas de la  educación en línea </Link>
      </ul>
      <ul>
      <Link to="/TextCompletion4">Id. Hay tantas ventajas como desventajas del consumo responsable</Link>
      </ul>
       <ul>
      <Link to="/TextCompletion5">1e. Las ventajas y desventajas del turismo masivo</Link>
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


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;