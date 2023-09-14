import React from "react";

function Testimonial({ imageSrc, testimonialText, testimonialUser }) {
  return (
    <li className="testimonialListItem">
      <div className="testimonialCardContainer">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained testimonialCardImage">
          {/* Image content */}
          <img src={imageSrc} className="testimonialImage" />
        </div>
        <div>
          <blockquote className="testimonialCardDesc">
            <p>{testimonialText}</p>
            <figcaption>
              <cite className="testimonialUser">{testimonialUser}</cite>
            </figcaption>
          </blockquote>
        </div>
      </div>
    </li>
  );
}

export default Testimonial;
