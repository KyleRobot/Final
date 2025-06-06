import React from "react";
import "./comp.css";

const ClarvoFooter = () => {
  return (
    <footer className="clarvo-footer">
      <div className="clarvo-footer__main">
        <div className="clarvo-footer__left">
          <h2 className="clarvo-logo">Clarvo</h2>
          <ul className="clarvo-links">
            <li>About</li>
            <li>Services</li>
            <li>Eye Care Experts</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
          <ul className="clarvo-social">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
          </ul>
          <ul className="clarvo-legal">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
          </ul>
          <p className="clarvo-copy">© [2025] Clarvo. All Rights Reserved.</p>
        </div>

        <div className="clarvo-footer__right">
          <h3>See Clearly, Live Fully</h3>
          <p>Find Support, Vision Care, and Expert Guidance.</p>
          <button className="clarvo-btn">Find Support Now</button>
        </div>
      </div>
    </footer>
  );
};

export default ClarvoFooter;
