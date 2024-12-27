import './MenueSection.css';


export default function MenueItem({data}) {
    return(
        <div className="item d-flex justify-content-between" key={data._id}>
            <div className="img"><img src={data.image} alt="" /></div>
            <div className="contents">
                <h4 className="item-name">{data.name} ------------------</h4>
                <p>{data.recipe}</p>
            </div>
            <div className="price">
                <b>${data.price}</b>
            </div>
        </div>
    )
}