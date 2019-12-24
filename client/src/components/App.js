import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";

import Mcq from "./question/Mcq.jsx";

function App() {
    return (
        <div>
            <Router history={history}>
                <Route path="/" component={Mcq} />
            </Router>
        </div>
    );
}

export default App;
