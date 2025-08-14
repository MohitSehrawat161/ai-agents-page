'use client';
import Image from "next/image";
import Logo from "../../public/Logo";
import AiTechnologyIcon from "../components/icons/AiTechnologyIcon";
import ArtificialIntelligentIcon from "../components/icons/ArtificialIntelligentIcon";
import ContinuousIcon from "../components/icons/ContinuousIcon";
import AgentIcon from "../components/icons/AgentIcon";
import DevopsIcon from "../components/icons/DevopsIcon";
import ExecuteIcon from "../components/icons/ExecuteIcon";
import QualityIcon from "../components/icons/QualityIcon";
import ResponsiveIcon from "../components/icons/ResponsiveIcon";
import FolderIcon from "../components/icons/FolderIcon";
import LaptopIcon from "../components/icons/LaptopIcon";
import EvolvingIcon from "../components/icons/EvolvingIcon";
import WebDevIcon from "../components/icons/WebDevIcon";
import MobileDevIcon from "../components/icons/MobileDevIcon";
import CloudIcon from "../components/icons/CloudIcon";
import IntelligentInterfacesIcon from "../components/icons/IntelligentInterfacesIcon";
import AgentCopilotIcon from "../components/icons/AgentCopilotIcon";
import OptimizeIcon from "../components/icons/OptimizeIcon";
import WorkforceIcon from "../components/icons/WorkforceIcon";
import GoliveIcon from "../components/icons/GoliveIcon";
import ImproveCustomerIcon from "../components/icons/ImproveCustomerIcon";
import GrowRevenueIcon from "../components/icons/GrowRevenueIcon";
import CalenderIcon from "../components/icons/CalenderIcon";
import PlugAndPlayIcon from "../components/icons/PlugAndPlayIcon";
import EnterpriseIcon from "../components/icons/EnterpriseIcon";
import CustomBuiltIcon from "../components/icons/CustomBuiltIcon";
import AutonomousIcon from "../components/icons/AutonomousIcon";
import ComingSoonIcon from "../components/icons/ComingSoonIcon";
import GrowthIcon from "../components/icons/GrowthIcon";
import Marquee from "react-fast-marquee";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const clientSvgs = [
    "BFI.svg",
    "CBS.svg",
    "Coinbase.svg",
    "GoMedii.svg",
    "HBO-Go.svg",
    "Coinbase.svg",
    "Jet-Dev.svg",
    "LFS.svg",
    "Logic-Ladder.svg",
    "NTPC.svg",
    "Roku.svg",
    "Sample-Serve.svg",
    "SevenBank.svg",
    "Siimens.svg",
    "Sucafina.svg",
    "Target.svg",
    "Task-Human.svg",
    "walacore.svg",
    "Xamarin.svg",
  ];
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) { 
      videoRef.current.playbackRate = 1; // Change this value (e.g. 2 for 2x speed)
    }
   
  }, []);

  return (
    <main className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
      {/* Header Section (Zeplin accurate) */}
   

      {/* Hero Section */}

      <section style={{
        // backgroundImage: 'url("/hero-image.jpg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        height: '100vh',


      }} className="relative w-full py-40  flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={"/Simple_Black2.mp4"}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070616] to-black opacity-8 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-[80px] 2xl:text-[80px] font-bold text-white text-center mb-4">
            The <span className="bg-[#50a7ff] bg-clip-text text-transparent">Future</span> Is Agentic
          </h1>
          <p className="text-xl text-white text-center mb-4 ">
            Full Stack AI Solutions — From Strategy to Scalable Deployment
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <button className="min-h-[40px] min-w-[100px] rounded-xl bg-gradient-to-r from-[#46fffb]  to-[#0f60ff] font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#3347ff] cursor-pointer">
              Build AI
            </button>
            <div className="p-[1px] rounded-xl bg-gradient-to-r  from-[#3fe3ff] to-[#2175ff]  transition-transform duration-300 hover:scale-105 cursor-pointer  inline-block">
              <Link href={'/ai-agents'}>
              <button className="min-h-[40px] min-w-[150px] rounded-xl bg-black text-white font-semibold cursor-pointer w-full h-full">
                Explore Agents
              </button>
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* Why Agentic AI? Section */}
      <section className="w-full flex flex-col items-center py-20 bg-transparent bg-gradient-to-t from-[#000000] to-black">
        <h2 className="text-[36px] font-bold text-white text-center">Enter Autonomous Agent Ecosystems</h2>
        <p className="text-[clamp(18px,1.2vw,20px)] text-white  text-center max-w-3xl mt-4">
          Not Just Another Tool, But — <span className="font-semibold">An Autonomous Teammate.</span>
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <AgentIcon />
            <h4 className="font-semibold text-white mt-4">Agentic AI Solutions</h4>
            <p className="text-white/80 text-sm mt-2">Build intelligent solution architectures that think strategically, plan autonomously, and execute complex workflows</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <DevopsIcon />
            <h4 className="font-semibold text-white mt-4">AI Agents</h4>
            <p className="text-white/80 text-sm mt-2">Deploy intelligent agents that execute complex workflows while adapting to changing business requirements and priorities</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ExecuteIcon />
            <h4 className="font-semibold text-white mt-4">Data & AI</h4>
            <p className="text-white/80 text-sm mt-2">Build intelligent data foundations that automatically generate insights and drive decision-making</p>
          </div>
        </div>
        <div className="mt-8 p-2 md:px-34 border-l border-t border-white relative bg-gradient-to-r from-[#000000] space-y-3 via-[#17191f] to-[#2c2c2c] rounded-3xl backdrop-blur-sm  border-b border-r">
          {/* <img src="/transparent-images/image3.png" width={'60px'} alt="" className="absolute top-[-30px] right-2" /> */}

          <p className="text-lg text-white text-center">This isn't automation.</p>
          <h3 className="text-5xl py-2 font-semibold text-center mt-2 bg-gradient-to-r from-[#327dff] via-[#a5e9ff] to-[#a5e9ff] bg-clip-text text-transparent">
            This Is Autonomy
          </h3>
          <div className="flex justify-center gap-4 mt-6  text-sm text-gray-600 ">
            <div className="flex items-center gap-2">
              <ArtificialIntelligentIcon />
              <span className="text-gray-400">Intelligent</span>
            </div>
            <div className="flex items-center gap-2">
              <AiTechnologyIcon />
              <span className="text-gray-400">Adaptive</span>
            </div>
            <div className="flex items-center gap-2">
              <AutonomousIcon />
              <span className="text-gray-400">Autonomous</span>
            </div>
          </div>
          {/* <img src="/transparent-images/image4.png" width={'70px'} alt="" className="absolute left-1 -translate-x-10 bottom-0 -translate-y-[-1rem]" /> */}

        </div>
      </section>

      {/* Measurable Impact with Agentic AI Solution*/}
      <section className="w-full flex flex-col items-center py-20 bg-transparent max-w-6xl mx-auto">
        <h2 className="text-[36px] font-semibold text-white text-center">Measurable Impact with Agentic AI Solution</h2>
        <p className="text-[clamp(18px,1.2vw,20px)] text-white/80 font-semibold text-center max-w-4xl mt-4">
          Measurable Results From Organizations That Have Embraced Agentic AI
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  text-center gap-4 mt-10 justify-center">
          <div className=" pb-10 rounded-lg bg-transparent flex flex-col gap-4 items-center justify-center text-white font-bold   p-6">
            <OptimizeIcon />
            <h6 className="max-w-[200px]">Optimize Costs <br /> Up To</h6>
            <p className="text-[40px]">40%</p>
          </div>
          <div className=" pb-10 rounded-lg bg-transparent flex flex-col gap-4 items-center justify-center text-white font-bold p-6">
            <WorkforceIcon />
            <h6 className="max-w-[200px]">Improve Workforce Productivity By Up to</h6>
            <p className="text-[40px]">90%</p>
          </div>
          <div className=" pb-10 rounded-lg bg-transparent flex flex-col gap-4 items-center justify-center text-white font-bold p-6">
            <GoliveIcon />
            <h6 className="max-w-[200px]">Go LIVE in Less <br /> Than</h6>
            <p className="text-[40px]">7 Weeks</p>
          </div>
          <div className=" pb-10 rounded-lg bg-transparent flex flex-col gap-4 items-center justify-center text-white font-bold p-6">
            <ImproveCustomerIcon />
            <h6 className="max-w-[200px]">Improve Customer Experience Up To</h6>
            <p className="text-[40px]">60%</p>
          </div>
          <div className=" pb-10 rounded-lg bg-transparent flex flex-col gap-4 items-center justify-center text-white font-bold p-6">
            <GrowRevenueIcon />
            <h6 className="max-w-[200px]">Grow Revenues <br /> Up To</h6>
            <p className="text-[40px]">40%</p>
          </div>
        </div>
        <h2 className="text-[36px] font-bold text-white text-center mt-20">Agentic AI in Action</h2>
        <p className="text-[clamp(18px,1.2vw,20px)] text-white/80 text-center max-w-4xl mt-4">
          Experience Autonomous Software Development Across Your Entire Technology Stack
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 max-w-6xl">
          <div className="flex flex-col items-center text-center p-6  rounded-2xl backdrop-blur-sm ">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#46e3ff] via-[#3071f2] to-[#8073ff] bg-clip-text text-transparent">
              Mobile & Web Development
            </h3>
            <p className="text-white/80 text-sm mt-4">
              Ship 5x faster. Agents convert user stories into working features, generate UI code, and adapt to design changes — without rewriting everything from scratch.
            </p>
          </div>
          <div className="flex flex-col items-center text-center py-6  rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#46e3ff] via-[#3071f2] to-[#8073ff] bg-clip-text text-transparent">
              DevOps
            </h3>
            <p className="text-white/80 text-sm mt-4">
              From infra provisioning to real-time incident response, our agents don't just alert you- they fix the issue before your team even wakes up.
            </p>
          </div>
          <div className="flex flex-col items-center text-center py-6  rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#46e3ff] via-[#3071f2] to-[#8073ff] bg-clip-text text-transparent">
              Testing & QA
            </h3>
            <p className="text-white/80 text-sm mt-4">
              No more flaky tests or test coverage debates. Our QA agents understand user intent, generate stable, high-value tests, collaborate across builds to maintain quality.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url("/human-agents.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          className=" min-w-[1110px] h-[250px] p-2 md:px-14   rounded-4xl backdrop-blur-sm relative ">
          {/* <img src="/transparent-images/image5.png" width={'80px'} alt="" className="absolute  left-[-2rem]" />
          <img src="/transparent-images/image6.png" width={'110px'} alt="" className="absolute  right-[2rem] top-2" /> */}
          <div className="flex text-center h-full  items-center ">
            <h3 className="text-4xl flex flex-col text-[44px] gap-4  text-white ">
              <span>Humans + Agents </span>  <span className="text-[50px]">=</span>   <span className="text-[50px] font-bold bg-gradient-to-r  from-[#46f0ff]  to-[#2d4cff] bg-clip-text text-transparent">Superteams</span>
            </h3>
          </div>
        </div>
      </section>



      {/* Our Expertise Section */}
      <section className=" w-full flex mt-6 flex-col items-center py-10 bg-transparent max-w-[68rem] mx-auto p-6 rounded-3xl">
        <h2 className="text-[36px]  font-semibold text-white text-center">Authority in Full-Stack AI Product Development & Automation</h2>

        <div className="grid grid-cols-2 w-full gap-4 mt-6">
          <div className="flex justify-between hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920]   hover:from-[#000000] space-y-3 hover:via-[#2d2d2db6] hover:to-[#2d2d2d]  rounded-lg px-3 py-4">
            <div>
              <h6 className="text-white font-bold">Intelligent Interfaces</h6>
              <p className="text-xs max-w-xs mt-1 text-white">Simplify complex workflows, allowing users to leverage AI effortlessly</p>
            </div>
            <IntelligentInterfacesIcon />

          </div>
          <div className="flex justify-between hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920]   hover:from-[#000000] space-y-3 hover:via-[#2d2d2db6] hover:to-[#2d2d2d]  rounded-lg px-3 py-4">
            <div>
              <h6 className=" text-white font-bold">Agents & Copilots</h6>
              <p className="text-xs max-w-xs mt-1 text-white/80">Intelligent systems that autonomously execute tasks, make decisions, and interact with users.</p>
            </div>
            <AgentCopilotIcon />

          </div>
        </div>
        <div className="grid lg:grid-cols-4  grid-cols-2  justify-between mt-2 w-full gap-3">
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Workflow Engine
            </h2>
            <p className="text-xs mt-2 text-white/80">DAGs, Agentic <br /> workflow system</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Multimodal Platform
            </h2>
            <p className="text-xs mt-2 text-white/80">Voice, Image, Voice, <br /> OCR, Telephony</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Knowledge Base <br /> Search
            </h2>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Code Generation
            </h2>
            <p className="text-xs mt-2 text-white/80">Prompts, API</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2  justify-between mt-2 w-full gap-3 ">
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              NL to SQL
            </h2>
            <p className="text-xs mt-2 text-white/80">LLM</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              MCP
            </h2>
            <p className="text-xs mt-2 text-white/80">Image Generation <br /> Model</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Fine Tuned <br /> Model
            </h2>
            <p className="text-xs mt-2 text-white/80">Embedding Models</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              RAG
            </h2>
            <p className="text-xs mt-2 text-white/80">V2V, STT, TTS</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="text-white font-bold">
              Evals
            </h2>
            <p className="text-xs mt-2 text-white/80">Task Specific <br /> Models</p>
          </div>
          <div className="bg-gradient-to-r from-[#161243] via-[#161243] to-[#0c0920] hover:via-[#2d2d2db6] hover:to-[#2d2d2d] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg px-3 py-4">
            <h2 className="bg-gradient-to-r font-bold text-white">
              Guardrails
            </h2>
            <p className="text-xs mt-2 text-white/80">Reasoning <br /> Models</p>
          </div>
        </div>

      </section>

      {/* Process Timeline Section */}
      <section className="relative mt-24">
        {/* Horizontal Gradient */}
        <div className="absolute z-10 max-lg:hidden  right-0 mb-2 top-[15.5rem] w-[100vw] h-2 bg-[#50a7ff] [mask-image:repeating-linear-gradient(to_bottom,black_0_4px,transparent_4px_8px)]"></div>
        <div className="w-[80%] relative rounded-4xl flex flex-col items-center py-6 pb-6 bg-black max-w-[75rem] mx-auto  md:bg-[url('/base.jpg')] bg-none md:bg-cover md:bg-no-repeat md:bg-center">
          <h2 className="text-[36px] font-semibold text-white text-center mb-8 ">Fast Pace Product Development Journey</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-[90%]">
            {/* Week 1 */}
            <div className="">

              <h3 className="text-[22px] text-white font-bold mb-2 text-center">Week 1</h3>
              <div className="flex  justify-center mb-20 mt-4 relative ">
                <CalenderIcon />
                <div className="absolute mb-2 top-14 rounded-full h-18 w-0.5 bg-white">
                  <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                </div>
              </div>

              <div className="pb-10 bg-[#222222] rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <h6 className="text-white/80 font-bold mb-2 text-center">Platform Conceptualization</h6>
                <p className="text-white/80 text-xs px-6 text-center"> Kickstart your journey by shaping a clear vision and actionable roadmap for your Agentic AI platform, aligning all stakeholders for success.</p>
              </div>
            </div>
            {/* Week 3 */}
            <div>
              <h3 className="text-[22px] text-white font-bold mb-2 text-center">Week 3</h3>
              <div className="flex  justify-center mb-20 mt-4 relative ">
                <ComingSoonIcon />
                <div className="absolute mb-2 ml-5 top-14 rounded-full h-18 w-0.5 bg-white">
                  <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                </div>

              </div>
              <div className="bg-[#222222] text-center pb-10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <h6 className="text-white/80 font-bold mb-2">Get Your MVP Developed</h6>
                <p className="text-white/80 text-xs ">Turn your concept into a working MVP, allowing hands-on testing and iterative improvements based on real user input.</p>
              </div>
            </div>
            {/* Week 7 */}
            <div >

              <h3 className="text-[22px] text-white font-bold mb-2 text-center">Week 7</h3>
              <div className="flex  justify-center mb-20 mt-4 relative ">
                <GrowthIcon />
                <div className="absolute mb-2 top-14 rounded-full h-18 w-0.5 bg-white">
                  <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                </div>

              </div>
              <div className="bg-[#222222] rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <h6 className="text-white/80 font-bold mb-2 text-center">Go-Live/Deployment</h6>
                <p className="text-white/80 text-xs text-center">By week 7, complete the journey with a robust, scalable platform that’s fully deployed and ready to deliver enterprise-wide benefits.</p>
              </div>
            </div>
          </div>
          <button className=" transition-transform duration-400 hover:scale-105 cursor-pointer font-bold bg-gradient-to-r  from-[#46fffb]  to-[#0f60ff] px-6 py-3 mt-5 rounded-lg">Connect with Autonomous Intelligence Team</button>
          {/* <img src="/transparent-images/image7.png" width={'90px'} alt="" className="absolute bottom-[-2rem] left-[-2rem]" /> */}
        </div>

      </section>
      {/* Clientele/Testimonials Section */}

      <section className="py-20">

        <Marquee
          speed={100}
          autoFill={true}
          pauseOnHover
        >
          <div className="flex">
            {clientSvgs.map((svg, idx) => (
              <img
                key={idx}
                src={`/clients/${svg}`}
                alt={`Client ${idx + 1}`}
                className="h-8 w-auto ml-16"
              />
            ))}

          </div>
        </Marquee>
      </section>

      {/* Call to Action Section */}
      <section style={{
        backgroundImage: 'url("/agent-architect.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        minHeight: '330px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }} className=" space-y-3 flex flex-col items-center p-6 py-4 bg-transparent px-20 rounded-4xl w-[85%] mx-auto ">
        <div className="grid grid-cols-[60%_40%] w-full justify-between" >
          <div className="">

            <h2 className="text-white text-[40px] ">
              Talk To An
              <span className="text-white font-bold"> Agent Architect</span>
            </h2>
            <p className="text-[20px] text-gray-200 mt-4 max-w-[500px] mb-4">Let’s Reimagine How Your Software Gets Built, Tested, and Shipped — Autonomously.</p>
            <div className="flex gap-4  mt-6 text-sm">
              <button className=" transition-transform duration-300 hover:scale-105 cursor-pointer px-6 py-2 border-none rounded-lg bg-gradient-to-r from-[#46fffb]  to-[#0f60ff] font-bold shadow-lg border border-white/30">
                Build AI
              </button>
              <div className="p-[1px] rounded-xl bg-gradient-to-r  from-[#2175ff] to-[#3fe3ff]  transition-transform duration-300 hover:scale-105 cursor-pointer  inline-block">
              <Link href={'/ai-agents'}>
                <button className="min-h-[40px] min-w-[150px] rounded-xl bg-black text-white font-semibold cursor-pointer w-full h-full">
                  Explore Agents
                </button>
              </Link>
              </div>
            </div>
          </div>
          {/* <img src="" alt="" /> */}

        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-8 flex flex-col items-center bg-gradient-to-b from-[#03011b00] space-y-3 via-[#00000098] to-[#000000]  mt-12">
        <div className="flex items-center">
          <Logo w={280} h={50} />
        </div>
        <div className="text-white/60 text-xs font-serif">Powered by Binary Informatics</div>
      </footer>
    </main>
  );
}
