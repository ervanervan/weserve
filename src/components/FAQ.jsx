import React, { useState } from "react";
import { DATA_FAQ } from "../Data";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-center text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl">
          Frequently Asked Questions
        </h2>
        {DATA_FAQ.map((item) => (
          <div key={item.id} className="border border-gray-300 rounded mb-2">
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
              {openId === item.id && (
                <div className="p-4 border-t border-gray-300">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
