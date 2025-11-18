import Program from "./ProgramsLayout";

const Dance = () => {
  
const impacts = [
    {
      impact: "Cultural Expression & Identity",
      desc: "Our dance program provides a powerful platform for refugees to express their cultural heritage through movement, helping them maintain their identity while adapting to new environments. Participants learn traditional dances from their home countries while also exploring contemporary styles."
    },
    {
      impact: "Physical & Mental Wellbeing",
      desc: "Dance promotes physical fitness, coordination, and flexibility while serving as a therapeutic outlet for emotional healing. Regular participation helps reduce stress, anxiety, and depression while building confidence and self-esteem."
    },
    {
      impact: "Community Building & Social Integration",
      desc: "Through collaborative dance performances and group activities, participants build strong relationships with peers from diverse backgrounds, fostering a sense of belonging and community cohesion in their new environment."
    },
    {
      impact: "Skill Development & Opportunities",
      desc: "Advanced dancers have opportunities to become peer instructors, developing leadership and teaching skills. Some participants have gone on to perform professionally or start their own dance groups, creating sustainable income opportunities."
    }
];

const statistics = [
  { value: "500+", label: "Active Participants" },
  { value: "50+", label: "Performances" },
  { value: "15+", label: "Cultural Styles" },
  { value: "20+", label: "Peer Instructors" }
];

const benefits = [
  "Improved physical fitness and coordination",
  "Enhanced cultural pride and identity preservation", 
  "Better mental health and emotional wellbeing",
  "Stronger community connections and friendships",
  "Leadership and teaching skill development",
  "Performance opportunities and recognition",
  "Stress relief and therapeutic expression",
  "Increased self-confidence and self-esteem"
];

const testimonials = [
  {
    name: "Aisha Mohamed",
    quote: "Dance has helped me reconnect with my Somali heritage while making new friends in Kenya. It's more than just movement - it's healing."
  },
  {
    name: "James Okello", 
    quote: "I never thought I could lead others, but becoming a peer instructor has given me confidence I never had before."
  }
];
    
const desc = "Our Youth Dance Program combines traditional cultural dances with contemporary styles to create a vibrant space for self-expression, cultural preservation, and community building. Through structured classes, collaborative performances, and peer mentoring, participants develop not only dance skills but also confidence, leadership abilities, and lasting friendships.";

const beneGridLeft = [
  {url: "/images/displayerpic.png"},
  {url: "/images/displayerpic.png"}
  ];
const beneGridRight = [
  {url: "/images/displayerpic.png"},
  {url: "/images/displayerpic.png"},
  {url: "/images/displayerpic.png"}
  ];
  
  
  return(
     <div className="">
       <Program 
         leadImage="/images/displayerpic.png" 
         programName="Youth Dance Program" 
         programDesc={desc} 
         programIcon="🕺"
         statistics={statistics}
         benefits={benefits}
         testimonials={testimonials}
         supportImage="/images/displayerpic.png" 
         supportAuthor="Steve Kiza" 
         impacts={impacts} 
         beneGridLeft={beneGridLeft} 
         beneGridRight={beneGridRight} 
       />
     </div>
    
    );
};

export default Dance;