import './index.css';
import { MainPge } from './Components/MainPage';
import { AboutUs } from './Components/AboutUs';
import { Speakers } from './Components/Speakers';
import { CardsInfo } from './Components/CardsInfo';

import { Contact } from './Components/Contact';

function App() {
  return (
    <>
    <MainPge/>
    <AboutUs/>
    <Speakers/>
    <CardsInfo/>

    <Contact/>
    </>
  );
}

export default App;
