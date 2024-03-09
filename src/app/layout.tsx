import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import NavBar from "./navbar";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naim Hasim",
  description: "A developer story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="flex justify-center">
          <div className="flex justify-start w-3/4">
            {/* left sidebar */}
            <section className="flex flex-col justify-center w-[300px] h-screen">
              <div className="flex flex-row sticky top-0">
                
                {/* Information Card */}
                <Card className="ml-10 my-3 mr-10 h-[450px] bg-background outline outline-0 outline-offset-0 border-0 shadow-none
                                ">
                  <CardHeader>
                    <Link href={'/'}>
                    <div className="relative rounded-md w-full borderTest">
                      <Image loading="lazy" className="self-center border" src={{src:'/Notion-.png', width: 300, height:10}} alt="Notion-.png"/>
                      </div>
                      </Link>
                    <CardTitle className="text-center">Naim Hasim</CardTitle>
                    <CardDescription className="text-center">(He/him)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <div className="flex flex-row justify-around mb-4">
                      <div><FaGithubSquare fontSize={40} /></div>
                      <div><FaLinkedin fontSize={40} /></div>
                    </div> */}
                    <div>
                      <div className="">
                        <div>
                          {/* Icon */}
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <small className="text-sm font-medium leading-none">imnaimhasim@gmail.com</small>
                          </div>
                          <Separator className="my-1" />
                        </div>
                        <div>
                          {/* Icon */}
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <small className="text-sm font-medium leading-none">Kelantan, Malaysia</small>
                          </div>
                          <Separator className="my-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button className="bg-foreground">Download CV</Button>
                  </CardFooter>
                </Card>
                
                <Separator orientation="vertical" />
                
              </div>
            </section>
            
            {/* right content */}
            <section className="flex-grow overflow-y-auto no-scrollbar max-h-screen min-w-screen">
              <NavBar/>
              <div className="min-w-full h-full pt-0 p-10 break-words flex flex-row">
                {children}
              </div>
            </section>
            
          </div>
        </div>
        {/* Footer */}
        {/* <footer className="flex justify-center mt-2">
          <div className="flex justify-center w-3/4 ">
            <ul className="mt-4">© 2024 Naim Hasim. All rights reserved.</ul>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
