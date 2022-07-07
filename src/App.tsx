
import { AnimatePresence } from 'framer-motion';
import React, { Suspense ,useRef,useEffect} from 'react'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { Preloader } from './Components/Preloader/Preloader';
// const Home = React.lazy(()=> import('./Pages/Home'));

import Home from './Pages/Home';
const PageNotFound = React.lazy(()=> import('./Pages/PageNotFound'));

const MyRoutes = ()=>{
  return(
    <AnimatePresence>

    <Routes location={location}>
     <Route path='/'  element={
     <Suspense fallback={<Preloader />}>
       <Home />
       </Suspense>} />

     <Route path='*' element={
     <Suspense fallback={<Preloader />}>
       <PageNotFound />
       </Suspense>} />
    </Routes>
    </AnimatePresence>
  )
}

function App() {

  return (
      <Home />
  )
}

export default App
