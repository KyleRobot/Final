import React, { useState } from "react";
import "./comp.css";
import faq from "../assets/faq.jpg";


const faqs = [
  {
    question: "What services does Clarvo offer?",
    answer: "Clarvo offers comprehensive eye care services including eye exams, vision therapy, prescription eyewear, and more."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment online through our website or contact us directly via phone or email."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, Clarvo accepts major insurance providers. Please contact us to confirm your coverage."
  },
  {
    question: "Where is Clarvo located?",
    answer: "Clarvo is located at Nairobi Westlands, Kenya. Visit our Contact page for directions."
  }
];

const ClarvoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="clarvo-faq-section">
      <div className="faq-container">
        <img src={faq} className="faq-image"/>
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <button className="toggle-btn">
                    {activeIndex === index ? "−" : "+"}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClarvoFAQ;
