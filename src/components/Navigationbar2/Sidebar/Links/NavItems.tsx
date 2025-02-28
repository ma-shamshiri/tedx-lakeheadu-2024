interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  // {
  //   label: "aboutUs",
  //   href: "/",
  //   children: [
  //     // {
  //     //   label: "ted",
  //     //   subLabel: "tedSubLabel",
  //     //   href: "/",
  //     // },
  //     // {
  //     //   label: "tedx",
  //     //   subLabel: "tedxSubLabel",
  //     //   href: "/",
  //     // },
  //     {
  //       label: "tedxlakeheadu",
  //       subLabel: "tedxavelorneSubLabel",
  //       href: "/",
  //     },
  //   ],
  // },
  {
    label: "event",
    href: "/event/",
    children: [
      {
        label: "theme",
        subLabel: "themeSubLabel",
        href: "/theme/",
      },
      {
        label: "dateAndTime",
        subLabel: "dateAndTimeSubLabel",
        href: "/event/",
      },
      {
        label: "agenda",
        subLabel: "agendaSubLabel",
        href: "/agenda/",
      },
      // {
      //   label: "Location",
      //   subLabel: "Trending Design to inspire you",
      //   href: "#",
      // },
      {
        label: "ticket",
        subLabel: "ticketSubLabel",
        href: "/event/",
      },
      // {
      //   label: "Registration",
      //   subLabel: "Up-and-coming Designers",
      //   href: "#",
      // },
    ],
  },
  {
    label: "team",
    href: "/team/",
  },
  {
    label: "speakers",
    href: "/speakers/",
  },
  {
    label: "workshops",
    href: "/workshops/",
  },
  {
    label: "performances",
    href: "/performances/",
  },
  {
    label: "sponsors",
    href: "/sponsors/",
  },
  // {
  //   label: "partners",
  //   href: "#",
  // },
  // {
  //   label: "media",
  //   href: "/photos/",
  // },

  {
    label: "accommodation",
    href: "/accommodation/",
  },
  // {
  //   label: "Be a Partner",
  //   href: "/joinus/sponsor",
  //   // children: [
  //   //   {
  //   //     label: "members",
  //   //     subLabel: "membersSubLabel",
  //   //     href: "/joinus/team/",
  //   //   },
  //   //   {
  //   //     label: "speakers",
  //   //     subLabel: "speakersSubLabel",
  //   //     href: "/joinus/speaker/",
  //   //   },
  //   //   {
  //   //     label: "sponsors",
  //   //     subLabel: "sponsorsSubLabel",
  //   //     href: "/joinus/sponsor/",
  //   //   },
  //   // ],
  // },
];

export default NAV_ITEMS;
