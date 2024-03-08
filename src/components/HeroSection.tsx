"use client";
import Link from "next/link"
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { LampContainer } from "./ui/lamp";



function HeroSection() {


  return (



    //-----------------This code is for testing purpose only ---------------------------
  //   <div
  //   className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
  //   >
  //       <Spotlight
  //       className="-top-40 left-0 md:left-60 md:-top-20"
  //       fill="white"
  //     />
  //       <div className="p-4 relative z-10 w-full text-center" >
  //           <h1
  //           className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
  //           >Master the art of music</h1>
  //           <p
  //           className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
  //           >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
  //           <div className="mt-4">
  //               <Link href={"/courses"}>
  //                   <Button
  //                   borderRadius="1.75rem"
  //                   className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
  //                   >
  //                   Explore courses
  //                   </Button>
  //               </Link>
  //           </div>
  // </div> 
//   </div>
//----------------------------------------this code is custom code-------------------------------
<LampContainer>
<motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
>
  {/* Build lamps <br /> the right way */}
                    
</motion.h1>
</LampContainer>
  );
}
export default HeroSection