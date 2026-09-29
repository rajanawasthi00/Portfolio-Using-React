import myperson from "../../assets/images/portfolio-images/whatsapp.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
 {
  id: 1,
  title: "Projects Delivered",
  description: "8+",
},
{
  id: 2,
  title: "Technologies Used",
  description: "10+",
},
{
  id: 3,
  title: "Development Services",
  description: "8+",
},
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500"> <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full"> Hello, I’m <span className="text-nowrap shrink-0 inline-block w-full"> Rajan Awasthi </span> </p> <p className="text-xs xxs:text-lg lg:text-[18px] my-6"> I'm a <span className="bg-highlight">Full-Stack Developer</span>{" "} and <span className="bg-highlight">Software Freelancer</span>{" "} based in India. I build modern websites, web applications, backend systems, APIs, and AI-powered solutions with a focus on performance, usability, and real-world business requirements. </p> <p className="text-center lg:text-start"> <a className="btn-primary btn btn-xs xxs:btn-lg text-white" href="https://wa.me/917753079485?text=Hi%20Rajan,%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" > Let's Work Together </a> </p> </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={myperson}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
