import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button'

function App() {


  return (
    <div className="App">

      <Button theme={{
        bg: "#007bff",
        color: "white",
        border: "none"
      }} onClick={() => {
        alert("Clicked Primary Button")
      }}>Primary Button</Button>

      <Button theme={{
        bg: "white",
        color: "black",
        border: "1px solid gray"
      }} onClick={() => {
        alert("Clicked Default Button")
      }} children={"Default Button"}/>

      <Button theme={{
        bg: "white",
        color: "black",
        border: "1px dashed gray"
      }}
       onClick={() => {
        alert("Dashed Button")
      }} children={"Dashed Button"}/>

      <Button theme={{
        bg: "white",
        color: "black",
        border: "none"
      }} 
      onClick={() => {
        alert("Text Button")
      }} children={"Text Button"}/>

      <Button theme={{
        bg: "white",
        color: "#007bff",
        border: "none"
      }}
      onClick={() => {
        alert("Link Button")
      }} children={"Link Button"}/>


    </div>
  )
}

export default App
