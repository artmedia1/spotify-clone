'use client'
import { FormEvent } from "react";

export default function Form() {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        if (typeof email === 'string' && typeof password === 'string') {
            try {
                const response = await fetch('/api/auth/register/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const responseData = await response.json();
                console.log('Form submitted successfully:', responseData);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else {
            console.error('Form data is not in expected format.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
