import { FaSmile, FaProjectDiagram, FaHeadset, FaUsers } from 'react-icons/fa'

export const showServices = [
  {
    name: 'Modernization',
    desc: 'If your elevators are outdated or not meeting your current needs, our modernization services can help. We offer upgrades to improve safety, efficiency, and aesthetics, such as new control systems, energy-efficient lighting, and sleek interior design options.',
    imgSrc: '/showCase Assets/modernization-services.jpg'
  },
  {
    name: 'Installation',
    desc: "If you're building a new facility or need to replace an old elevator, we offer full installation services to ensure that your elevators are installed correctly and safely. We work with a variety of elevator types and brands, and can customize your installation to meet your specific needs.",
    imgSrc: '/showCase Assets/installation.jpg'
  },
  {
    name: 'Maintenance',
    desc: "Regular maintenance is crucial to the longevity and performance of your elevators. Our maintenance services include inspection, cleaning, lubrication, adjustment, and replacement of worn components. We offer customized maintenance plans based on your specific needs and the type of elevator you have.",
    imgSrc: '/showCase Assets/maintanance.jpg'
  },
  {
    name: 'Repair',
    desc: "When your elevators break down, you need quick and reliable repair services to minimize downtime and inconvenience. Our technicians are available 24/7 to diagnose and repair any issues you may be experiencing, from minor malfunctions to major repairs.",
    imgSrc: '/showCase Assets/elevator-repair.jpg'
  }
]


export const stats = [
  { id: 1, icon: <FaSmile size={40} />, title: 'Happy Clients' },
  { id: 2, icon: <FaProjectDiagram size={40} />, title: 'Projects' },
  { id: 3, icon: <FaHeadset size={40} />, title: 'Hours Of Support' },
  { id: 4, icon: <FaUsers size={40} />, title: 'Hard Workers' }
]


export const services = [
  { id: 1, title: 'Controllers and Drivers', imgSrc: '/showCase Assets/controller-and-drives.jpg' },
  { id: 2, title: 'Machines', imgSrc: '/showCase Assets/Machines.jpg' },
  { id: 3, title: 'Electronic Components', imgSrc: '/showCase Assets/Electronics-components.jpg' },
  { id: 4, title: 'COP & LOP', imgSrc: '/showCase Assets/COP & LOP.jpg' },
  { id: 5, title: 'Door System', imgSrc: '/showCase Assets/door-system.jpg' },
  { id: 6, title: 'Mechanical safety and components', imgSrc: '/showCase Assets/Machinical safety and components.jpg' },
];

export const logos = [
  "/logos/brand1.jpg",
  "/logos/brand1.jpg",
  "/logos/brand1.jpg",
  "/logos/brand1.jpg",
  "/logos/brand1.jpg",
  "/logos/brand1.jpg",
];

export const faqs = [
  { question: 'What types of elevator parts do you supply?', answer: 'We supply a wide range of elevator parts including motors, control panels, and safety devices.' },
  { question: 'Are your elevator parts compatible with all elevator brands?', answer: 'Yes, our parts are compatible with most major elevator brands.' },
  { question: 'How can I order elevator parts from your company?', answer: 'You can order parts by contacting our sales team or through our website.' },
  { question: 'What is the lead time for delivery of elevator parts?', answer: 'Delivery lead time is typically 5-7 business days, depending on availability.' },
  { question: 'Do you provide installation services for the elevator parts?', answer: 'Yes, we offer professional installation services for our products.' },
  { question: 'What is the warranty period for your elevator parts?', answer: 'Our parts come with a standard one-year warranty.' },
];

export const testimonials = [
  {
    name: "Azam Khan",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    testimonial:
      "Saya Elevator Industries stands out as the finest elevator service provider I've encountered. Their professionalism and commitment to customer satisfaction are truly praiseworthy. They consistently surpass my expectations in everything from elevator installation to maintenance.",
    bgColor: "bg-blue-500",
  },
  {
    name: "Nand Kale",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    testimonial:
      "The service was really quick, attentive, and top-notch. They even stepped up during critical situations like the lockdown period and offered emergency assistance. We're super pleased and thankful for their help.",
    bgColor: "bg-blue-500",
  },
  {
    name: "Sadhana Murti",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    testimonial:
      "They oversee the entire elevator system, and we've experienced no issues thus far. They consistently provide timely maintenance and repairs without any requirement for us to contact them. They conduct comprehensive inspections, delivering excellent service.",
    bgColor: "bg-blue-500",
  },
];


export const menuItems = [{
  title: "Home",
},
{
  title: "Services",
  submenu: [{
    title: "web design",
  },
  {
    title: "web development",
    submenu: [{
      title: "Frontend",
    },
    {
      title: "Backend",
      submenu: [{
        title: "NodeJS",
      },
      {
        title: "PHP",
      },
      ],
    },
    ],
  },
  {
    title: "SEO",
  },
  ],
},
{
  title: "About",
  submenu: [{
    title: "Who we are",
  },
  {
    title: "Our values",
  },
  ],
},
];


