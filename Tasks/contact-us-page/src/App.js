import './App.css';
import { Help } from './Components/Help';
import { OurContacts } from './Components/OurContacts';
import { Matter } from './Components/Matter';
import { Cards } from './Components/Cards';
import { SendUsAMessage } from './Components/SendUsAMessage';
import { LowerSection } from './Components/LowerSection';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Contact/>
      <div style={{ height: "100vh", alignContent: "center" }}>
        <OurContacts />
        <Help />
        <Matter />
        <Cards />
      </div>
      <div>
        <SendUsAMessage />
      </div>
      <LowerSection/>
    </div>
  );
}

export default App;
