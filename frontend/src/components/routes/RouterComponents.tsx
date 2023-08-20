import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomeComponents from '../pages/home/HomeComponents';

function RouterComponents() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomeComponents/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default RouterComponents