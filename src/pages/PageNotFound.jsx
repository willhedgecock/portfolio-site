import { Navbar } from '../components/Navbar'

export const PageNotFound = () => {
    return (
        <div>
            <Navbar />
            <section className="h-screen bg-slate-800">
                <div className="inner-container text-white">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <a className="text-mint underline" href="/"><p>Return to homepage</p></a>
                </div>
            </section>
        </div>
    )
}