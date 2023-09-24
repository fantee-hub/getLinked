export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export const heroBanner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

export const elementList = {
  initial: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const fadeIn = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: index * 1,
    },
  }),
};

export const keyAttributes = [
  {
    id: crypto.randomUUID(),
    title: "Innovation and Creativity",
    desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    id: crypto.randomUUID(),
    title: "Functionality",
    desc: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    id: crypto.randomUUID(),
    title: "Impact and Relevance",
    desc: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    id: crypto.randomUUID(),
    title: "Technical Complexity",
    desc: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    id: crypto.randomUUID(),
    title: "Adherence to Hackathon Rules",
    desc: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

export const faqContents = [
  {
    id: crypto.randomUUID(),
    title: "Can I work on a project I started before the hackathon?",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
  {
    id: crypto.randomUUID(),
    title: "What happens if I need help during the hackathon?",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
  {
    id: crypto.randomUUID(),
    title: "What happens if I don't have an idea for a project?",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
  {
    id: crypto.randomUUID(),
    title: "Can I join a team or do I have to come with one?",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
  {
    id: crypto.randomUUID(),
    title: "What happens after the hackathon ends",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
  {
    id: crypto.randomUUID(),
    title: "Can I work on a project I started before the hackathon?",
    answer:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel accusantium doloribus, harum soluta totam esse unde, magni ut libero hic nulla temporibus atque deserunt magnam omnis exercitationem? Animi, sint.",
  },
];

export const timeLine = [
  {
    id: crypto.randomUUID(),
    date: "November 18, 2023",
    title: "Hackathon Announcement",
    desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
  },
  {
    id: crypto.randomUUID(),
    title: "Teams Registration begins",
    date: "November 18, 2023",
    desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
  },
  {
    id: crypto.randomUUID(),
    title: "Teams Registration ends",
    date: "November 18, 2023",
    desc: "Interested Participants are no longer Allowed to register",
  },
  {
    id: crypto.randomUUID(),
    title: "Announcement of the accepted teams and ideas",
    date: "November 18, 2023",
    desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
  },
  {
    id: crypto.randomUUID(),
    title: "Getlinked Hackathon 1.0 Offically Begins",
    date: "November 18, 2023",
    desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
  },
  {
    id: crypto.randomUUID(),
    title: "Demo Day",
    date: "November 18, 2023",
    desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
  },
];

export const prizes = [
  {
    id: crypto.randomUUID(),
    title: "2nd",
    prize: "300,000",
    img: "/assets/images/silver-medal.png",
  },
  {
    id: crypto.randomUUID(),
    title: "1st",
    prize: "400,000",
    img: "/assets/images/gold-medal.png",
  },
  {
    id: crypto.randomUUID(),
    title: "3rd",
    prize: "150,000",
    img: "/assets/images/broze-medal.png",
  },
];

export const partnersImages = [
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/liberty company.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/liberty-pay.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/Winwise.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/wisper.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/Paybox.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/assets/partners/Vizual Plus.png",
  },
];
