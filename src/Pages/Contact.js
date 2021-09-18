import React from 'react'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

function Contact() {
    return (
        <div className="contact-page-container">
            <Sidebar home={false} />

            <h1 className="page-header">Contact</h1>

            <div className="contact-page-text-container">
                <p id="contact-email-line">
                    You can contact me at <span id="email">cjk246@cornell.edu</span>.
                </p>

                <p>
                    I was going to make a contact form with php but GitHub Pages
                    only supports static sites so I can't do that at the moment. I may
                    revist later and host a form somewhere else so I can embed here.
                </p>
            </div >

            {/* <div className="contact-form-container">
                <form className="contact-form" action="../process_form.php" method="post">
                    <label for="name">Name:</label>
                    <input className="contact-name" type="text" id="name" name="name" placeholder="Your Name" required />

                    <label for="email">Email:</label>
                    <input className="contact-email" type="email" id="email" name="name" placeholder="user@example.com" required />

                    <label for="comments">Comments:</label>
                    <textarea className="comments" id="comments" name="comments" placeholder="Your Comments" rows="7" required />

                    <input className="submit-btn" type="submit" />

                    <p style={{ textAlign: "left", margin: "14px", fontWeight: "bold" }}>
                        All fields required
                    </p>
                </form>
            </div> */}

            < Footer page="subpage" />
        </div >
    )
}

export default Contact
