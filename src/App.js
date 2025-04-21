
import Loader from './Components/Loader';
import { Suspense } from 'react';
import { lazy } from 'react';

const HomePage = lazy(() => import('./Pages/HomePage'));


function App() {
  return (
    <div className="App">
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
    </div>
  );
}

export default App;
