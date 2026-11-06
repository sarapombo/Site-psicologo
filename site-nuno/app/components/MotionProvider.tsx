"use client";

import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

// Carrega só a parte do framer-motion que o site usa (animações de entrada e hover),
// em vez da biblioteca inteira. Dentro deste componente usa-se <m.div> em vez de <motion.div>.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
