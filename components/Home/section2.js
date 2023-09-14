import Link from "next/link";
import React from "react";

function Section2() {
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="sectionInnerContainer">
          <div className="flex-row gap-32 flex-center-align-item">
            <div className="width-50 pd-32">
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                <img
                  className="sectionImage"
                  src="../zerotier-smart-phone-in-hand-vector-illustration.png"
                  alt="ZeroTier illustration"
                />
              </div>
            </div>
            <div className="width-50 pd-16">
              <h3 className="headingH3Section">It just works</h3>
              <div
                style={{ fontSize: "clamp(18px,4.5vw,24px)", lineHeight: 1.5 }}
              >
                <p>
                  ZeroTier combines the capabilities of <b>VPN</b> and{" "}
                  <b>SD-WAN</b>, simplifying network management. Enjoy
                  flexibility while avoiding costly hardware vendor lock-in.
                </p>
              </div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link className="learnMoreButton" href="/features/">
                    Learn more ›
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-row gap-32 flex-center-align-item">
            <div className="width-50 pd-16">
              <h3 className="headingH3Section">
                Speed, flexibility, and security
              </h3>
              <div
                style={{ fontSize: "clamp(18px,4.5vw,24px)", lineHeight: 1.5 }}
              >
                <p>
                  Set up ZeroTier in minutes with remote, automated deployment.
                </p>
                <p>
                  Emulates Layer 2 Ethernet with multipath, multicast, and
                  bridging capabilities.
                </p>
                <p>
                  ZeroTier’s zero-trust networking solution provides scalable
                  security with 256-bit end-to-end encryption.
                </p>
              </div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <a className="learnMoreButton" href="/features/">
                    Get ZeroTier
                  </a>
                </li>
              </ul>
            </div>
            <div className="width-50 pd-32">
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                <img
                  className="sectionImage"
                  src="../secure-technology.png"
                  alt="Secure technology illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
