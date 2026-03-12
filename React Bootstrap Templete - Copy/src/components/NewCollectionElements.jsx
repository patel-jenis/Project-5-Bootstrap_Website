const NewCollectionElements = ({ dsc }) => {
    return (
        <ul className="p-0 m-0 collection-item">
            <li className="d-flex align-items-center gap-3 my-2">
                <i className="ri-check-fill" />
                {dsc}
            </li>
        </ul>
    )
}

export default NewCollectionElements