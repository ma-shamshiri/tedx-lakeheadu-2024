// import { ImQuotesLeft } from "react-icons/im";
// import { AiOutlineLine } from "react-icons/ai";

// import testimonial from "../assets/images/testimonial.jpg";

// const BlockTestimonials = () => {
//   return (
//     <section className="block">
//       <header className="block__header">
//         <h2>What our Customers are Saying</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
//         </p>
//       </header>
//       <div className="container">
//         <div className="card testimonial">
//           <div className="grid grid--1x2">
//             <div className="testimonial__image">
//               <img src={testimonial} alt="A happy, smiling customer" />
//               <span className="icon-container icon-container--accent">
//                 <ImQuotesLeft className="icon icon--white icon--small" />
//               </span>
//             </div>
//             <blockquote className="quote">
//               <p className="quote__text">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Incidunt optio officiis dolore earum error eaque perferendis
//                 laudantium sed praesentium dolorum.
//               </p>
//               <footer>
//                 <div className="media">
//                   <div className="media__image">
//                     <AiOutlineLine className="icon icon--primary quote__line" />
//                   </div>
//                   <div className="media__body">
//                     <h3 className="media__title quote__author">John Smith</h3>
//                     <p className="quote__organization">ABC Company</p>
//                   </div>
//                 </div>
//               </footer>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlockTestimonials;
import React, { useState } from "react";
import { Box, Text, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import {
    aminBG,
    aryanaBG, 
    baharanBG, 
    erfanBG, 
    fatemehBG, 
    fathimaBG, 
    hamidrezaBG, 
    melikaBG, 
    minaBG, 
    mohammadBG, 
    motaharehBG, 
    pegahBG, 
    reihanehBG, 
    unkown,
    saminBG,
    royanBG,
    gezalBG,
    edwinBG,
    zahraBG
} from "../../assets";

import TestimonialCard from "./TestimonialCard";

// const BlockTestimonials = () => {
export const BlockTestimonials: React.FC = () => {
  const numElements = 18;

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  return (
    <Box
      className="block block--dark aos-animate"
      padding="6rem 4rem"
      // paddingBottom="10rem"
      bg={useColorModeValue("gray.800", "gray.800")}
      justifyContent="center"
      alignItems="center"
      overflow={"hidden"}
    >
      <Box
        className="block__header container"
        padding="0rem 2rem"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
      >
        <Box className="aos-animate" data-aos="fade-up" data-aos-duration="500">
          <Text
            className="h2 block__heading"
            color="var(--color-white)"
            marginBottom="3rem"
            marginTop="0"
            fontSize={{ base: "4.0rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            The People Behind TEDxAveLorne
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.300", "gray.300")}
            marginBottom="10rem"
            marginTop="0"
            fontSize={{ base: "2.0rem", lg: "2.8rem" }}
            lineHeight="1.1"
          >
            Introducing the TEDxAveLorne Team: Meet the Diverse Group of Experts
            Who shape Inspirational Moments
          </Text>
        </Box>
      </Box>
      <Box
        className="container"
        // maxWidth="900px"
        // maxWidth="100%"
        margin="0 auto"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
          spacing={{ base: 20, lg: 20 }}
        >
          {/* ======================== Samin Majidi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[1]}
            handleHover={() => handleHover(1)}
            handleUnhover={() => handleUnhover(1)}
            src={saminBG}
            linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/19449036/about"
            author="Samin Majidi"
            organization="Ph.D. Student in Physics | McGill"
            quoteText="I'm a physics student who enjoys discovering new, interesting
            things. I became the organizer of TEDxAveLorne to share and
            learn from others. After being a team member at TEDxZanjan, I
            took on the role of leading the team, valuing teamwork and new
            opportunities."
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Organizer"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            badgeTextSize="1.6rem"
            badgePaddingRight="12"
          />

          {/* ======================== Fatemeh Tavanaei ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[2]}
            handleHover={() => handleHover(2)}
            handleUnhover={() => handleUnhover(2)}
            src={fatemehBG}
            linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/38189071/about"
            author="Fatemeh Tavanaei"
            organization="Ph.D. Student in Mining Engineering | McGill"
            quoteText="Studying mining engineering might help me to find the
            treasures I am always looking for in people's words. I am here
            to experience and enjoy working in a non-profit organization
            and let unwritten books get read."
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Co-organizer"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="8"
          />

          {/* ======================== Reihaneh Ghoroghchian ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[3]}
            handleHover={() => handleHover(3)}
            handleUnhover={() => handleUnhover(3)}
            src={reihanehBG}
            linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Reihaneh Ghoroghchian"
            organization="M.Sc. Student in Electrical Engineering | McGill"
            quoteText="As an enthusiastic electrical engineering master's student at
            McGill University, I bring a unique blend of technical
            expertise and a profound passion for storytelling.
            Volunteering at TEDx AveLorne is my platform for empowering
            normal people to share their unique stories, bringing about
            positive changes through the magic of ideas."
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Creativity"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Mohammaderfan Mohit ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[4]}
            handleHover={() => handleHover(4)}
            handleUnhover={() => handleUnhover(4)}
            src={erfanBG}
            linkedinHref="https://ca.linkedin.com/"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/41859284"
            author="Mohammaderfan Mohit"
            organization="Ph.D. Student in Mining Engineering | McGill"
            quoteText="Being a student for a long time, I have always been excited to
            hear novel ideas. Working with the TEDxAveLorne team has been
            an incredible opportunity to not only absorb fresh
            perspectives but also contribute to the spread of
            groundbreaking ideas. It has been a rewarding journey of
            growth, learning, and inspiration!"
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Operation"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Zahra Ahmadi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[5]}
            handleHover={() => handleHover(5)}
            handleUnhover={() => handleUnhover(5)}
            src={zahraBG}
            linkedinHref="https://ca.linkedin.com/in/zahra-1997"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Zahra Ahmadi"
            organization="Multimedia Editing Coordinator | Genetec Inc."
            quoteText="I always believe in the power of words. I think a TED talk is
            a great place to let powerful words incline people's minds to
            move, act, or make a new life-saving decision!"
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Content Creator"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            badgeTextSize="1.5rem"
            badgePaddingRight="4"
          />

          {/* ======================== Fathima Nihatha Lathiff ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[6]}
            handleHover={() => handleHover(6)}
            handleUnhover={() => handleUnhover(6)}
            src={fathimaBG}
            linkedinHref="https://ca.linkedin.com/in/nihatha"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Fathima Nihatha Lathiff"
            organization="M.Sc. Student in Computer Science | Concordia"
            quoteText="Each individual is like a knowledge silo. A combination of silos has created and will create great wonders. If not for meeting new people, converse and share ideas with them it would have been difficult for me to complete my NLP research during my Master's program at Concordia University and be in a position today as a Machine Learning Engineer. Knowledge is never a waste no matter what the domain is. Therefore, I joined TEDxAveLorne to meet, and greet knowledgeable people, while sharing and exploring new ideas to make a better me!"
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Operation"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Hamidreza Ermagan ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[7]}
            handleHover={() => handleHover(7)}
            handleUnhover={() => handleUnhover(7)}
            src={hamidrezaBG}
            linkedinHref="https://ca.linkedin.com/in/hrermagan"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/44509018"
            author="Hamidreza Ermagan"
            organization="Ph.D. Student in Mining Engineering | McGill"
            quoteText="So excited to be part of the TEDxAveLorne team! I'm passionate
            about both communicating science to a broad audience and being
            part of the committees and clubs that promotes it. Look
            forward to sharing innovative ideas for a more sustainable
            world."
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Curation"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Baharan Nouriinanloo ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[8]}
            handleHover={() => handleHover(8)}
            handleUnhover={() => handleUnhover(8)}
            src={baharanBG}
            linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Baharan Nouriinanloo"
            organization="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
            quoteText="I am a Deep Learning-focused Software Engineer on a quest for
            innovative patterns and ideas. I enjoy sharing knowledge and
            am eager to inspire at TEDx events. Let's embark on this
            journey of ideas together."
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Marketing"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Melika Seyedi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[9]}
            handleHover={() => handleHover(9)}
            handleUnhover={() => handleUnhover(9)}
            src={melikaBG}
            linkedinHref="https://ca.linkedin.com/in/melika-seyedi-048416140"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/44509018"
            author="Melika Seyedi"
            organization="Ph.D. Student in Computer Engineering | Concordia"
            quoteText="As a Colincordia University PhD student in Computer Engineering,
            I'm excited to lead TEDxAvelorne's marketing for sponsorships,
            merging tech passion with networking skills to enhance
            partnerships and create memorable experiences for our audience
            and sponsors."
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Sponsorship"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="8"
          />

          {/* ======================== Mohammad Zaid ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[10]}
            handleHover={() => handleHover(10)}
            handleUnhover={() => handleUnhover(10)}
            src={mohammadBG}
            linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Mohammad Zaid"
            organization="Graduate Research Assistant | McGill"
            quoteText="To share my skills and help friends in creating something
            meaningful."
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Content Creator"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            badgeTextSize="1.5rem"
            badgePaddingRight="4"
          />

          {/* ======================== Mina Taraghi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[11]}
            handleHover={() => handleHover(11)}
            handleUnhover={() => handleUnhover(11)}
            src={minaBG}
            linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/44654445"
            author="Mina Taraghi"
            organization="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
            quoteText="To meet new people, new ideas, new opportunities and
            contribute to my community in Montreal!"
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Marketing"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Motahareh Pourrahimi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[12]}
            handleHover={() => handleHover(12)}
            handleUnhover={() => handleUnhover(12)}
            src={motaharehBG}
            linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Motahareh Pourrahimi"
            organization="Ph.D. Student in Neuroscience | McGill"
            quoteText="TED greatly affected my career trajectory. Watching a TED talk
            on expanding human senses turned my interest from the galaxies
            of stars above my head to the galaxies of neurons inside it.
            So, I joined TEDxAveLorne as a curator to help craft talks
            that could similarly inspire and impact others."
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Curation"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Aryana Haghjoo ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[13]}
            handleHover={() => handleHover(13)}
            handleUnhover={() => handleUnhover(13)}
            src={aryanaBG}
            linkedinHref="https://ca.linkedin.com/"
            twitterHref="https://twitter.com/AryanaHaghjoo"
            tedHref="https://www.ted.com/profiles/44809246"
            author="Aryana Haghjoo"
            organization="M.Sc. Student in Physics | McGill"
            quoteText="As a scientist, I am always eager to hear different ideas in
            diverse fields. Moreover, I am interested in learning how to
            give effective talks and keep my audience engaged. Therefore,
            I joined the TEDxAveLorne curation team to help the speakers
            on their journey to prepare their talks!"
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Curation"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Pegah Einakchi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[14]}
            handleHover={() => handleHover(14)}
            handleUnhover={() => handleUnhover(14)}
            src={pegahBG}
            linkedinHref="https://ca.linkedin.com/"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Pegah Einakchi"
            organization="Vocal Coach | Private"
            quoteText="To be part of a group of people interested in spreading ideas
            despite all the difficulties."
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Creativity"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Royan Jafari ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[15]}
            handleHover={() => handleHover(15)}
            handleUnhover={() => handleUnhover(15)}
            src={royanBG}
            linkedinHref="https://ca.linkedin.com/in/royan-jafari"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Royan Jafari"
            organization="M.Eng. Biological & Biomedical Engineering | McGill"
            quoteText="Coming soon.. Stay tuned for an intriguing biography!"
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Content Creator"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            badgeTextSize="1.5rem"
            badgePaddingRight="4"
          />

          {/* ======================== Edwin Meriaux ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[16]}
            handleHover={() => handleHover(16)}
            handleUnhover={() => handleUnhover(16)}
            src={edwinBG}
            linkedinHref="https://ca.linkedin.com/"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Edwin Meriaux"
            organization="M.Sc. Student in Electrical Engineering | McGill"
            quoteText="Coming soon.. Stay tuned for an intriguing biography!"
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Curation"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Gezal Najafi ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[17]}
            handleHover={() => handleHover(17)}
            handleUnhover={() => handleUnhover(17)}
            src={gezalBG}
            linkedinHref="https://ca.linkedin.com/"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/"
            author="Gezal Najafi"
            organization="M.Sc. Student in Clinical Nutriotion | McGill"
            quoteText="Coming soon.. Stay tuned for an intriguing biography!"
            borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
            badgeText="Operation"
            badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="14"
          />

          {/* ======================== Mohammad Amin Shamshiri ======================== */}
          <TestimonialCard
            isHovered={isHoveredArray[18]}
            handleHover={() => handleHover(18)}
            handleUnhover={() => handleUnhover(18)}
            src={aminBG}
            linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
            twitterHref="https://twitter.com/"
            tedHref="https://www.ted.com/profiles/11850053"
            author="Mohammad Amin Shamshiri"
            organization="Software Engineer | EnerZam Inc."
            quoteText="Graduating from Concordia University with a master's in
            computer science, I'm here at TEDxAvelorne to bring my tech
            know-how to the table. Being a member of this team allows me
            to merge my love for technology with my desire to inspire and
            collaborate on groundbreaking ideas. As the mind behind the
            event's website, I strived to create a digital platform that
            reflects the innovation and inspiration that TEDxAvelorne
            represents. Together, we'll create a great experience for our
            audience and speakers!"
            borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
            badgeText="Webmaster"
            badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
            // badgeColor="linear-gradient(to left,  #4BFD85, #4BFD85, #7560F9,  #7560F9)"
            badgeTextSize="1.6rem"
            badgePaddingRight="12"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

// export default BlockTestimonials;
