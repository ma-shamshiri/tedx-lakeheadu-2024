import { albert_brule, alvin_law, ben_wise, darren_chiu, kari_chiappetta, kristopher_blair_alexander, richard_togman } from "../../assets";

export interface Item {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const items: Item[] = [
    // ======================== Kari Chiappetta ========================
    {
        id: 1,
        imageSrc: kari_chiappetta,
        profileSrc: "kari-chiappetta",
        firstName: "Kari",
        lastName: "Kari Chiappetta",
        fullName: "Kari Chiappetta",
        // role: "organizer"
    },

    // ======================== Ben Wise ========================
    {
        id: 2,
        imageSrc: ben_wise,
        profileSrc: "ben-wise",
        firstName: "Ben",
        lastName: "Wise",
        fullName: "Ben Wise",
        // role: "coOrganizer"
    },

    // ======================== Alvin Law ========================
    {
        id: 3,
        imageSrc: alvin_law,
        profileSrc: "alvin-law",
        firstName: "Alvin",
        lastName: "Law",
        fullName: "Alvin Law",
        // role: "eventDirector"
    },

    // ======================== Kristopher Blair Alexander ========================
    {
        id: 4,
        imageSrc: kristopher_blair_alexander,
        profileSrc: "kristopher-blair-alexander",
        firstName: "Kristopher",
        lastName: "Blair Alexander",
        fullName: "Kristopher Blair Alexander",
        // role: "webDeveloper"
    },

    // ======================== Darren Chiu ========================
    {
        id: 5,
        imageSrc: darren_chiu,
        profileSrc: "darren-chiu",
        firstName: "Darren",
        lastName: "Chiu",
        fullName: "Darren Chiu",
        // role: "logisticsCoordinator"
    },

    // ======================== Ume Habiba ========================
    {
        id: 6,
        // imageSrc: mohammadhasanBG2024,
        profileSrc: "ume-habiba",
        firstName: "Ume",
        lastName: "Habiba",
        fullName: "Ume Habiba",
        // role: "operationalAssociate"
    },

    // ======================== Albert Brulé ========================
    {
        id: 7,
        imageSrc: albert_brule,
        profileSrc: "albert-brule",
        firstName: "Albert",
        lastName: "Brulé",
        fullName: "Albert Brulé",
        // role: "audienceExperienceDesigner"
    },

    // ======================== Richard Togman ========================
    {
        id: 8,
        imageSrc: richard_togman,
        profileSrc: "richard-togman",
        firstName: "Richard",
        lastName: "Togman",
        fullName: "Richard Togman",
        // role: "visualDesigner"
    },
];
