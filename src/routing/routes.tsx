// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";
// import Event2023Page from "./Event2023Page";
// import JoinUsTeamPage from "./JoinUsTeamPage";
// import JoinUsSponsorPage from "./JoinUsSponsorPage";
// import JoinUsPage from "./JoinUsPage";
// import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
// import MediaPage from "./MediaPage";
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
// import SpeakersPage from "./SpeakersPage";
// import TeamPage from "./TeamPage";
// import EventPage from "./EventPage";
// import Event2024Page from "./Event2024Page";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/tedx-2023/", element: <Event2023Page /> },
//   { path: "/tedx-2024/", element: <Event2024Page /> },
//   { path: "/photos/", element: <MediaPage /> },
//   { path: "/event/", element: <EventPage /> },

//   { path: "/joinus/", element: <JoinUsPage /> },
//   { path: "/joinus/team/", element: <JoinUsTeamPage /> },
//   { path: "/joinus/speaker/", element: <JoinUsSpeakerPage /> },
//   { path: "/joinus/sponsor/", element: <JoinUsSponsorPage /> },

//   { path: "/speakers/", element: <SpeakersPage /> },
//   { path: "/speakers/myra-virgil/", element: <MyraVirgil /> },
//   { path: "/speakers/kira-dolhan/", element: <KiraDolhan /> },
//   { path: "/speakers/flore-deshayes/", element: <FloreDeshayes /> },
//   { path: "/speakers/leila-kosseim/", element: <LeilaKosseim /> },
//   { path: "/speakers/janet-perlman/", element: <JanetPerlman /> },
//   { path: "/speakers/peggy-bell/", element: <PeggyBell /> },
//   {
//     path: "/speakers/alina-gutierrez-mejia/",
//     element: <AlinaGutierrezMejia />,
//   },
//   { path: "/speakers/andrew-churchil/", element: <AndrewChurchil /> },

//   { path: "/team/", element: <TeamPage /> },
//   { path: "/team/samin-majidi/", element: <SaminMajidi /> },
//   { path: "/team/fatemeh-tavanaei/", element: <FatemehTavanaei /> },
//   { path: "/team/reihaneh-ghoroghchian/", element: <ReihanehGhoroghchian /> },
//   { path: "/team/mohammaderfan-mohit/", element: <MohammaderfanMohit /> },
//   { path: "/team/zahra-ahmadi/", element: <ZahraAhmadi /> },
//   {
//     path: "/team/fathima-nihatha-lathiff/",
//     element: <FathimaNihathaLathiff />,
//   },
//   { path: "/team/hamidreza-ermagan/", element: <HamidrezaErmagan /> },
//   { path: "/team/baharan-nouriinanloo/", element: <BaharanNouriinanloo /> },
//   { path: "/team/melika-seyedi/", element: <MelikaSeyedi /> },
//   { path: "/team/mohammad-zaid/", element: <MohammadZaid /> },
//   { path: "/team/mina-taraghi/", element: <MinaTaraghi /> },
//   { path: "/team/motahareh-pourrahimi/", element: <MotaharehPourrahimi /> },
//   { path: "/team/aryana-haghjoo/", element: <AryanaHaghjoo /> },
//   { path: "/team/pegah-einakchi/", element: <PegahEinakchi /> },
//   { path: "/team/royan-jafari/", element: <RoyanJafari /> },
//   { path: "/team/edwin-meriaux/", element: <EdwinMeriaux /> },
//   { path: "/team/gezal-najafi/", element: <GezalNajafi /> },
//   { path: "/team/amin-shamshiri/", element: <AminShamshiri /> },
// ]);

// export default router;

import { createBrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const router = createBrowserRouter([
  {
    path: '*',
    element: <AnimatedRoutes />,
  },
]);

export default router;
