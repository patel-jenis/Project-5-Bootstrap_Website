const Star = ({ isFill }) => {
    return (
            <span className="rating"><i className={isFill ? "ri-star-s-fill" : "ri-star-s-line"}></i></span>
    )
}

export default Star