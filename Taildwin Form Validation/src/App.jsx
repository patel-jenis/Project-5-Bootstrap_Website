import React, { useState } from 'react'
import { toast } from 'react-toastify'

const App = () => {
    const [input, setInput] = useState({
        name: "", email: "", password: "", cpassword: "", gender: "", city: "", message: "",
    })
    const [error, setError] = useState({})

    
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

        setError({ ...error, [e.target.name]: false })
    }

    const handleSubmit = (e) => {
        e.preventDefault();3


        let errorObj = {}
        const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (input.name.trim() === "") {
            errorObj.name = true;
        }
        if (input.email.trim() === "" || !emailRgx.test(input.email)) {
            errorObj.email = true;
        }
        if (input.password.trim().length < 8) {
            errorObj.password = true;
        }
        if (input.cpassword.trim() === "" || input.cpassword !== input.password) {
            errorObj.cpassword = true;
        }
        if (input.gender.trim() === "") {
            errorObj.gender = true;
        }
        if (input.city.trim() === "") {
            errorObj.city = true;
        }
        if (input.message.trim() === "") {
            errorObj.message = true;
        }

        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            toast.success("Form Submitted Successfully 🎉");

            setInput({
                name: "",
                email: "",
                password: "",
                cpassword: "",
                gender: "",
                city: "",
                message: ""
            });
        }
    }

    return (
        <div className='bg-slate-900 py-14'>
            <h1 className='text-white text-center text-3xl mb-11'>Form Validation</h1>
            <form noValidate onSubmit={handleSubmit} className="max-w-md mx-auto sm:p-0 p-5">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name :</label>
                    <input type="text" id="name" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${error.name
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                        }`} placeholder="John Doe" value={input.name} name='name' onChange={handleChange} />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.name ? "Invalid Name...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email :</label>
                    <input type="email" id="email" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${error.email 
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                        }`} placeholder="abc@gmail.com" value={input.email} name='email' onChange={handleChange} />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.email ? "Invalid Email...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
                    <input type="password" id="password" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${error.password
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                        }`} value={input.password} name='password' onChange={handleChange} />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.password ? "Password must be 8 character long...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password :</label>
                    <input type="password" id="cpassword" className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${error.cpassword
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                        }`} value={input.cpassword} name='cpassword' onChange={handleChange} />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.cpassword ? "Password and Confirm Password must be same...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender :</label>
                    <div className="flex">
                        <div className="flex items-center me-4">
                            <input id="male" type="radio" name="gender" className="w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-0" value={"male"} onChange={handleChange} checked={input.gender === "male"} />
                            <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="female" type="radio" name="gender" className="w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-0" value={"female"} onChange={handleChange} checked={input.gender === "female"} />
                            <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.gender ? "Please select Gender...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City :</label>
                    <select id="city" className={`block w-full p-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white border ${error.city
                        ? "border-red-500 focus:ring-gray-300 focus:border-gray-300"
                        : "border-gray-300 dark:border-gray-600 focus:ring-gray-300 focus:border-gray-300"
                        } focus:ring-2 outline-none`} name="city" value={input.city} onChange={handleChange}>
                        <option value="">Choose a City</option>
                        <option value="1">Surat</option>
                        <option value="2">Ahmedabad</option>
                        <option value="3">Vadodara</option>
                        <option value="4">Gandhinagar</option>
                    </select>
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.city ? "Please select City...." : ""}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message :</label>
                    <textarea id="message" rows={3} className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${error.message
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:ring-gray-300 focus:border-gray-300"
                        }`} placeholder="Write your thoughts here..." name="message" value={input.message} onChange={handleChange} />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error.message ? "Please write a Message...." : ""}</p>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>

    )
}

export default App