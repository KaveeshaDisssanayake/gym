import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const benefits: Array<BenefitType> =[
    {
        icon : <HomeModernIcon className="h-6 w-6"/>,
        title : "State of the Art Facilities",
        description : "Discover our state-of-the-art gym facilities featuring cutting-edge equipment, innovative workout spaces, and modern amenities for an unparalleled fitness experience."
    },
    {
        icon : <AcademicCapIcon className="h-6 w-6"/>,
        title : "Expert and Pro Trainers",
        description : "Meet our expert and pro trainers, dedicated to guiding you through personalized fitness plans to achieve your ultimate health goals."
    },
    {
        icon : <UserGroupIcon className="h-6 w-6"/>,
        title : "100's of Diverse Classes",
        description :"Choose from 100+ diverse classes, including yoga, HIIT, pilates, and strength training, designed to suit all fitness levels."
    },
];

const container = {
    hidden : {},
    visible : {
        transition : { staggerChildren: 0.2  }
    }
}

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20 "
    >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* Header */}
     <motion.div 
     className="md:my-5 md:w-3/5"
     initial = "hidden"
     whileInView="visible"
     viewport={{ once:true , amount : 0.5 }}
     transition={{duration:0.5}}
     variants={{
         hidden : {opacity:0 , x:-50},
         visible : {opacity:1 , x: 0},

     }}
     >
     <HText>
        MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">"Experience a fitness revolution with our all-encompassing gym, offering top-notch equipment, personalized training, and a supportive community to help you achieve your health goals."</p>
     </motion.div>


    {/* Benefits */}
    <motion.div 
    className="mt-5  items-center justify-between gap-8 md:flex "
    initial= "hidden"
    whileInView="visible"
    viewport={{once:true , amount: 0.5}}
    variants={container}
    >
      {benefits.map((benefit : BenefitType) => (
        <Benefit
        key = {benefit.title}
        icon= {benefit.icon}
        title = {benefit.title}
        description = {benefit.description}
        setSelectedPage = {setSelectedPage}

        />
      ) )}
    </motion.div>
    
    {/* Graphics and des*/}

       <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
        {/* Graphics*/}
        <img src={BenefitsPageGraphic} alt="benefits-page-graphic"  className="mx-auto"/>

        {/* des*/}
        <div>
          {/* Title*/}
            <div className="relative">
               <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                 <motion.div
                 initial = "hidden"
                 whileInView="visible"
                 viewport={{ once:true , amount : 0.5 }}
                 transition={{duration:0.5}}
                 variants={{
                     hidden : {opacity:0 , x:50},
                     visible : {opacity:1 , x: 0},
            
                 }}
                 >
                    <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING {" "}
                        <span className="text-primary-500">FIT</span>
                    </HText>
                 </motion.div>
               </div>
            </div>
          {/* description*/}
             <motion.div
             initial = "hidden"
             whileInView="visible"
             viewport={{ once:true , amount : 0.5 }}
             transition={{ delay:0.2, duration:0.5}}
             variants={{
                 hidden : {opacity:0 , x:50},
                 visible : {opacity:1 , x: 0},
        
             }}
             
             >
                <p className="my-5 ">"Millions of Happy Members Getting" epitomizes the success and satisfaction of a gym and training website. With a focus on empowering individuals to achieve their fitness goals, this platform boasts a vast and thriving community of millions of satisfied members actively pursuing healthier lifestyles.

At its core, the website provides a comprehensive suite of resources designed to support users on their fitness journey. From personalized workout plans and nutrition guidance to expert tips and motivational content, every aspect is tailored to meet the diverse needs and preferences of its members.</p>
                <p className="mb-5">Overall, "Millions of Happy Members Getting" embodies a paradigm shift in the way people approach fitness and training online, revolutionizing the industry with its holistic approach, community-driven ethos, and unwavering commitment to helping individuals achieve their health and wellness goals.</p>
             </motion.div>

         {/* Button*/}
         <div className="relative mt-16">
           <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles  ">
             <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
             </ActionButton>
           </div>
         </div>

        </div>
       </div>

    </motion.div>
    </section>
  )
}

export default Benefits