import AccuracyIcon from "../../../public/icons/AccuracyIcon"
import AnalyticsIcon from "../../../public/icons/AnalyticsIcon"
import BetterOutComesIcon from "../../../public/icons/BetterOutComesIcon"
import CloudIcon from "../../../public/icons/CloudIcon"
import ConversionIcon from "../../../public/icons/ConversionIcon"
import CoreIcon from "../../../public/icons/CoreIcon"
import CostIcon from "../../../public/icons/CostIcon"
import CustomIcon from "../../../public/icons/CustomIcon"
import DesignIcon from "../../../public/icons/DesignIcon"
import DevelopmentIcon from "../../../public/icons/DevelopmentIcon"
import DevelopmentIcon2 from "../../../public/icons/DevelopmentIcon2"
import DiscoveryIcon from "../../../public/icons/DiscoveryIcon"
import EducationIcon from "../../../public/icons/EducationIcon"
import EfficiencyIcon from "../../../public/icons/EfficiencyIcon"
import EneryIcon from "../../../public/icons/EneryIcon"
import EnterpriseIcon from "../../../public/icons/EnterpriseIcon"
import FasterIcon from "../../../public/icons/FasterIcon"
import FinancialIcon from "../../../public/icons/FinancialIcon"
import HealthCareIcon from "../../../public/icons/HealthCareIcon"
import IntegrationIcon from "../../../public/icons/IntegrationIcon"
import ManufacturingIcon from "../../../public/icons/ManufacturingIcon"
import MultiAgentIcon from "../../../public/icons/MultiAgentIcon"
import OptimizationIcon from "../../../public/icons/OptimizationIcon"
import RealTimeIcon from "../../../public/icons/RealTimeIcon"
import RetailIcon from "../../../public/icons/RetailIcon"
import SecurityIcon from "../../../public/icons/SecurityIcon"
import SecurityIcon2 from "../../../public/icons/SecurityIcon2"
import StrategicIcon from "../../../public/icons/StrategicIcon"
import Logo from "../../../public/Logo"

