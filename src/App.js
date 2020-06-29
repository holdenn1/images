import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Pictures} from "./components";
import Header from './components/Header/Header'
import './App.scss';

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
            <Pictures items={pictures}/>
            {/*<Pictures />*/}
        </div>
    );
}

export default App;
