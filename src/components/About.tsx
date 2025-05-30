import React from 'react';
import { Code, Rocket, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate front-end developer with a keen eye for design and a dedication to creating
            exceptional user experiences. Let me tell you a bit about myself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              With over 5 years of experience in front-end development, I've had the privilege of working
              with various technologies and frameworks. My journey began with HTML, CSS, and JavaScript,
              and has evolved to include modern frameworks like React and TypeScript.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive interfaces that enhance
              user experience. My approach combines technical expertise with creative problem-solving to
              deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source
              projects, or attending tech meetups to stay updated with the latest industry developments.
            </p>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-blob animation-delay-4000"></div>
              <div className="absolute inset-0 rounded-full bg-secondary/20 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-blob"></div>
              <div className="relative bg-gray-50 dark:bg-gray-700 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-600 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-300 dark:text-gray-600">
                  NF
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Code size={24} />}
            title="Clean Code"
            description="I write maintainable, scalable code following best practices and industry standards."
          />
          <ValueCard 
            icon={<Users size={24} />}
            title="User-Centered"
            description="I put users at the heart of everything I build, creating intuitive and accessible experiences."
          />
          <ValueCard 
            icon={<Rocket size={24} />}
            title="Innovation"
            description="I constantly explore new technologies and approaches to solve complex problems."
          />
        </div>
      </div>
    </section>
  );
};

export default About;