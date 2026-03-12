const Description = ({ subTitle, title, dsc }) => {
    return (
        <div>
            <span>{subTitle}</span>
            <h4 className="mt-3">{title}</h4>
            <p>{dsc}</p>
        </div>
    )
}

export default Description