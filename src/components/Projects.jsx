import { ProjectCard } from './ProjectCard'
import portfolioImg from '@/assets/img/portfolio.png'
import dictionaryImg from '@/assets/img/dictionary-app.png'
import pwGeneratorImg from '@/assets/img/random-pw-generator.png'
import iatc from '@/assets/img/iatc.png'

export const Projects = () => {
    return(
        <section id="projects" className="bg-slate-600 text-white w-full">
            <div className="inner-container wide">
                <h2>Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
                    <ProjectCard 
                        title="Portfolio Website"
                        imageURL={portfolioImg}
                        skills={[
                            "React (components, useState, useEffect)",
                            "HTML",
                            "Custom CSS",
                            "Tailwind CSS"
                        ]}
                        projectRepoURL="https://google.com"
                        projectRepoCTA="View Portfolio Code"
                    />
                    <ProjectCard
                        title="Dictionary App"
                        imageURL={dictionaryImg}
                        skills={[
                            "React (components, useState, useEffect)",
                            "JSX",
                            "Fetch API",
                            "HTML",
                            "Custom CSS",
                        ]}
                        projectRepoURL="https://github.com/willhedgecock/react-dictionary"
                        projectRepoCTA="View Dictionary App Code"
                        projectDemoURL="https://google.com"
                        projectDemoCTA="View Dictionary App Demo"
                    />
                    <ProjectCard
                        title="Random Password Generator"
                        imageURL={pwGeneratorImg}
                        skills={[
                            "React (components, useState)",
                            "JSX",
                            "HTML",
                            "CSS",
                        ]}
                        projectRepoURL="https://github.com/willhedgecock/react-pw-generator"
                        projectRepoCTA="View Password Generator Code"
                        projectDemoURL="https://google.com"
                        projectDemoCTA="View Password Generator Demo"
                    />
                    <ProjectCard 
                        title="Iowa Association of Track Coaches"
                        imageURL={iatc}
                        skills={[
                            "Custom Wordpress theme development",
                            "SASS",
                            "Webpack",
                            "Custom plugin development that handles custom post types and AJAX Filtering"
                        ]}
                        projectDemoURL="https://www.iatrackcoaches.org/"
                        projectDemoCTA="View IATC Website"
                    />
                </div>
            </div>
        </section>
    );
}