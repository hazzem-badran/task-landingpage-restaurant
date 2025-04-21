import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8';
import Section9 from './Sections/Section9';
import Section10 from './Sections/Section10';
import Section11 from './Sections/Section11';
import Section12 from './Sections/Section12';
import ReviewsPage from './Components/Reviews/ReviewsSection';
import HomePage from './Pages/HomePage';
import Loader from './Components/Loader';
import { Suspense } from 'react';



function App() {
  return (
    <div className="App">
    <Suspense fallback={<Loader />}>
    <Loader />
      {/* <HomePage /> */}
    </Suspense>
    </div>
  );
}

export default App;
