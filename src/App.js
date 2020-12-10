import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss';
import Curso from './Curso.jsx';

const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="Banner" src="https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">I'm here</p>
            <p>La mejor noche de tu vida</p>
            <a href="https://www.google.com" className="button">Click aquí</a>
          </div>
        </div>
      </div>
    </div>
    <div id="cards" className="ed-grid m-grid-3">
      <Curso
        title="Programación orientada a objetos con Go"
        image="https://ux.ed.team/img/curso-portada.png"
        price="20 USD"
      />
      <Curso
        title="React desde Cero 2020"
        image="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
        price="20 USD"
      />
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
  </Fragment>
)

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Habla ps causha
        </a>
      </header>
    </div>
  );
}*/

export default App;
