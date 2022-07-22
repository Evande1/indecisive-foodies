import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import SchedulerPage from "./pages/SchedulerPage";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/form" element={ <FormPage/> }/>
            <Route path="" element={ <HomePage/> }/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/scheduler" element={<SchedulerPage/>}/>
        </Routes>
    )
}

export default MainRouter