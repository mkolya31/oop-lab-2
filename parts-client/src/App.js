import React from 'react'

import Header from './components/app/header/Header'
import Body from './components/app/body/Body'
import { prepareAxios } from './utils/axios/config'
import './App.css'

function App() {

    prepareAxios()

    return (
        <div className="App">
            <Header title="Таблица деталей" />
            <Body/>
        </div>
    )
}

export default App
