import React from 'react'
import ReactDOM from'react-dom/client'
import { FristApp } from './FirstApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FristApp title="Hola, Jespejo" subTitle={1234} />
    </React.StrictMode>
)