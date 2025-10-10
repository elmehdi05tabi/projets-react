import React from 'react'
import Wallpaper from './components/wallpaper/Wallpaper'
import SearchBar from './components/searchBar/SearchBar'
import './App.scss'
import Weather from './components/weather/Weather'
import store from './app/store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Wallpaper/>
        <SearchBar/>
        <Weather/>
      </Provider>
    </div>
  )
}
export default App
