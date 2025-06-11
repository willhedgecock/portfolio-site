export const ProjectCard = (props) => {
    return (
        <div className="flex-[0_0_calc(50%-0.75rem)] rounded-lg flex flex-col backdrop-blur-xl border-l-8 border-mint project-card">
            <img src={props.imageURL} alt={props.title} className="w-full h-48 object-cover border-mint border-b-2" />
            <div className="project-card-content flex flex-col flex-1 p-6 bg-slate-800">
                <h3 className="text-xl text-white font-semibold mb-4">{props.title}</h3>
                <ul className="text-white list-disc pl-5 flex-1">
                    {props.skills.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <a className="mt-4 underline hover:text-mint hover:font-semibold focus:outline-2 focus:outline-white focus:outline-offset-3" target="_blank" href={props.projectRepoURL}>{props.projectRepoCTA}</a>
                {props.projectDemoURL && (
                    <a className="mt-2 underline hover:text-mint hover:font-semibold focus:outline-2 focus:outline-white focus:outline-offset-3" target="_blank" href={props.projectDemoURL}>
                        {props.projectDemoCTA}
                    </a>
                )}
            </div>
        </div>
    );
}