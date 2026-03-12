const InfoCard = ({ icon, title, dsc }) => {
    return (
        <div className="col-xl-4 col-12">
            <ul className="d-sm-flex align-items-center gap-4">
                <li>
                    <span>
                        <i className={`${icon}`}></i>
                    </span>
                </li>
                <li>
                    <h4>{title}</h4>
                    <p className="m-0">{dsc}</p>
                </li>
            </ul>
        </div>
    )
}

export default InfoCard