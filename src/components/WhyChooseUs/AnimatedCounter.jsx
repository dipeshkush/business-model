"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, animate } from "framer-motion";

// Internal component for animating numbers
function CountUp({ from, to, duration }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        if (node) {
          // Format for currency
          if (to > 1000000) {
            node.textContent = (value / 10000000).toFixed(1) + " Cr";
          } else {
            node.textContent = Math.round(value).toLocaleString("en-IN");
          }
        }
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef} />;
}

// Exported component for triggering animations on view
export function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  isMultiplier = false,
  isCurrency = false,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      className="inline-block"
    >
      {prefix}
      {isCurrency && "₹"}
      <CountUp from={0} to={to} duration={2} />
      {suffix}
      {isMultiplier && "X"}
    </motion.span>
  );
}
