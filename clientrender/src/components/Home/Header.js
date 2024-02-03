import React from "react";
import Button from '@mui/material/Button';
class Header extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return<>
        <Button variant="contained">Hello world</Button>
        </>
    }
}

export default Header