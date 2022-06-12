import { Box, Button, TextField } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Axios  from 'axios'
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
      <Box sx= {{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          margin: "auto",
          maxWidth: "50%",
          border: "2px solid black",
          borderRadius: "10px"
        }}>
        <TextField
          variant= "outlined"
          autoFocus
          size= "small"
          sx= {{
            minWidth: "80%",
            margin: "5px"
          }}
          label= "Type of Transaction"
          {...register("transactionType", {required: true})}
        />
          {errors.transactionType && <span>Transaction type is required</span>}
        <TextField
          variant= "outlined"
          label= "Amount"
          sx= {{
            minWidth: "80%",
            margin: "5px"
          }}
          size= "small"
          {...register("amount", {required: true, valueAsNumber: true})}
          />
          {errors.amount && <span>Transaction Amount is required</span>}
        <TextField
        variant= "outlined"
        type= "date"
        size= "small"
        sx= {{
          minWidth: "80%",
          margin: "5px"
        }}
        label= "date"
        {...register("date", {required: true, valueAsDate: true})}
        />
        {errors.date && <span>Transaction date is required</span>}
        <Button
          endIcon= {<KeyboardArrowRightIcon/>}
          type= "submit"
          color= "secondary"
          variant= "contained"
        >
          SUBMIT
        </Button>
        { submitted && <Navigate to= "/" replace= {true} />}
        { notSubmitted && <div> {notSubmitted} </div>}
        </Box>
      </form>
    </div>
  )
}
