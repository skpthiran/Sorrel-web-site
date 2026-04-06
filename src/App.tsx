/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Route from './components/Route';
import Founders from './components/Founders';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="bg-asphalt text-chrome min-h-screen font-sans selection:bg-cyan selection:text-asphalt">
      <Hero />
      <Fleet />
      <Route />
      <Founders />
      <Footer />
    </div>
  );
}
