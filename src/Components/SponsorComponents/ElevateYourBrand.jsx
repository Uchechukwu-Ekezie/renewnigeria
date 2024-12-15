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
      bgColor: "bg-green-500",
    },
    {
      title: "Conference Sponsorship",
      description:
        "Enhance your brand presence at Nigeria Energy's high-level conferences through comprehensive sponsorship packages. Gain visibility via online and printed conference agendas, delegate bags, wall panels, and exclusive giveaways.",
      image: conferenceImg,
      bgColor: "bg-blue-500",
    },
    {
      title: "Networking Event Sponsorship",
      description:
        "Highlight your brand at our networking event with sponsorship opportunities that include banners, social media coverage, floor banners, running promotional videos, and much more.",
      image: networkingImg,
      bgColor: "bg-green-600",
    },
    {
      title: "Hosted buyers & investor program sponsorship",
      description:
        "Secure unparalleled exposure to the key decision-makers involved in driving Nigeria Energy's success. Take advantage of our exclusive investor programs to ensure that your brand stands out and makes meaningful connections.",
      image: hostedImg,
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Elevate Your Brand
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Position your brand alongside the leaders of industry and policy at the 1st Annual
Legislative Summit and Expo on Renewable Energy (RENEW NIGERIA), where public and private decision makers come together to push progress forward on energy security
in Nigeria.

• Global Visibility: Gain prominent exposure before a diverse audience of decisionmakers
and influencers.
• Networking: Forge valuable connections with industry leaders and potential
partners.
• Global Brand Alignment: Associate your brand with initiatives driving economic
development and sustainability
• Community Impact: contribute to the growth and development of Renewable Energy in Nigeria
          </p>
        </div>
        
        {/* Sponsorship Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {sponsorships.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={sponsor.image}
                  alt={sponsor.title}
                  className="object-cover w-full h-48 md:h-full"
                />
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 p-6 text-white ${sponsor.bgColor}`}
              >
                <h3 className="text-xl font-bold mb-4">{sponsor.title}</h3>
                <p className="text-sm leading-relaxed">
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
