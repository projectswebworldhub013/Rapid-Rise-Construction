// Image Imports
import residentialImg from "../../assets/images/service/s1.avif";
import commercialImg from "../../assets/images/service/s2.jpg";
import interiorImg from "../../assets/images/service/s3.jpg";
import renovationImg from "../../assets/images/service/s4.avif";
import architecturalImg from "../../assets/images/service/s5.jpg";
import turnkeyImg from "../../assets/images/service/s6.jpg";
import structuralImg from "../../assets/images/service/s77.jpg";
import projectManagementImg from "../../assets/images/service/s8.jpg";
import sustainableImg from "../../assets/images/service/s9.jpg";


const servicesData = [
  {
    id: 1,
    path: "/services/residential-construction",
    image: residentialImg,
    title: "Residential Construction",
    shortDescription:
      "End-to-end residential construction solutions focused on quality, durability, and modern living standards.",
    longDescription:
      "Our residential construction services are designed to transform your vision of a perfect home into a strong, elegant, and functional reality. From independent houses and villas to multi-storey residential buildings, we handle every phase with precision and professionalism. We begin with detailed planning, site evaluation, and design coordination to ensure structural safety, optimal space utilization, and long-term durability. High-quality materials, skilled craftsmanship, and strict quality control standards are applied at every stage of construction. Our team ensures timely execution, transparent communication, and adherence to approved budgets. We focus not only on aesthetics but also on comfort, ventilation, natural lighting, and sustainability, creating homes that are future-ready, energy-efficient, and built to last for generations.",
    quickPoints: [
      "Premium build quality",
      "Modern construction methods",
      "Timely project delivery",
      "Customized home solutions",
    ],
    faqs: [
      {
        question: "Do you handle complete residential construction?",
        answer:
          "Yes, we provide complete residential construction services from planning and design to execution and final handover.",
      },
      {
        question: "Can you customize the house design?",
        answer:
          "Absolutely. All residential projects are fully customized based on client preferences, lifestyle, and budget.",
      },
      {
        question: "Do you assist with approvals and documentation?",
        answer:
          "Yes, we assist with necessary approvals, drawings, and technical documentation wherever required.",
      },
      {
        question: "What quality standards do you follow?",
        answer:
          "We follow strict quality control processes, use branded materials, and ensure compliance with construction norms.",
      },
      {
        question: "How long does residential construction take?",
        answer:
          "Project duration depends on size and complexity, but we always commit to realistic timelines and timely delivery.",
      },
    ],
  },

  {
    id: 2,
    path: "/services/commercial-construction",
    image: commercialImg,
    title: "Commercial Construction",
    shortDescription:
      "Professional commercial construction solutions designed for functionality, scalability, and business growth.",
    longDescription:
      "Our commercial construction services cater to offices, retail spaces, showrooms, warehouses, and institutional buildings with a focus on efficiency and long-term performance. We understand the importance of functionality, safety, and aesthetics in commercial environments. Our process includes feasibility analysis, structural planning, space optimization, and compliance with commercial building regulations. We use advanced construction techniques, durable materials, and modern engineering practices to deliver projects that support smooth business operations. Every project is managed with strict timelines, budget control, and safety protocols. Our commercial buildings are designed to accommodate future expansion, ensure energy efficiency, and create a professional environment that enhances brand value and operational productivity.",
    quickPoints: [
      "Business-focused designs",
      "High structural strength",
      "Optimized space planning",
      "Regulation-compliant builds",
    ],
    faqs: [
      {
        question: "What types of commercial projects do you handle?",
        answer:
          "We handle offices, retail spaces, commercial complexes, warehouses, and institutional buildings.",
      },
      {
        question: "Do you follow commercial building norms?",
        answer:
          "Yes, all our projects strictly comply with local commercial construction regulations and safety standards.",
      },
      {
        question: "Can you work within tight deadlines?",
        answer:
          "Yes, we plan efficiently and deploy skilled teams to meet challenging commercial timelines.",
      },
      {
        question: "Do you offer turnkey commercial solutions?",
        answer:
          "Yes, we offer complete turnkey commercial construction solutions.",
      },
      {
        question: "Is cost transparency maintained?",
        answer:
          "Absolutely. We ensure transparent pricing, clear contracts, and regular progress updates.",
      },
    ],
  },

  {
    id: 3,
    path: "/services/interior-designing",
    image: interiorImg,
    title: "Interior Designing",
    shortDescription:
      "Creative and functional interior design solutions that enhance comfort, style, and space efficiency.",
    longDescription:
      "Our interior designing services focus on creating visually appealing, functional, and personalized spaces for homes and commercial properties. We combine creativity with practicality to design interiors that reflect your personality and brand identity. From layout planning and material selection to lighting design and furniture placement, every element is thoughtfully curated. We prioritize ergonomics, space optimization, and modern design trends while ensuring comfort and durability. Our designers work closely with clients to understand preferences, lifestyle, and budget constraints. The result is a cohesive interior environment that enhances usability, aesthetics, and overall experience while maintaining long-lasting quality and easy maintenance.",
    quickPoints: [
      "Custom design concepts",
      "Space optimization",
      "Premium finishes",
      "Modern aesthetics",
    ],
    faqs: [
      {
        question: "Do you offer customized interior designs?",
        answer:
          "Yes, all interior designs are customized to match client preferences and functional needs.",
      },
      {
        question: "Can you handle both residential and commercial interiors?",
        answer:
          "Yes, we design interiors for homes, offices, retail spaces, and commercial establishments.",
      },
      {
        question: "Do you provide 3D visualizations?",
        answer:
          "Yes, 3D designs are provided to help clients visualize the final outcome.",
      },
      {
        question: "What materials do you use?",
        answer:
          "We use high-quality, durable, and branded materials based on design requirements.",
      },
      {
        question: "Is project execution included?",
        answer:
          "Yes, we offer both design-only and complete design-and-execution services.",
      },
    ],
  },

  {
    id: 4,
    path: "/services/renovation-remodeling",
    image: renovationImg,
    title: "Renovation & Remodeling",
    shortDescription:
      "Comprehensive renovation and remodeling solutions to upgrade spaces with modern functionality and style.",
    longDescription:
      "Our renovation and remodeling services are aimed at transforming outdated or underutilized spaces into modern, functional, and aesthetically pleasing environments. Whether it is a residential upgrade or a commercial renovation, we carefully assess the existing structure and develop a detailed renovation plan. Our approach focuses on improving layout efficiency, upgrading materials, enhancing safety, and modernizing the overall look. We ensure minimal disruption during execution while maintaining strict quality standards. By combining innovative design solutions with skilled workmanship, we deliver renovated spaces that feel new, perform better, and add long-term value to the property.",
    quickPoints: [
      "Modern upgrades",
      "Efficient space redesign",
      "Minimal disruption",
      "Quality workmanship",
    ],
    faqs: [
      {
        question: "Can you renovate occupied spaces?",
        answer:
          "Yes, we plan renovations to minimize disruption for occupied residential or commercial spaces.",
      },
      {
        question: "Do you offer partial renovations?",
        answer:
          "Yes, we handle both partial and full renovation projects.",
      },
      {
        question: "Will the existing structure be assessed?",
        answer:
          "Yes, a thorough structural assessment is conducted before renovation begins.",
      },
      {
        question: "Can old designs be modernized?",
        answer:
          "Absolutely. We specialize in modernizing outdated layouts and interiors.",
      },
      {
        question: "Is renovation cost-effective?",
        answer:
          "Yes, renovation is often a cost-effective way to upgrade and add value to a property.",
      },
    ],
  },

  {
    id: 5,
    path: "/services/architectural-3d-design",
    image: architecturalImg,
    title: "Architectural & 3D Design",
    shortDescription:
      "Advanced architectural planning and 3D design services for accurate visualization and execution.",
    longDescription:
      "Our architectural and 3D design services provide a strong foundation for successful construction projects. We develop detailed architectural plans that balance aesthetics, functionality, and structural integrity. Using advanced 3D visualization tools, we create realistic representations of the project, allowing clients to visualize spaces before execution. This approach minimizes errors, improves decision-making, and ensures alignment with client expectations. Our designs consider site conditions, regulations, sustainability, and future usability. By integrating architectural expertise with modern visualization techniques, we deliver designs that are practical, visually appealing, and construction-ready.",
    quickPoints: [
      "Accurate planning",
      "Realistic 3D views",
      "Design clarity",
      "Regulation compliance",
    ],
    faqs: [
      {
        question: "Why is 3D design important?",
        answer:
          "3D designs help visualize the project clearly and reduce execution errors.",
      },
      {
        question: "Do you provide working drawings?",
        answer:
          "Yes, we provide detailed working drawings for construction.",
      },
      {
        question: "Are designs customizable?",
        answer:
          "Yes, designs are fully customizable based on client requirements.",
      },
      {
        question: "Do you follow local building regulations?",
        answer:
          "Yes, all designs comply with applicable building regulations.",
      },
      {
        question: "Can designs be revised?",
        answer:
          "Yes, revisions are provided to ensure complete client satisfaction.",
      },
    ],
  },

  {
    id: 6,
    path: "/services/turnkey-construction-solutions",
    image: turnkeyImg,
    title: "Turnkey Construction Solutions",
    shortDescription:
      "Complete turnkey construction solutions offering a single point of responsibility from start to finish.",
    longDescription:
      "Our turnkey construction solutions provide clients with a hassle-free experience by managing the entire project lifecycle under one roof. From initial planning and design to construction, interiors, and final handover, we take complete responsibility for execution. This approach ensures seamless coordination, cost control, and timely delivery. Clients benefit from a single point of contact, reduced risks, and consistent quality throughout the project. We focus on transparency, efficiency, and precision, delivering ready-to-use spaces that meet functional, aesthetic, and structural expectations without the complexity of managing multiple vendors.",
    quickPoints: [
      "Single point responsibility",
      "End-to-end execution",
      "Cost control",
      "Timely handover",
    ],
    faqs: [
      {
        question: "What is a turnkey project?",
        answer:
          "A turnkey project is delivered fully completed and ready for immediate use.",
      },
      {
        question: "Do clients need to coordinate vendors?",
        answer:
          "No, we manage all vendors and execution processes.",
      },
      {
        question: "Is cost transparency maintained?",
        answer:
          "Yes, we provide clear costing and detailed project breakdowns.",
      },
      {
        question: "Can turnkey projects be customized?",
        answer:
          "Yes, customization is incorporated at every stage.",
      },
      {
        question: "Is quality monitored throughout?",
        answer:
          "Yes, continuous quality checks are conducted at every phase.",
      },
    ],
  },

  {
    id: 7,
    path: "/services/structural-engineering-supervision",
    image: structuralImg,
    title: "Structural Engineering & Supervision",
    shortDescription:
      "Expert structural engineering and supervision services ensuring safety, stability, and compliance.",
    longDescription:
      "Our structural engineering and supervision services ensure that every construction project is safe, stable, and built to withstand long-term usage. We conduct detailed structural analysis, load calculations, and material assessments to design robust frameworks. During execution, our engineers provide on-site supervision to ensure correct implementation of designs and adherence to safety standards. We focus on risk mitigation, durability, and compliance with engineering codes. This service ensures peace of mind for clients, knowing their structures are technically sound, legally compliant, and built for long-term performance.",
    quickPoints: [
      "Structural safety",
      "Technical supervision",
      "Load analysis",
      "Code compliance",
    ],
    faqs: [
      {
        question: "Why is structural engineering important?",
        answer:
          "It ensures safety, stability, and long-term durability of structures.",
      },
      {
        question: "Do you provide site supervision?",
        answer:
          "Yes, our engineers supervise execution on-site.",
      },
      {
        question: "Are designs compliant with standards?",
        answer:
          "Yes, all designs follow applicable engineering codes.",
      },
      {
        question: "Can you assess existing structures?",
        answer:
          "Yes, we provide structural assessment services.",
      },
      {
        question: "Do you handle structural repairs?",
        answer:
          "Yes, we offer structural strengthening and repair solutions.",
      },
    ],
  },

  {
    id: 8,
    path: "/services/project-management-consultancy",
    image: projectManagementImg,
    title: "Project Management & Consultancy",
    shortDescription:
      "Professional project management and consultancy services ensuring efficiency, quality, and timely delivery.",
    longDescription:
      "Our project management and consultancy services focus on planning, coordinating, and controlling construction projects to achieve defined objectives. We manage schedules, budgets, quality standards, and risk factors throughout the project lifecycle. Our structured approach ensures smooth coordination between stakeholders, contractors, and suppliers. By applying industry best practices and proven methodologies, we help clients minimize delays, control costs, and maintain quality. Our consultancy services provide strategic guidance, technical insights, and decision-making support to ensure project success.",
    quickPoints: [
      "Strategic planning",
      "Cost optimization",
      "Schedule control",
      "Quality assurance",
    ],
    faqs: [
      {
        question: "What does project management include?",
        answer:
          "It includes planning, execution, monitoring, and project control.",
      },
      {
        question: "Do you manage contractors?",
        answer:
          "Yes, we coordinate and manage all project stakeholders.",
      },
      {
        question: "Can you reduce project risks?",
        answer:
          "Yes, risk assessment and mitigation are core components.",
      },
      {
        question: "Is consultancy available independently?",
        answer:
          "Yes, consultancy services can be availed separately.",
      },
      {
        question: "Do you ensure quality compliance?",
        answer:
          "Yes, quality standards are monitored throughout the project.",
      },
    ],
  },

  {
    id: 9,
    path: "/services/sustainable-green-building-solutions",
    image: sustainableImg,
    title: "Sustainable & Green Building Solutions",
    shortDescription:
      "Eco-friendly and sustainable building solutions focused on efficiency, responsibility, and future readiness.",
    longDescription:
      "Our sustainable and green building solutions focus on reducing environmental impact while enhancing efficiency and comfort. We integrate eco-friendly materials, energy-efficient systems, and sustainable construction practices into our projects. Our approach includes optimizing natural lighting, ventilation, water management, and energy consumption. By adopting green building principles, we help clients reduce operational costs and contribute to environmental responsibility. These solutions are designed to meet modern sustainability standards while maintaining durability, aesthetics, and long-term value.",
    quickPoints: [
      "Eco-friendly materials",
      "Energy efficiency",
      "Reduced carbon footprint",
      "Future-ready buildings",
    ],
    faqs: [
      {
        question: "What is green building?",
        answer:
          "Green building focuses on sustainability and environmental responsibility.",
      },
      {
        question: "Are green buildings cost-effective?",
        answer:
          "Yes, they reduce long-term operational and energy costs.",
      },
      {
        question: "Do you use sustainable materials?",
        answer:
          "Yes, we prioritize eco-friendly and sustainable materials.",
      },
      {
        question: "Can existing buildings be upgraded?",
        answer:
          "Yes, we offer green retrofitting solutions.",
      },
      {
        question: "Are green solutions durable?",
        answer:
          "Yes, sustainability and durability go hand in hand in our designs.",
      },
    ],
  },
];

export default servicesData;
