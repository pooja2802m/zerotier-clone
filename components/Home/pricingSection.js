import Link from "next/link";
import React from "react";

function PricingSection() {
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="width-100 flex-column center-text-align flex-center-align-item">
          <h2 className="testimonialSectionHeading">Pricing</h2>
          <div className="pricingSubHeading">
            ZeroTier makes networking easy for everyone - anywhere.
          </div>
        </div>
        <ul className="pricingListContainer">
          <div className="pricingListItem basicPrice">
            <div style={{ padding: "16px" }} className="pricingListItem">
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained f32bja6j">
                <img src="./white-knockout.png" width={64} height={64} />
              </div>
              <h3 className="priceHeading">Basic</h3>
              <div className="priceDesc">
                For Everyone / ZeroTier Hosted Controller
              </div>
              <div
                style={{
                  fontSize: "var(--_1hrp33e14)",
                  lineHeight: "var(--_1hrp33e1j)",
                }}
              >
                <p>✓ 1 Admin</p>
                <p>✓ 25 Nodes</p>
                <p>✓ Unlimited Networks</p>
                <p>✖ Business SSO: n/a</p>
                <p>✓ Community Support</p>
                <p></p>
                <p>FREE</p>
                <p></p>
              </div>
              <div style={{ margin: "8px" }}></div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link
                    href="https://my.zerotier.com/login?utm_source=ztp"
                    className="learnMoreButton"
                  >
                    Free Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pricingListItem professionalPrice">
            <div style={{ padding: "16px" }} className="pricingListItem">
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained f32bja6j">
                <img src="./orange-knockout.png" width={64} height={64} />
              </div>
              <h3 className="priceHeading">Professional</h3>
              <div className="priceDesc">
                Licensed Only For Individuals and Testing
              </div>
              <div
                style={{
                  fontSize: "var(--_1hrp33e14)",
                  lineHeight: "var(--_1hrp33e1j)",
                }}
              >
                <p>✓ Admins | $10 USD/mo each</p>
                <p>✓ 25 Node Packs | $5 USD/mo</p>
                <p>✓ Unlimited Networks</p>
                <p>✓ Business SSO | $5 USD/mo per seat</p>
                <p>✓ Community Support</p>
                <p>Starting at $5 USD/month</p>

                <p></p>
              </div>
              <div style={{ margin: "8px" }}></div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link
                    href="https://my.zerotier.com/login?utm_source=ztp"
                    className="professionalButton"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pricingListItem businessPrice">
            {/* ... Business Pricing */}
            <div style={{ padding: "16px" }} className="pricingListItem">
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained f32bja6j">
                <img src="./blue-knockout.png" width={64} height={64} />
              </div>
              <h3 className="priceHeading">Business</h3>
              <div className="priceDesc">
                Licensed for Commercial Deployments
              </div>
              <div
                style={{
                  fontSize: "var(--_1hrp33e14)",
                  lineHeight: "var(--_1hrp33e1j)",
                }}
              >
                <p>Use Cases Include:</p>
                <p>∙ IoT</p>
                <p>∙ SD-WAN</p>
                <p>∙ VPN</p>
                <p>∙ Remote Monitoring and Management</p>
                <p>Contact Sales for Pricing</p>
                <p></p>
                <p></p>
              </div>
              <div style={{ margin: "8px" }}></div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link
                    href="https://my.zerotier.com/login?utm_source=ztp"
                    className="businessButton"
                  >
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default PricingSection;
