import './SectionHeader.css';

export default function Title({time, title}) {
    return(
        <>
            <div className="section-header">
                <p>{time}</p>
                <h2>{title}</h2>
            </div>
        </>
    );
}