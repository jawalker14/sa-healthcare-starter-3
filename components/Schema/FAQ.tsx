import React from 'react';

type FAQItem = { question: string; answer: string };
type FAQProps = { faqs: FAQItem[] };

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
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