import BackButton from '@/components/buttons/BackButton'
import ReceipeDetails from '@/components/receipe/receipedetails';
import React from 'react'

async function fetchDetails(id)
{
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    return data;
  }
  catch(err) {
    console.log(err.message);
    return "";
  }
}

async function Details({ params }) {
  const id = params.details;
  const data = await fetchDetails(id);
  
  return (
    <div className='p-4'>
      <BackButton/>
      <ReceipeDetails reData={data}/>
    </div>
  )
}

export default Details