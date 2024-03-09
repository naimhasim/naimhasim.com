import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
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
        <div className="flex justify-center md:flex-row flex-col h-auto px-0 lg:px-48">
          <div className="">
            <div className="flex justify-center items-center h-screen sticky top-0">
                {/* Information Card */}
                <Card className="ml-10 my-3 mr-10 bg-background outline outline-0 outline-offset-0 border-0 shadow-none
                                ">
                  <CardHeader>
                    <Link href={'/'}>
                    <div className="relative rounded-md w-full select-none">
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
                    <Button className="bg-foreground select-none">Download CV</Button>
                  </CardFooter>
                </Card>
            </div>
          </div>
          <div className="w-screen">
            {children}
          </div>
        </div>
        {/* Footer */}
        {/* <footer className="flex justify-center items-center border h-auto">
          <ul className="p-2">© 2024 Naim Hasim. All rights reserved.</ul>
        </footer> */}
      </body>
    </html>
  );
}
