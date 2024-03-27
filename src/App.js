import Calendar from "./components/Calender";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <div className="bg-slate-50">
      <Calendar></Calendar>
      <FaqSection></FaqSection>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
