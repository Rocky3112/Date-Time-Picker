import Calendar from "./components/Calender";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <div className="bg-slate-50">
      <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;
