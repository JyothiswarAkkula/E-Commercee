
import React from 'react'
import './App.css'
import Landingpage from './stores/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'

import Mobilepage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import BooksPage from './stores/pages/BooksPage'
import ComputersPage from './stores/pages/ComputersPage'
import FridgePag from './stores/pages/FridgePag'
import FurniturePag from './stores/pages/FurniturePag'
import KitchenPag from './stores/pages/KitchenPag'
import MenPag from './stores/pages/MenPag'
import SpeakerPag from './stores/pages/SpeakerPag'
import TvPag from './stores/pages/TvPag'
import WatchPag from './stores/pages/WatchPag'
import WomanPag from './stores/pages/WomanPag'

import MobileSingle from './singlepage/MobileSingle'
import SpeakerSingle from './singlepage/SpeakerSingle'
import BooksSingle from './singlepage/BooksSingle'
import AcSingle from './singlepage/AcSingle'
import FurnitureSingle from './singlepage/FurnitureSingle'
import KitchenSingle from './singlepage/KitchenSingle'
import MenSingle from './singlepage/MenSingle'
import WatchSingle from './singlepage/WatchSingle'
import WomanSingle from './singlepage/WomanSingle'
import FridgeSingle from './singlepage/FridgeSingle'
import ComputersSingle from './singlepage/ComputersSingle'
import TvSingle from './singlepage/TvSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/mobiles' element={<Mobilepage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/computer' element={<ComputersPage />} />
        <Route path='/fridge' element={<FridgePag />} />
        <Route path='/furniture' element={<FurniturePag />} />
        <Route path='/men' element={<MenPag />} />
        <Route path='/kitchen' element={<KitchenPag />} />
        <Route path='/speaker' element={<SpeakerPag />} />
        <Route path='/tv' element={<TvPag />} />
        <Route path='/watch' element={<WatchPag />} />
        <Route path='/woman' element={<WomanPag />} />

        <Route path='/mobiles/:id' c element={<MobileSingle />} />
        <Route path='/speaker/:id' element={<SpeakerSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/books/:id' element={<BooksSingle />} />
        <Route path='/computers/:id' element={<ComputersSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
      </Routes>


    </div>
  )
}

export default App
