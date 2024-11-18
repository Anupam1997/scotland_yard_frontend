"use client"
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function HostGame() {
const [host, setHost] = useState("")
const hostGame = async() => {
    try {
       const data =  await axios.post("http://localhost:8080/api/v1/game/host", {host})
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}
return  (<div>
    <TextField variant="outlined" onChange={(e) => setHost(e.target.value)} />
    <Button variant="contained" onClick={() => hostGame()}>host</Button>
</div>)
}