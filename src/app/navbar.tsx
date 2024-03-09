'use client'
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';


export default function NavBar() {
    const pathname = usePathname(); 
    return (
        <div></div>
        // <section className="mt-32 flex h-5 justify-center items-center space-x-4 text-muted-foreground font-sm">
        //     {/* <Link className={`${pathname === '/about' || pathname === '/' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/about'}>About</Link> */}
        //     <div></div>
        //     {/* <Link className={`${pathname === '/resume' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/resume'}>Resume</Link> */}
        //     <div></div>
        //     {/* <Link className={`${pathname === '/projects' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/projects'}>Projects</Link> */}
            
        // </section>
        
    );
}