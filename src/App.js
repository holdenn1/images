import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Header, Pictures} from "./components";
import './App.scss';
import Test from "./components/Pictures/Test";


function App() {

    const [pictures, setPictures] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPictures(data.pictures)
        })
    }, [])


    return (
        <div>
            <Header/>
           {/* <Pictures items={pictures}/>*/}
            <Test/>
        </div>
    );
}

export default App;
