import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your company offer?",
      answer: "We specialize in custom software development, mobile app development, web solutions, and digital marketing services tailored to meet your business needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline for project completion varies based on the scope and complexity of the project. Typically, we provide an estimated timeline during the initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based, with a clear breakdown of costs provided before starting any work. We also offer flexible payment options to accommodate different budgets."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages, including maintenance and updates, to ensure your software continues to run smoothly and stays up-to-date."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "We take data security seriously and implement industry-standard security measures, including encryption and regular security audits, to protect your information."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! Our team is experienced in integrating new solutions with existing systems, ensuring a seamless transition and minimal disruption to your operations."
    },
    {
      question: "What if I have questions during the project?",
      answer: "We encourage open communication throughout the project. You can reach out to your project manager at any time for updates or questions."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide a complimentary consultation to discuss your needs and explore how we can help. Feel free to reach out to schedule your session!"
    }
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 text-black mt-20">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            // Animation for expanding and collapsing
            const styles = useSpring({
              maxHeight: isActive ? 120 : 0, // Adjust height based on content
              opacity: isActive ? 1 : 0,
              config: { duration: 500 }, // Duration in ms
            });

            return (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300 p-4 rounded-xl 
                  transition duration-500 ${
                    isActive ? "accordion-active:bg-indigo-50 accordion-active:border-indigo-600" : ""
                  } mb-4 lg:p-4`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  onClick={() => toggleAccordion(index)}
                  aria-controls={`collapse-${index}`}
                >
                  <h5>{item.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${
                      isActive ? "hidden" : "block"
                    } accordion-active:text-indigo-600 group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${
                      isActive ? "block" : "hidden"
                    } accordion-active:text-indigo-600 group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <animated.div
                  id={`collapse-${index}`}
                  style={styles}
                  className="accordion-content w-full overflow-hidden"
                  aria-labelledby={`heading-${index}`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6">
                    {item.answer}
                  </p>
                </animated.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
