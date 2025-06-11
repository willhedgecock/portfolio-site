import { InterestCard } from './InterestCard';

export const About = () => {
    return (
        <section id="about" className="bg-slate-700 text-white w-full">
            <div className="inner-container">
                <h2>About Me</h2>
                <div>
                    <p>
                        I am a front-end focused developer in Des Moines, Iowa. I began learning about web development in 2019 when I started at 
                        Des Moines Area Community College in the Web Development Associates Program. After graduating from DMACC, I've been working
                        professionally as a developer since April of 2021. Since then, I've found a passion in seeing a design and bringing it to 
                        life while giving the customer something they'll love.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
                    <InterestCard 
                        title="Interests in Development"
                        interests={[
                            "Front-end frameworks",
                            "CSS, SASS, and Tailwind CSS",
                            "Creating accessible and user-friendly designs",
                            "Learning new technologies and frameworks",
                            "Wordpress development and customization; building custom themes, Gutenberg blocks, and plugins",
                            "Website Performance and Optimization",
                            "PHP and MySQL"
                        ]}
                    />
                    <InterestCard 
                        title="Interests Outside of Development" 
                        interests={[
                            "Spending time with my fiancee, our dog, and two cats",
                            "Cooking",
                            "Golf, both ball and frisbee varieties",
                            "Almost anything sports related; specifically the Indianapolis Colts, Chicago White Sox, and the Iowa Hawkeyes",
                            "Playing guitar",
                            "Going to the gym"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};