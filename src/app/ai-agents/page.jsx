"use client"
import { useState } from "react"
import AdvanceIcon from "../../../public/icons/AdvanceIcon"
import BrowserIcon from "../../../public/icons/BrowserIcon"
import ConversationalIcon from "../../../public/icons/ConversationalIcon"
import CustomAiIcon from "../../../public/icons/CustomAiIcon"
import CustomizeIcon from "../../../public/icons/CustomizeIcon"
import EnterpriseIcon2 from "../../../public/icons/EnterpriseIcon2"
import IntelligentIcon from "../../../public/icons/IntelligentIcon"
import MonitorIcon from "../../../public/icons/MonitorIcon"
import StrategicAiIcon from "../../../public/icons/StrategicAiIcon"
import StrategicIcon from "../../../public/icons/StrategicIcon"
import { CheckIcon, Search } from 'lucide-react';
import SeamlessIcon from "../../../public/icons/SeamlessIcon"
import EnterpriseIcon3 from "../../../public/icons/EnterpriseIcon3"
import HighPerformanceIcon from "../../../public/icons/HighPerformanceIcon"
import AnalyticsIcon2 from "../../../public/icons/AnalyticsIcon2"
import CustomizationIcon from "../../../public/icons/CustomizationIcon"
import SupportIcon from "../../../public/icons/SupportIcon"
import Logo from "../../../public/Logo"

const aiAgents =
    [
        {
            icon: '/ai-agents/agent-icons/LanguageTranslator.svg',
            title: "Language Translator",
            description: "Transforms enterprise jargon into department-specific language, bridging gaps across teams by translating complex content into role-relevant insights.",
            category: "HR & Recruitment"
        },
        {
            icon: '/ai-agents/agent-icons/BiasDetectionMonitor.svg',
            title: "Bias Detection Monitor",
            description: "Monitors content for cultural biases, inclusivity, gender neutrality, regional sensitivity, and adherence to accessibility standards.",
            category: "HR & Recruitment"
        },
        {
            icon: '/ai-agents/agent-icons/HRQueryResolutionBot.svg',
            title: "HR Query Resolution Bot",
            description: "A conversational AI agent that autonomously resolves routine HR-related employee queries and intelligently escalates unresolved or critical issues.",
            category: "HR & Recruitment"
        },
        {
            icon: '/ai-agents/agent-icons/FinancialJournalValidator.svg',
            title: "Financial Journal Validator",
            description: "Ensures compliant, anomaly-free journal entries in Oracle ERP with real-time, audit-ready financial checks.",
            category: "Finance & Accounting"
        },
        {
            icon: '/ai-agents/agent-icons/InvoiceVerificationSystem.svg',
            title: "Invoice Verification System",
            description: "Automatically verifies invoices by matching them with purchase orders and delivery records to detect discrepancies.",
            category: "Finance & Accounting"
        },
        {
            icon: '/ai-agents/agent-icons/AccountVerificationSystem.svg',
            title: "Account Verification System",
            description: "Automates account verification, cross-references data to enhance security, improve efficiency and reduce manual checks.",
            category: "Finance & Accounting"
        },
        {
            icon: '/ai-agents/agent-icons/ContractComplianceValidator.svg',
            title: "Contract Compliance Validator",
            description: "Validates agreements and contracts against predefined company policies and rules, ensuring compliance and reducing risks.",
            category: "Legal & Compliance"
        },
        {
            icon: '/ai-agents/agent-icons/ContractClauseAnalyzer.svg',
            title: "Contract Clause Analyzer",
            description: "AI-driven tool that extracts and categorizes key contract clauses to streamline contract reviews, reducing human oversight.",
            category: "Legal & Compliance"
        },
        {
            icon: '/ai-agents/agent-icons/ComplianceMonitor.svg',
            title: "Compliance Monitor 24/7",
            description: "Monitor compliance 24/7 with alerts for policy deviations, ensuring alignment with security standards.",
            category: "Legal & Compliance"
        },
        {
            icon: '/ai-agents/agent-icons/CustomerQueryAssistant.svg',
            title: "Customer Query Assistant",
            description: "Monitors the email inbox for customer queries, retrieves answers from the knowledge base, sends replies, or creates tickets for unresolved queries.",
            category: "Customer Support"
        },
        {
            icon: '/ai-agents/agent-icons/ResponseDraftGenerator.svg',
            title: "Response Draft Generator",
            description: "Generates context-aware response drafts to inbound queries, accelerating communication while ensuring relevance, consistency, and professional tone.",
            category: "Customer Support"
        },
        {
            icon: '/ai-agents/agent-icons/Follow-upEmailAutomation.svg',
            title: "Follow-up Email Automation",
            description: "Automates and personalizes follow-up emails to customers, ensuring timely responses and enhanced customer satisfaction.",
            category: "Customer Support"
        },
        {
            icon: '/ai-agents/agent-icons/OrderEntryManager.svg',
            title: "Order Entry Manager",
            description: "Automates the order entry management process, reducing errors and manual work to ensure more efficient procurement operations.",
            category: "Procurement"
        },
        {
            icon: '/ai-agents/agent-icons/ProcurementCostAnalyzer.svg',
            title: "Procurement Cost Analyzer",
            description: "Analyzes procurement spending patterns to identify cost-saving opportunities and improve efficiency across vendors and categories.",
            category: "Procurement"
        },
        {
            icon: '/ai-agents/agent-icons/SupplierPerformanceMonitor.svg',
            title: "Supplier Performance Monitor",
            description: "Monitors supplier performance by analyzing delivery times, product quality, and compliance, helping to optimize procurement processes.",
            category: "Procurement"
        },
        {
            icon: '/ai-agents/agent-icons/DocumentContentExtractor.svg',
            title: "Document Content Extractor",
            description: "Extracts and interprets content from various file types, including text, images, and data, using Multimodal Language Models.",
            category: "IT & Security"
        },
        {
            icon: '/ai-agents/agent-icons/OCRTextProcessor.svg',
            title: "OCR Text Processor",
            description: "Extracts textual content from scanned or image-based documents using OCR, converting unstructured data into editable, searchable text.",
            category: "IT & Security"
        },
        {
            icon: '/ai-agents/agent-icons/DocumentSummarizer.svg',
            title: "Document Summarizer",
            description: "Automatically generates concise, contextual summaries from documents of various formats to speed up reviews, decisions, and knowledge sharing.",
            category: "IT & Security"
        },

    ]

