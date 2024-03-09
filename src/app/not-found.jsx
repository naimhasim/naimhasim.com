import Link from 'next/link'
import { Button } from "@/components/ui/button";
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <p style={{ fontSize: '8rem' }} className='font-semibold underline'>404</p>
      <p className=' font-semibold text-md'>Page Not Found</p>
      <br></br>
      <Button><Link href="/">Home</Link></Button>
    </div>
  )
}