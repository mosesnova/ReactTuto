import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';

import { Layout } from './components/Layout';
import './custom.css';
import { FetchEmployee } from './components/Employee/FetchEmployee';
//eslint-disable-next-line
import { FetchCounter } from './components/Employee/FetchCounter';


export default class App extends Component {
  static displayName = App.name;
    
    render() {
       
        return (

      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
                <Route path='/FetchEmployee' element={<FetchEmployee />} />
                <Route path='/FetchCounter' element={<FetchCounter />} />
               
                </Routes>
                
      </Layout>

    );
  }
}
