import {
    unkown,
    unknownBoyProfile,
    farazBG,
    sanjanaBG,
    aminBG
} from "../../assets";

export interface Slide {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const slides: Slide[] = [
    // ======================== Project Director ========================
    {
        id: 1,
        imageSrc: farazBG,
        profileSrc: "/faraz-khorsandi",
        firstName: "Faraz",
        lastName: "Khorsandi",
        fullName: "Faraz Khorsandi",
        role: "Project Director"
    },

    // ======================== Sanjana Ravi ========================
    {
        id: 2,
        imageSrc: sanjanaBG,
        profileSrc: "/sanjana-ravi",
        firstName: "Sanjana",
        lastName: "Ravi",
        fullName: "Sanjana Ravi",
        role: "Project Manager"
    },

    // ======================== Akash Balaji ========================
    {
        id: 3,
        imageSrc: unknownBoyProfile,
        profileSrc: "/akash-balaji",
        firstName: "Akash",
        lastName: "Balaji",
        fullName: "Akash Balaji",
        role: "Director of Marketing & Communications"
    },

    // ======================== Harshit Singh Maann ========================
    {
        id: 4,
        imageSrc: unknownBoyProfile,
        profileSrc: "/harshit-singh-maann",
        firstName: "Harshit",
        lastName: "Singh Maann",
        fullName: "Harshit Singh Maann",
        role: "Operations Manager"
    },

    // ======================== Haard Pathak ========================
    {
        id: 5,
        imageSrc: unknownBoyProfile,
        profileSrc: "/haard-pathak",
        firstName: "Haard",
        lastName: "Pathak",
        fullName: "Haard Pathak",
        role: "Operations Manager"
    },

    // ======================== Khushi Shah ========================
    {
        id: 6,
        imageSrc: unkown,
        profileSrc: "/khushi-shah",
        firstName: "Khushi",
        lastName: "Shah",
        fullName: "Khushi Shah",
        role: "Curator Manager"
    },

    // ======================== Parinaz Beigi ========================
    {
        id: 7,
        imageSrc: unkown,
        profileSrc: "/parinaz-beigi",
        firstName: "Parinaz",
        lastName: "Beigi",
        fullName: "Parinaz Beigi",
        role: "Curator Manager"
    },

    // ======================== Javan Chhatwal ========================
    {
        id: 8,
        imageSrc: unkown,
        profileSrc: "/javan-chhatwal",
        firstName: "Javan",
        lastName: "Chhatwal",
        fullName: "Javan Chhatwal",
        role: "Design and Social Media Manager"
    },

    // ======================== Shreya Pradhan ========================
    {
        id: 9,
        imageSrc: unkown,
        profileSrc: "/shreya-pradhan",
        firstName: "Shreya",
        lastName: "Pradhan",
        fullName: "Shreya Pradhan",
        role: "Design and Social Media Manager"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 10,
        imageSrc: aminBG,
        profileSrc: "/mohammad-amin-shamshiri",
        firstName: "Mohammad Amin",
        lastName: "Shamshiri",
        fullName: "Mohammad Amin Shamshiri",
        role: "Wesbite Designer"
    },

    // ======================== Aarya Sadhwani ========================
    {
        id: 11,
        imageSrc: unknownBoyProfile,
        profileSrc: "/aarya-sadhwani",
        firstName: "Aarya",
        lastName: "Sadhwani",
        fullName: "Aarya Sadhwani",
        role: "Director of Finance"
    },

    // ======================== Seyed Amirmohammad Tayeban ========================
    {
        id: 12,
        imageSrc: unknownBoyProfile,
        profileSrc: "/seyed-amirmohammad-tayeban",
        firstName: "Seyed Amirmohammad",
        lastName: "Tayeban",
        fullName: "Seyed Amirmohammad Tayeban",
        role: "Deputy Director of Finance"
    },

    // ======================== Aastha Malhotra ========================
    {
        id: 13,
        imageSrc: unkown,
        profileSrc: "/aastha-malhotra",
        firstName: "Aastha",
        lastName: "Malhotra",
        fullName: "Aastha Malhotra",
        role: "Sponsorship Manager"
    },
];
