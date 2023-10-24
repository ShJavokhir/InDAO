import { Route, Routes } from "react-router-dom"
import Issue from "../src/pages/issue"
import IssueDegree from "./pages/issueDegree"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Issue/>} />
                <Route path="/issueDegree" element={<IssueDegree/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </>
    )
}

export default App