import React from "react";
import venueImg from "../../Assets/Image/venueImg.png"; // Replace with actual path
import conferenceImg from "../../Assets/Image/conferencepeople.png";
import networkingImg from "../../Assets/Image/networking.jfif";
import hostedImg from "../../Assets/Image/cleaninglady.png";

const ElevateYourBrand = () => {
  const sponsorships = [
    {
      title: "Venue sponsorship",
      description:
        "Explore a diverse array of sponsorship opportunities with Nigeria Energy, featuring branded walkways, flags, push hanging banners, and more. Leave a lasting impression on attendees and boost your brand's visibility with meticulously crafted promotional items.",
      image: venueImg,
      bgColor: "bg-[#066C16]",
      textColor: "text-white",
      titleColor: "text-white",
    },
    {
      title: "Conference Sponsorship",
      description:
        "Enhance your brand presence at Nigeria Energy's high-level conferences through comprehensive sponsorship packages. Gain visibility via online and printed conference agendas, delegate bags, wall panels, and exclusive giveaways.",
      image: conferenceImg,
      textColor: "text-[#313131]", // Black text
      titleColor: "text-[#066C16]", // Green title
    },
    {
      title: "Networking Event Sponsorship",
      description:
        "Highlight your brand at our networking event with sponsorship opportunities that include banners, social media coverage, floor banners, running promotional videos, and much more.",
      image: networkingImg,
      bgColor: "bg-[#066C16]",
      textColor: "text-white",
      titleColor: "text-white",
    },
    {
      title: "Hosted buyers & investor program sponsorship",
      description:
        "Secure unparalleled exposure to the key decision-makers involved in driving Nigeria Energy's success. Take advantage of our exclusive investor programs to ensure that your brand stands out and makes meaningful connections.",
      image: hostedImg,
      textColor: "text-[#313131]", // Black text
      titleColor: "text-[#066C16]", // Green title
    },
  ];

  return (
    <section className="w-full h-full py-12 ">
      <div className="max-w-[1280px]  mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-8 w-[98%]">
          <h2 className="text-center text-[50px] font-sanss font-bold text-[#313131] md:text-4xl leading-[60px]">
            Elevate Your Brand
          </h2>
          <div className="w-12 h-1 bg-[#000000] mx-auto mb-[40px] mt-[30px]"></div>
          
          <div className="mt-4 text-gray-600 text-[18px] font-sans mx-auto">
            <p>
              Position your brand alongside the leaders of industry and policy
              at the 1st Annual Legislative Summit and Expo on Renewable Energy
              (RENEW NIGERIA), where public and private decision makers come
              together to push progress forward on energy security in Nigeria.
            </p>
            <br />
            <p>
              • Global Visibility: Gain prominent exposure before a diverse
              audience of decisionmakers and influencers.
            </p>
            <p>
              • Networking: Forge valuable connections with industry leaders and
              potential partners.
            </p>
            <p>
              • Global Brand Alignment: Associate your brand with initiatives
              driving economic development and sustainability.
            </p>
            <p>
              • Community Impact: contribute to the growth and development of
              Renewable Energy in Nigeria.
            </p>
          </div>
        </div>

        {/* Sponsorship Cards */}
        <div className="grid gap-6 mx-auto sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:max-w-[1072px]">
          {sponsorships.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden md:flex-row"
            >
              {/* Image */}
              <div className="w-full lg:w-[536px] md:w-1/2">
                <img
                  src={sponsor.image}
                  alt={sponsor.title}
                  className="object-cover w-full h-52 md:h-full lg:h-[357px] -translate-y-"
                  style={{ objectPosition: "center"
      
                    
                   }}
                />
              </div>

              {/* Content */}
              <div
                className={`lg:w-[50%] mx-auto md:w-1/2 pt-[67.2px] lg:pl-[30px] pb-5  px-5 ${
                  sponsor.bgColor || "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font[500]  font-sanss text-[25px] leading-[35px] mb-[34px] ${
                    sponsor.titleColor || "text-white"
                  }`}
                >
                  {sponsor.title}
                </h3>
                <p
                  className={`font-sanss text-[18px] font-[400] leading-[28px] lg:max-w-[492px] ${
                    sponsor.textColor || "text-white"
                  }`}
                >
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevateYourBrand;
