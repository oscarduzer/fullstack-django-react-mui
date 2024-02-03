import React from "react";
import HomePage from "./Home/HomePage";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

class App extends React.Component
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
                        <Route path="" element={<HomePage />}/>
                        <Route path="/name" element={<h2>Oscar</h2>}/>
                    </Routes>
                </Router>
            );
    }
    
}

export default App;