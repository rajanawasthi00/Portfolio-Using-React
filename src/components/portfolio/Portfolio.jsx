import Projects from "./Projects";
import card1 from "../../assets/OIP.webp";
import card2 from "../../assets/pro1.jpeg";
import card3 from '../../assets/chatbot-collecting-feedback-1@2x.png'

const projectData = [
 {
  id: 1,
  image: card1,
  category: "SMM PANEL",
  title: "AWASTRAX PANEL",
  description:
    "Built a complete SMM panel with user authentication, service search and filtering, order management, payment integration, order tracking, and multiple service API integrations.",
  link: "https://awastraxpanel.com/",
},
{
  id: 2,
  image: card2,
  category: "E-COMMERCE",
  title: "PURNWALLA E-COMMERCE",
  description:
    "Built a full-stack e-commerce website with user authentication, OTP login/signup, product and order management, API integration, payment integration, and a responsive user experience.",
  link: "https://purnawalla.com/",
},
{
  id: 3,
  image: card3,
  category: "AI APPLICATION",
  title: "PERSONA AI",
  description:
    "Developing an AI chatbot application with user authentication, customizable AI personas, chat history, profile management, and AI-powered conversations.",
  link: "#",
},
  // {
  //   id: 4,
  //   image: card4,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
  //   link: "#!",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Our Works</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
