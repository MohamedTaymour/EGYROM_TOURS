import React from 'react';

const HomeScreen = () => {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to EGYROM Tours</h1>
          <p className="text-xl md:text-2xl">Explore the timeless beauty of Egypt with unmatched service.</p>
        </div>
      </section>

      {/* About Egypt */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Discover the Wonders of Egypt</h2>
        <p className="mb-4">
          Egypt is a land of history, mystery, and beauty. From the golden sands of the Sahara to the majestic Nile River, every corner holds a story waiting to be told.
        </p>
        <p className="mb-4">
          Visit the ancient Pyramids of Giza, marvel at the grandeur of Luxor's temples, or cruise the Nile for an unforgettable experience. Whether you're an adventurer, a history buff, or just seeking peace under a palm tree by the Red Sea, Egypt welcomes you with open arms.
        </p>
        <p className="mb-4">
          Our tours cover not only the major landmarks but also hidden gems — oases, villages, and sacred monasteries that many travelers miss.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose EGYROM Tours?</h2>
          <ul className="space-y-6 text-lg">
            <li>• Customized itineraries tailored to your interests</li>
            <li>• Friendly, multilingual tour guides</li>
            <li>• Comfortable transportation and premium accommodations</li>
            <li>• 24/7 customer support during your trip</li>
            <li>• Exclusive access to local cultural experiences</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">What Our Visitors Say</h2>
        <blockquote className="italic mb-6">
          "EGYROM Tours made our honeymoon unforgettable. We saw Egypt like never before!" – Sarah & James
        </blockquote>
        <blockquote className="italic mb-6">
          "As an Egyptian living abroad, this tour reconnected me with my homeland. Highly recommended." – Ahmed M.
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p className="mb-2">© 2025 EGYROM Tours. All rights reserved.</p>
        <p>Follow us on Instagram, Facebook, and Twitter for travel updates and offers!</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
