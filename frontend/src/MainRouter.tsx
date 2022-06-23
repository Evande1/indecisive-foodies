import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/form" element={ <FormPage/> }/>
            <Route path="" element={ <HomePage/> }/>
            <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
    )
}

export default MainRouter