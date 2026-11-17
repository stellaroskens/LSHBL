export type FaqItem = {
  question: string
  paragraphs: string[]
  points?: string[]
}

export type FaqCategory = {
  id: string
  title: string
  intro?: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: "joining",
    title: "Joining the league",
    intro: "Eligibility, costs, and practice schedules are still being decided. These answers say what is known today.",
    items: [
      {
        question: "Who is the league for?",
        paragraphs: [
          "LSHBL is being built for high school students connected with Lebanon High School and Sweet Home High School, together with their families.",
          "A final eligibility rule has not been published. The interest form is a way for a parent or guardian to ask for information. It is not a roster spot.",
        ],
      },
      {
        question: "Do students need bowling experience?",
        paragraphs: [
          "No experience is required to express interest. Beginners and experienced bowlers are both welcome to ask about the league.",
          "The league has not published a skill requirement, a tryout, or an average cutoff.",
        ],
      },
      {
        question: "What does it cost?",
        paragraphs: [
          "Fees for practices, tournaments, shoes, or league dues have not been set.",
          "One reason the league is asking for community support is to reduce financial barriers once real costs are known. Do not send money until the league publishes an approved method.",
        ],
      },
      {
        question: "Is the league an official school team?",
        paragraphs: [
          "This website does not claim official affiliation with a school district, OSAA, or a nonprofit.",
          "School relationships will be described here after they are confirmed in writing.",
        ],
      },
    ],
  },
  {
    id: "practices",
    title: "Practices and equipment",
    items: [
      {
        question: "When and where are practices?",
        paragraphs: [
          "A practice schedule has not been published.",
          "Linn Lanes in Lebanon is the community bowling center the league is building around. Days, times, and lane arrangements are still being confirmed.",
        ],
      },
      {
        question: "Does a student need to own a ball and shoes?",
        paragraphs: [
          "This site does not require students to own a bowling ball or bowling shoes.",
          "Bowling centers often have house balls and rental shoes. Availability, sizes, and cost are not guaranteed for a future practice or tournament. Ask before buying equipment.",
        ],
      },
      {
        question: "What ball weight should a beginner use?",
        paragraphs: [
          "There is no single beginner weight. A useful ball is one the student can swing smoothly without dropping it or forcing the shot.",
          "Under USBC equipment specifications, a bowling ball may not weigh more than 16 pounds. That maximum is not a recommendation to start at 16 pounds.",
        ],
      },
      {
        question: "What is the difference between a house ball and a fitted ball?",
        paragraphs: [
          "A house ball is center equipment with finger holes sized for many people to share. A custom-fitted ball is drilled for one bowler's hand.",
          "A fitted ball is optional. Listing a pro shop on the resources page is not an endorsement of a price or a package.",
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Sponsorships, donations, and volunteering",
    items: [
      {
        question: "How can a business or family help?",
        paragraphs: [
          "You can prepare a sponsorship inquiry, read the donation page, or offer to volunteer. None of those steps collect a payment on this website.",
          "Public recognition requires a verified contribution, the sponsor's consent, and league approval. Proposed recognition levels are labeled as proposals.",
        ],
      },
      {
        question: "Are donations tax deductible?",
        paragraphs: [
          "This site does not state that a gift is tax deductible. Tax status has not been published. Do not treat a contribution as deductible until the league confirms that in writing.",
        ],
      },
      {
        question: "Can I sponsor one student?",
        paragraphs: [
          "Sponsoring a named bowler is not available. The league will not publish student names for sponsorship until a privacy-reviewed process exists.",
          "You can support the league as a whole in the meantime.",
        ],
      },
      {
        question: "How do adults volunteer?",
        paragraphs: [
          "Volunteer roles, background-check requirements, and transportation rules have not been adopted.",
          "The contact page explains how to reach the league once an official email is published. This website does not collect screening applications.",
        ],
      },
    ],
  },
  {
    id: "bowling",
    title: "Bowling basics",
    intro: "These notes describe standard tenpin bowling. They are not LSHBL rules. Event rules will control when the league publishes them.",
    items: [
      {
        question: "How does scoring work?",
        paragraphs: [
          "A game has 10 frames. In each of the first nine frames, a bowler rolls up to two balls unless the first ball is a strike.",
          "A strike scores 10 plus the next two deliveries. A spare scores 10 plus the next delivery. An open frame scores only the pins knocked down with those two deliveries. In the 10th frame, a strike earns two extra deliveries and a spare earns one extra delivery.",
        ],
      },
      {
        question: "What is a Baker game?",
        paragraphs: [
          "USBC describes the Baker system as two or more bowlers following one another in order. Each bowler completes one frame, and the 10 frames together are one team score.",
          "LSHBL has not chosen a lineup size or confirmed that Baker scoring will be used.",
        ],
      },
      {
        question: "What is lane courtesy?",
        paragraphs: [
          "Lane courtesy means waiting so you do not distract a bowler who is already on the approach. Many centers use one-lane courtesy: if two bowlers on neighboring lanes are both ready, the bowler on the right goes first.",
          "The center will say which courtesy applies. This page does not set a league rule.",
        ],
      },
    ],
  },
]

export const etiquette = {
  bowlers: [
    "Keep phones put away while bowling.",
    "Be ready when it is your turn.",
    "Follow the coach or center staff.",
    "Respect lane courtesy.",
    "Encourage teammates.",
    "Show good sportsmanship.",
    "Keep food and drinks away from the approach.",
  ],
  spectators: [
    "Let coaches coach.",
    "Keep voices low while someone is on the approach.",
    "Cheer between shots.",
    "Stay in spectator areas.",
    "Ask permission before sharing photographs of students.",
  ],
}
