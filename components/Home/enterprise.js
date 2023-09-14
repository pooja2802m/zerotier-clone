import Link from "next/link";
import React from "react";

function EnterpriseSection() {
  return (
    <div className="enterpriseContainer">
      <section className="sectionContainer">
        <div className="enterpriseInnerContainer">
          <div className="enterpriseSectionsContainer">
            <div className="enterpriseMainContainter">
              <h2 className="enterpriseHeading">ZeroTier Enterprise</h2>
              <div className="enterpriseDes">
                For high-volume VPN, IoT, edge, embedded networking, multi &
                hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.
              </div>
              <div style={{ margin: "32px" }}></div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link className="enterpriseButton" href="/contact/?utm_source=ztpE">
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
            <div className="enterpriseImageContainter">
              <img
                src="./continuous-integration.png"
                width={315}
                height={315}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnterpriseSection;
