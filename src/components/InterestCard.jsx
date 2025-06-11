export const InterestCard = (props) => {
    return (
        <div className="bg-white rounded-lg p-6 border-t-8 border-purple-dark basis-1/3 backdrop-blur-xl card">
            <h3 className="text-xl text-slate-800 font-semibold mb-4 with-underline">{props.title}</h3>
            <ul className="text-gray-700 list-disc pl-5">
                {props.interests.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};