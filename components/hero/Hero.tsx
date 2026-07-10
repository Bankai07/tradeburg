export default function Hero() {
  return (
    <section
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0E3B2E",
        color: "white",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Global Trade • Built on Trust
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "1.1",
          }}
        >
          Connecting Products.
          <br />
          Creating Possibilities.
        </h1>

        <p
          style={{
            marginTop: "30px",
            fontSize: "20px",
            maxWidth: "700px",
          }}
        >
          TradeBurg connects trusted suppliers and global buyers through
          transparent, reliable, and efficient international trade.
        </p>
      </div>
    </section>
  );
}
