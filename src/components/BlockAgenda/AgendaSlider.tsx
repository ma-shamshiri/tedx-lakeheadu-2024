import React from "react";
import { Accordion, useColorModeValue } from "@chakra-ui/react";
import AccordionSection from "./AgendaAccordionSection";

export default function AgendaSlider() {
  const sliderBackgroundColor = useColorModeValue("gray.50", "gray.800");
  const containerBackgroundColor = useColorModeValue("#e2ebf0", "gray.700");

  return (
    <Accordion
      allowMultiple
      width="100%"
      // minWidth="50rem"
      //   maxW={{ base: "100%", lg: "70rem" }} // Adjust the max width based on screen size
      bg={sliderBackgroundColor}
      //   rounded="lg"
      borderRadius={10}
    >
      <AccordionSection
        title="Registration | 10:00 - 10:30"
        description="📋 Welcome to the TED Talk event! Start your day by checking in and receiving your event materials. Meet fellow attendees, grab a coffee, and get ready for an inspiring day ahead."
      />

      <AccordionSection
        title="Opening Ceremony | 10:30 - 11:00"
        description="🌟 Let the journey begin! Join us for a captivating opening ceremony that sets the stage for a day filled with innovation, inspiration, and thought-provoking ideas. Expect surprises, music, and a warm welcome."
      />

      <AccordionSection
        title="Talk Session 1 | 11:00 - 12.00"
        description="🗣️ Dive into the world of ideas as our first set of speakers take the stage. These thought leaders will share their insights, stories, and visions that challenge the status quo and expand our horizons."
      />

      <AccordionSection
        title="Performance 1 | 12:00 - 12:30"
        description="🎵 Immerse yourself in a mesmerizing performance that combines art, music, and technology. This interlude will leave you with a fresh perspective and a renewed sense of wonder."
      />

      <AccordionSection
        title="Lunch | 12:30 - 13:30"
        description="🍽️ Recharge your energy and engage in meaningful conversations with fellow attendees over a delicious lunch. Fuel up for the exciting afternoon ahead."
      />

      <AccordionSection
        title="Performance2 | 13.30 - 14:00"
        description="🎭 Prepare to be spellbound by another captivating performance that transcends boundaries and pushes the limits of creativity. Artistry in motion awaits."
      />

      <AccordionSection
        title="Talk Session 2 | 14:00 - 15:00"
        description="💡 Our second set of speakers takes the stage, sharing powerful ideas, innovations, and solutions. Get ready to be inspired, challenged, and motivated to make a difference."
      />

      <AccordionSection
        title="Break and Game | 15:00 - 15:45"
        description="🎲 It's time for a break! Unwind, network, and have some fun with interactive games and activities. Connect with fellow attendees and recharge your mental batteries."
      />

      <AccordionSection
        title="Performance 3 | 15:45 - 16:00"
        description="🌌 Experience the magic of our final performance, a mesmerizing crescendo of creativity that will leave you with a sense of awe and wonder."
      />

      <AccordionSection
        title="Talk Session 3 | 16:00 - 17:00"
        description="🚀 Our last set of speakers takes the stage to deliver thought-provoking talks that will leave you with a renewed sense of purpose and a vision for a brighter future."
      />

      <AccordionSection
        title="Closing Ceremony | 17:00 - 17:30"
        description="🎉 It's time to wrap up this incredible journey. Join us for a heartwarming closing ceremony as we reflect on the day's highlights, acknowledge our speakers, and bid farewell until next time."
      />
    </Accordion>
  );
}