const AiAgentsThatScalePage = () => {
    return (
        <main className="bg-black min-h-screen">
            <section
                style={{
                    backgroundImage: 'url("/ai-agents-scale/hero-image.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="min-h-[100vh] bg-black flex flex-col justify-center items-center ">
                <div>

                    <h1 className="text-center lg:text-5xl text-4xl font-bold text-white">
                        <span className="text-[#50a7ff] mt-2"> Agentic AI </span>
                        Solutions for End-to-End Autonomy
                    </h1>
                    <p className="text-white text-xl max-w-[40rem] mt-8 m-auto text-center leading-[1.55]">
                        Build competitive advantage through intelligent systems that adapt to your needs and execute strategies with precision and consistency.                </p>
                    <div className="text-center mt-8">
                        <button className="px-6 py-2 m-auto bg-gradient-to-r from-[#46fffb] font-semibold to-[#0f60ff] rounded-lg hover:scale-110 duration-300 transition-transform cursor-pointer">Get Started Today</button>
                    </div>
                </div>
            </section>

            <section className="mt-30 md:px-[6vw] px-[3vw] py-2">
                <h2 className="text-4xl font-semibold text-white text-center">End-to-End Agentic Solutions</h2>
                <p className="text-xl text-white text-center mt-3"> Comprehensive Agentic AI Solutions Tailored To Your Business Needs</p>

                <div className="lg:grid grid-cols-[30%_70%] mt-10 gap-4">
                    <div className="lg:block hidden"><img src="/ai-agents-scale/end-to-end-agentic-solutions.png" alt="" /></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <StrategicIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">AI Transformation Strategy</h3>
                                <p className="text-white/80 text-sm mt-4">End-to-end planning and execution support for organizations looking to transition from manual processes to intelligent, AI-powered business ecosystems that deliver measurable competitive advantage.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <CustomIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Cognitive Process Automation</h3>
                                <p className="text-white/80 text-sm mt-4">Implement AI systems capable of decision-making, contextual understanding, and adaptive workflows that go beyond simple automation to drive higher efficiency and agility.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <MultiAgentIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Predictive Operations & Forecasting</h3>
                                <p className="text-white/80 text-sm mt-4">Use advanced AI models to forecast trends, anticipate resource demands, and identify risks before they occur, enabling proactive and profitable decision-making.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <RealTimeIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">AI-Powered Knowledge Management</h3>
                                <p className="text-white/80 text-sm mt-4">Deploy AI-driven systems to capture, categorize, and retrieve institutional knowledge instantly, accelerating collaboration and improving decision accuracy across teams.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <EnterpriseIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Intelligent Customer Interaction Systems</h3>
                                <p className="text-white/80 text-sm mt-4">Integrate AI-powered chat, voice, and recommendation engines that understand customer needs in real time and deliver personalized experiences across every digital channel.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[#241f2a] px-6 py-4 rounded-xl hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                            <div>
                                <SecurityIcon className="text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl">Ethical AI Governance</h3>
                                <p className="text-white/80 text-sm mt-4">Establish clear frameworks, bias detection protocols, and compliance safeguards to ensure all AI deployments operate ethically, transparently, and in line with regulations.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative mt-24 ">
                {/* Horizontal Gradient */}
                <div className="absolute z-10 max-lg:hidden  right-0 mb-2 top-[19.75rem] w-[100vw] h-2 bg-[#50a7ff] [mask-image:repeating-linear-gradient(to_bottom,black_0_4px,transparent_4px_8px)]"></div>
                <div className="w-[97%] relative rounded-4xl flex flex-col items-center py-6 pb-6 bg-black max-w-[1440px] mx-auto  md:bg-[url('/base.jpg')] bg-none md:bg-cover md:bg-no-repeat md:bg-center">
                    <h2 className="text-[36px] font-semibold text-white text-center mb-4 ">Impact of Agentic AI in Product Development</h2>
                    <p className="text-white text-center text-xl mb-8"> A Strategic <strong>Implementation Framework</strong> in 7 Weeks</p>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-4 w-full max-w-[98%]">
                        {/* Step 1 */}
                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 1</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">
                                <DiscoveryIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Discovery & Strategy</h6>
                                <p className="font-bold text-white mb-2 text-xs px-6 text-center">(Week 1)</p>
                                <p className="text-white/80 text-xs px-6 text-center">Comprehensive business analysis, use case identification, ROI modeling, and technical architecture planning with clear success metrics and timelines.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="">
                            <h3 className=" text-white font-bold mb-2 text-center">Step 2</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <DesignIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Design & Development</h6>
                                <p className="font-bold text-white mb-2 text-xs px-6 text-center">(2-4 weeks)</p>
                                <p className="text-white/80 text-xs px-6 text-center">Agile development approach using cutting-edge AI frameworks, custom model training, integration planning, and rigorous testing protocols.</p>
                            </div>
                        </div>

                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 3</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <IntegrationIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Integration & Deployment</h6>
                                <p className="font-bold text-white mb-2 text-xs px-6 text-center">(5-6 weeks)</p>
                                <p className="text-white/80 text-xs px-6 text-center">Seamless system integration, user training, change management support, and phased rollout strategies to minimize business disruption.</p>
                            </div>
                        </div>

                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 4</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <OptimizationIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-24">
                                <h6 className="text-white text-xl mb-2 text-center">Optimization & Scale</h6>
                                <p className="font-bold text-white mb-2 text-xs px-6 text-center">(Week 7 & Ongoing)</p>
                                <p className="text-white/80 text-xs px-6 text-center">Continuous monitoring, performance optimization, feature enhancement, and scaling strategies to ensure long-term success.</p>
                            </div>
                        </div>
                    </div>

                    {/* <img src="/transparent-images/image7.png" width={'90px'} alt="" className="absolute bottom-[-2rem] left-[-2rem]" /> */}
                </div>
            </section>

            <section className="mt-30 md:px-[6vw] px-[3vw] mx-auto max-w-[1600px]">
                <h2 className="lg:text-4xl text-3xl font-semibold text-white text-center">
                    Built on Industry-Leading AI Infrastructure
                </h2>
                <p className="text-white text-center text-xl mt-3">
                    <strong> Cutting-Edge Technology Stack</strong> Powering your AI Agents
                </p>

                <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <CoreIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Core AI & Machine Learning</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            GPT-4, Claude, Mistral, LLaMA, custom fine-tuned models, reinforcement learning, and multimodal AI capabilities.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/chatgpt.png" alt="" width={80} height={50} className="" />
                            <img src="/ai-agents-scale/claude.png" alt="" width={110} className="" />
                            <img src="/ai-agents-scale/lama.png" alt="" width={60} className="" />
                            <img src="/ai-agents-scale/gemini.png" alt="" width={70} className="" />
                            <img src="/ai-agents-scale/mistral.png" alt="" width={120} className="" />
                        </div>

                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <DevelopmentIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Development Frameworks</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            LangChain for agent orchestration, CrewAI for multi-agent collaboration, AutoGen for autonomous systems.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/langchain.png" alt="" width={142} height={50} className="" />
                            <img src="/ai-agents-scale/crewAi.png" alt="" width={78} className="" />
                            <img src="/ai-agents-scale/autogen.png" alt="" width={120} className="" />
                            <img src="/ai-agents-scale/lamaIndex.png" alt="" width={80} className="" />
                            <img src="/ai-agents-scale/haystack.png" alt="" width={88} className="" />
                        </div>

                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <CloudIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Cloud & Infrastructure</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            AWS, Azure, Google Cloud with Docker containerization, Kubernetes orchestration, and hybrid architectures.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/aws.png" alt="" width={40} height={50} className="" />
                            <img src="/ai-agents-scale/azure.png" alt="" width={83} className="" />
                            <img src="/ai-agents-scale/googleCloud.png" alt="" width={153} className="" />
                            <img src="/ai-agents-scale/kubernetes.png" alt="" width={147} className="" />
                            <img src="/ai-agents-scale/docker.png" alt="" width={97} className="" />
                        </div>

                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <SecurityIcon2 />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Security & Governance</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Enterprise-grade encryption, GDPR/HIPAA compliance, audit trails, explainable AI, & data governance.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/purview.png" alt="" width={120} height={50} className="" />
                            <img src="/ai-agents-scale/googleCloudS.png" alt="" width={60} className="" />
                            <img src="/ai-agents-scale/ibm.png" alt="" width={100} className="" />
                            <img src="/ai-agents-scale/palantir.png" alt="" width={104} className="" />
                            <img src="/ai-agents-scale/dataRobot.png" alt="" width={209} className="" />
                        </div>

                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <AnalyticsIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Analytics & Monitoring</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Real-time performance dashboards, predictive analytics, optimization tools, & comprehensive reporting.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/tableau.png" alt="" width={120} height={50} className="" />
                            <img src="/ai-agents-scale/powerBi.png" alt="" width={100} className="" />
                            <img src="/ai-agents-scale/looker.png" alt="" width={61} className="" />
                            <img src="/ai-agents-scale/splunk.png" alt="" width={84} className="" />
                            <img src="/ai-agents-scale/qlik.png" alt="" width={85} className="" />
                        </div>

                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <DevelopmentIcon2 />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Development Tools</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Python, JavaScript, TypeScript, custom APIs, CI/CD pipelines, & comprehensive testing frameworks.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <img src="/ai-agents-scale/python.png" alt="" width={82} height={50} className="" />
                            <img src="/ai-agents-scale/js.png" alt="" width={30} className="" />
                            <img src="/ai-agents-scale/typescript.png" alt="" width={111} className="" />
                            <img src="/ai-agents-scale/jenkins.png" alt="" width={101} className="" />
                            <img src="/ai-agents-scale/gitlab.png" alt="" width={81} className="" />
                        </div>
                    </div>
                </div>

            </section>


            <section className="mt-30 md:px-[6vw] px-[3vw] mx-auto max-w-[1600px]">
                <h2 className="lg:text-4xl text-3xl font-semibold text-white text-center">
                    Proven Impact Across Every Sector
                </h2>
                <p className="text-white text-center text-xl mt-3">
                    <strong> Industry-Specific AI Agent</strong>  Solutions Delivering Measurable Results
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 mt-10">
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <FinancialIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Financial Services & Banking</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Real-time fraud detection with 95% accuracy, automated trading systems, risk assessment, regulatory compliance
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <FasterIcon /> 20x Faster Processing</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <HealthCareIcon />
                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Healthcare & Life Sciences</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            HIPAA-compliant patient management, diagnostic assistance, appointment scheduling, treatment recommendations
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <AccuracyIcon /> 30% Accuracy Improvement</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <RetailIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Retail & E-Commerce</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Personalized shopping experiences, dynamic pricing optimization, inventory forecasting, customer service automation
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <ConversionIcon />25% Conversion Rate Increase</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <ManufacturingIcon />
                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Manufacturing & Logistics</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Predictive maintenance, supply chain optimization, quality control automation, route planning, production scheduling
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <CostIcon /> 30% Cost Reduction</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <EducationIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Education & Training</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Personalized learning paths, automated grading, student support systems, content curation, adaptive experiences
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <BetterOutComesIcon /> 40% Better Learning Outcomes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <EneryIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Energy & Utilities</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Smart grid management, energy distribution optimization, predictive maintenance, demand forecasting, resource allocation
                        </p>
                        <p className="text-white text-sm mt-4 bg-black rounded-lg px-2 py-1 flex items-center gap-2"> <EfficiencyIcon /> 35% Efficiency Gain</p>
                    </div>
                </div>

            </section>

            <section className="mt-30 md:px-[1vw] px-[3vw] mx-auto max-w-[1600px]">
                <h2 className="lg:text-4xl text-3xl font-semibold text-white text-center">
                    Why Choose Our Agentic AI Solutions
                </h2>
                <p className="text-white text-center text-xl mt-3">
                    <strong> Your Trusted Partner</strong>  For AI Transformation
                </p>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6 mt-12">
                    <div className="text-white rounded-2xl bg-[position:bottom_10px_center] bg-[url('/ai-agents-scale/proven-expertise.png')] h-[430px] px-4 pt-10 text-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 group">
                        <h6 className="text-xl font-bold">Proven Expertise</h6>
                        <p className="text-white/80 text-sm mt-3">500+ successful AI implementations, certified AI engineers, and deep industry knowledge across 15+ sectors.</p>
                    </div>
                    <div className="text-white rounded-2xl bg-[position:bottom_10px_center] bg-[url('/ai-agents-scale/rapid-time-to-value.png')] h-[430px] px-4 pt-10 text-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 group">
                        <h6 className="text-xl font-bold">Rapid Time-to-Value</h6>
                        <p className="text-white/80 text-sm mt-3">MVP delivery in 7 weeks, agile development methodology, and accelerated deployment strategies.</p>
                    </div>
                    <div className="text-white rounded-2xl bg-[position:bottom_10px_center] bg-[url('/ai-agents-scale/enterprise-ready-solutions.png')] h-[430px] px-4 pt-10 text-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 group">
                        <h6 className="text-xl font-bold">Enterprise-Ready Solutions</h6>
                        <p className="text-white/80 text-sm mt-3">Bank-grade security, 99.9% uptime SLA, 24/7 support, and comprehensive documentation.</p>
                    </div>
                    <div className="text-white rounded-2xl bg-[position:bottom_10px_center] bg-[url('/ai-agents-scale/innovation-leadership.png')] h-[430px] px-4 pt-10 text-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 group">
                        <h6 className="text-xl font-bold">Innovation Leadership</h6>
                        <p className="text-white/80 text-sm mt-3">Cutting-edge research partnerships, early access to latest AI models, and thought leadership in agentic AI.</p>
                    </div>
                </div>
            </section>

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
            }} className=" space-y-3 flex flex-col mt-12 items-center  p-6 py-4 bg-transparent sm:px-20 rounded-4xl w-[85%] mx-auto max-w-[1400px] ">
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

export default AiAgentsThatScalePage
