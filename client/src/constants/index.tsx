import {
  GrowIcon,
  ScreenIcon,
  ShieldCheck,
} from "components/layout/svgIcon/SvgIcon";

export const propertyReferralsInfo = [
  {
    title: "Your security password has been successfully changed",
    time: "10 minutes ago",
    icon: <ShieldCheck />,
  },
  {
    title:
      "A new version of the software has been added that has changed the UI/UX",
    time: "Thursday 2:20pm",
    icon: <ScreenIcon />,
  },
  {
    title: "Property sales have increased by 15%! Keep up the great work!",
    time: "Friday 5:43am",
    icon: <GrowIcon />,
  },
  {
    title: "You have an unread message from Tony",
    time: " 30 minutes ago",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
  },
];

export const messageData = [
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    name: "Tony Reichert",
    message: [
      { id: 1, text: "Hello! How can I help you?", sender: "landlord" },
      {
        id: 2,
        text: "I have a question about the property.",
        sender: "tenant",
      },
    ],
    status: "online",
    role: "Landlord",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    name: "Jane Smith",
    message: [
      { id: 1, text: "Is the property still available?", sender: "tenant" },
      {
        id: 2,
        text: "Yes, it is. Would you like to schedule a visit?",
        sender: "landlord",
      },
      {
        id: 3,
        text: "Yes, that would be great. How about tomorrow?",
        sender: "tenant",
      },
      {
        id: 4,
        text: "Tomorrow works! I'll confirm the timing.",
        sender: "landlord",
      },
    ],
    status: "online",
    role: "Tenant",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    name: "John Doe",
    message: [
      {
        id: 1,
        text: "Can I get more pictures of the property?",
        sender: "tenant",
      },
      { id: 2, text: "Sure, I’ll send them over shortly.", sender: "landlord" },
      { id: 3, text: "Thank you! That would be helpful.", sender: "tenant" },
    ],
    status: "offline",
    role: "Landlord",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
    name: "Sara Johnson",
    message: [
      { id: 1, text: "When is the rent due?", sender: "tenant" },
      {
        id: 2,
        text: "Rent is due on the 1st of every month.",
        sender: "landlord",
      },
      {
        id: 3,
        text: "Got it. Are there any late fees if I miss the date?",
        sender: "tenant",
      },
      {
        id: 4,
        text: "Yes, a late fee of $50 applies after the 5th.",
        sender: "landlord",
      },
    ],
    status: "online",
    role: "Tenant",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    name: "Michael Brown",
    message: [
      {
        id: 1,
        text: "Can I extend the lease by six months?",
        sender: "tenant",
      },
      { id: 2, text: "Let me check and get back to you.", sender: "landlord" },
      { id: 3, text: "Thanks! Please let me know soon.", sender: "tenant" },
      {
        id: 4,
        text: "I’ve checked, and it’s possible. Let’s discuss the new terms.",
        sender: "landlord",
      },
    ],
    status: "offline",
    role: "Landlord",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
    name: "Emily Davis",
    message: [
      {
        id: 1,
        text: "Is parking available at the property?",
        sender: "tenant",
      },
      {
        id: 2,
        text: "Yes, there’s a dedicated parking space.",
        sender: "landlord",
      },
      {
        id: 3,
        text: "Great! Are there any additional charges for parking?",
        sender: "tenant",
      },
      {
        id: 4,
        text: "No, parking is included in the rent.",
        sender: "landlord",
      },
    ],
    status: "online",
    role: "Tenant",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
    name: "Daniel Wilson",
    message: [
      {
        id: 1,
        text: "Hi, I’m interested in the property on Elm Street.",
        sender: "tenant",
      },
      {
        id: 2,
        text: "Hi Daniel! It’s still available. Would you like to visit?",
        sender: "landlord",
      },
      { id: 3, text: "Yes, I’m available this weekend.", sender: "tenant" },
      {
        id: 4,
        text: "Perfect. Let’s set up a time for Saturday morning.",
        sender: "landlord",
      },
      { id: 5, text: "Saturday morning works. Thanks!", sender: "tenant" },
    ],
    status: "offline",
    role: "Landlord",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    name: "Sophia Martinez",
    message: [
      {
        id: 1,
        text: "What’s the pet policy for this property?",
        sender: "tenant",
      },
      {
        id: 2,
        text: "Pets are allowed, but there’s a deposit required.",
        sender: "landlord",
      },
      { id: 3, text: "How much is the deposit?", sender: "tenant" },
      { id: 4, text: "$300, refundable upon move-out.", sender: "landlord" },
    ],
    status: "online",
    role: "Tenant",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png",
    name: "Liam Taylor",
    message: [
      { id: 1, text: "Are utilities included in the rent?", sender: "tenant" },
      {
        id: 2,
        text: "No, utilities are billed separately based on usage.",
        sender: "landlord",
      },
      { id: 3, text: "Got it. Thanks for clarifying!", sender: "tenant" },
    ],
    status: "offline",
    role: "Landlord",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
    name: "Olivia Adams",
    message: [
      { id: 1, text: "Is the neighborhood safe?", sender: "tenant" },
      {
        id: 2,
        text: "Yes, it’s one of the safest in the city.",
        sender: "landlord",
      },
      { id: 3, text: "That’s reassuring. Thanks!", sender: "tenant" },
    ],
    status: "online",
    role: "Tenant",
  },
  {
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
    name: "Ethan Clark",
    message: [
      {
        id: 1,
        text: "Can I paint the walls of the apartment?",
        sender: "tenant",
      },
      {
        id: 2,
        text: "Yes, but please restore them to the original color before moving out.",
        sender: "landlord",
      },
      { id: 3, text: "Sure! That won’t be an issue.", sender: "tenant" },
    ],
    status: "offline",
    role: "Landlord",
  },
];

