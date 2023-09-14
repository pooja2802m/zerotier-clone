import Link from "next/link";
import React from "react";

function ServiceProviderSection() {
  return (
    <div className="enterpriseContainer">
      <section className="sectionContainer">
        <div className="enterpriseInnerContainer">
          <div className="enterpriseSectionsContainer">
            <div className="enterpriseImageContainter">
              <img src="./sp-sales-graphs.png" width={315} height={315} />
            </div>
            <div className="enterpriseMainContainter">
              <h2 className="enterpriseHeading">Service Providers</h2>
              <div className="enterpriseDes">
                For hardware and software companies interested in embedding or
                integrating the ZeroTier platform within their service offering,
                as well as enterprise-facing channels including Managed Service
                Providers (MSPs), Resellers, and Systems Integrators.
              </div>
              <div style={{ margin: "32px" }}></div>
              <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
                <li>
                  <Link
                    className="enterpriseButton"
                    href="/contact/?utm_source=ztpE"
                  >
                    Contact SP Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceProviderSection;
