import {
    javan,
    amin,
    aarya,
    aastha,
    akash,
    amir,
    faraz,
    haard,
    harshit,
    khushi,
    parinaz,
    sanjana,
    shreya,
    andrei,
    yasha,
} from "../../assets";

export interface Member {
    id: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const members: Member[] = [
    // ======================== Faraz Khorsandi ========================
    {
        id: 1,
        imageSrc: faraz,
        profileSrc: "/faraz-khorsandi",
        firstName: "Faraz",
        lastName: "Khorsandi",
        fullName: "Faraz Khorsandi",
        role: "Project Director"
    },

    // ======================== Sanjana Ravi ========================
    {
        id: 2,
        imageSrc: sanjana,
        profileSrc: "/sanjana-ravi",
        firstName: "Sanjana",
        lastName: "Ravi",
        fullName: "Sanjana Ravi",
        role: "Project Manager"
    },

    // ======================== Akash Balaji ========================
    {
        id: 3,
        imageSrc: akash,
        profileSrc: "/akash-balaji",
        firstName: "Akash",
        lastName: "Balaji",
        fullName: "Akash Balaji",
        role: "Director, Marketing & Communications | Curation Manager"
    },

    // ======================== Harshit Singh Maann ========================
    {
        id: 4,
        imageSrc: harshit,
        profileSrc: "/harshit-maann",
        firstName: "Harshit",
        lastName: "Maann",
        fullName: "Harshit Singh Maann",
        role: "Operations Manager"
    },

    // ======================== Haard Pathak ========================
    {
        id: 5,
        imageSrc: haard,
        profileSrc: "/haard-pathak",
        firstName: "Haard",
        lastName: "Pathak",
        fullName: "Haard Pathak",
        role: "Operations Manager"
    },

    // ======================== Khushi Shah ========================
    {
        id: 6,
        imageSrc: khushi,
        profileSrc: "/khushi-shah",
        firstName: "Khushi",
        lastName: "Shah",
        fullName: "Khushi Shah",
        role: "Curation Manager"
    },

    // ======================== Parinaz Beigi ========================
    {
        id: 7,
        imageSrc: parinaz,
        profileSrc: "/parinaz-beigi",
        firstName: "Parinaz",
        lastName: "Beigi",
        fullName: "Parinaz Beigi",
        role: "Curation Manager"
    },

    // ======================== Javan Chhatwal ========================
    {
        id: 8,
        imageSrc: javan,
        profileSrc: "/javan-chhatwal",
        firstName: "Javan",
        lastName: "Chhatwal",
        fullName: "Javan Chhatwal",
        role: "Design and Social Media Manager"
    },

    // ======================== Shreya Pradhan ========================
    {
        id: 9,
        imageSrc: shreya,
        profileSrc: "/shreya-pradhan",
        firstName: "Shreya",
        lastName: "Pradhan",
        fullName: "Shreya Pradhan",
        role: "Design and Social Media Manager"
    },

    // ======================== Mohammad Amin Shamshiri ========================
    {
        id: 10,
        imageSrc: amin,
        profileSrc: "/mohammad-amin-shamshiri",
        firstName: "Amin",
        lastName: "Shamshiri",
        fullName: "Mohammad Amin Shamshiri",
        role: "Website Designer"
    },

    // ======================== Aarya Sadhwani ========================
    {
        id: 11,
        imageSrc: aarya,
        profileSrc: "/aarya-sadhwani",
        firstName: "Aarya",
        lastName: "Sadhwani",
        fullName: "Aarya Sadhwani",
        role: "Director of Finance"
    },

    // ======================== Seyed Amirmohammad Tayeban ========================
    {
        id: 12,
        imageSrc: amir,
        profileSrc: "/amirmohammad-tayeban",
        firstName: "Sam",
        lastName: "Tayeba",
        fullName: "Sam Tayeba",
        role: "Deputy Director of Finance"
    },

    // ======================== Aastha Malhotra ========================
    {
        id: 13,
        imageSrc: aastha,
        profileSrc: "/aastha-malhotra",
        firstName: "Aastha",
        lastName: "Malhotra",
        fullName: "Aastha Malhotra",
        role: "Sponsorship Manager"
    },

    // ======================== Aastha Malhotra ========================
    {
        id: 14,
        imageSrc: andrei,
        profileSrc: "/andrei-rosario",
        firstName: "Andrei",
        lastName: "Rosario",
        fullName: "Andrei Rosario",
        role: "Manager of Grants"
    },
    {
        id: 15,
        imageSrc: yasha,
        profileSrc: "/yash-amethiya",
        firstName: "Yash",
        lastName: "Amethiya",
        fullName: "Yash Amethiya",
        role: "Operations Manager and Director of Volunteers"
    },
];