export const navLinks = [
  {
    label: "Materials",
    submenu: [
      {
        label: "Mechanical & Safety Component",
        subSubmenu: [
          { label: "Overspeed Governor" },
          { label: "Safety Clutch" },
          { label: "Rope Anchorage" },
          { label: "Guide Shoe" },
          { label: "Diverter Pulley" },
          { label: "Rail Clip" },
          { label: "Bulldog Clip" },
          { label: "Cable Gripper" },
          { label: "Rubber Item" },
          { label: "Oiler" },
          { label: "Bracket" },
          { label: "Keys" },
          { label: "Fastner" },
          { label: "Buffer Spring" },
        ]
      },
      {
        label: "Controller & Drives",
        subSubmenu: [
          { label: "Fuji Drive" },
          { label: "Yaskawa Drive" },
          { label: "INVT-Drive" },
          { label: "Monarch Drive" },
          { label: "Fuji Nova Controller" },
          { label: "Yaskawa Controller" },
          { label: "INVT Controller" },
          { label: "Monarch Controller" },
          { label: "Vega Controller" },
          { label: "Controller Card" },
          { label: "Harness" },
          { label: "UPS With Batteries" },
        ]
      },
      { label: "Electrical Components",
        subSubmenu: [
          { label: "Switch Gear & Relay" },
          { label: "Transformer & Smps" },
          { label: "Cables & Wires" },
          { label: "DBR" },
          { label: "Dinrail" },
          { label: "PVC Truff" },
          { label: "Door Sensor" },
          { label: "Overload Sensor" },
          { label: "Inspection & Junction Box" },
          { label: "Fireman & Emergency Box" },
          { label: "Limit Switch" },
          { label: "Reed Switch" },
        ]
       },
      { label: "COP & LOP",
        subSubmenu: [
          { label: "REVA" },
          { label: "ROYAL" },
          { label: "NEXA" },
          { label: "ORCA" },
          { label: "BCG" },
          { label: "INNOVA" },
          { label: "VISION" },
          { label: "GALAXY" },
          { label: "HANDRAIL COP" },
          { label: "EPAD" },
          { label: "PUSH BUTTONS" },
        ]
       },
       { label: "Cabins & Car Frames",
        subSubmenu:[
          { label: "Access Control" },
          { label: "Lift Announcement System" },
          { label: "Display" },
          { label: "Emergency Light" },
          { label: "Battery Backup" },
          { label: "PCB Boards" },
        ]
       },
       { label: "Eletronic Components",
        subSubmenu:[
          { label: "MAC-FP" },
          { label: "MAC-KP" },
          { label: "MAC-RF" },
          { label: "Door open bell" },
          { label: "MLA" },
          { label: "PCB Boards" },
          { label: "SEVEN SEGMENT REDP" },
          { label: "SEVEN SEGMENT BLUE" },
          { label: "MEL2" },
          { label: "MEL3" },
          { label: "Battery Backup" },
          { label: "MCBS" },
          { label: "MCDB" }
        ]
       },
       { label: "Machines",
        subSubmenu:[
          { label: "Montanari M67" },
          { label: "Montanari M77" },
          { label: "KDS WR-408-100-H" },
          { label: "KDS WR-544-100-H" },
        ]
       },
       { label: "Hydraulic Systems",
        subSubmenu:[
          { label: "Hydraulic Kits" },
          { label: "HC - Homelift" },
          { label: "CT - Telescopic" },
          { label: "CS - Slim" },
          { label: "C97 - Standard" },
          { label: "HOMELIFT HC PUMP UNIT (HYDRAULIC PUMP UNIT WITH SUBMERGED MOTOR)" },
          { label: "HEVOS HE Pump Unit" },
          { label: "HOMELIFT HC PUMP UNIT WITH AIR COOLED & ECO DRY SOLUTION)" },
          { label: "HI Pump Unit" },
        ]
       },
       { label: "Door System",
        subSubmenu:[
          { label: "Collapsible Door 700" },
          { label: "Collapsible Door 800" },
        ]
       },
       { label: "Shaft Component",
        subSubmenu:[
          { label: "Guide Rail" },
          { label: "8mm Wire Rope" },
          { label: "Flat Cable" },
          { label: "Gate Lock Rcam" },
          { label: "Compensation Chain" },
        ]
       },
    ]
  },
  { label: "Services", href:'/service' },
  { label: "About", href:'/about' },
  { label: "Our Clients", href:'/our-clients' },
  { label: "Contact Us", href:'/contact-us'},
];