import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

class DashboardManager extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(            
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs"
            >
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </ThemeProvider>            
        );
    }
}

export default DashboardManager;