import React from 'react';
import {Route} from 'react-router-dom';
import Sidebar from '../../containers/Sidebar';
import DashboardPage from '../../pages/DashboardPage';
import OwnerInfoPage from '../../pages/OwnerInfoPage';
import StatisticsPage from '../../pages/StatisticsPage';
import ChooseSection from '../ChooseSection';
<<<<<<< HEAD
import NotFound from '../NotFound';
=======
>>>>>>> e12462f8c62f91789bea1e0d50084635959b9d34
import './index.scss';

export default () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Route exact path="/" component={ChooseSection}/>
      <Route path="/dashboard" component={DashboardPage}/>
      <Route path="/owner-info" component={OwnerInfoPage}/>
      <Route path="/statistics" component={StatisticsPage}/>
<<<<<<< HEAD
      <Route component={NotFound} />
=======
>>>>>>> e12462f8c62f91789bea1e0d50084635959b9d34
    </div>
  </div>
);