import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/*<Route path="audio-classes" element={<AudioClasses />} />*/}
        {/*<Route path="yoga-poses" element={<YogaPoses />} />*/}
        {/*<Route path="about" element={<About />} />*/}
        {/*<Route path="sign-in" element={<SingInPopup />} />*/}
        {/*<Route path="sign-up" element={<SingUpPopup />} />*/}
        {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
