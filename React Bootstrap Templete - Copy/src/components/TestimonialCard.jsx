const TestimonialCard = ({ name ,course, profileUrl }) => {
    return (
            <div className="testi-box py-5 px-4">
                <div className="text-center position-relative">
                    <img src={`${profileUrl}`} alt="profile" className="profile-img" />
                    <img src="/images/quote-left.png" alt="quote" className="position-absolute quote-img" />
                </div>
                <div className="mt-3 testi-details text-center position-relative z-3">
                    <p>Thank you for letting me be a part of such a fantastic event! Being a volunteer for this race is much more than just work, it’s an unforgettable experience that will stay with me for the rest of my life.</p>
                    <h2>{name}</h2>
                    <h5>{course}</h5>
                </div>
            </div>
    )
}

export default TestimonialCard