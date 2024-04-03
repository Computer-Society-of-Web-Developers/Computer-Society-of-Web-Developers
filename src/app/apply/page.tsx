"use client"
import React, { useState } from 'react';
import NetworkSecure from '@/components/NetworkSecure';

const RegistrationForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [skills, setSkills] = useState('');
    const [position, setPosition] = useState('');
    const [reason, setReason] = useState('');
    const [resume, setResume] = useState<File | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("branch", branch);
        formData.append("year", year);
        formData.append("skills", skills);
        formData.append("position", position);
        formData.append("reason", reason);
        if (resume) {
            formData.append("resume", resume);
        }

        fetch('/api/join', {
            method: 'POST',
            headers: { 'x-api-key': 'test' },
            body: formData
        })
            .then((res) => res.json())
            .then(e.target.reset())
            .then(() => window.location.href = '/')
            .catch((err) => console.error(err));
    };

    return (
        <NetworkSecure
            element={

                <div className="container">
                    <div className="title">
                        <p>Registration</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="name"> Name</label>
                                <input onChange={(e) => { setName(e.target.value) }} type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="text" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="number">Phone Number</label>
                                <input onChange={(e) => { setPhone(e.target.value) }} type="text" id="number" placeholder="Enter your number" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="branch">Branch</label>
                                <input onChange={(e) => { setBranch(e.target.value) }} type="text" id="branch" placeholder="Enter your branch" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="year">Year</label>
                                <input onChange={(e) => { setYear(e.target.value) }} type="number" id="email" placeholder="Enter your year" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="skills"> Skills</label>
                                <input onChange={(e) => { setSkills(e.target.value) }} type="text" id="skills" placeholder="Enter your Skills" required />
                            </div>

                            <div className="input_box">
                                <label htmlFor="position">Position</label>
                                <div className="custom_select">
                                    <select id="position" onChange={(e) => { setPosition(e.target.value) }}>
                                        <option value="">Select</option>
                                        <option value="web">Web Developer</option>
                                        <option value="graphics">Graphics Designer</option>
                                        <option value="management">Management Coordinator</option>
                                        <option value="event">Event</option>
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="input_box">
                                <label>Reason</label>
                                <textarea onChange={(e) => { setReason(e.target.value) }} id='reason' placeholder='Why you are joining us ' className="textarea"></textarea>
                            </div>

                        </div>

                        <div className="reg_btn">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            }
        />
    );
}

export default RegistrationForm;