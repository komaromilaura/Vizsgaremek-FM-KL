import React, { Component } from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import { AuthProvider } from "../Context/AuthContext";

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
                    <AuthProvider>
                        <Dashboard />
                    </AuthProvider>                    
                </BrowserRouter>
            </ThemeProvider>            
        );
    }
}

export default DashboardManager;