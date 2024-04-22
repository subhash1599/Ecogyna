
import React from "react";
import TeamMember from "./TeamMember";
import Team1 from "../assets/about-us-social-media-team-01.png";
import Team2 from "../assets/about-us-social-media-team-02.png";
import Team3 from "../assets/about-us-product-team-01.png";
import Team4 from "../assets/about-us-product-team-02.png";
import Team5 from "../assets/about-us-product-team-03.png";

function TeamSection() {
  const teamMembers = [
    {
      name: "SHRUTHI",
      role: "Social Media",
      description: "Shruthi is in charge of our Instagram...",
      image: Team1,
    },
    {
        name: "URMIL",
        role: "Social Media",
        description:
          "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business here .",
        image: Team2,
      },
      {
        name: "DIVYA",
        role: "UX DESIGN",
        description:
          "Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance",
        image: Team3,
      },
      {
        name: "PRASHANITH",
        role: "ENGINEERING",
        description:
          "Prashanith is our front-end engineer, who brings the UX designs to life",
        image: Team4,
      },
      {
        name: "SAI ABHILASH",
        role: "ENGINEERING",
        description:
          "Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform",
        image: Team5,
      }
  ];

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
