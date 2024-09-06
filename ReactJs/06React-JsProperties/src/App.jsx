
import { useState } from 'react'
import Card from "../src/Card"
import'./App.css'
import phone from './phone'

function createCard(phone){
  return(
    <Card 
      key={phone.key}
      id={phone.key}
      name = {phone.fName}
      src = {phone.img}
      price = {phone.price}
      alt = {phone.alt}
      details = {phone.info}
    />
  )
}

function App() {

  return (
    <>
      {/* <Card
        name ={phone[0].fName}
        src = {phone[0].img}
        price = {phone[0].price}
        alt ={phone[0].alt}
        details = {phone[0].info}
      />
      <Card
        name ={phone[1].fName}
        src = {phone[1].img}
        price = {phone[1].price}
        alt ={phone[1].alt}
        details = {phone[1].info}
      />

      <Card
        name ={phone[2].fName}
        src = {phone[2].img}
        price = {phone[2].price}
        alt ={phone[2].alt}
        details = {phone[2].info}
      /> */}
      {phone.map(createCard)}
    </>
  )
}

export default App
