import { Route, Routes } from "react-router-dom";
import './components/LogIn/LogIn.css';
import './App.css';
import LogInPage from "./components/LogIn/LogInPage";
import MainApp from "./MainApp";
import { useState } from 'react';
import './components/HomePage/HomePage.css'
import './components/StatusPage/StatusPage.css'
import './components/CalendarPage/CalendarPage.css'


const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <Routes>
        {isLoggedIn ? (
        <Route path='/*' element={<MainApp />} />
      ) : (
        <Route
          path='/'
          element={<LogInPage setIsLoggedIn={setIsLoggedIn} />}
        />
      )}
    </Routes>
    )
}

export default App;