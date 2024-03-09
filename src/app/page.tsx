import { GitBranch, Linkedin } from "lucide-react";
import Link from "next/link";
import { BiLogoBootstrap, BiLogoPostgresql } from "react-icons/bi";
import { DiGithubBadge, DiNodejs } from "react-icons/di";
import { FaLaravel, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { LiaNodeJs } from "react-icons/lia";
import { SiNextdotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function index() {
    return (
        <>
            <div className="flex flex-col w-screen">
                
                <div className=" min-h-screen flex flex-col justify-center ">
                    {/* <small className="text-muted-foreground select-none">
                        <span className="underline">~/Users/naimhasim</span> on feature/portfolio[?] via Node <FaNodeJs className=" inline-block"/> v21.6.2
                    </small> */}
                    <p className="flex items-center mb-3">
                        <span className="select-none">{'>'} &nbsp;</span>
                        <span className="text-xl font-medium inline-block">
                            Hey There! I&apos;m 
                            <span className="text-4xl block font-semibold ">Naim Hasim</span>
                            a <span className="text-xl font-semibold bg-slate-900 rounded-sm text-white">Full Stack Developer </span>
                            <span className="">&nbsp;based in Malaysia.</span>
                        </span>
                    </p>
                    
                    <hr></hr>
                    
                    <div className="p-6 text-muted-foreground">
                        <p>I&apos;ve always had a passion for crafting digital creations on the web. My journey into software development began in 2011 when I delved into crafting custom widgets for my blogspot, which unexpectedly taught me a great deal about HTML.</p>
                        <br></br>
                        <p>Today, I hold a Bachelor&apos;s degree in Computer Science and am deeply immersed in mastering the Laravel framework  for constructing sophisticated, scalable, and dependable systems.</p>
                        <br></br>
                        <p>In my journey from crafting simple blog widgets to developing intricate web systems, I&apos;ve come to appreciate the artistry and precision required in software development. With each project, I strive to push the boundaries of what&apos;s possible, all while staying true to the core principles of <span className="underline">craftsmanship</span>, <span className="underline">efficiency</span>, and <span className="underline">reliability</span>.</p>
                            
                    </div>
                    <div className="pl-5 flex flex-row justify-start w-full gap-4">
                            
                            <Link href={'https://www.linkedin.com/in/naimhasim/'}>
                                <FaLinkedin className="transform hover:scale-110 transition-transform duration-3000 ease-in" size={40}/>
                            </Link>
                            <Link href={'https://github.com/naimhasim'}>
                                <DiGithubBadge className="transform hover:scale-110 transition-transform duration-3000 ease-in" size={40}/>
                            </Link>

                </div>
                </div>
                
                {/* <div className="my-5 min-h-screen flex flex-col justify-center">
                    <small className="text-muted-foreground select-none">
                        <span className="underline">~/Users/naimhasim</span> on feature/portfolio[?] via Node <FaNodeJs className=" inline-block"/> v21.6.2
                    </small>
                    
                    <p className="flex items-center">
                        <span className="select-none">{'>'} &nbsp;</span>
                        <span className="text-2xl font-semibold inline-block">
                            My <span className="text-2xl font-semibold bg-slate-900 rounded-sm text-white">Toolkit </span> <span className="text-muted-foreground">--technologies</span>
                            
                        </span>
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row justify-around w-full gap-4 items-center">
                        <div className="flex flex-col items-center">
                            <FaLaravel size={40} className="mb-2" color="red"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                Laravel
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoBootstrap size={40} className="mb-2" color="rgb(100,58,163)"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                Bootstrap
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <GitBranch size={40} className="mb-2" color="rgb(234,62,45)"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                Git
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoPostgresql size={40} className="mb-2" color="rgb(38,80,122)"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                PostgreSQL
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiNextdotjs size={40} className="mb-2" color="black"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                Next.js
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiTailwindcss size={40} className="mb-2" color="rgb(22,147,227)"/>
                            <div className="font-normal text-muted-foreground text-sm">
                                Tailwind
                            </div>
                        </div>
                    </div>
                </div> */}

                
                <div className="my-5 min-h-screen justify-center">
                    {/* <small className="text-muted-foreground select-none">
                        <span className="underline">~/Users/naimhasim</span> on feature/portfolio[?] via Node <FaNodeJs className=" inline-block"/> v21.6.2
                    </small> */}
                    
                    <p className="flex items-center">
                        <span className="select-none">{'>'} &nbsp;</span>
                        <span className="text-2xl font-semibold inline-block">
                            My Timeline 
                        </span>
                    </p>

                    <div className="p-5">
                        <h4 className="text-xl font-bold">Programmer</h4>
                        <p className=" bg-slate-100 w-fit p-1 rounded-xl">S.I Protech Sdn Bhd, Cyberjaya</p>
                        <p className="text-muted-foreground">Aug 2022 - Current</p>
                        <p>- Improved overall application performance through codebase refactoring and developed reusable, modular code components adhering to DRY principle.</p>
                        <p>- Conducted deployment processes and routine error log checks to promptly identify and address issues, ensuring system stability and reliability</p>
                    </div>
                    
                    <hr></hr>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Full Stack Developer (Internship)</h4>
                        <p className=" bg-slate-100 w-fit p-1 rounded-xl">Efichain Sdn Bhd, Kuala Lumpur</p>
                        <p className="text-muted-foreground">Mar 2022 - Aug 2022</p>
                        <p>- Developed new features for Enterprise Resource Planning(ERP) system</p>
                        <p>- Built and consumed Restful APIs using Laravel framework and React.js Library.</p>
                        <p>- Tracks software development changes via Git, technical documentations</p>
                    </div>
                    <hr></hr>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Backend Developer (Internship)</h4>
                        <p className=" bg-slate-100 w-fit p-1 rounded-xl">Pusat Pengetahuan Komunikasi & Teknologi (PPKT), USM Kubang Kerian</p>
                        <p className="text-muted-foreground">Jul 2019 - Sep 2019</p>
                        <p>- Applied Model-View-Controller(MVC) design pattern on existing PHP application using Codeigniter Framework</p>
                        <p>- Integrated new Barcode generator module to work with barcode scanner</p>
                        <p>- Demonstrated developed module to more than 10 colleagues in a presentation</p>
                    </div>
                    <hr></hr>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Universiti Teknologi Mara (UiTM)</h4>
                        <p className=" bg-slate-100 w-fit p-1 rounded-xl">Bachelor&apos;s degree, Computer Science</p>
                        <p className="text-muted-foreground">Mar 2020 - Aug 2022</p>
                        <p>Executive Committee member of Computer Science Club at UiTM Shah Alam</p>
                        <p>Participated in training workshop &apos;Web-based Development using Laravel Framework&apos;</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
            
        </>
    )
}