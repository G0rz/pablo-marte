import {Outlet} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    return children ? children : <Outlet/>
};

export default ProtectedRoute;
