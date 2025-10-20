import React from 'react';

const FAQ = ({ faqs }) => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <dl>
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FAQ;