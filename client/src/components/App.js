import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";

import Body from "./body";

function App() {
    return (
        <div>
            <Router history={history}>
                <Route path="/" component={Body} />
            </Router>
        </div>
    );
}

export default App;
