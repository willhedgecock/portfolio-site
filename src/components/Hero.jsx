import { Linkedin, Github } from 'lucide-react';
import { useSprings, animated } from '@react-spring/web';

export const Hero = () => {
    const elements = [
        { type: 'h1', content: 'Will Hedgecock' },
        { type: 'p', content: 'Front-End Developer' },
        { type: 'p', content: 'I enjoy building performant, responsive, ADA compliant web applications.' },
        { type: 'div', content: (
            <div className="mt-6">
                <a tabindex="-1" href="#projects"><button className="btn-secondary mr-4">View My Work</button></a>
                <a tabindex="-1" href="/resume.pdf"><button className="btn-secondary">Download Resume</button></a>
            </div>
        ) },
        { type: 'div', content: (
            <div className="mt-6 flex gap-4">
                <a href="https://github.com/willhedgecock" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/will-hedgecock-90a2421b4" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
            </div>
        ) }
    ];

    const [springs] = useSprings(elements.length, index => ({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: index * 400,
    }));

    return (
        <section id="hero" className="h-[60vh] lg:h-[80vh] flex flex-col justify-center w-full bg-slate-800 text-white mobile-padding">
            <div className="inner-container with-borders">
                {springs.map((style, index) => {
                    const Element = elements[index].type;
                    return (
                        <animated.div key={index} style={style}>
                            <Element>{elements[index].content}</Element>
                        </animated.div>
                    );
                })}
            </div>
        </section>
    );
};