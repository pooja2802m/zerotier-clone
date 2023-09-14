import React from "react";

function NewsletterSignup() {
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="newsletterContainer">
          <div className="newsletterInnerContainer">
            <div className="newsletterDesc" style={{ flex: "1 1 auto" }}>
              <div className="newsletterHeading" style={{ marginBottom: "0" }}>
                Newsletter Signup
              </div>
              <div className="newsletterDetail">
                Join over 325,000 community members worldwide and receive the
                latest news from Team ZeroTier.
              </div>
            </div>
            <div
              className="emailButtonContainer"
              style={{ flex: "1 0 auto", justifyContent: "right" }}
            >
              <div
                style={{ justifyContent: "right" }}
                className="formContainer"
              >
                <div>
                  <input type="email" />
                </div>
                <div className="subscribeButtonContainer">
                  <button className="subscribeButton">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;
