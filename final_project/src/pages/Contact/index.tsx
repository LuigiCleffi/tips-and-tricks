import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have any questions or feedback? We'd love to hear from you. Reach out to us using the form below.
        </p>
      </section>

      <section className="mb-12 flex justify-center">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/yourprofile" className="text-indigo-500 hover:text-indigo-700">
            Twitter
          </a>
          <a href="https://facebook.com/yourprofile" className="text-indigo-500 hover:text-indigo-700">
            Facebook
          </a>
          <a href="https://linkedin.com/yourprofile" className="text-indigo-500 hover:text-indigo-700">
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Location</h2>
        <div className="flex justify-center">
          {/* Replace this with an actual map or address information */}
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map or Address Info Here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
