import AudioProcessingIcon from "../../../public/icons/train-and-deploy/AnnotationPlatformIcon"
import ComprehensiveIcon from "../../../public/icons/train-and-deploy/ComprehensiveIcon"
import ComputerVisionIcon from "../../../public/icons/train-and-deploy/DataAnnotation"
import ContentModerationIcon from "../../../public/icons/train-and-deploy/ContentModerationIcon"
import DataCollectionIcon from "../../../public/icons/train-and-deploy/DataCollectionIcon"
import GenerativeIcon from "../../../public/icons/train-and-deploy/GenerativeIcon"
import MachineLearningIcon from "../../../public/icons/train-and-deploy/MachineLearningIcon"
import NLPIcon from "../../../public/icons/train-and-deploy/NLPIcon"
import NLPIcon2 from "../../../public/icons/train-and-deploy/NLPIcon2"
import OpenAiIcon from "../../../public/icons/train-and-deploy/OpenAiIcon"
import RealTimeIcon from "../../../public/icons/train-and-deploy/RealTimeIcon"
import SourceAccessIcon from "../../../public/icons/train-and-deploy/SourceAccessIcon"
import DataAnnotation from "../../../public/icons/train-and-deploy/DataAnnotation"
import AnnotationPlatformIcon from "../../../public/icons/train-and-deploy/AnnotationPlatformIcon"
import NLPDataIcon from "../../../public/icons/train-and-deploy/DataCollectionIcon"
import DataCollectionIcon2 from "../../../public/icons/train-and-deploy/DataCollectionIcon2"
import ProcessingIcon from "../../../public/icons/train-and-deploy/ProcessingIcon"
import QualityIcon from "../../../public/icons/train-and-deploy/QualityIcon"
import DeliveryIcon from "../../../public/icons/train-and-deploy/DeliveryIcon"
import HealthCareIcon from "../../../public/icons/train-and-deploy/HealthCareIcon"
import AutomotiveIcon from "../../../public/icons/train-and-deploy/AutomotiveIcon"
import FinanceIcon from "../../../public/icons/train-and-deploy/FinanceIcon"
import EcommerceIcon from "../../../public/icons/train-and-deploy/EcommerceIcon"
import EducationIcon from "../../../public/icons/train-and-deploy/EducationIcon"
import SecurityIcon from "../../../public/icons/train-and-deploy/SecurityIcon"
import TechnologyIcon from "../../../public/icons/train-and-deploy/TechnologyIcon"
import LegalIcon from "../../../public/icons/train-and-deploy/LegalIcon"
import Logo from "../../../public/Logo"


