import React from 'react'
import ReactDOM from'react-dom/client'
import { CounterApp } from './CounterApp'
import { FristApp } from './FirstApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FristApp title='Hola, Jespejo' /> */}
        <CounterApp value={5} />
    </React.StrictMode>
)