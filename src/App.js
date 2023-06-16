import "./App.css";
import MainDash from "./Components/MainDash/MainDash";
import Rightslide from "./Components/RightSlide/Rightslide";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
 
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <Rightslide/>
       
      </div>
    </div>
  );
}

export default App;
