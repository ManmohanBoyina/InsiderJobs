import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ApplyJob from './Pages/ApplyJob';
import Applications from './Pages/Applications';
import RecruiterLogin from './Components/RecruiterLogin'
import Dashboard from './Pages/Dashboard'
import AddJob from './Pages/AddJob'
import ManageJobs from './Pages/ManageJobs'
import ViewApplications from './Pages/ViewApplications'
import 'quill/dist/quill.snow.css'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
const App = () => {
  const { showRecruiterLogin } = useContext(AppContext)
  return (

    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/applyjob/:id' element={<ApplyJob />}></Route>
        <Route path='/applications' element={<Applications />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='add-job' element={<AddJob />}></Route>
        <Route path='manage-jobs' element={<ManageJobs />}></Route>        
        <Route path='view-applications' element={<ViewApplications />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
