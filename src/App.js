import {Route, Routes} from "react-router-dom";
import {Main, Login} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App;