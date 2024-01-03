import React from 'react'
import MiniNav from '../NavBar/MiniNav'
import LogoNav from '../NavBar/LogoNav'
import MainNav from '../NavBar/MainNav'
import ContactLanding from './ContactLanding'

const TermsandPrivacy = () => {
  return (
    <div>
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
       <div className='container my-5 mulish fw-bold'>
       <p className=''>
        Thank you for visiting Merida Tech Minds website. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines the types of information we may collect, how we use it, and the steps we take to safeguard your privacy.
        By using our website or providing us with your personal information,
         you agree to the terms and conditions of this Privacy Policy.
        </p>
        <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>1. Information We Collect:</h3>
        <h5 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>We may collect the following types of information:</h5>
        <ul style={{listStyleType:"disc"}}>
            <li>
                <p>
                Personal Information: When you visit our website or use our services, we may collect personally identifiable information such as your name,
                 email address, phone number, and other relevant contact details.
                </p>
                
            </li>
            <li>
            <p>
                Non-Personal Information: We may collect non-personal information, such as browser type, operating system, IP address,
                 and other technical details, to enhance your experience on our website.
                </p>
            </li>
        </ul>
        <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>2. How We Use Your Information:</h3>
        <h5 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>We use the information we collect for the following purposes:</h5>
        <ul style={{listStyleType:"disc"}}>
            <li>
                <p>
                Communication: We may use your contact information to respond to your inquiries, provide
                 updates, and send promotional material relevant to our services. </p>
                
            </li>
            <li>
            <p>
                Improvement of Services: We use non-personal information to analyze website usage
                 trends and improve our website's functionality and content. </p>
            </li>
            <li>
            Legal Compliance: We may use your information
             to comply with applicable laws, regulations, or legal processes.
            </li>
        </ul>
        <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>3. Information Sharing:</h3>
        <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, 
        as long as those parties agree to keep this information confidential.
        </p>
        <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>4. Cookies and Tracking Technologies:</h3>
        <p>Our website may use cookies and other tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this 
            may limit your ability to use certain features on our website.</p>
            <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>5. Security:</h3>
        <p>We take reasonable measures to protect your personal information from unauthorised access, use, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage
             method is 100% secure, and we cannot guarantee absolute security.</p>
             <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>6. Your Choices:</h3>
        <p>You have the right to access, correct, or delete your personal information. You may also choose not to provide certain information, although 
            this may limit your ability to access certain features of our website.
             </p>
   <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>7. Payment & Refund Policy:</h3>
   <ul style={{listStyleType:"disc"}} className='flex flex-column gap-3'>
    <li>
    We reserve the right to amend course 
    and service prices or run promotions at any time, without prior notice.
    </li>
    <li>
    All courses and services booked as part of the Package
     deals are non-refundable and non-transferable under any circumstances. </li>
    <li>
    Instalments should be Paid on or Before the due date failing which will
     Result in Late payment Charges.
</li>
    <li>
    Dates must be selected at time of booking. Training dates are subject to availability at preferred training centres & places 
    are not confirmed until your booking has been processed by our team. </li>
    <li>
    Under medical or compassionate circumstances (proof of which may be required) and where immediate reschedule might not be possible;
     a credit may be placed on file as a gesture of goodwill.</li>
    <li>
    Credits will be valid towards training courses only and run for a period of up to 3 months from the date of issue at which time the course fees would be forfeited. 
    No refund of course fees can be issued.</li>
    <li>
    Booked training is non-transferable to an alternative student.Please ensure the booking is made giving the correct 
    name of the person attending the course at the time of making payment.</li>
   <li>For any information connect with us at info@meridatechminds.com</li>
   </ul>
   <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>8. Changes to this Privacy Policy:</h3>
   <p>We reserve the right to update this Privacy Policy at any time. We encourage you to review this page periodically for any changes. Your continued use of our website
     after changes are made constitutes acceptance of those changes.</p>
     <h3 style={{color:"rgb(19,19,60)"}} className='fontfam fw-bolder mb-3'>9. Contact Us:</h3>
   <p>If you have any questions or concerns about this Privacy Policy,
     please contact us at info@meridatechminds.com</p>
    <p>
    Thank you for trusting Merida Tech Minds(OPC) Pvt. Ltd. Your privacy is important to us, 
    and we are committed to protecting your personal information.
    </p>
       </div>
    <ContactLanding/>
    </div>
  )
}

export default TermsandPrivacy