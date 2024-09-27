import {
    sliderImage1,
    andrew_talk170,
    andrew_talk180,
    alina_talk150,
    alina_talk60,
    flore_talk30,
    flore_talk100,
    janet_talk80,
    janet_talk40,
    kira_talk50,
    kira_talk60,
    leila_talk10,
    leila_talk70,
    myra_talk40,
    myra_talk50,
    peggy_talk30,
    peggy_talk110,
    event2023Pic1,
} from "../../assets";


export interface sliderDataProps {
    id: string;
    title: string;
    text: string;
    image: string;
}

export const sliderData: sliderDataProps[] = [
    {
        id: "1",
        title: 'TEDxAveLorne | September 2023',
        text: "Capturing the dynamic group of speakers, organizers, and participants",
        image: sliderImage1,
    },
    {
        id: "2",
        title: 'TEDxAveLorne | September 2023',
        text: "Our remarkable speakers at TEDxAveLorne 2023",
        image: event2023Pic1,
    },
    {
        id: "3",
        title: 'Myra Virgil',
        text: "...",
        image: myra_talk50,
    },
    {
        id: "4",
        title: 'Myra Virgil',
        text: "...",
        image: myra_talk40,
    },
    {
        id: "5",
        title: 'Andrew Churchil',
        text: "...",
        image: andrew_talk180,
    },
    {
        id: "6",
        title: 'Andrew Churchil',
        text: "...",
        image: andrew_talk170,
    },
    {
        id: "7",
        title: 'Leila Kosseim',
        text: "How can we make computers understand natural language?",
        image: leila_talk10,
    },
    {
        id: "8",
        title: 'Leila Kosseim',
        text: "How can we make computers understand natural language?",
        image: leila_talk70,
    },
    {
        id: "9",
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: flore_talk30,
    },
    {
        id: "10",
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: flore_talk100,
    },
    {
        id: "11",
        title: 'Janet Perlman',
        text: "...",
        image: janet_talk80,
    },
    {
        id: "12",
        title: 'Janet Perlman',
        text: "...",
        image: janet_talk40,
    },
    {
        id: "13",
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: peggy_talk30,
    },
    {
        id: "14",
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: peggy_talk110,
    },
    {
        id: "15",
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: kira_talk60,
    },
    {
        id: "16",
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: kira_talk50,
    },
    {
        id: "17",
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: alina_talk60,
    },
    {
        id: "18",
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: alina_talk150,
    },
];