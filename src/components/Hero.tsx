import React, { useEffect, useRef } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const words = ['Developer', 'Designer', 'Creator'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 80;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    return () => clearTimeout(typingTimeout);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-3 text-gray-600 dark:text-gray-400 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white animate-slide-up">
            Nonce Firewall
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary animate-slide-up animation-delay-200">
            Frontend <span ref={typingRef} className="relative after:content-['|'] after:ml-1 after:animate-blink">Developer</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto animate-slide-up animation-delay-300">
            I craft responsive websites where technology meets creativity. 
            Focused on building intuitive user experiences and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400 mb-16">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                });
              }} 
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.usercontent.google.com/u/0/uc?id=1lhiyTnIRVE2hAG9yk6x2El_FNIoC2nAq&export=download"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 animate-bounce"
            aria-label="Scroll to content"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;