import React from 'react';

const AboutSection: React.FC = () => {
    return (
    <section id='about-test' className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 h-screen">
      {/* Left half - Profile Picture */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="static\caveman_profile_pic.webp"
          alt="Profile Picture"
          className="w-40 h-40 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right half - About Info */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start text-center md:text-left">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui
            posuere blandit. Proin eget tortor risus. Nulla porttitor accumsan
            tincidunt.
          </p>
        </div>
      </div>
    </section>
    );
}

export default AboutSection;