'use client'

import { useRouter } from "next/navigation"

function BackButton() {
    const router = useRouter();

    function back()
    {
        router.back();
    }

  return (
    <button onClick={back} className='px-2 py-[4px] bg-[#00ed63ef] border border-green-600 rounded-[4px] hover:bg-[#00ed63c7]'>
        <h1>{`<--`}</h1>
    </button>
  )
}

export default BackButton