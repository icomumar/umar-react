import { Provider } from "react-redux";
import EmployeeList from "./EmployeeList";
import store from "./store";

export default  function AppThunk() {
    return(
        <Provider store = {store}>
           <EmployeeList />
        </Provider>
    )
}