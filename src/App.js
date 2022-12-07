import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ThemeDark from "./components/Rutas/ThemeDark";
import ThemeLight from "./components/Rutas/ThemeLight";
import ThemeCold from "./components/Rutas/ThemeCold";
import General from "./components/Rutas/General";
import ThemeWarm from "./components/Rutas/ThemeWarm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="themedark" element={<ThemeDark />} />       
          <Route path="themelight" element={<ThemeLight />} />
          <Route path="themewarm" element={<ThemeWarm />} />
          <Route path="themecold" element={<ThemeCold />} />
          <Route path="general" element={<General />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
