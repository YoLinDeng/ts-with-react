import React from 'react';
import logo from './logo.svg';
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import useUrlLoader from './hooks/useUrlLoader'
import './App.css';

// interface IShowResult {
//   message: string;
//   status: string;
// }

function App() {
  // const positions = useMousePosition()
  // const [data, loading] = useUrlLoader('http://dog.ceo/api/breeds/image/random')
  // const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* { loading ? '🐶加载中' : <img src={dogResult && dogResult.message}/>} */}
        {/* <p>X: {positions.x}, Y: {positions.y}</p> */}
        <LikeButton />
        {/* <MouseTracker /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
