import React from 'react';
import {Route} from 'react-router-dom';
import Sidebar from '../../containers/Sidebar';
import DashboardPage from '../../pages/DashboardPage';
import OwnerInfoPage from '../../pages/OwnerInfoPage';
import StatisticsPage from '../../pages/StatisticsPage';
import ChooseSection from '../ChooseSection';
import NotFound from '../NotFound';
import './index.scss';

export default () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Route exact path="/" component={ChooseSection}/>
      <Route path="/dashboard" component={DashboardPage}/>
      <Route path="/owner-info" component={OwnerInfoPage}/>
      <Route path="/statistics" component={StatisticsPage}/>
      <Route component={NotFound} />
    </div>
  </div>
);