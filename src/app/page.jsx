import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 font-[family-name:var(--font-geist-sans)]">
      <div className='text-[30px] font-semibold'>Hey there</div>
      <div className='flex'>
        <Link href='/receipelist'>
          <div className='bg-[#00ed63ef] border border-green-600 rounded-sm px-[15px] py-[10px] m-2 hover:bg-[#00ed63c7]'>
            Go to receipe page
          </div>
        </Link>
      </div>
    </div>
  );
}
