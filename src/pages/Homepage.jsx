import React, {useEffect, useState} from "react";
import axios from "axios"
import TodoList from "../components/TodoList";

const Homepage = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios
        .get("https://api.todoist.com/rest/v1/tasks",{
            headers: { Authorization: "Bearer 4c9d16ba3304cfd42eeddfbcb9dda0510e21c1f1"}
        })
        .then((res) => {
            const {results} = res.data
            if (results) {
                setTodos(results)
            }
        })
        .catch((err) => {
            alert(err.toString())
        })
        .finally (() => setLoading(false))
    }, [])

    return(
        <div><TodoList/></div>
    )
}

export default Homepage