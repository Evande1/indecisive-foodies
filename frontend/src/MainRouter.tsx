import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import SchedulerPage from "./pages/SchedulerPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/form" element={ <FormPage/> }/>
            <Route path="" element={ <HomePage/> }/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/scheduler" element={<SchedulerPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
ggb        </Routes>
    )
}

export default MainRouter