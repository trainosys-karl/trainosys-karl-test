import './App.css';
import './components/Header/Header.css';
import HomePage from './components/HomePage/HomePage';
import StatusPage from './components/StatusPage/StatusPage';
import CalendarPage from './components/CalendarPage/CalendarPage';
import RootPage from './components/RootPage/RootPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/Header/Header';
import { useState } from 'react';
library.add(faCircle);
library.add(faHouse);
library.add(faBusinessTime);
library.add(faCalendar);


const MainApp: React.FC = () => {
  
  const[clickIcon,setClickIcon] = useState('')
  const navigate = useNavigate();


  
  return (
      <div className='grid-container'>
          <div className='hder'>
            <Header/>
          </div>

          <div className='mn'>
            <div 
            className={clickIcon === 'home' ? 'sub-mn-focus' : 'sub-mn'}
            onClick={() => (setClickIcon('home'), navigate('/home'))}
            style={{paddingBottom:'10px', paddingTop:'10px', cursor:'pointer'}} >
              <FontAwesomeIcon 
              icon={"house"}
              style={{height: '20px', marginRight:'20px'}}/>
              <span>Home</span>
            </div>

            <div 
            className={clickIcon === 'status' ? 'sub-mn-focus' : 'sub-mn'} 
            onClick={() => (setClickIcon('status'), navigate('/status'))}
            style={{paddingBottom:'10px', paddingTop:'10px', cursor:'pointer'}}>
              <FontAwesomeIcon
              icon={"business-time"}
              style={{height: '20px', marginRight:'20px'}}/>
              <span>Status</span>
            </div>

            <div 
            className={clickIcon === 'calendar' ? 'sub-mn-focus' : 'sub-mn'}
            onClick={() => (setClickIcon('calendar'), navigate('/calendar'))}
            style={{paddingBottom:'10px', paddingTop:'10px', cursor:'pointer'}}>
              <FontAwesomeIcon
              icon={"calendar"}
              style={{height: '20px', marginRight:'20px'}}/>
              <span>Calendar</span>
            </div>
          </div>

          <div className='dsply'>
            <Routes>
              <Route></Route>
              <Route path="/main" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/" element={<RootPage />} />
            </Routes>
          </div>

      </div>
  );
}

export default MainApp;
