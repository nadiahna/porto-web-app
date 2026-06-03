"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselWithContent } from './components/carousel';

const techStack = [
  { name: 'Laravel', bg: '#FF2D20', letter: 'L' },
  { name: 'CSS', bg: '#264DE4', letter: 'C' },
  { name: 'React', bg: '#61DAFB', letter: 'R', dark: true },
  { name: 'Flutter', bg: '#02569B', letter: 'F' },
  { name: 'PHP', bg: '#777BB4', letter: 'P' },
  { name: 'Swift', bg: '#F05138', letter: 'S' },
];

const projects = Array(6).fill({
  title: 'Title Project',
  client: 'Client name',
  description:
    'Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant.',
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-dark-primary font-satoshi">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-8 py-3 sticky top-0 z-50 bg-dark-primary">
        <Image src="/logo.svg" alt="logo" width={44} height={44} />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {['Home', 'About', 'Project', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              <button className="hover:text-primary text-white py-2 px-4 rounded text-sm font-medium">
                {item}
              </button>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>

        <a href="#contact" className="hidden md:block">
          <button className="bg-primary font-medium text-white py-2 px-5 rounded text-sm">
            Contact Me
          </button>
        </a>
      </header>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-dark-primary border-t border-white border-opacity-10 flex flex-col items-center py-4 gap-2 sticky top-16 z-40">
          {['Home', 'About', 'Project', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <button className="text-white py-2 px-6 text-sm font-medium hover:text-primary">
                {item}
              </button>
            </a>
          ))}
        </div>
      )}

      <main className="flex flex-col w-full">
        {/* HERO */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-6 md:px-16 pt-8 pb-16 md:py-24 min-h-screen bg-dark-primary"
        >
          {/* Text content */}
          <div className="flex flex-col mt-8 md:mt-0 md:max-w-lg">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              <span className="text-primary">Mastering Websites</span>
              <span className="text-white"> for<br />Every Screen</span>
            </h1>
            <p className="text-white opacity-70 mb-8 text-sm md:text-base leading-relaxed">
              We are a team of freelancers who will provide technology solutions for your company needs.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <button className="w-full md:w-auto border border-white text-white py-3 px-6 rounded text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                Download Resume
              </button>
              <a href="#contact" className="w-full md:w-auto">
                <button className="w-full bg-primary text-white py-3 px-6 rounded text-sm font-medium hover:opacity-90 transition-opacity">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-shrink-0 flex justify-center md:ml-12">
            <Image src="/image-home.svg" alt="hero" width={480} height={380} className="w-full max-w-xs md:max-w-none" />
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="flex flex-col items-center justify-center py-16 md:py-24 px-6 md:px-16 bg-dark-primary">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-8 tracking-wide">ABOUT ME</h2>
          <p className="text-white opacity-70 text-center max-w-2xl text-sm md:text-base leading-relaxed mb-10 md:mb-12">
            Nadian Tech is a team driven by user-oriented, creative freelancers who will provide technology solutions for
            your company needs. Our expertise spans across web development, mobile app creation, software engineering,
            and digital marketing, ensuring that we can tackle any challenge and bring your vision to life. With a focus
            on innovation and quality, we deliver customized solutions that drive growth and efficiency for your business.
          </p>

          {/* Tech stack icons */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-6 mb-10 md:mb-12 justify-center">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-black text-lg md:text-xl"
                  style={{ backgroundColor: tech.bg, color: tech.dark ? '#000' : '#fff' }}
                >
                  {tech.letter}
                </div>
                <span className="text-white text-xs opacity-70">{tech.name}</span>
              </div>
            ))}
          </div>

          <button className="w-full md:w-auto border border-white text-white py-3 px-8 rounded text-sm font-medium hover:border-primary hover:text-primary transition-colors">
            Download Portfolio
          </button>
        </section>

        {/* OUR PROJECT */}
        <section id="project" className="bg-white py-14 md:py-20 px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl font-black text-dark-primary mb-8 md:mb-10 tracking-wide">OUR PROJECT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {projects.map((project, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-full h-48 bg-dark-primary rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/image-home.svg"
                    alt={`project-${i}`}
                    width={280}
                    height={180}
                    className="object-cover opacity-80"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-primary">{project.title}</h3>
                <span className="text-light-gray text-sm font-medium mb-2">{project.client}</span>
                <p className="text-light-gray text-sm leading-relaxed mb-3">{project.description}</p>
                <button className="flex items-center gap-1 text-primary text-sm font-medium self-start hover:opacity-80 transition-opacity">
                  See more
                  <Image src="/arrow-right.svg" alt="arrow" width={16} height={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONY */}
        <section id="testimony" className="flex flex-col items-center py-16 md:py-24 px-6 md:px-16 bg-dark-primary">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wide">TESTIMONI</h2>
          <CarouselWithContent />
        </section>

        {/* NEED HELP CTA */}
        <section className="flex flex-col items-center justify-center py-16 md:py-24 px-6 md:px-16 bg-dark-primary text-center border-t border-white border-opacity-10">
          <div className="mb-6 md:mb-8">
            <Image src="/image-home.svg" alt="devices" width={280} height={200} className="w-60 md:w-80 opacity-90" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-white mb-4 tracking-wide leading-snug">
            NEED HELP CREATING<br />DIGITAL PRODUCTS?
          </h2>
          <p className="text-white opacity-60 max-w-xl mb-8 md:mb-10 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Egestas cursus amet leo mi amet magnis sed. Ultrices varius eros id
            vulputate phasellus. Id sit magne faucibus ut.
          </p>
          <a href="#contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded font-medium hover:opacity-90 transition-opacity">
              Schedule Now
            </button>
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-dark-primary py-16 md:py-20 px-6 md:px-16 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row md:gap-16">
            {/* Left: Info */}
            <div className="flex flex-col mb-10 md:mb-0 md:min-w-72">
              <Image src="/logo.svg" alt="logo" width={60} height={60} className="mb-5" />
              {/* Map */}
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location map"
                />
              </div>
              <div className="flex flex-col gap-3 text-white opacity-70 text-sm">
                <div className="flex items-start gap-2">
                  <span>✉</span>
                  <span>nadiatechnology@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <span>082345678901</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Jl. M.H. Thamrin No.1, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-8 tracking-wide">CONTACT US</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-white text-sm mb-1 block opacity-70">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-transparent border border-white border-opacity-20 rounded px-4 py-3 text-white text-sm placeholder-white placeholder-opacity-30 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block opacity-70">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full bg-transparent border border-white border-opacity-20 rounded px-4 py-3 text-white text-sm placeholder-white placeholder-opacity-30 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block opacity-70">WhatsApp Number</label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 border border-white border-opacity-20 rounded px-3 py-3 text-white text-sm whitespace-nowrap">
                      🇮🇩 +62
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter whatsapp number"
                      className="flex-1 bg-transparent border border-white border-opacity-20 rounded px-4 py-3 text-white text-sm placeholder-white placeholder-opacity-30 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block opacity-70">Message</label>
                  <textarea
                    placeholder="Enter your message here"
                    rows={4}
                    className="w-full bg-transparent border border-white border-opacity-20 rounded px-4 py-3 text-white text-sm placeholder-white placeholder-opacity-30 focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded font-medium self-end hover:opacity-90 transition-opacity"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-dark-primary border-t border-white border-opacity-10 py-5 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-white opacity-50 text-xs md:text-sm">© Nadia Technology - 2024</span>
          <span className="text-white opacity-50 text-xs md:text-sm">nadiatechnology@gmail.com</span>
        </footer>
      </main>
    </div>
  );
}
