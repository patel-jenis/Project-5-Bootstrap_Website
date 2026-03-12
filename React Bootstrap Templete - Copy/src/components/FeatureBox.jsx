const FeatureBox = ({ title, dsc, imgUrl }) => {
    return (
        <ul className="d-flex justify-content-center align-items-center gap-4 my-4 p-0">
            <li className="text-lg-end feature-ds">
                <h4>{title}</h4>
                <p className="m-0">{dsc}</p>
            </li>
            <li className="bg-light rounded-3 p-4">
                <span className="bg-light">
                    <img src={imgUrl} alt="icon" />
                </span>
            </li>
        </ul>
    )
}

export default FeatureBox