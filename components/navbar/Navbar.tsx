export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 80px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <h2>TradeBurg</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <span>Company</span>
        <span>Products</span>
        <span>How We Trade</span>
        <span>Quality</span>
        <span>Insights</span>
        <span>Contact</span>
      </div>

      <button
        style={{
          padding: "12px 22px",
          borderRadius: "8px",
          border: "1px solid #1D2D28",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Request Quote
      </button>
    </nav>
  );
}
