'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';


export default function NavBar() {
    const pathname = usePathname(); 
    return (
        <div>
            {/* <ul className=" text-center">
            {[{menu:'Home',path:'/'}, {menu:'Projects',path:'/projects'}].map((_nav, index) => (
                <li key={index}>
                <Link href={`${_nav.path}`}>
                    <Button className={`${pathname === _nav.path ? 'bg-slate-50 border' : null } w-3/4 hover:bg-primary hover:text-background font-semibold text-xl`} variant="outline">
                    {_nav.menu}
                    </Button>
                </Link>
                </li>
            ))}
            
            </ul> */}
        </div>
        // <section className="mt-32 flex h-5 justify-center items-center space-x-4 text-muted-foreground font-sm">
        //     {/* <Link className={`${pathname === '/about' || pathname === '/' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/about'}>About</Link> */}
        //     <div></div>
        //     {/* <Link className={`${pathname === '/resume' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/resume'}>Resume</Link> */}
        //     <div></div>
        //     {/* <Link className={`${pathname === '/projects' ? 'text-foreground' : 'text-muted-foreground' } text-sm hover:text-foreground`} href={'/projects'}>Projects</Link> */}
            
        // </section>
        
    );
}