import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";

import Mcq from "./question/Mcq.jsx";
import Login from "./login/LoginForm.jsx";

function App() {
    return (
        <div>
            <Router history={history}>
                <Route exact path="/" component={Mcq} />
                <Route exact path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App;
