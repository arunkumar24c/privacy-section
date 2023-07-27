import React, { useState } from "react";

const FAQItem = ({ question, answer, isActive, toggleFAQ }) => {
  return (
    <div
      className={`border rounded-md ${isActive ? "bg-white" : "bg-white"} p-4`}
    >
      <div
        className={`cursor-pointer  flex justify-between items-center ${
          isActive ? "font-semibold" : "font-normal"
        }`}
        onClick={toggleFAQ}
      >
        <span className="text-[#021C4F] font-bold text-lg">{question}</span>
        <span className="ml-2 text-[#404040] text-2xl">
          {isActive ? "⊖" : "⊕"}
        </span>
      </div>
      {isActive && (
        <div className="mt-2 text-lg text-[#404040] bg-white">{answer}</div>
      )}
    </div>
  );
};

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Defination",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "General Terms",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Controller",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Purpose of collecting and  processing of information",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Consent to process information",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Social plugins",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Acing admissions",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Tracking of information",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Usage, sharing and disclosure of information",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Rights of data subject",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Notice to exercise rights",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Security precautions",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Maintenance of record",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Communication of breach of data subject",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Complaints",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Grievance and data protection officer",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Changes to privacy policy",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    {
      question: "Governing law and dispute ",
      answer:
        "It depends on which requirement you don’t fulfil. Some business schools offer waivers for GMAT scores and the length of the undergraduate programs. Always check with individual schools for the same.",
      isActive: false,
    },
    
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isActive = !updatedFaqs[index].isActive;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="container w-full lg:w-full sm:w-full mt-4 " name="Faq">
      
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={faq.isActive}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
