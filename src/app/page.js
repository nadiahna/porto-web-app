"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselWithContent } from './components/carousel';
// import ApiImage from '../../public/api.svg'


export default function Home() {
  // const [currentMenu, setCurrentMenu] = useState('home')
  // const idComponent = currentMenu;
  const [bgColor, setBgColor] = useState('bg-dark-primary');

  useEffect(() => {
    const element = document.getElementById('header');
    if (element && element.id === 'project') {
      setBgColor('bg-white');
    }
  }, []);
  return (

    <div className="bg-dark-primary">
      <header id='header' className={`flex flex-row p-2 sticky top-0 z-50 ${bgColor}`}>
        <div>
          <Image src="/logo.svg" alt="logo" width={44} height={44} />
        </div>

        <div className='mx-auto'>
          <a href='#home'>
            <button className="hover:text-primary text-white py-2 px-4 rounded">
              Home
            </button>
          </a>
          <a href='#about'>
            <button className="hover:text-primary text-white py-2 px-4 rounded">
              About
            </button>
          </a>
          <a href='#project'>
            <button className="hover:text-primary text-white py-2 px-4 rounded">
              Projects
            </button>
          </a>
          <button className="hover:text-primary text-white py-2 px-4 rounded">
            Contact
          </button>
        </div>

        <div>
          <button className="bg-primary font-medium text-white py-2 px-4 rounded">
            Schedule Now
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-between bg-dark-primary w-full">
        {/* home */}
        <div id='home' className="flex flex-row mx-auto p-12 h-screen">
          <div className="flex flex-col justify-center mr-4 text-wrap">
            <div className="text-4xl font-bold">
              <label className="text-primary">Mastering Websites</label>
              <label className="text-white"> for <p>Every Screen</p></label>
            </div>
            <p className="text-white my-10">We are a team of freelancers who will provide technology
              solutions for your company needs.</p>
            <div className="flex flex-row">
              <button className="hover:text-primary text-white py-2 px-4 rounded border mr-4">
                Download Portofolio
              </button>
              <button className="text-white py-2 px-4 rounded bg-primary font-medium">
                Schedule Now
              </button>
            </div>
          </div>
          <div className="m-auto">
            <Image src="/image-home.svg" alt="hero" width={500} height={500} />
          </div>
        </div>
        {/* about */}
        <div id='about' className="flex flex-col items-center h-screen justify-center p-12">
          <h1 className='text-3xl font-black text-center'>ABOUT</h1>
          <p className="text-center w-6/12 my-16 text-base">Nadian Tech is a team driven by user-oriented, creative freelancers who will provide technology solutions for your company needs.
            Our expertise spans across web development, mobile app creation, software engineering, and digital marketing, ensuring that we can tackle any challenge and bring your vision to life. With a focus on innovation and quality, we deliver customized solutions that drive growth and efficiency for your business.</p>

          <div className="grid grid-cols-3 place-items-center gap-x-12	">
            <div className="flex flex-col items-center">
              <Image src="/code.svg" alt="html" width={100} height={100} />
              <h1 className="text-xl font-bold text-center">Web Development</h1>
              <p className="text-center">We understand the importance of a professional website design and how to appeal to your clients. With our competitive pricing you can not go wrong.</p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="/mobile-apps.svg" alt="mobile" width={100} height={100} />
              <h1 className="text-xl font-bold text-center">Mobile Apps</h1>
              <p className="text-center">Keep connected with your customer everywhere and anytime. Deliver in cross platform, Android and IOS Apps of your company is ready to go.</p>
            </div>

            <div className="flex flex-col items-center">
              {/* <ApiImage color="primary" width={100} height={100} /> */}
              <Image src="/api.svg" alt="api" width={100} height={100} />
              <h1 className="text-xl font-bold text-center">System Integrator & API</h1>
              <p className="text-center"> Integrate Third Party Library, Online Payment, or make specific services that suite of your company with high availability, reliablity, fast and secure.</p>
            </div>
          </div>
          <button className="hover:text-primary text-white py-2 px-4 rounded border my-12">
            Download Portofolio
          </button>
        </div>

        {/* project */}
        <div id='project' className="bg-white flex flex-col h-screen justify-center p-12 text-dark-primary">
          <h1 className="text-3xl font-black">OUR PROJECT</h1>
          <div className="grid grid-cols-3 place-items-center	gap-x-8">
            <div className="flex flex-col">
              <Image src="/api.svg" alt="project1" width={200} height={125} />
              <h3 className='text-xl font-bold'>Title Project</h3>
              <label className="text-light-gray font-medium">Client Name</label>
              <p className="text-light-gray py-2 text-wrap">Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant. Morbi aliquet mauris lectus quis dui ut arcu.</p>
              <button className='flex flex-row text-primary items-center'>
                <label className='px-1'>See More</label>
                <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
              </button>
            </div>
            <div className="flex flex-col">
              <Image src="/api.svg" alt="project1" width={200} height={125} />
              <h3 className='text-xl font-bold'>Title Project</h3>
              <label className="text-light-gray font-medium">Client Name</label>
              <p className="text-light-gray py-2 text-wrap">Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant. Morbi aliquet mauris lectus quis dui ut arcu.</p>
              <button className='flex flex-row text-primary items-center'>
                <label className='px-1'>See More</label>
                <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
              </button>
            </div>
            <div className="flex flex-col">
              <Image src="/api.svg" alt="project1" width={200} height={125} />
              <h3 className='text-xl font-bold'>Title Project</h3>
              <label className="text-light-gray font-medium">Client Name</label>
              <p className="text-light-gray py-2 text-wrap">Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant. Morbi aliquet mauris lectus quis dui ut arcu.</p>
              <button className='flex flex-row text-primary items-center'>
                <label className='px-1'>See More</label>
                <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
              </button>
            </div>
            <div className="flex flex-col">
              <Image src="/api.svg" alt="project1" width={200} height={125} />
              <h3 className='text-xl font-bold'>Title Project</h3>
              <label className="text-light-gray font-medium">Client Name</label>
              <p className="text-light-gray py-2 text-wrap">Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant. Morbi aliquet mauris lectus quis dui ut arcu.</p>
              <button className='flex flex-row text-primary items-center'>
                <label className='px-1'>See More</label>
                <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
              </button>
            </div>
            <div className="flex flex-col">
              <Image src="/api.svg" alt="project1" width={200} height={125} />
              <h3 className='text-xl font-bold'>Title Project</h3>
              <label className="text-light-gray font-medium">Client Name</label>
              <p className="text-light-gray py-2 text-wrap">Lorem ipsum dolor sit amet consectetur. Purus elementum quam porttitor nibh enim egestas amet auctor. A cursus sit orci varius libero mattis habitant. Morbi aliquet mauris lectus quis dui ut arcu.</p>
              <button className='flex flex-row text-primary items-center'>
                <label className='px-1'>See More</label>
                <Image src="/arrow-right.svg" alt="arrow" width={20} height={20} />
              </button>
            </div>
          </div>

        </div>

        {/* testimony */}
        <div id="testimony" className="flex flex-col items-center h-screen justify-center p-12">
          <h1 className='text-3xl font-black text-center'>TESTIMONY</h1>
          <CarouselWithContent />
        </div>

        {/* <h1 className="text-xl font-bold text-center mt-10">Our Services</h1>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <Image src="/html.png" alt="html" width={150} height={150} />
            <h1 className="text-xl font-bold text-center">Web Development</h1>
            <p className="text-center">We understand the importance of a professional website design and how to appeal to your clients. With our competitive pricing you can not go wrong.</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/apps.png" alt="mobile" width={150} height={150} />
            <h1 className="text-xl font-bold text-center">Mobile Apps</h1>
            <p className="text-center">Keep connected with your customer everywhere and anytime. Deliver in cross platform, Android and IOS Apps of your company is ready to go.</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/api.png" alt="api" width={150} height={150} />
            <h1 className="text-xl font-bold text-center">System Integrator & API</h1>
            <p className="text-center"> Integrate Third Party Library, Online Payment, or make specific services that suite of your company with high availability, reliablity, fast and secure.</p>
          </div>

        </div> */}




      </main>
    </div>

  )
}
