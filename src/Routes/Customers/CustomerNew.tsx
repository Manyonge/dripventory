import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Axios from 'axios'

type formValues = {
  instagramHandle: string,
  phoneNumber: string,
  shoeSize: number,
  hoodieSize: string 
}

export default function CustomersNew() { 
  const [submitted, setSubmitted] =useState(false)
  const [notSubmitted, setNotSubmitted] = useState(false)
  const { register, handleSubmit, formState: {errors} }= useForm<formValues>()
  const url = 'http://localhost:3005/customers/create'

  const onSubmit: SubmitHandler<formValues> = async (data) =>{
    try {
      const response: any = await Axios.post(url,data)
      if(response.status === 200){
        setSubmitted(true)
      }
    }catch(err: any) {
      setNotSubmitted(err.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <TextField
          label= "Instagram Handle"
          variant= "outlined"  
          size= "small" 
          {...register("instagramHandle", {required: true})}
          />
          {errors.instagramHandle && <span>Instagram handle is required</span>}
        <br/>
        <TextField 
          label= "Phone Number"
          variant= "outlined" 
          size= "small" 
          {...register("phoneNumber", {required: true})}
        />
        {errors.phoneNumber && <span>Phone Number is required</span>}
        <br/>
        <TextField 
          label= "Shoe Size"
          variant= "outlined"  
          size= "small" 
          {...register("shoeSize", {
            required: true,
            valueAsNumber: true})}
        />
        {errors.shoeSize && <span>shoeSize is required</span>}
        <br/>
        <TextField 
          variant= "outlined"
          size= "small" 
          {...register("hoodieSize", {required: true})}
        />
        {errors.hoodieSize && <span>hoodie size is required</span>}
        <br/>
        <Button 
          type="submit"
          color= "secondary"
          variant= "contained"
          endIcon= {<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        {submitted && <Navigate to= "/" replace= {true}/> }
        {notSubmitted && <div>{notSubmitted}</div>}
      </form>
    </div>
  )
}
