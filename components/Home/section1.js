import Link from "next/link";

const Section1 = () => {
  return (
    <div className="section1MainContainer">
      <div className="sectionDisplayGrid">
        <div className="gatsby-image-wrapper-constrained gatsby-image-wrapper sectionBackground">
          <div
            aria-hidden="true"
            data-placeholder-image=""
            className="sec0"
          ></div>
          <div className="sec"></div>
          <div className="sectionContent">
            <div className="pd-left-right-32 width-100">
              <div className="flex-row gap-32 flex-center-align-item">
                <div className="sec2">
                  <h1 className="headingH1">
                    Securely connect any device, anywhere.
                  </h1>
                  <div className="secDesc">
                    ZeroTier lets you build modern, secure multi-point
                    virtualized networks of almost any type. From robust
                    peer-to-peer networking to multi-cloud mesh infrastructure,
                    we enable global connectivity with the simplicity of a local
                    network.
                  </div>
                  <div style={{ margin: "32px" }}></div>
                  <ul className="ulList gap-16 flex-center-align-item flex-row mg-top-8 mg-bt-8">
                    <li>
                      <Link href="/" className="buttonStyle loginSignupText">
                        Get ZeroTier
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="loginSignupText">
                        Learn more ›
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
