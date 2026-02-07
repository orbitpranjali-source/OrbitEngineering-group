import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import { AnimatedHeading, MotionFadeUp } from '../components/Animated';

import electricMultiTurn from '../assets/products/electirc multiturn.png';
import multiTurn from '../assets/products/multi turn.png';
import multiTurnActuator2 from '../assets/products/multiturn - actuator.png';
import partTurnActuator from '../assets/products/part turn actuator.png';
import partTurn from '../assets/products/part turn.png';
import partTurnActuator2 from '../assets/products/part-turn-actuator.png';

interface SlideData {
    image: string;
    name: string;
    details: string[];
}

interface SectionData {
    title: string;
    slides: SlideData[];
}

const sections: SectionData[] = [
    {
        title: 'Multi Turn Actuators',
        slides: [
            {
                image: electricMultiTurn,
                name: 'Electric Multi Turn Actuator',
                details: [
                    'Type: Electric Multi-Turn',
                    'Application: Gate, globe, sluice valves',
                    'Motion: Linear operation',
                    'Control: Local panel with remote option',
                    'Power: AC supply',
                    'Enclosure: Sealed robust housing',
                    'Manual: Mechanical override'
                ]
            },
            {
                image: multiTurn,
                name: 'Multi Turn Actuator',
                details: [
                    'Classification: Electric Multi-Turn',
                    'Intended Valves: Gate, globe, isolation',
                    'Drive: Electric motor with gearbox',
                    'Modes: Automation readiness',
                    'Design: Heavy-duty metallic housing',
                    'Emergency: Manual handwheel'
                ]
            },
            {
                image: multiTurnActuator2,
                name: 'Multi Turn Electric Actuator',
                details: [
                    'Industry Use: Energy, Water, Industrial Applications',
                    'Classification: Electric Multi-Turn Actuator',
                    'Intended Valves: Gate, Globe, Isolation Valves',
                    'Drive: Electric Motor with Gearbox',
                    'Enclosure Protection: IP67, IP68',
                    'Switching-off Torque: 7.5 to 100 Nm',
                    'Modes: Automation Ready',
                    'Design: Heavy-duty Metallic Housing',
                    'Emergency Operation: Manual Handwheel'
                ]
            }
        ]
    },
    {
        title: 'Part Turn Actuators',
        slides: [
            {
                image: partTurnActuator,
                name: 'Electric Part Turn Actuator',
                details: [
                    'Type: Motor Operated',
                    'Application: Butterfly & Ball Valves',
                    'Power: 230V/415V AC',
                    'Protection: Weatherproof',
                    'Safety: Torque & limit switch',
                    'Manual Override: Handwheel'
                ]
            },
            {
                image: partTurn,
                name: 'Motorized Part Turn Actuator',
                details: [
                    'Industry: Water, Oil & Gas, HVAC',
                    'Protection: IP65/IP67',
                    'Torque: Model dependent',
                    'Operating time: 10–30s',
                    'Angle: 90°',
                    'Temp: -20°C to +60°C'
                ]
            },
            {
                image: partTurnActuator2,
                name: 'Electric Part-Turn Actuator (SP 0)',
                details: [
                    'Industry Use: Energy, Water, Industrial Applications',
                    'Classification: Electric Part-Turn Actuator',
                    'Intended Valves: Butterfly, Ball, Plug Valves',
                    'Drive: Electric Motor with Gear Mechanism',
                    'Enclosure Protection: IP54, IP67, IP68',
                    'Switching-off Torque: 4 to 40 Nm',
                    'Operating Time: 15 to 160 s / 90°',
                    'Operating Angle: 90° to 270°',
                    'Modes: Automation Ready',
                    'Design: Compact & Robust Metallic Housing',
                    'Manual Override: Available for Emergency Operation'
                ]
            }
        ]
    }
];

const SlideSection = ({ section, index }: { section: SectionData, index: number }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % section.slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [section.slides.length]);

    const slide = section.slides[currentSlide];

    // Alternate layout for visual interest: Even sections Image Left, Odd sections Image Right (on Desktop)
    // But user request specifically asked for "Image left, Text right" on Desktop for *each* section?
    // "Make the layout side-by-side on desktop (Image left, Text right) and stacked on mobile."
    // So I will stick to Image Left, Text Right as requested for all.

    return (
        <section className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900 mb-12 text-center">
                    {section.title}
                </AnimatedHeading>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide}
                                src={slide.image}
                                alt={slide.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="max-h-full max-w-full object-contain"
                            />
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {section.slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#0073bc] w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-[#0073bc] flex items-center gap-3">
                                    {slide.name}
                                    <div className="h-px flex-1 bg-gray-200 ml-4"></div>
                                </h3>

                                <div className="grid grid-cols-1 gap-3">
                                    {slide.details.map((detail, idx) => {
                                        const [label, ...rest] = detail.split(':');
                                        const value = rest.join(':');

                                        return (
                                            <div key={idx} className="flex items-start group">
                                                <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0073bc] flex-shrink-0 group-hover:scale-150 transition-transform" />
                                                <p className="text-gray-700 leading-relaxed">
                                                    {value ? (
                                                        <>
                                                            <span className="font-semibold text-gray-900">{label}:</span>{value}
                                                        </>
                                                    ) : (
                                                        detail
                                                    )}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function ActuatorsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20"> {/* pt-20 to account for fixed header if needed, though usually handled by main layout */}
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-[#0073bc] to-[#005a94] text-white">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionFadeUp>
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                            <Settings className="w-8 h-8" />
                        </div>
                        <AnimatedHeading level={1} className="text-4xl md:text-5xl font-bold mb-4">
                            Actuators
                        </AnimatedHeading>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Advanced electric multi-turn and part-turn actuators for precise valve control and automation.
                        </p>
                    </MotionFadeUp>
                </div>
            </section>

            {sections.map((section, index) => (
                <SlideSection key={index} section={section} index={index} />
            ))}

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Need technical specifications?</h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0073bc] hover:bg-[#005a94] transition-colors shadow-lg hover:shadow-xl"
                    >
                        Contact Our Engineering Team <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
