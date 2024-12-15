import React from "react";
import venueImg from "../../Assets/Image/conferencewindmill.png"; // Replace with actual path
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
      textColor: "text-[#313131]",
      titleColor: "text-[#066C16]",
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
      textColor: "text-[#313131]",
      titleColor: "text-[#066C16]",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="w-[85%] mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-[50px] font-sans font-bold text-gray-800">
            Elevate Your Brand
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600 leading-[28px]">
            Position your brand alongside the leaders of industry and policy at
            the 1st Annual Legislative Summit and Expo on Renewable Energy
            (RENEW NIGERIA), where public and private decision makers come
            together to push progress forward on energy security in Nigeria.
            <br />
            <br />
            • <strong>Global Visibility:</strong> Gain prominent exposure before
            decision-makers and influencers.
            <br />
            • <strong>Networking:</strong> Forge valuable connections with
            industry leaders and potential partners.
            <br />
            • <strong>Global Brand Alignment:</strong> Associate your brand with
            sustainability initiatives.
            <br />
            • <strong>Community Impact:</strong> Contribute to the growth and
            development of Renewable Energy in Nigeria.
          </p>
        </div>

        {/* Sponsorship Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {sponsorships.map((sponsor, index) => (
            <div
              key={index}
              className={`flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row ${sponsor.bgColor || "bg-white"}`}
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={sponsor.image}
                  alt={sponsor.title}
                  className="object-cover w-full h-[250px] md:h-full"
                />
              </div>

              {/* Content Section */}
              <div className={`p-6 md:w-1/2 ${sponsor.textColor}`}>
                <h3 className={`text-xl font-bold mb-4 ${sponsor.titleColor}`}>
                  {sponsor.title}
                </h3>
                <p className="text-sm leading-relaxed">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevateYourBrand;
