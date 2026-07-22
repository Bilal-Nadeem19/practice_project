const WhyChooseUs = ({ whyChooseUs }) => {
  return (
    <section
      className="w-full px-4 md:px-6 py-14 md:py-20"
      style={{
        background: "linear-gradient(135deg, #E5F2FF, #F0FAFF)",
      }}
    >
      <div className="max-w-280 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-6 leading-relaxed max-w-2xl mx-auto">
          {whyChooseUs.title}
        </h2>
        <p className="text-textcolor text-center text-base md:text-lg leading-relaxed max-w-220 mx-auto mb-8 md:mb-10">
          {whyChooseUs.description}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-375 mx-auto">
          <div className="bg-[#C5EEFF] rounded-[30px] shadow-sm text-center md:text-left px-8 py-9 md:py-10 md:px-11 w-full md:w-215 min-h-82.5 flex flex-col justify-center transition-transform duration-400 hover:scale-102">
            <h3 className="text-xl md:text-2xl font-bold text-heading mb-4">
              {whyChooseUs.card.heading}
            </h3>
            <p className="text-textcolor text-lg md:text-xl leading-relaxed">
              {whyChooseUs.card.description}
            </p>
          </div>

          <div className="rounded-[30px] shadow-md w-full md:w-150 h-75 overflow-hidden flex justify-center transition-transform duration-400 hover:scale-102">
            <img
              src={whyChooseUs.image}
              alt={whyChooseUs.card.heading}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
