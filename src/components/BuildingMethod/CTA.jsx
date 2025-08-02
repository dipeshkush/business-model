"use client";

import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ready to Replace Spreadsheets with Software That Thinks?
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-6 text-sm md:text-base">
        We’ve helped 100+ businesses eliminate chaos, automate their operations, and&nbsp;
        <span className="whitespace-nowrap">reclaim their time.</span> You could be next.
      </p>
      <Link
        href="/contact-us"
        className="text-sm md:text-base font-medium text-indigo-600 hover:underline"
      >
        Get Custom Quote
      </Link>
    </section>
  );
};

export default CTA;
