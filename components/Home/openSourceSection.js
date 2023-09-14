import Link from "next/link";
import React from "react";

function OpenSourceCommunityEdition() {
  return (
    <section className="sectionContainer">
      <div className="pd-left-right-32">
        <div className="openSourceContainer">
          <h3 className="openSourceHeading">Open Source Community Edition</h3>
          <div
            style={{
              fontSize: "var(--_1hrp33e15)",
              lineHeight: "var(--_1hrp33e1j)",
            }}
          >
            <p>
              Featuring unlimited nodes, networks, and admins. Self-hosted.
              Designed for non-Commercial Use cases.
            </p>
          </div>
          <ul className="ulList flex-row gap-16 mg-top-8 mg-bt-8">
            <li>
              <Link href="https://github.com/zerotier" className="githubButton">
                ZeroTier GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.zerotier.com/self-hosting/network-controllers/?utm_source=ztp"
                className="navItemText"
              >
                Read Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceCommunityEdition;
