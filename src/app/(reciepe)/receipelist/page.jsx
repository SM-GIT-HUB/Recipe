import Receipes from '@/components/receipe/receipes';
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

async function fetchReceipes()
{
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return data.recipes;
  }
  catch(err) {
    console.log(err.message);
    return [];
  }
}

async function ReceipeList() {
  const data = await fetchReceipes();

  return (
    <div>
      <Receipes list={data}/>
    </div>
  )
}

export default ReceipeList