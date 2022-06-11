import { Box, Button, TextField } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Axios  from 'axios'
import { error } from 'console'
import { Navigate } from 'react-router-dom'

type FormValues = {
  transactionType: string,
  amount: number,
  date: string,
}

export default function CreditsNew() {
  const url = 'http://localhost:3005/credits/create'
  const [submitted,setSubmitted] = useState(false)
  const [notSubmitted,setNotSubmitted] = useState(false)  
  const { register, handleSubmit, formState: {errors} } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async (data) =>{
    try{
      const response= await Axios.post(url, data)
      if(response.status=== 200){
        setSubmitted(true)
      }else{
        setNotSubmitted(true)
      }
    }catch(err){
      setNotSubmitted(true)
    }
  }
  return (
    <div>

      <form onSubmit= {handleSubmit(onSubmit)}>
        <TextField
          variant= "outlined"
          autoFocus
          size= "small"
          sx={{
            display: 'block'
          }}
          placeholder= "Type of Transaction"
          {...register("transactionType", {required: true})}
        />
          {errors.transactionType && <span>Transaction type is required</span>}
        <TextField
          variant= "outlined"
          placeholder= "Amount"
          sx={{
            display: 'block'
          }}
          size= "small"
          {...register("amount", {required: true, valueAsNumber: true})}
          />
          {errors.amount && <span>Transaction Amount is required</span>}
        <TextField
        variant= "outlined"
        type= "date"
        size= "small"
        sx={{
          display: 'block'
        }}
        placeholder= "date"
        {...register("date", {required: true, valueAsDate: true})}
        />
        {errors.date && <span>Transaction date is required</span>}
        <Button
          endIcon= {<KeyboardArrowRightIcon/>}
          type= "submit"
          color= "secondary"
          variant= "contained"
          sx={{
            display: 'inline-block'
          }}
        >
          SUBMIT
        </Button>
        { submitted && <Navigate to= "/" replace= {true} />}
        { notSubmitted && <div> {notSubmitted} </div>}
      </form>
    </div>
  )
}
