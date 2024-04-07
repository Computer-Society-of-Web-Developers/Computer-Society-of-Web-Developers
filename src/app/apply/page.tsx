"use client"
import React, { useEffect, useState } from 'react';
import NetworkSecure from '@/components/NetworkSecure';
import { NEXT_PUBLIC_API_KEY } from '@/utils/config';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function RegistrationForm() {

    const showError = (error: string) => {
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<number | "">("");
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState<number | "">("");
    const [skills, setSkills] = useState('');
    const [position, setPosition] = useState('');
    const [reason, setReason] = useState('');
    const [resume, setResume] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (Number(phone) < 1) {
            setPhone("")
        }
    }, [phone])

    useEffect(() => {
        if (Number(year) < 1) {
            setYear("")
        } else if (Number(year) > 4) {
            setYear(4)
        }
    }, [year])

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!name) { return showError("Please enter your name.") }
        else if (!email || !/\S+@\S+\.\S+/.test(email)) { return showError("Please enter a valid email.") }
        else if (!phone) { return showError("Please enter your phone number.") }
        else if (!branch) { return showError("Please enter your branch.") }
        else if (!year) { return showError("Please enter your year.") }
        else if (!skills) { return showError("Please enter your skills.") }
        else if (!position) { return showError("Please select a position.") }
        else if (!reason) { return showError("Please enter your reason.") }
        else if (!resume) { return showError("Please upload your resume.") }

        if (resume.size > 1024 * 1024 * 5) {
            setLoading(false)
            return showError("File size must be less than 5MB.");
        }

        if (!resume.type.includes('pdf')) {
            setLoading(false)
            return showError("Invalid file type. Only PDF files are allowed.");
        }

        if (phone < 1000000000 || phone > 9999999999) {
            setLoading(false)
            return showError("Wrong format of the phone number.");
        }

        if (year < 1 || year > 4) {
            setLoading(false)
            return showError("Year must be between 1 and 4.");
        }

        if (reason.length < 50) {
            setLoading(false)
            return showError("Your reason should be at least 50 characters long.");
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone as any);
        formData.append("branch", branch);
        formData.append("year", year as any);
        formData.append("skills", skills);
        formData.append("position", position);
        formData.append("reason", reason);
        if (resume) {
            formData.append("resume", resume);
        }

        setLoading(true)

        fetch('/api/join', {
            method: 'POST',
            headers: { 'x-api-key': NEXT_PUBLIC_API_KEY },
            body: formData
        })
            .then(async (res) => {
                const data = await res.json()
                if (data.error) {
                    setLoading(false);
                    showError(data.error)
                    return;
                }
                setSubmit(true);
                setLoading(false);
                toast.success("Registration successful. Redirecting to home page...", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            })
            .catch((err) => {
                showError("An error occurred. Please try again.");
                console.error(err);
                setLoading(false);
            })
    };

    return (
        <NetworkSecure
            element={<>
                {submit ? (
                    <div className="text-center container p-10">
                        <p className='m-5 text-2xl text-green-700'>
                            <span className='text-5xl'>
                                🎊
                            </span>
                            <b>
                                Registration Success
                            </b>
                            <span className='text-5xl'>
                                🎉
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="container">
                        <div className="title">
                            <p>Registration</p>
                        </div>
                        <div>
                            <div className="user_details">
                                <div className="input_box">
                                    <label htmlFor="name"> Name</label>
                                    <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="input_box">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="input_box">
                                    <label htmlFor="number">Phone Number</label>
                                    <input onChange={(e) => { setPhone(Number(e.target.value)) }} value={phone} type="number" id="number" placeholder="Enter your number" required />
                                </div>
                                <div className="input_box">
                                    <label htmlFor="branch">Branch</label>
                                    <input onChange={(e) => { setBranch(e.target.value) }} value={branch} type="text" id="branch" placeholder="Enter your branch" required />
                                </div>
                                <div className="input_box">
                                    <label htmlFor="year">Year</label>
                                    <input onChange={(e) => { setYear(Number(e.target.value)) }} value={year} type="number" id="email" placeholder="Enter your year" required />
                                </div>
                                <div className="input_box">
                                    <label htmlFor="skills"> Skills</label>
                                    <input onChange={(e) => { setSkills(e.target.value) }} value={skills} type="text" id="skills" placeholder="Seperated by commas" required />
                                </div>

                                <div className="input_box">
                                    <label htmlFor="position">Position</label>
                                    <div className="custom_select">
                                        <select id="position" onChange={(e) => { setPosition(e.target.value) }} value={position}>
                                            <option value="">Select</option>
                                            <option value="web">Web Developer</option>
                                            <option value="graphics">Graphics Designer</option>
                                            <option value="management">Management Coordinator</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="resume" className="block text-gray-700">Resume</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        onChange={(e) => { setResume(e.target.files?.[0] || null) }}
                                        accept=".pdf"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="input_box">
                                    <label>Reason</label>
                                    <textarea onChange={(e) => { setReason(e.target.value) }} value={reason} id='reason' placeholder='Why do you want to join us. ' className="textarea"></textarea>
                                </div>

                            </div>

                            <div className="reg_btn">
                                {!loading ? (
                                    <button onClick={handleSubmit}>Register</button>
                                ) : (
                                    <button disabled>
                                        <div role="status" className='mx-auto'>
                                            <svg aria-hidden="true" className="mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-white fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </ div >
                )}
                <ToastContainer />
            </>}

        />
    )
}