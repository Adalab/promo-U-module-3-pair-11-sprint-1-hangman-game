import { useState } from 'react';
// import viteLogo from '/vite.svg'
import '../styles/App.scss';

function App() {
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('katakroker');
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setuserLetters] = useState([]);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    console.log(wordLetters);

     return wordLetters   // todas las letras buscadas por el user
      .map((letter, index) => {
        const exist = userLetters.includes(letter.toLowerCase())
        return <li key={index} className="letter">
          {exist ? letter : ""}
        </li>;
      });
  };

  const renderErrorLetters = () => {
    const noExist = userLetters.filter((letter)=> word.includes(letter) == false)
    
    return noExist
    .map((letter, index) => {
      return <li key={index} className="letter">
        {letter}
      </li>;
    });
  }

  const handleClick = () => {
    setNumberOfErrors(++numberOfErrors);
    console.log(numberOfErrors);
  };

  const handleInput = (ev) => {
    console.log(ev.target.value);
    const letterValue = ev.target.value.toLowerCase();
    const regex = /[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]/;

    if (letterValue === '' || regex.test(letterValue)) {
      setLastLetter(letterValue);
    }
    if (letterValue !== '' && regex.test(letterValue)) {
      setuserLetters([letterValue, ...userLetters]);
    }
    /* OTRA OPCIÓN
      // const validLetters = 'abcdefghijklmnopqrstuvwxyzáéíóúüABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜ'

      if(validLetters.includes(letterValue)){
        setLastLetter(letterValue);
      } 
    */
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución: </h2>

              <ul className="letters">
                {renderSolutionLetters()}
                {/*      <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li> */}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
              {renderErrorLetters()}
                {/* <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li> */}
              </ul>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleInput}
                value={lastLetter}
              />
            </form>
          </section>
          <button onClick={handleClick} className="btn-visible">
            Incrementar
          </button>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
