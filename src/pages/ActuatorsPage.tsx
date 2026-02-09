import { useState } from 'react';
import { Settings, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { AnimatedHeading, MotionFadeUp } from '../components/Animated';
import QuoteModal from '../components/QuoteModal';

// Images
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
    description: string;
    slides: SlideData[];
}

const sections: SectionData[] = [
    {
        title: 'Multi Turn Actuators',
        description: 'Designed for gate, globe, and sluice valves requiring linear motion and high torque.',
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
        description: 'Ideal for butterfly, ball, and plug valves requiring 90° rotary motion.',
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

export default function ActuatorsPage() {
    const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [quoteProductName, setQuoteProductName] = useState('');

    const toggleExpanded = (key: string) => {
        setExpandedMap(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleGetQuote = (productName: string) => {
        setQuoteProductName(productName);
        setIsQuoteModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0073bc] to-[#005a94] text-white overflow-hidden">
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
                    <button
                        onClick={() => handleGetQuote('Actuators')}
                        className="bg-white text-[#0073bc] hover:bg-blue-50 font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center space-x-2"
                    >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionFadeUp>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                                <Settings className="w-10 h-10" />
                            </div>
                            <AnimatedHeading level={1} className="text-4xl md:text-5xl font-bold mb-4">
                                Actuators
                            </AnimatedHeading>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                Advanced electric multi-turn and part-turn actuators for precise valve control and automation.
                            </p>
                        </div>
                    </MotionFadeUp>
                </div>
            </section>

            {sections.map((section, sectionIdx) => (
                <section key={sectionIdx} className={`py-16 ${sectionIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900 mb-4">
                                {section.title}
                            </AnimatedHeading>
                            <p className="text-lg text-gray-600">{section.description}</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {section.slides.map((item, idx) => {
                                const key = `${section.title}-${idx}`;
                                const isExpanded = !!expandedMap[key];

                                return (
                                    <MotionFadeUp
                                        key={idx}
                                        className="w-full md:w-[48%] lg:w-[31%] group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full min-h-[420px]"
                                    >
                                        <div className="bg-gray-50 flex items-center justify-center p-6 h-[250px]">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col gap-4 flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 text-center">{item.name}</h3>

                                            <div className="mt-auto">
                                                <button
                                                    onClick={() => toggleExpanded(key)}
                                                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-sm font-bold bg-[#0073bc] text-white hover:bg-[#005a94] shadow-md hover:shadow-lg transition-all active:scale-95"
                                                >
                                                    {isExpanded ? 'Show Less' : 'Read More'}
                                                </button>
                                            </div>

                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                                                    {item.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <CheckCircle className="w-4 h-4 text-[#0073bc] mr-2 mt-0.5 flex-shrink-0" />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </MotionFadeUp>
                                );
                            })}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0073bc] to-[#005a94]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedHeading level={3} className="text-3xl font-bold text-white mb-4">
                        Need technical specifications?
                    </AnimatedHeading>
                    <p className="text-xl text-blue-100 mb-8">
                        Contact our engineering team for detailed datasheets and custom solutions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 bg-white text-[#0073bc] text-base font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Floating Download Button */}
            <a
                href="/assets/docs/Orbit_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#ff6b00] text-white font-bold py-3 px-6 rounded-full shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.23)] hover:bg-[#e65100] transition-all transform hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/20"
            >
                <Download className="w-5 h-5" />
                <span>View Brochure</span>
            </a>

            {/* Quote Modal */}
            <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} productName={quoteProductName} />
        </div>
    );
}
