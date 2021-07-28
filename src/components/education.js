import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="item-sub">{item.desc}</h3>
          <h4 className="item-sub">{item.institution}</h4>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
          <h5 className="text-sm text-neutral-600">
            Overall GPA: {item.gpa}
          </h5>
          <h5 className="text-sm text-neutral-600">Summa Cum Laude</h5>
        </div>
      ))}
  </section>
);

export default Education;
