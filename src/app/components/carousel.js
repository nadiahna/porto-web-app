"use client";
import { useState } from 'react';

const testimonials = [
  {
    company: "Company Name",
    website: "Website",
    text: "Lorem ipsum dolor sit amet consectetur. Egestas cursus amet leo mi amet magnis sed. Ultrices varius eros id vulputate phasellus. Id sit magne faucibus ut. Lorem ipsum dolor sit amet consectetur. Egestas cursus amet leo mi amet magnis sed.",
  },
  {
    company: "Company Name",
    website: "Website",
    text: "Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent commodo cursus magna vel scelerisque nisl consectetur et.",
  },
  {
    company: "Company Name",
    website: "Website",
    text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nunc augue iaculis velit, a ornare odio metus a mi.",
  },
];

export function CarouselWithContent() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex gap-6">
        {visible.map((t, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-6 text-dark-primary">
            <div className="mb-4">
              <p className="font-bold text-sm">{t.company}</p>
              <p className="text-light-gray text-xs">{t.website}</p>
            </div>
            <p className="text-sm text-light-gray leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        <button onClick={prev} className="text-white hover:text-primary transition-colors">
          &#8592;
        </button>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-white opacity-40'}`}
          />
        ))}
        <button onClick={next} className="text-white hover:text-primary transition-colors">
          &#8594;
        </button>
      </div>
    </div>
  );
}
