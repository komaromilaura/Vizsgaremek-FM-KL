import './bootstrap';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from "./React_Components/App.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const app = document.getElementById("app");

if(app) {
    const root = ReactDOM.createRoot(app);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
