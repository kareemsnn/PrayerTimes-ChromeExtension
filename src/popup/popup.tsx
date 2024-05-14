import React, {useState, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import './popup.css'

function App() {
    const [date, setDate] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/get-date')
            .then(response => response.json())
            .then(data => setDate(data.date))
            .catch(error => console.error('Error fetching date:', error));
    }, []);

    const [fajr, setFajr] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/fajr')
            .then(response => response.json())
            .then(data => setFajr(data.fajrtime))
            .catch(error => console.error('Error fetching fajr:', error));
    }, []);

    const [duhur, setDuhur] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/duhur')
        .then(response => response.json())
        .then(data => setDuhur(data.duhur))
        .catch(error => console.error('Error fetching duhur:', error))

    }, [])

    const [asr, setAsr] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/asr')
        .then(response => response.json())
        .then(data => setAsr(data.asr))
        .catch(error => console.error('Error fetching asr:', error))

    }, [])

    const [maghrib, setMaghrib] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/maghrib')
        .then(response => response.json())
        .then(data => setMaghrib(data.maghrib))
        .catch(error => console.error('Error fetching maghrib:', error))

    }, [])

    const [isha, setIsha] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/isha')
        .then(response => response.json())
        .then(data => setIsha(data.isha))
        .catch(error => console.error('Error fetching isha:', error))

    }, [])


    return (
        <div>
            <h1>Prayer Times in Tampa</h1>
            <p>Current Date: {date}</p>
            <p>Fajr: {fajr}</p>
            <p>Duhur: {duhur}</p>
            <p>Asr: {asr}</p>
            <p>Maghrib: {maghrib}</p>
            <p>Isha: {isha}</p>
            
        </div>
    );
}


const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);