import Calendar from "./components/Calender";
import FaqSection from "./components/FaqSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <div className="bg-slate-50">
      <Calendar></Calendar>
      <FaqSection></FaqSection>
      </div>
    </div>
  );
}

export default App;