// export const rentedPropertiesData = [
//   {
//     propertyName: "",
//     applicationStatus: "Pending",
//     landlordContact: "+2348088127367",
//     submissionDate: "20-10-2025",
//   },
// ];

export const rentedPropertiesData = [
  {
    propertyName: "Rosewood Apartments",
    applicationStatus: "Pending",
    landlordContact: "+2348088127367",
    submissionDate: "20-10-2025",
  },
  {
    propertyName: "Maple Creek Villas",
    applicationStatus: "Approved",
    landlordContact: "+2348076541234",
    submissionDate: "15-09-2025",
  },
  {
    propertyName: "Sunnydale Residences",
    applicationStatus: "Rejected",
    landlordContact: "+2348098765432",
    submissionDate: "01-11-2025",
  },
  {
    propertyName: "Blue Horizon Condos",
    applicationStatus: "Pending",
    landlordContact: "+2348023456789",
    submissionDate: "30-10-2025",
  },
  {
    propertyName: "Greenfield Estates",
    applicationStatus: "Approved",
    landlordContact: "+2348034567890",
    submissionDate: "25-10-2025",
  },
  {
    propertyName: "Riverside Manor",
    applicationStatus: "Pending",
    landlordContact: "+2348081234567",
    submissionDate: "22-10-2025",
  },
  {
    propertyName: "Lakeview Terraces",
    applicationStatus: "Rejected",
    landlordContact: "+2348078901234",
    submissionDate: "10-09-2025",
  },
  {
    propertyName: "Silver Oak Residences",
    applicationStatus: "Pending",
    landlordContact: "+2348056789123",
    submissionDate: "05-10-2025",
  },
  {
    propertyName: "Hilltop Heights",
    applicationStatus: "Approved",
    landlordContact: "+2348091234567",
    submissionDate: "18-10-2025",
  },
  {
    propertyName: "Palm Grove Apartments",
    applicationStatus: "Pending",
    landlordContact: "+2348045678901",
    submissionDate: "21-10-2025",
  },
];
