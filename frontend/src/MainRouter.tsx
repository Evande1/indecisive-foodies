import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
<<<<<<< HEAD
import SchedulerPage from "./pages/SchedulerPage";
=======
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
>>>>>>> c1103ec5380bcc4b8416d9445681d4ad145f5bda

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/form" element={ <FormPage/> }/>
            <Route path="" element={ <HomePage/> }/>
            <Route path="/admin" element={<AdminPage/>}/>
<<<<<<< HEAD
            <Route path="/scheduler" element={<SchedulerPage/>}/>
=======
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
>>>>>>> c1103ec5380bcc4b8416d9445681d4ad145f5bda
        </Routes>
    )
}

export default MainRouter