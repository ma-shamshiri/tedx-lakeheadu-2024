export interface CardData {
    type: string;
    price: string;
    frontCardColor: string;
    ticketColor: string;
    bgText: string;
}

export const cardData: CardData[] = [
    {
        type: "EARLY BIRDS",
        price: "14.99$",
        frontCardColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(19,78,57,1) 0%, rgba(26,88,17,1) 0%, rgba(4,42,17,1) 100%)",
        ticketColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(43,43,43,1) 100%)",
        bgText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ab reprehenderit saepe, voluptatum sed cupiditate minus deleniti corporis, aperiam odio accusantium nesciunt expedita, harum quibusdam nostrum impedit optio nemo placeat quo ratione aut omnis. Architecto asperiores explicabo cumque ratione est.",
    },
    {
        type: "STUDENT PASS",
        price: "14.99$",
        frontCardColor: "radial-gradient(circle, rgba(7,0,224,1) 0%, rgba(0,28,116,1) 100%)",
        ticketColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(43,43,43,1) 100%)",
        bgText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ab reprehenderit saepe, voluptatum sed cupiditate minus deleniti corporis, aperiam odio accusantium nesciunt expedita, harum quibusdam nostrum impedit optio nemo placeat quo ratione aut omnis. Architecto asperiores explicabo cumque ratione est.",
    },
    {
        type: "GENERAL ADMISSIONS",
        price: "25$",
        frontCardColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(117,39,161,1) 0%, rgba(82,41,135,1) 0%, rgba(26,5,55,1) 100%)",
        ticketColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(217,217,217,1) 0%, rgba(153,153,153,1) 0%, rgba(43,43,43,1) 100%)",
        bgText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ab reprehenderit saepe, voluptatum sed cupiditate minus deleniti corporis, aperiam odio accusantium nesciunt expedita, harum quibusdam nostrum impedit optio nemo placeat quo ratione aut omnis. Architecto asperiores explicabo cumque ratione est.",
    },
];
