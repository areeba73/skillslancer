import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide." },
        { question: "How can I track my order?", answer: "You will receive a tracking number once your order ships." },
        { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, and PayPal." },
        { question: "Can I change my order after placing it?", answer: "Orders can only be modified within 1 hour of placement." },
        { question: "How can I contact customer service?", answer: "You can contact us via email at support@example.com." },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container mt-5">
          <h1 style={{fontWeight:700 , textAlign:'center'}}>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item mt-5">
                    <div className="faq-question" onClick={() => handleToggle(index)}>
                        <span>{faq.question}</span>
                        <span className="faq-toggle">
                            {openIndex === index ? '×' : '+'}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
