import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./navbar";
import { FaBars, FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naim Hasim",
  description: "A Dev story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="fixed top-7 left-7 shadow-md sm:hidden rounded-lg">
          <Popover>
            <PopoverTrigger asChild className="cursor-pointer">
              <Card className="p-3 text-sm">
                <FaBars />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="w-screen">
              <div className="">
                <div><Button variant="link"><Link href={'/'}>Home</Link></Button></div>
                <div><Button variant="link"><Link href={'/projects'}>Projects</Link></Button></div>
                <div><Button variant="link"><Link href={'/resume'}>Resume</Link></Button></div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden sm:flex justify-between w-full flex-col sm:flex-row px-0 sm:px-16 lg:px-24 xl:px-48 fixed bg-background shadow-sm p-3 z-10">
          <div className="flex gap-5 justify-start items-center sm:w-full md:w-1/2">
            <div><Button variant="link"><Link href={'/'}>Home</Link></Button></div>
            <div><Button variant="link"><Link href={'/projects'}>Projects</Link></Button></div>
          </div>
          
          <div className="">
            <Button size={"sm"} className="bg-foreground select-none">
              <Link href={'/resume'}>{'Resume'}</Link>
            </Button>
          </div>
          
        </div>
        <div className="flex justify-center flex-col sm:flex-col md:flex-row px-0 md:px-16 lg:px-24 xl:px-48 h-auto ">
          <div className="w-screen">
            <div className="flex justify-center items-center h-screen sm:h-auto md:h-screen md:justify-center md:sticky top-0 sm:pt-20 sm:pb-5 md:pt-0 md:pb-0">
                {/* Information Card */}
                <Card className="ml-10 my-3 mr-10 bg-background outline outline-0 outline-offset-0 border-0 shadow-none
                                ">
                  <CardContent>
                    <Link href={'/'}>
                      <div className="relative rounded-md w-full select-none">
                        <Image loading="lazy" className="self-center" src={{src:'/Notion-.png', width: 250, height:10}} alt="Notion-.png"/>
                      </div>
                    </Link>
                    <CardTitle className="text-center">Naim Hasim</CardTitle>
                    <CardDescription className="text-center">Software Developer</CardDescription>
                    <div className="flex flex-row justify-center gap-3 items-center mt-6">
                    <Link href={'https://www.linkedin.com/in/naimhasim/'}><FaLinkedin className="transform hover:scale-110 transition-transform duration-3000 ease-in" fontSize={35} /></Link>
                    <Link href={'https://github.com/naimhasim'}><FaGithubSquare className="transform hover:scale-110 transition-transform duration-3000 ease-in" fontSize={35} /></Link>
                    <Link href={'https://github.com/naimhasim'}><FaEnvelopeSquare className="transform hover:scale-110 transition-transform duration-3000 ease-in" fontSize={34} /></Link>
                      
                    </div>
                  <NavBar/>
                  </CardContent>
                  {/* <CardFooter className="flex justify-center">
                    <Button className="bg-foreground select-none">Download CV</Button>
                  </CardFooter> */}
                </Card>
            </div>
          </div>
          <div className="w-screen">
            {children}
          </div>
        </div>
        {/* Footer */}
        <footer className="flex justify-center items-center">
          <ul className="p-2">© 2024 Naim Hasim. All rights reserved.</ul>
        </footer>
      </body>
    </html>
  );
}
