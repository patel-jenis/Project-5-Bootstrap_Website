import TestimonialCard from "./TestimonialCard"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';

const Testimonial = () => {
    let cardElement = [
        {
            name: "mr. John doe",
            course: "designer",
            profileUrl: "/images/profile-1.png",
        },
        {
            name: "mr. onsequat",
            course: "developer",
            profileUrl: "/images/profile-2.png",
        },
        {
            name: "mr. John doe",
            course: "designer",
            profileUrl: "/images/profile-3.png",
        },
        {
            name: "mr. onsequat",
            course: "designer",
            profileUrl: "/images/profile-4.png",
        },
        {
            name: "mr. onsequat",
            course: "designer",
            profileUrl: "/images/profile-5.png",
        },
    ]

    return (
        <section className="mt-5 testimonial">
            <div className="container">
                <h2 className="text-center mb-5 sec-heading">Testimonial</h2>
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {cardElement.map((data, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard
                                name={data.name}
                                course={data.course}
                                profileUrl={data.profileUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial