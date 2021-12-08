import { Provider } from "react-redux";
import EmployeeList from "./EmployeeList";
import store from "./store";

export default  function App() {
    return(
        <Provider store = {store}>
           <EmployeeList />
        </Provider>
    )
}