const categories = [
    "All Agents",
    "HR & Recruitment",
    "Finance & Accounting",
    "Legal & Compliance",
    "Customer Support",
    "Procurement",
]


const AiAgentsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(aiAgents)
    const handleCategory = (category) => {
        if (category === "All Agents") {
            setSelectedCategory(aiAgents)
        } else {
            setSelectedCategory(aiAgents.filter(agent => agent.category === category))
        }
    }
    const handleSearch = (value) => {
        setSelectedCategory(aiAgents.filter(agent => agent.title.toLowerCase().includes(value.toLowerCase())))
    }
    return (
        <main className="bg-black min-h-screen">
            <section className="h-[calc(100vh-70px)]  flex flex-col justify-center items-center bg-[url('/ai-agents/hero-image.png')] bg-cover bg-center bg-no-repeat">
                <div className="text-center max-w-[60rem] px-4">

                    <h1 className="lg:text-5xl text-4xl text-white font-semibold">Transform Your Business with <span className="text-[#50a7ff]">AI Agents</span></h1>
                    <p className="text-xl mt-6 text-white/80">Automate Complex Enterprise Processes, Reduce Manual Workload, and Boost Productivity With Our Intelligent AI Agents Designed For Modern Businesses</p>
                    <button className="px-6 py-2 mt-8 m-auto bg-gradient-to-r from-[#46fffb] font-semibold to-[#0f60ff] rounded-lg hover:scale-110 duration-300 transition-transform cursor-pointer">Get Started</button>
                </div>
            </section>

            <section className="mt-15  2xl:px-[6vw] px-[5vw]  max-w-[100rem] m-auto">
                <h2 className="lg:text-[40px] text-[30px] font-semibold text-white text-center"> Core AI Agent Development Services</h2>
                <p className="lg:text-[18px] max-w-[40rem] m-auto text-white text-center mt-3"> <span className="font-semibold">We Provide End-To-End AI Agent Solutions</span> From Strategic Planning And Custom Development To Implementation And Enterprise-Grade Security.</p>

                <div className="mt-12 grid lg:grid-cols-[70%_30%] gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <StrategicAiIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Strategic AI Agent Consulting</h3>
                                <p className="text-white/80 text-sm mt-4">Conduct comprehensive assessments to identify high-impact automation opportunities, create a tailored implementation strategy, and ensure your AI agents align perfectly with operational goals and industry-specific needs.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <CustomAiIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Custom AI Agent Development</h3>
                                <p className="text-white/80 text-sm mt-4">Design and build autonomous AI agents using frameworks like LangChain, CrewAI, and AutoGen, engineered to perform specialized tasks, improve decision-making, and adapt dynamically to evolving workflows.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <IntelligentIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Multi-Agent System Architecture</h3>
                                <p className="text-white/80 text-sm mt-4">Develop collaborative AI ecosystems where multiple agents work together seamlessly, delegate tasks intelligently, and coordinate complex operations, enabling more scalable, efficient, and responsive business processes.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <AdvanceIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Real-Time Analytics & Optimization</h3>
                                <p className="text-white/80 text-sm mt-4">Integrate AI-driven monitoring tools to track agent performance, generate intelligent insights, and implement adaptive learning systems that continuously refine operations to meet changing business demands.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <ConversationalIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Enterprise Integration & Deployment</h3>
                                <p className="text-white/80 text-sm mt-4">Ensure AI agents are smoothly integrated into existing ERP, CRM, and business systems via secure APIs, minimizing downtime and maximizing workflow efficiency across all departments.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <EnterpriseIcon2 className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Security & Compliance</h3>
                                <p className="text-white/80 text-sm mt-4">Implement enterprise-grade encryption, data governance frameworks, and audit trails to meet GDPR, HIPAA, and other compliance standards, ensuring safe, ethical, and transparent AI operations.</p>
                            </div>
                        </div>

                    </div>
                    <div className="lg:block hidden"><img width={400} src="/ai-agents/core-ai-agent-development-services.webp" alt="" /></div>
                </div>
            </section>

            <section className="relative mt-24">
                {/* Horizontal Gradient */}
                <div className="absolute z-10 max-lg:hidden right-0 mb-2 top-[19.75rem] w-[100vw] h-2 bg-[#50a7ff] [mask-image:repeating-linear-gradient(to_bottom,black_0_4px,transparent_4px_8px)]"></div>
                <div className="w-[90%] relative rounded-4xl flex flex-col items-center py-6 pb-6 bg-black max-w-[1440px] mx-auto  md:bg-[url('/base.jpg')] bg-none md:bg-cover md:bg-no-repeat md:bg-center">
                    <h2 className="text-[36px] font-semibold text-white text-center mb-4 ">How It Works</h2>
                    <p className="text-white text-center text-xl mb-8"> Get Started With Our AI Agents In Three Simple Steps</p>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 w-full max-w-[90%]">
                        {/* Step 1 */}
                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 1</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">
                                <BrowserIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Browse & Select</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Browse our extensive library of AI agents and select the ones that match your business needs</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="">
                            <h3 className=" text-white font-bold mb-2 text-center">Step 2</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <CustomizeIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Customize & Deploy</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Customize the agents to fit your workflows and deploy them with our easy-to-use interface</p>
                            </div>
                        </div>

                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 3</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <MonitorIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Monitor & Optimize</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Track performance metrics and continuously optimize your AI agents for maximum efficiency</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-24 2xl:px-[6vw] px-[5vw] max-w-[100rem] m-auto">
                <h2 className="text-4xl text-white">Explore Our AI Agents</h2>
                <p className="text-white/80 text-xl mt-4">Discover intelligent automation solutions for every department in your organization</p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                    {categories.map((category, index) => (
                        <button onClick={() => handleCategory(category)} className="bg-[#241f2a] px-4 py-2 text-white rounded-sm border transition-transform hover:scale-110 duration-300 border-white/10 hover:bg-gradient-to-r from-[#0f60ff] to-[#46fffb] cursor-pointer text-sm" key={index}>{category}</button>
                    ))}
                    <div className="relative">
                        <Search size={16} className="text-white absolute top-1/2 right-4  -translate-y-1/2" />
                        <input onChange={(e) => handleSearch(e.target.value)} type="text" className="bg-[#241f2a] px-4 py-2 text-sm text-white rounded-sm border transition-transform  border-white/10 focus:outline-none" placeholder="Search Agent" />
                    </div>

                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
                    {selectedCategory.map((agent, index) => (
                        <div className="bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col" key={index}>
                            <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300 flex-col ">
                                {/* <agent.icon /> */}
                                <img className="w-7 h-10" src={agent.icon} alt="" />

                            </div>
                            <h4 className="text-white text-xl font-bold mt-4">{agent.title}</h4>
                            <p className="text-white/80 text-sm mt-2 mb-4">{agent.description}</p>
                            <p className="text-white/80 text-sm mt-auto inline self-start font-semibold bg-black px-2 py-1 rounded-md">{agent.category.split(' ')[0]}</p>

                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-24 2xl:px-[6vw] px-[5vw] max-w-[100rem] m-auto">
                <h2 className="text-4xl text-white text-center">Why Choose Our AI Agents?</h2>
                <p className="text-white/80 text-xl mt-4 text-center"><span className="font-semibold">Discover The Powerful Features </span>That Make Our AI Agents The Perfect Solution For Enterprise Automation</p>

                <div className="grid lg:grid-cols-[30%_70%]  gap-4 mt-8">
                    <div className="lg:block hidden"><img src="/ai-agents/why-choose-our-ai-agents.png" alt="" /></div>
                    <div className="grid sm:grid-cols-2 gap-4">

                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <SeamlessIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Seamless Integration</h3>
                                <p className="text-white/80 text-sm mt-4">Seamlessly integrate with your existing systems and workflows without disrupting your operations</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <EnterpriseIcon3 className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Enterprise Security</h3>
                                <p className="text-white/80 text-sm mt-4">Bank-grade security with end-to-end encryption and compliance with industry standards</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <HighPerformanceIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">High Performance</h3>
                                <p className="text-white/80 text-sm mt-4">Process thousands of requests simultaneously with lightning-fast response times</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <AnalyticsIcon2 className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Analytics & Insights</h3>
                                <p className="text-white/80 text-sm mt-4">Get detailed insights and analytics to optimize your business processes continuously</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <CustomizationIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Customization</h3>
                                <p className="text-white/80 text-sm mt-4">Tailored AI agents designed specifically for your industry and business requirements</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <SupportIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">24/7 Support</h3>
                                <p className="text-white/80 text-sm mt-4">Round-the-clock technical support and maintenance to ensure smooth operations</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <section className="w-full flex flex-col items-center mt-20 mb-12 px-[4vw]">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2 text-center">Simple, Transparent Pricing</h2>
                <p className="text-white/70 text-base mb-10 text-center mt-3">Choose the perfect plan for your business needs</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 space-y-6 justify-center items-stretch w-full max-w-5xl mt-4">
                
                    <div className="flex-1 bg-[#241f2a] hover:translate-y-[-10px] transition-transform duration-300 rounded-3xl shadow-lg p-8 flex flex-col items-center border border-[#3a2e4a]">
                        <h3 className="text-white text-xl font-semibold mb-2">Starter</h3>
                        <div className="text-[#a78bfa] text-4xl font-bold mb-1">$99</div>
                        <div className="text-white/60 text-sm mb-6">per month</div>
                        <ul className="text-white/80 text-sm space-y-3 mb-8 w-full">
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                                 
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Up to 5 AI Agents
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                              
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Basic Integration
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                                 
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Email Support
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                                
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Monthly Reports
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                                 
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    1GB Storage
                                </span>
                            </li>
                        </ul>
                        <button className="w-full border border-[#a78bfa] text-[#a78bfa] rounded-xl py-2 font-semibold transition-all duration-200 hover:bg-[#a78bfa] hover:text-[#241f2a] cursor-pointer">
                            Get Started
                        </button>
                    </div>
                  
                    <div className="flex-1 bg-gradient-to-b from-[#3a2e4a] to-[#241f2a] rounded-3xl shadow-2xl p-8 flex flex-col items-center border-2 border-[#a78bfa] relative scale-105 z-10 hover:translate-y-[-10px] transition-transform duration-300">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a78bfa] text-[#241f2a] text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</div>
                        <h3 className="text-white text-xl font-semibold mb-2 mt-4">Professional</h3>
                        <div className="text-[#a78bfa] text-4xl font-bold mb-1">$299</div>
                        <div className="text-white/60 text-sm mb-6">per month</div>
                        <ul className="text-white/90 text-sm space-y-3 mb-8 w-full">
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                             
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Up to 20 AI Agents
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Advanced Integration
                                </span>
                            </li>
                            <li className="flex items-center  gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Priority Support
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Real-time Analytics
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    10GB Storage
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Custom Workflows
                                </span>
                            </li>
                        </ul>
                        <button className="w-full bg-[#a78bfa] text-[#241f2a] rounded-xl py-2 font-bold shadow-lg transition-all duration-200 hover:bg-[#fff] hover:text-[#241f2a] cursor-pointer" >
                            Get Started
                        </button>
                    </div>
                
                    <div className="flex-1 bg-[#241f2a] hover:translate-y-[-10px] transition-transform duration-300 rounded-3xl shadow-lg p-8 flex flex-col items-center border border-[#3a2e4a]">
                        <h3 className="text-white text-xl font-semibold mb-2">Enterprise</h3>
                        <div className="text-[#a78bfa] text-4xl font-bold mb-1">$999</div>
                        <div className="text-white/60 text-sm mb-6">per month</div>
                        <ul className="text-white/90 text-sm space-y-3 mb-8 w-full">
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ display: 'none' }}></svg>
                                
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Unlimited AI Agents
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Full API Access
                                </span>
                            </li>
                            <li className="flex items-center  gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    24/7 Phone Support
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Advanced Analytics
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Unlimited Storage
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    White-label Solution
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-[#a78bfa] flex items-center">
                                    <CheckIcon size={20} color="#a78bfa" />
                                </span>
                                <span className="mx-auto">
                                    Dedicated Manager
                                </span>
                            </li>
                        </ul>
                        <button className="w-full border border-[#a78bfa] text-[#a78bfa] rounded-xl py-2 font-semibold transition-all duration-200 hover:bg-[#a78bfa] hover:text-[#241f2a] cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>
            </section> */}

            <section style={{
                backgroundImage: 'url("/train-and-deploy/agent-architect.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }} className=" space-y-3  flex flex-col mt-20 items-center  p-6 py-4 bg-transparent sm:px-20 rounded-4xl w-[85%] mx-auto max-w-[1400px] ">
                <div className=" w-full justify-between" >
                    <div className="">

                        <h2 className="text-white sm:text-[40px] text-3xl max-sm:text-center">
                            Talk To An
                            <span className="text-white font-bold"> Agent Architect</span>
                        </h2>
                        <p className="text-[20px] text-gray-200 mt-4 max-w-[500px] mb-4 max-sm:text-center">Let’s Reimagine How Your Software Gets Built, Tested, and Shipped — Autonomously.</p>
                        <div className="grid  md:flex gap-4 flex-wrap max-md:items-center max-md:justify-cente md:justify-start  mt-6 text-sm">
                            <button className=" transition-transform duration-300 hover:scale-105 cursor-pointer px-6 py-2 border-none rounded-lg bg-gradient-to-r from-[#46fffb]  to-[#0f60ff] font-bold shadow-lg border border-white/30">
                                Build AI
                            </button>

                            <div className="p-[1px] rounded-xl border border-[#2175ff] transition-transform duration-300 hover:scale-105 cursor-pointer  inline-block">
                                <button className="min-h-[40px] min-w-[150px] rounded-xl bg-transparent text-white font-semibold cursor-pointer w-full h-full">
                                    Explore Agents
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="" alt="" /> */}

                </div>
            </section>
            <footer className="w-full py-8 flex flex-col items-center bg-gradient-to-b from-[#03011b00] space-y-3 via-[#00000098] to-[#000000]  mt-12">
                <div className="flex items-center">
                    <Logo w={280} h={50} />
                </div>
                <div className="text-white/60 text-xs font-serif">Powered by Binary Informatics</div>
            </footer>
        </main>
    )
}

export default AiAgentsPage
