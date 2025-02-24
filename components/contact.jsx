import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations or inquiries!</p>
        <a
          href="mailto:shivamvofficial99@gmail.com"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;