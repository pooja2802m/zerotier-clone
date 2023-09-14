import React from "react";

function NotificationComponent() {
  const notificationStyle = {
    fontSize: "clamp(16px, 4.5vw, 20px)",
    paddingBottom: "1px",
  };

  return (
    <div className="pd-left-right-32">
      <div className="width-100 flex-column flex-center-align-item text-align-center">
        <div style={notificationStyle}>
          <p>
            🔔 NEW! ZeroTier Summer 2023 Release:{" "}
            <a href="https://www.zerotier.com/download/?utm_source=HPd">
              Download 1.12.1
            </a>{" "}
            -{" "}
            <a href="https://www.zerotier.com/blog/zerotier-summer-2023-release-1-12-0/?utm_source=HPrm">
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationComponent;
