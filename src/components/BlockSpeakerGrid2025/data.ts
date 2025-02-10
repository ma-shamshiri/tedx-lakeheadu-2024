import {
    albert_brule,
    alvin_law,
    ben_wise,
    charmaine_mccraw,
    darren_chiu,
    kari_chiappetta,
    kristopher_blair_alexander,
    michael_morrow,
    richard_dobson,
    richard_togman,
    ume_habiba
} from "../../assets";

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
    // ======================== Alvin Law ========================
    {
        id: 1,
        imageSrc: alvin_law,
        profileSrc: "alvin-law",
        firstName: "Alvin",
        lastName: "Law",
        fullName: "Alvin Law",
        // role: "eventDirector"
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

    // ======================== Darren Chiu ========================
    {
        id: 3,
        imageSrc: darren_chiu,
        profileSrc: "darren-chiu",
        firstName: "Darren",
        lastName: "Chiu",
        fullName: "Darren Chiu",
        // role: "logisticsCoordinator"
    },

    // ======================== Charmaine McCraw ========================
    {
        id: 4,
        imageSrc: charmaine_mccraw,
        profileSrc: "charmaine-mccraw",
        firstName: "Charmaine",
        lastName: "McCraw",
        fullName: "Charmaine McCraw",
        // role: "logisticsCoordinator"
    },

    // ======================== Kristopher Blair Alexander ========================
    {
        id: 5,
        imageSrc: kristopher_blair_alexander,
        profileSrc: "kristopher-blair-alexander",
        firstName: "Kristopher",
        lastName: "Alexander",
        fullName: "Kristopher Alexander",
        // role: "webDeveloper"
    },

    // ======================== Ume Habiba ========================
    {
        id: 6,
        imageSrc: ume_habiba,
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

    // ======================== Kari Chiappetta ========================
    {
        id: 8,
        imageSrc: kari_chiappetta,
        profileSrc: "kari-chiappetta",
        firstName: "Kari",
        lastName: "Kari Chiappetta",
        fullName: "Kari Chiappetta",
        // role: "organizer"
    },

        // ======================== Michael Morrow ========================
        {
            id: 9,
            imageSrc: michael_morrow,
            profileSrc: "michael-morrow",
            firstName: "Michael",
            lastName: "Morrow",
            fullName: "Michael Morrow",
            // role: "visualDesigner"
        },

    // ======================== Richard Dobson ========================
    {
        id: 10,
        imageSrc: richard_dobson,
        profileSrc: "richard-dobson",
        firstName: "Richard",
        lastName: "Dobson",
        fullName: "Richard Dobson",
        // role: "visualDesigner"
    },

    // ======================== Richard Togman ========================
    {
        id: 11,
        imageSrc: richard_togman,
        profileSrc: "richard-togman",
        firstName: "Richard",
        lastName: "Togman",
        fullName: "Richard Togman",
        // role: "visualDesigner"
    },
];
