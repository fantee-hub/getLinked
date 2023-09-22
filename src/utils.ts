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
