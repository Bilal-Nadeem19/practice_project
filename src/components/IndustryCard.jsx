import iconMap from "../utils/iconMap";

const IndustryCard = ({ icon, title, description, link, large, descColor }) => {
  const Icon = iconMap[icon] || iconMap["help-circle"];

  return (
    <div
      className={`flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl ${
        large ? "p-4" : "p-6"
      }`}
      style={{
        transition: "box-shadow 250ms ease-out, transform 400ms ease-out 400ms",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className={`flex items-center gap-4 ${large ? "mb-5" : "mb-4"}`}>
        <div
          className={`bg-sky-50 rounded-xl flex items-center justify-center ${
            large ? "w-16 h-16" : "w-11 h-11 sm:w-12 sm:h-12"
          }`}
        >
          <Icon className={large ? "w-7 h-7 text-primary" : "w-5 h-5 sm:w-6 sm:h-6 text-primary"} />
        </div>
        <h3
          className={`font-poppins font-bold text-heading ${
            large ? "text-[20px]" : "text-[17px]"
          }`}
        >
          {title}
        </h3>
      </div>

      <p
        className={`font-normal font-poppins leading-normal ${
          large ? "text-[16px] mb-6" : "text-[12px] mb-4"
        }`}
        style={{ color: descColor || "#4B5563" }}
      >
        {description}
      </p>

      
        <a href={link}
        className={`text-[#0097DA] font-medium hover:underline self-start ${
          large ? "text-[15px]" : "text-[12px]"
        }`}
      >
        Learn More
      </a>
    </div>
  );
};

export default IndustryCard;