const TrainAndDeployPage = () => {
    return (
        <div className="bg-[#000000] min-h-screen border pb-20 overflow-hidden">
            <section
                style={{
                    backgroundImage: 'url("/train-and-deploy/hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="min-h-[100vh] bg-black flex flex-col justify-center items-center ">
                <div>

                <h1 className="text-center lg:text-5xl text-4xl font-bold text-white flex flex-col">
                    Train and Deploy Industry-Leading
                    <span className="text-[#50a7ff] mt-2">AI Data Solutions</span>
                </h1>
                <p className="text-white text-xl max-w-[40rem] mt-8 m-auto text-center leading-[1.55]">
                    Data and AI are inextricably linked. We bring 10+ years of data and domain expertise to your AI initiatives. Leading technology companies trust us for their comprehensive data needs.
                </p>
                    <div className="text-center mt-8">
                        <button className="px-6 py-2 m-auto bg-gradient-to-r from-[#46fffb] font-semibold to-[#0f60ff] rounded-lg hover:scale-110 duration-300 transition-transform cursor-pointer">Get Started Today</button>
                    </div>
                </div>
            </section>

            <section className="mt-20 md:px-[6vw] px-[3vw]">
                <h2 className="text-4xl font-semibold text-white text-center">Comprehensive AI Data Services</h2>
                <p className="text-xl text-white text-center mt-3"> <span className="font-semibold">From Data Collection To Model Deployment,</span> We Provide End-to-End Solutions For Your AI and Machine Learning Projects</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 border max-w-7xl m-auto mt-11 justify-center">
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <DataAnnotation />
                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Data Annotation</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Accurate, scalable annotation across text, image, video, and audio datasets to fuel AI precision.
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>Bounding Boxes, Segmentation </li>
                                <li>Entity Tagging, Transcription </li>
                                <li>Custom Workflows</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <DataCollectionIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Data Collection</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Strategic data gathering and curation services to build robust training datasets for your AI models
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>Web Scraping</li>
                                <li>Data Curation</li>
                                <li>Quality Assurance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <AnnotationPlatformIcon />
                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">Annotation Platform</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Customizable, scalable platform to manage annotation workflows and team productivity.
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>Workflow Management</li>
                                <li>Role-Based Access</li>
                                <li>Real-Time QA & Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <NLPDataIcon />

                        </div>
                        <h5 className="font-bold text-white mt-4 text-xl">NLP Data Services</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Expert text annotation and linguistic data preparation for NLP models & language understanding
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>Sentiment Analysis</li>
                                <li>Named Entity Recognition</li>
                                <li>Intent Classification</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center duration-300">
                            <ContentModerationIcon />

                        </div>
                        <h5 className="font-bold text-white  mt-4 text-xl">Content Moderation</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Advanced content filtering and moderation services to ensure safe & compliant AI applications
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>Content Classification</li>
                                <li>Toxicity Detection</li>
                                <li>Policy Compliance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <div className="bg-gradient-to-r to-[#00003a] from-[#22179a] w-15 h-15 rounded-xl flex items-center justify-center  transition-colors duration-300">
                            <GenerativeIcon />

                        </div>
                        <h5 className="font-bold text-white  mt-4 text-xl">Generative AI Support</h5>
                        <p className="text-white/80 text-sm mt-2.5">
                            Specialized data preparation and fine-tuning services for large language models & generative AI systems
                        </p>
                        <div className="text-white/80 text-sm">
                            <h6 className="mt-5 text-white font-semibold">Capabilities</h6>
                            <ul className="list-disc pl-10 mt-2.5">
                                <li>LLM Fine-tuning</li>
                                <li>Prompt Engineering</li>
                                <li>Model Evaluation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced AI Data Capabilities  */}

            <section className="mt-18 grid lg:grid-cols-[40%_60%] grid-cols-1 gap-15 md:px-15 px-[3vw] pt-15 max-w-7xl m-auto bg-[#241f2a] justify-between  rounded-xl max-sm:text-center max-lg:text-center">
                <div>
                    <h2 className="lg:text-4xl text-3xl font-semibold text-white leading-[1.25]">Advanced <span className="">AI Data <br /> Capabilities</span> </h2>
                    <p className="text-white text-xl mt-4"> <span className="font-semibold">Our Comprehensive Platform </span> Combines Cutting-Edge Technology With Human Expertise To Deliver Superior AI Training Data</p>
                    <img className="mt-32 max-lg:hidden" src="/train-and-deploy/advance-ai.png" alt="" />
                </div>
                <div className="space-y-4">
                    <div className="flex max-md:flex-col  border-b justify-center items-center border-[#979797] h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <ComprehensiveIcon />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">Comprehensive <br />Data Repository</h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">Built a vast repository of regulatory documents obtained through automated scraping techniques. This repository ensures access to the latest and most relevant information across multiple domains and jurisdictions.</p>
                    </div>
                    <div className="flex max-md:flex-col  border-b justify-center items-center border-[#979797] h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <MachineLearningIcon />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">Machine Learning <br /> Categorization </h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">Advanced machine learning algorithms are used to categorize scraped documents based on pre-defined metadata including jurisdiction, document type, and relevance. This facilitates efficient information retrieval and processing.</p>
                    </div>
                    <div className="flex max-md:flex-col  border-b justify-center items-center border-[#979797] h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <OpenAiIcon />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">OpenAI-Powered <br /> Summaries</h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">OpenAI's capabilities generate daily or weekly summaries of categorized documents. Users can customize subscriptions based on specific needs, including regions and document types, to receive the most relevant information.</p>
                    </div>
                    <div className="flex max-md:flex-col  border-b justify-center items-center border-[#979797] h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <NLPIcon2 />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">Natural Language <br /> Processing</h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">Leveraging advanced NLP techniques, our system can interpret complex legal and technical language, providing clear and concise summaries in a user-friendly format that's accessible to both technical and non-technical users.</p>
                    </div>
                    <div className="flex max-md:flex-col  border-b justify-center items-center border-[#979797] h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <RealTimeIcon />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">Real-Time Updates</h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">The system continuously monitors regulatory sources for updates, ensuring users are always informed about the latest changes. Automated alerts and notifications keep stakeholders up-to-date with critical information.</p>
                    </div>
                    <div className="flex max-md:flex-col justify-center items-center h-max pb-6 lg:w-max">
                        <div className="flex justify-center items-center md:gap-8">
                            <SourceAccessIcon />
                            <h6 className="text-white text-lg font-semibold min-w-[200px]">Source Access</h6>
                        </div>
                        <p className="text-sm text-white/80 md:max-w-[365px] max-md:mt-4">Users can easily access the original PDF source document for any summarized point, facilitating deeper dives when needed. This ensures complete transparency and allows for comprehensive analysis of source materials.</p>
                    </div>
                </div>
            </section>

            <section className="relative mt-24">
                {/* Horizontal Gradient */}
                <div className="absolute z-10 max-lg:hidden  right-0 mb-2 top-[19.75rem] w-[100vw] h-2 bg-[#50a7ff] [mask-image:repeating-linear-gradient(to_bottom,black_0_4px,transparent_4px_8px)]"></div>
                <div className="w-[98%] relative rounded-4xl flex flex-col items-center py-6 pb-6 bg-black max-w-[1440px] mx-auto  md:bg-[url('/base.jpg')] bg-none md:bg-cover md:bg-no-repeat md:bg-center">
                    <h2 className="text-[36px] font-semibold text-white text-center mb-4 ">Our Data Processing Workflow</h2>
                    <p className="text-white text-center text-xl mb-8"> <strong>A Systematic Approach</strong> To Deliver High-Quality, Production-Ready AI Training Data</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-[98%]">
                        {/* Step 1 */}
                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 1</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <DataCollectionIcon2 />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-30">
                                <h6 className="text-white/80 text-xl mb-2 text-center">Data Collection</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Automated scraping and curation of relevant data from multiple sources with quality validation.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 2</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <ProcessingIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-30">
                                <h6 className="text-white/80 text-xl mb-2 text-center">Processing & Annotation</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Expert annotation and labeling services with multiple quality assurance checkpoints.</p>
                            </div>
                        </div>

                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 3</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <QualityIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-30">
                                <h6 className="text-white/80 text-xl mb-2 text-center">Quality Assurance</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Rigorous validation and testing to ensure data accuracy and consistency across all datasets.</p>
                            </div>
                        </div>

                        <div className="">

                            <h3 className=" text-white font-bold mb-2 text-center">Step 4</h3>
                            <div className="flex  justify-center mb-20 mt-4 relative ">

                                <DeliveryIcon />
                                <div className="absolute mb-2 top-22 rounded-full h-18 w-0.5 bg-white">
                                    <div className="w-[14px] h-[14px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[8px] bg-white z-10" ></div>
                                </div>
                            </div>

                            <div className="pb-10 bg-[#241f2a] rounded-2xl p-6 backdrop-blur-md border border-white/10 mt-30">
                                <h6 className="text-white/80 text-xl mb-2 text-center">Delivery & Support</h6>
                                <p className="text-white/80 text-xs px-6 text-center">Secure delivery of production-ready datasets with ongoing support and maintenance.</p>
                            </div>
                        </div>




                    </div>

                    {/* <img src="/transparent-images/image7.png" width={'90px'} alt="" className="absolute bottom-[-2rem] left-[-2rem]" /> */}
                </div>

            </section>

            <section className="lg:mt-30 mt-14 md:px-[6vw] px-[3vw]">
                <h2 className="text-4xl font-semibold text-white text-center">Industries We Serve</h2>
                <p className="text-xl text-white text-center mt-3"> <span className="font-semibold">Trusted By Leading Organizations</span> Across Diverse Sectors For Their AI Data Needs</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6 border max-w-7xl m-auto mt-11 justify-center">
                    <div className="p-10 flex flex-col items-center justify-center rounded-2xl bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <HealthCareIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300 m-auto w-15 h-15 mb-2" />

                        <h5 className="font-bold text-center text-white text-xl">Healthcare</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Medical imaging, clinical data processing, and healthcare AI solutions.
                        </p>

                    </div>
                    <div className="p-10 rounded-2xl flex flex-col items-center justify-center bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">

                        <AutomotiveIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300 mb-2" />

                        <h5 className="font-bold text-center text-white  text-xl">Automotive</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Autonomous vehicle data, object detection, and traffic analysis.
                        </p>

                    </div>
                    <div className="p-10 rounded-2xl flex justify-center flex-col items-center bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <FinanceIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />
                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">Finance</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Risk assessment, fraud detection, and financial document processing.
                        </p>

                    </div>
                    <div className="p-10 rounded-2xl flex flex-col items-center justify-center bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <EcommerceIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />

                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">E-commerce</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Product categorization, recommendation systems, and customer insights.
                        </p>

                    </div>
                    <div className="p-10 flex flex-col justify-center items-center rounded-2xl bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <EducationIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />

                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">Education</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Medical imaging, clinical data processing, and healthcare AI solutions.
                        </p>

                    </div>
                    <div className="p-10 rounded-lg flex flex-col items-center justify-center bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">
                        <SecurityIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />

                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">Security</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Threat detection, surveillance systems, and cybersecurity solutions.
                        </p>

                    </div>
                    <div className="p-10 flex flex-col justify-center items-center rounded-2xl bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">

                        <TechnologyIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />

                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">Technology</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Software development, user experience optimization, and tech innovation.
                        </p>

                    </div>
                    <div className="p-10 flex flex-col justify-center items-center rounded-2xl bg-[#241f2a] hover:bg-gradient-to-r from-[#041245] to-[#01061a] cursor-pointer hover:scale-105 transition-transform duration-300 group">

                        <LegalIcon className="text-white group-hover:text-[#46e3ff] transition-colors duration-300" />

                        <h5 className="font-bold text-center text-white group-hover:bg-gradient-to-r mt-4 from-[#46e3ff] via-[#46e3ff] to-[#3071f2] bg-clip-text group-hover:text-transparent text-xl">Legal</h5>
                        <p className="text-white/80 text-sm mt-2.5 text-center max-w-[250px] mx-auto">
                            Document analysis, contract processing, and legal research automation.
                        </p>

                    </div>



                </div>
            </section>
            <section style={{
                backgroundImage: 'url("/train-and-deploy/agent-architect.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
                minHeight: '330px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }} className=" space-y-3 flex flex-col mt-12 items-center  p-6 py-4 bg-transparent sm:px-20 rounded-4xl w-[85%] mx-auto ">
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
        </div>
    )
}

export default TrainAndDeployPage
