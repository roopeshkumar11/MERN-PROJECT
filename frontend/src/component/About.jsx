import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-4xl text-2xl font-extrabold text-center md:mb-8 mb-4 mt-4 text-gray-800">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Bookstrore is a family-owned bookstore established in 2002. With a deep passion for books and a commitment to providing excellent service, we strive to create a welcoming and inclusive space for book lovers of all ages. Our team is comprised of avid readers, knowledgeable staff, and dedicated professionals who are here to help you find your next great read.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              At Bookstrore, we are committed to promoting literacy and a love for reading. We believe in the power of books to educate, entertain, and empower individuals. Our goal is to make books accessible to everyone and to create a community of readers who share our passion for the written word.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

