import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ThemeDark from "./components/Rutas/ThemeDark";
import ThemeLight from "./components/Rutas/ThemeLight";
import ThemeCold from "./components/Rutas/ThemeCold";
import General from "./components/Rutas/General";
import ThemeWarm from "./components/Rutas/ThemeWarm";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut, user}) {
  
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home signOut={signOut} user={user}/>} />
          <Route path="themedark" element={<ThemeDark signOut={signOut} user={user} />} />       
          <Route path="themelight" element={<ThemeLight signOut={signOut} user={user}/>} />
          <Route path="themewarm" element={<ThemeWarm signOut={signOut} user={user}/>} />
          <Route path="themecold" element={<ThemeCold signOut={signOut} user={user}/>} />
          <Route path="general" element={<General signOut={signOut} user={user}/>} />
        </Routes>
      </BrowserRouter>  
      
    </>
  );
}
export default withAuthenticator(App);
