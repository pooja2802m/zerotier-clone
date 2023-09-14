import React from "react";
import Feature from "./feature";

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "../game-icon.png",
      heading: "Individuals",
      paragraphs: [
        "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
        "Conveniently share files and data, or even play LAN games with others",
        "Manage secure network access to users of choice",
      ],
    },
    {
      imageSrc: "../cloud-icon.png",
      heading: "IT Teams",
      paragraphs: [
        "Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution",
        "Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface",
        "Easily provision remote access for all of your users",
      ],
    },
    {
      imageSrc: "../devops-icon.png",
      heading: "DevOps",
      paragraphs: [
        "Quickly build backplane networks spanning multiple cloud providers",
        "Save on performance, storage, and bandwidth",
        "Administrate and debug from anywhere",
        "Secure corporate network overlay and failover layer",
      ],
    },
    {
      imageSrc: "../global-network.png",
      heading: "Embedded",
      paragraphs: [
        "Enjoy vastly superior network control and functionality",
        "Develop and manage products or services running on their own decentralized networks",
        "Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM",
      ],
    },
  ];
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="width-100 flex-column center-text-align flex-center-align-item">
          <h2 className="testimonialSectionHeading">
            Secure networks for teams of any size
          </h2>
        </div>
        <ul className="featureListContainer">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
