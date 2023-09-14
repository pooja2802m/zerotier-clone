function Feature({ imageSrc, heading, paragraphs }) {
  return (
    <li className="featureListItem">
      <div className="width-100" style={{ padding: "0 20% 0 20%" }}>
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={imageSrc} width={100} height={100} />
        </div>
      </div>
      <div style={{ margin: "8px" }}></div>
      <h2 className="featureHeading">{heading}</h2>
      <div
        style={{
          textAlign: "center",
          fontSize: "var(--_1hrp33e15)",
          lineHeight: "var(--_1hrp33e1j)",
        }}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="width-100 flex-column center-text-align flex-center-align-item"></div>
    </li>
  );
}

export default Feature;
