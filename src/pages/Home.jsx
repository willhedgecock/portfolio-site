import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}