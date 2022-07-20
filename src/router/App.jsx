import { useState, useEffect, useMemo } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import axios from "axios"
import Homepage from "../pages/Homepage"
import DetailTodo from "../pages/DetailTodo"

axios.defaults.baseURL = "https://api.todoist.com/rest/v1/tasks"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/detail" element={<DetailTodo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App