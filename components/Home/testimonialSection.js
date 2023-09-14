import React from "react";
import Testimonial from "./testimonialItem";

const TestimonialSection = () => {
  const testimonials = [
    {
      imageSrc: "../user-icon.png",
      testimonialText:
        "In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.",
      testimonialUser: "Peter Boin, Principal Software Engineer, Allume Energy",
    },
    {
      imageSrc: "../user-icon.png",
      testimonialText:
        "ZeroTier provides a robust and essential backbone for our communications stack.",
      testimonialUser:
        "ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS",
    },
    {
      imageSrc: "../user-icon.png",
      testimonialText:
        "Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.",
      testimonialUser: "BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL",
    },
  ];
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="width-100 flex-column center-text-align flex-center-align-item">
          <h2 className="testimonialSectionHeading">
            {"Used by the world's most innovative teams"}
          </h2>
        </div>
        <div style={{ margin: "var(--_1hrp33eu)" }}></div>
        <ul className="testimonialListContainer">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialSection;
