import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from "./HomePage";
import JoinUsTeamPage from "./JoinUsTeamPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
import JoinUsPage from "./JoinUsPage";
import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import MediaPage from "./MediaPage";
// import SaminMajidi from "../components/TeamMembers/SaminMajidi";
// import FatemehTavanaei from "../components/TeamMembers/FatemehTavanaei";
// import ReihanehGhoroghchian from "../components/TeamMembers/ReihanehGhoroghchian";
// import FathimaNihathaLathiff from "../components/TeamMembers/FathimaNihathaLathiff";
// import HamidrezaErmagan from "../components/TeamMembers/HamidrezaErmagan";
// import BaharanNouriinanloo from "../components/TeamMembers/BaharanNouriinanloo";
// import MelikaSeyedi from "../components/TeamMembers/MelikaSeyedi";
// import MohammadZaid from "../components/TeamMembers/MohammadZaid";
// import MinaTaraghi from "../components/TeamMembers/MinaTaraghi";
// import MotaharehPourrahimi from "../components/TeamMembers/MotaharehPourrahimi";
// import AryanaHaghjoo from "../components/TeamMembers/AryanaHaghjoo";
// import PegahEinakchi from "../components/TeamMembers/PegahEinakchi";
// import RoyanJafari from "../components/TeamMembers/RoyanJafari";
// import EdwinMeriaux from "../components/TeamMembers/EdwinMeriaux";
// import GezalNajafi from "../components/TeamMembers/GezalNajafi";
// import AminShamshiri from "../components/TeamMembers/AminShamshiri";
// import AndrewChurchil from "../components/Speakers/AndrewChurchil";
// import MyraVirgil from "../components/Speakers/MyraVirgil";
// import KiraDolhan from "../components/Speakers/KiraDolhan";
// import FloreDeshayes from "../components/Speakers/FloreDeshayes";
// import LeilaKosseim from "../components/Speakers/LeilaKosseim";
// import JanetPerlman from "../components/Speakers/JanetPerlman";
// import PeggyBell from "../components/Speakers/PeggyBell";
// import AlinaGutierrezMejia from "../components/Speakers/AlinaGutierrezMejia";
// import MohammaderfanMohit from "../components/TeamMembers/MohammaderfanMohit";
// import ZahraAhmadi from "../components/TeamMembers/ZahraAhmadi";
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";
import EventPage from "./EventPage";
import Event2024Page from "./Event2024Page";
// import { BlockVideoGallery } from '../components/BlockVideoGallery';
import VideoGalleryPage from './VideoGalleryPage';
import ThemePage from './ThemePage';
import TeamPageDesign1 from './TeamPageDesign1';
import TeamPageDesign2 from './TeamPageDesign2';
import TeamPageDesign3 from './TeamPageDesign3';
import TeamPageDesign4 from './TeamPageDesign4';
import Aarya from '../components/TeamMembers2025/Aarya';
import Aastha from '../components/TeamMembers2025/Aastha';
import Akash from '../components/TeamMembers2025/Akash';
import Amin from '../components/TeamMembers2025/Amin';
import Amir from '../components/TeamMembers2025/Amir';
import Faraz from '../components/TeamMembers2025/Faraz';
import Haard from '../components/TeamMembers2025/Haard';
import Harshit from '../components/TeamMembers2025/Harshit';
import Javan from '../components/TeamMembers2025/Javan';
import Khushi from '../components/TeamMembers2025/Khushi';
import Parinaz from '../components/TeamMembers2025/Parinaz';
import Sanjana from '../components/TeamMembers2025/Sanjana';
import Shreya from '../components/TeamMembers2025/Shreya';
import Andrei from '../components/TeamMembers2025/Andrei';
import AlbertBrule from '../components/Speakers2025/AlbertBrule';
import AlvinLaw from '../components/Speakers2025/AlvinLaw';
import BenWise from '../components/Speakers2025/BenWise';
import DarrenChiu from '../components/Speakers2025/DarrenChiu';
import KariChiappetta from '../components/Speakers2025/KariChiappetta';
import KristopherBlairAlexander from '../components/Speakers2025/KristopherBlairAlexander';
import RichardTogman from '../components/Speakers2025/RichardTogman';
import UmeHabiba from '../components/Speakers2025/UmeHabiba';
import Yash from '../components/TeamMembers2025/Yash';

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
        <Route path="/joinus/" element={<JoinUsPage />} />
        <Route path="/joinus/team/" element={<JoinUsTeamPage />} />
        <Route path="/joinus/speaker/" element={<JoinUsSpeakerPage />} />
        <Route path="/joinus/sponsor/" element={<JoinUsSponsorPage />} />
        <Route path="/theme/" element={<ThemePage />} />
        {/* <Route path="/tedx-2023/myra-virgil/" element={<MyraVirgil />} />
        <Route path="/tedx-2023/kira-dolhan/" element={<KiraDolhan />} />
        <Route path="/tedx-2023/flore-deshayes/" element={<FloreDeshayes />} />
        <Route path="/tedx-2023/leila-kosseim/" element={<LeilaKosseim />} />
        <Route path="/tedx-2023/janet-perlman/" element={<JanetPerlman />} />
        <Route path="/tedx-2023/peggy-bell/" element={<PeggyBell />} />
        <Route path="/tedx-2023/alina-gutierrez-mejia/" element={<AlinaGutierrezMejia />} />
        <Route path="/tedx-2023/andrew-churchil/" element={<AndrewChurchil />} /> */}
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

        {/* <Route path="/tedx-2023/samin-majidi/" element={<SaminMajidi />} />
        <Route path="/tedx-2023/fatemeh-tavanaei/" element={<FatemehTavanaei />} />
        <Route path="/tedx-2023/reihaneh-ghoroghchian/" element={<ReihanehGhoroghchian />} />
        <Route path="/tedx-2023/mohammaderfan-mohit/" element={<MohammaderfanMohit />} />
        <Route path="/tedx-2023/zahra-ahmadi/" element={<ZahraAhmadi />} />
        <Route path="/tedx-2023/fathima-nihatha-lathiff/" element={<FathimaNihathaLathiff />} />
        <Route path="/tedx-2023/hamidreza-ermagan/" element={<HamidrezaErmagan />} />
        <Route path="/tedx-2023/baharan-nouriinanloo/" element={<BaharanNouriinanloo />} />
        <Route path="/tedx-2023/melika-seyedi/" element={<MelikaSeyedi />} />
        <Route path="/tedx-2023/mohammad-zaid/" element={<MohammadZaid />} />
        <Route path="/tedx-2023/mina-taraghi/" element={<MinaTaraghi />} />
        <Route path="/tedx-2023/motahareh-pourrahimi/" element={<MotaharehPourrahimi />} />
        <Route path="/tedx-2023/aryana-haghjoo/" element={<AryanaHaghjoo />} />
        <Route path="/tedx-2023/pegah-einakchi/" element={<PegahEinakchi />} />
        <Route path="/tedx-2023/royan-jafari/" element={<RoyanJafari />} />
        <Route path="/tedx-2023/edwin-meriaux/" element={<EdwinMeriaux />} />
        <Route path="/tedx-2023/gezal-najafi/" element={<GezalNajafi />} />
        <Route path="/tedx-2023/amin-shamshiri/" element={<AminShamshiri />} /> */}
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
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
