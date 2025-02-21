import React from 'react';
// import { BlockVideoGallery } from '../components/BlockVideoGallery';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import Aarya from '../components/TeamMembers2025/Aarya';
import Aastha from '../components/TeamMembers2025/Aastha';
import Akash from '../components/TeamMembers2025/Akash';
import AlbertBrule from '../components/Speakers2025/AlbertBrule';
import AlvinLaw from '../components/Speakers2025/AlvinLaw';
import Amin from '../components/TeamMembers2025/Amin';
import Amir from '../components/TeamMembers2025/Amir';
import Andrei from '../components/TeamMembers2025/Andrei';
import BenWise from '../components/Speakers2025/BenWise';
import CharmaineMccraw from '../components/Speakers2025/CharmaineMccraw';
import DarrenChiu from '../components/Speakers2025/DarrenChiu';
import Event2024Page from "./Event2024Page";
import EventPage from "./EventPage";
import Faraz from '../components/TeamMembers2025/Faraz';
import Haard from '../components/TeamMembers2025/Haard';
import Harshit from '../components/TeamMembers2025/Harshit';
import HomePage from "./HomePage";
import Javan from '../components/TeamMembers2025/Javan';
// import JoinUsPage from "./JoinUsPage";
// import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
// import JoinUsTeamPage from "./JoinUsTeamPage";
import KariChiappetta from '../components/Speakers2025/KariChiappetta';
import Khushi from '../components/TeamMembers2025/Khushi';
import KristopherBlairAlexander from '../components/Speakers2025/KristopherBlairAlexander';
import MediaPage from "./MediaPage";
import Parinaz from '../components/TeamMembers2025/Parinaz';
import RichardTogman from '../components/Speakers2025/RichardTogman';
import Sanjana from '../components/TeamMembers2025/Sanjana';
import Shreya from '../components/TeamMembers2025/Shreya';
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";
import TeamPageDesign1 from './TeamPageDesign1';
import TeamPageDesign2 from './TeamPageDesign2';
import TeamPageDesign3 from './TeamPageDesign3';
import TeamPageDesign4 from './TeamPageDesign4';
import ThemePage from './ThemePage';
import UmeHabiba from '../components/Speakers2025/UmeHabiba';
import VideoGalleryPage from './VideoGalleryPage';
import Yash from '../components/TeamMembers2025/Yash';
import WorkshopsPage from './WorkshopsPage';
import SponsorsPage from './SponsorsPage';
import MichaelMorrow from '../components/Speakers2025/MichaelMorrow';
import RichardDobson from '../components/Speakers2025/RichardDobson';
import AccommodationPage from './AccommodationPage';
import PerformancesPage from './PerformancesPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tedx-2024/" element={<Event2024Page />} />
        <Route path="/photos/" element={<MediaPage />} />
        <Route path="/tedx-2023/videos/" element={<VideoGalleryPage />} />
        <Route path="/event/" element={<EventPage />} />
        {/* <Route path="/joinus/" element={<JoinUsPage />} /> */}
        {/* <Route path="/joinus/team/" element={<JoinUsTeamPage />} /> */}
        {/* <Route path="/joinus/speaker/" element={<JoinUsSpeakerPage />} /> */}
        <Route path="/joinus/sponsor/" element={<JoinUsSponsorPage />} />
        <Route path="/theme/" element={<ThemePage />} />
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/design1/" element={<TeamPageDesign1 />} />
        <Route path="/team/design2/" element={<TeamPageDesign2 />} />
        <Route path="/team/design3/" element={<TeamPageDesign3 />} />
        <Route path="/team/design4/" element={<TeamPageDesign4 />} />
        <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/speakers/albert-brule" element={<AlbertBrule />} />
        <Route path="/speakers/alvin-law" element={<AlvinLaw />} />
        <Route path="/speakers/ben-wise" element={<BenWise />} />
        <Route path="/speakers/darren-chiu" element={<DarrenChiu />} />
        <Route path="/speakers/kari-chiappetta" element={<KariChiappetta />} />
        <Route path="/speakers/kristopher-blair-alexander" element={<KristopherBlairAlexander />} />
        <Route path="/speakers/richard-togman" element={<RichardTogman />} />
        <Route path="/speakers/ume-habiba" element={<UmeHabiba />} />
        <Route path="/speakers/charmaine-mccraw" element={<CharmaineMccraw />} />
        <Route path="/speakers/michael-morrow" element={<MichaelMorrow />} />
        <Route path="/speakers/richard-dobson" element={<RichardDobson />} />

        <Route path="/team/aarya-sadhwani/" element={<Aarya />} />
        <Route path="/team/aastha-malhotra/" element={<Aastha />} />
        <Route path="/team/akash-balaji/" element={<Akash />} />
        <Route path="/team/andrei-rosario/" element={<Andrei />} />
        <Route path="/team/mohammad-amin-shamshiri/" element={<Amin />} />
        <Route path="/team/amirmohammad-tayeban/" element={<Amir />} />
        <Route path="/team/faraz-khorsandi/" element={<Faraz />} />
        <Route path="/team/haard-pathak/" element={<Haard />} />
        <Route path="/team/harshit-maann/" element={<Harshit />} />
        <Route path="/team/javan-chhatwal/" element={<Javan />} />
        <Route path="/team/khushi-shah/" element={<Khushi />} />
        <Route path="/team/parinaz-beigi/" element={<Parinaz />} />
        <Route path="/team/sanjana-ravi/" element={<Sanjana />} />
        <Route path="/team/shreya-pradhan/" element={<Shreya />} />
        <Route path="/team/yash-amethiya/" element={<Yash />} />
        <Route path="/sponsors/" element={<SponsorsPage />} />
        <Route path="/workshops/" element={<WorkshopsPage />} />
        <Route path="/accommodation/" element={<AccommodationPage />} />
        <Route path="/performances/" element={<PerformancesPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
