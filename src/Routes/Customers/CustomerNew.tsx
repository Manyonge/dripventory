import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CustomersNew() { 
  const [instagramHandle, setInstagramHandle]= useState('')
  const [phoneNumber, setPhoneNumber]= useState('')
  const [shoeSize, setShoeSize]= useState('')
  const [hoodieSize, setHoodieSize]= useState('')
  
  const handleSubmit = async (e: any)=>{
    const url = 'http://localhost:3005/customers/create'
    e.preventDefault()
    const newRecord = {
      instagramHandle: instagramHandle,
      phoneNumber: phoneNumber,
      shoeSize: shoeSize,
      hoodieSize: hoodieSize,      
    }
    try{
      const response = fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newRecord)
      } )
      console.log(response)
    }
    catch (e) {
      console.log(e)
    }

  }


  return (
    <div>
      <form >
        <TextField
          placeholder="Instagram handle" 
          variant= "outlined"  
          size= "small" 
          required 
          onChange={(e)=>{setInstagramHandle(e.target.value)}}
         />
        <br/>
        <TextField 
          placeholder="phone"  
          variant= "outlined" 
          size= "small" 
          required
          onChange={(e)=>{setPhoneNumber(e.target.value)}}
        />
        <br/>
        <TextField 
          placeholder="shoe size" 
          variant= "outlined"  
          size= "small" 
          required 
          onChange={(e)=>{setShoeSize(e.target.value)}}
        />
        <br/>
        <TextField 
          placeholder="hoodie size" 
          variant= "outlined"
          size= "small" 
          required 
          onChange={(e)=>{setHoodieSize(e.target.value)}}
        />
        <br/>
        <Button 
          onClick= {(e)=>{handleSubmit(e)}}
          variant= "contained"
          endIcon= {<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
