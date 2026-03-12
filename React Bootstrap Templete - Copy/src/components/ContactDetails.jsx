const ContactDetails = ({ icon, dsc }) => {
    return (
        <li className="d-flex m-0 my-2 gap-2">
            <span>
                <i className={`${icon}`} />
            </span>
            <p className="m-0">
                {dsc}
            </p>
        </li>
    )
}

export default ContactDetails