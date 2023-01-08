import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <footer>
        <p className="footer">Copyright {year}</p>{" "}
      </footer>
    </div>
  );
}

export default Footer;
