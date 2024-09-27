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


export interface sliderData {
    title: string;
    text: string;
    image: string;
}

export const sliderData: sliderData[] = [
    {
        title: 'TEDxAveLorne | September 2023',
        text: "Capturing the dynamic group of speakers, organizers, and participants",
        image: sliderImage1,
    },
    {
        title: 'TEDxAveLorne | September 2023',
        text: "Our remarkable speakers at TEDxAveLorne 2023",
        image: event2023Pic1,
    },
    {
        title: 'Myra Virgil',
        text: "...",
        image: myra_talk50,
    },
    {
        title: 'Myra Virgil',
        text: "...",
        image: myra_talk40,
    },
    {
        title: 'Andrew Churchil',
        text: "...",
        image: andrew_talk180,
    },
    {
        title: 'Andrew Churchil',
        text: "...",
        image: andrew_talk170,
    },
    {
        title: 'Leila Kosseim',
        text: "How can we make computers understand natural language?",
        image: leila_talk10,
    },
    {
        title: 'Leila Kosseim',
        text: "How can we make computers understand natural language?",
        image: leila_talk70,
    },
    {
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: flore_talk30,
    },
    {
        title: 'Flore Deshayes',
        text: "La pouvoir du silence dans nos interactions humaines",
        image: flore_talk100,
    },
    {
        title: 'Janet Perlman',
        text: "...",
        image: janet_talk80,
    },
    {
        title: 'Janet Perlman',
        text: "...",
        image: janet_talk40,
    },
    {
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: peggy_talk30,
    },
    {
        title: 'Peggy Bell',
        text: "Revolutionizing Mining: From Challenges to Empowerment",
        image: peggy_talk110,
    },
    {
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: kira_talk60,
    },
    {
        title: 'Kira Dolhan',
        text: "Personal strength is not always so personal",
        image: kira_talk50,
    },
    {
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: alina_talk60,
    },
    {
        title: 'Alina Gutierrez Mejia',
        text: "Let Me Draw What I Mean",
        image: alina_talk150,
    },
];
