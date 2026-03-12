const FeatureBox2 = ({ title, dsc, imgUrl }) => {
    return (
        <ul className="d-flex align-items-center gap-4 my-4 p-0">
            <li className="bg-light rounded-3 p-4">
                <span className="bg-light">
                    <img src={imgUrl} alt="icon" />
                </span>
            </li>
            <li className="text-start feature-dsc">
                <h4>{title}</h4>
                <p className="m-0">{dsc}</p>
            </li>
        </ul>
    )
}

export default FeatureBox2