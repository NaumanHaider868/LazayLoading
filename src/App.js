import {Suspense,lazy} from 'react'
// import Home from './componet/Home';
// import About from './componet/About';

const Home = lazy(()=>import('./componet/Home'))
const About= lazy(()=>import('./componet/About'))
function App() {
  return (
    <div className="App">
      <h1>Lazay Loading</h1>
      <Suspense fallback={<div>please wait Home is loading</div>}>
      <Home/>
      </Suspense>
      <Suspense fallback={<div>please wait About inn loading</div>}>
        <About/>
      </Suspense>
      
    </div>
  );
}

export default App;
