import React, { useState } from 'react';
import './App.css';
import AuthenticationComponent from './AuthenticationComponent';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import HomePage from './HomePage';
import SignUp from './SignUp';  // Imported SignUp component
import ProjectsPage from './ProjectsPage';  // Imported ProjectsPage component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'authentication', 'adminDashboard', 'userDashboard', 'signup', 'projects'

  const handleNavigation = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleLogin = (role) => {
    if (role === 'admin') {
      setCurrentPage('adminDashboard');
    } else if (role === 'user') {
      setCurrentPage('userDashboard');
    }
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
      {currentPage === 'authentication' && <AuthenticationComponent onLogin={handleLogin} />}
      {currentPage === 'adminDashboard' && <AdminDashboard />}
      {currentPage === 'userDashboard' && <UserDashboard />}
      {currentPage === 'signup' && <SignUp onNavigate={handleNavigation} />}
      {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigation} />}  {/* Added ProjectsPage rendering */}
    </div>
  );
}

export default App;
