import React from "react";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

class HomePage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
                <Router>
                    <Routes>
                        <Route path="" element={<h2>Hello</h2>}/>
                        <Route path="/name" element={<h2>Oscar</h2>}/>
                    </Routes>
                </Router>
            );
    }
}

export default HomePage;