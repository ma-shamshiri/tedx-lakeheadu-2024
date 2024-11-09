import React, { useEffect, useState } from "react";
import BlockFeatures from "../components/BlockFeatures";
import { BlockFooter } from "../components/BlockFooter"
import { BlockStatistics } from "../components/BlockStatistics";
import { Navigationbar } from "../components/Navigationbar";
// import BlockHeroHome from "../components/BlockHeroHome";
// import { PageTransition } from "../components/PageTransition";
// import { PageTransition2 } from "../components/PageTransition2";
import TicketCard from "../components/TicketCard";
import Stories from "../components/Stories";
import TeamGridDesign2 from "../components/TeamGridDesign2";
import BlockCountdownTimer from "../components/BlockCountdownTimer";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const eventStartTime = new Date("2025-02-28T09:00:00-08:00");

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Navigationbar />
      <BlockCountdownTimer eventStartTime={eventStartTime} />
      <Stories />
      <TeamGridDesign2 />
      <TicketCard />
      <BlockStatistics />
      <BlockFeatures />
      <BlockFooter />
    </>
  );
};

// export default PageTransition(HomePage);
// export default PageTransition2(HomePage);
export default HomePage;