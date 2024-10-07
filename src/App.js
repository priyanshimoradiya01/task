import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SimpleCounter from './component/SimpleCounter'
import ToggleVisibility from './component/ToggleVisibility';
import FormHandle from './component/FormHandle';
import LoginForm from './component/LoginForm';
import SwitchBetweenThemes from './component/SwitchBetweenThemes';
import LikeButtonCount from './component/LikeButtonCount';
import ToDoList from './component/ToDoList';
import CharacterCounter from './component/CharacterCounter';
import TimerComponent from './component/TimerComponent';
import ShoppingCartQuantity from './component/ShoppingCartQuantity';
import FetchDataFromAPI from './component/FetchingDatafromAPI';
import WindowWidthResizeListener from './component/WindowWidthResizeListener';
import TimerwithStartStop from './component/TimerwithStartStop';
import ThemeSwitcherwithLocalStorage from './component/ThemeSwitcherwithLocalStorage';
import SearchFilter from './component/SearchFilter';
import PollingDataAPI from './component/PollingDataAPI';
import CountdownTimer from './component/CountdownTimer';
import GeolocationTracker from './component/GeolocationTracker';
import LazyLoadImages from './component/LazyLoadImages';
import OnlineOfflineStatus from './component/OnlineOfflineStatus';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SimpleCounter />}/>
        <Route path='/toggleVisibility' element={<ToggleVisibility />}/>
        <Route path='/formHandle' element={<FormHandle />}/>
        <Route path='/loginForm' element={<LoginForm />}/> 
        <Route path='/switchBetweenThemes' element={<SwitchBetweenThemes />}/> 
        <Route path='/likeButtonCount' element={<LikeButtonCount />}/> 
        <Route path='/toDoList' element={<ToDoList />}/> 
        <Route path='/characterCounter' element={<CharacterCounter />}/> 
        <Route path='/timerComponent' element={<TimerComponent />}/> 
        <Route path='/shoppingCartQuantity' element={<ShoppingCartQuantity />}/> 
        <Route path='/fetchDataFromAPI' element={<FetchDataFromAPI />}/> 
        <Route path='/windowWidthResizeListener' element={<WindowWidthResizeListener />}/> 
        <Route path='/timerwithStartStop' element={<TimerwithStartStop />}/> 
        <Route path='/themeSwitcherwithLocalStorage' element={<ThemeSwitcherwithLocalStorage />}/> 
        <Route path='/searchFilter' element={<SearchFilter />}/> 
        <Route path='/pollingDataAPI' element={<PollingDataAPI />}/> 
        <Route path='/countdownTimer' element={<CountdownTimer />}/> 
        <Route path='/geolocationTracker' element={<GeolocationTracker />}/> 
        <Route path='/lazyLoadImages' element={<LazyLoadImages />}/> 
        <Route path='/onlineOfflineStatus' element={<OnlineOfflineStatus />}/> 
      </Routes>
    </div>
  )
}

export default App;
