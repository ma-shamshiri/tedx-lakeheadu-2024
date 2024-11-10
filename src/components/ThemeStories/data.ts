import {
    storyImg1,
    storyImg2,
    storyImg3,
    storyImg4,
    storyImg5,
} from "../../assets";

export interface Story {
    title: string[];
    storyImg: string;
}

export const stories: Story[] = [
    // {
    //     title: ["Showcasing creative"],
    //     storyImg: storyImg1,
    // },
    // {
    //     title: ["Inspiring design", "ideas and visual", "creations from experts"],
    //     storyImg: storyImg2,
    // },
    {
        title: ["Award-winning web", "design and development", "projects"],
        storyImg: storyImg3,
    },
    {
        title: ["Curated design", "inspiration for", "creative professionals"],
        storyImg: storyImg4,
    },
    {
        title: ["The latest in", "design trends", "and tutorials"],
        storyImg: storyImg5,
    },
];
