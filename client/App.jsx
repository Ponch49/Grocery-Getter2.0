import React from "react";
import {Button, FormLabel} from 'react-bootstrap';


const App = () => {
    return (
    <div className="container">
        <div className="header">
            <h1>Welcome to Grocery Getter</h1>
        </div>
        <FormLabel>Enter here</FormLabel>
        <input placeholder="Apples, Bananas, etc..."></input>
        <button type="button" className="btn btn-primary">Add item</button>
    </div>
    )
}


export default App;