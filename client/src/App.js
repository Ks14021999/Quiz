import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'
import UserDashboard from './components/dashBoard/UserDashboard'
import AdminDashboard from './components/dashBoard/AdminDashboard'

import StartPage from './components/quiz/Start'
import Quiz from './components/quiz/Quiz'
import LeaderBoard from './components/quiz/LeaderBoard'
import AddQuestion from './components/quiz/AddQuestion'
import AllQuestions from './components/quiz/AllQuestions'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={SignUp} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <PrivateRoute path="/startquiz" exact component={StartPage} />
        <PrivateRoute path="/quiz" exact component={Quiz} />
        <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
        <AdminRoute path="/addques" exact component={AddQuestion} />
        <AdminRoute path="/getques" exact component={AllQuestions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
