import React from 'react'
import './PrivacyPage.css'

function PrivacyPage() {
  return (
    <div className='privacy-container'>
      <div className='privacy-border'>
        <div className='privacy-title-container'>
          <div className='privacy-title-text'>
              Privacy Policy
          </div>
          <div className='privacy-logo-container'>
                <img src="/images/Transparent Logo Symbol.png" alt="logo" className='logo-title-img'/>
            </div>
        </div>
        <div className='accent' />
        <div className='privacy-text'>
            Your privacy is important to us. It is our policy at Bin City to respect your privacy regarding any information we may collect from you through our website, mobile applications, and other digital platforms we own and operate.
            <br/><br/>
            Information Collection and Usage:
            We only collect personal information from you when it is necessary to provide you with our services. We obtain this information through fair and lawful means, with your knowledge and consent. We are transparent about the reasons for collecting your information and how it will be used.
            <br/><br/>
            Data Retention and Security:
            We retain the collected information for as long as required to fulfill the purpose for which it was collected and to provide you with the requested services. We take commercially reasonable measures to protect the stored data against loss, theft, unauthorized access, disclosure, copying, use, or modification.
            <br/><br/>
            Third-Party Sharing:
            We do not share any personally identifying information publicly or with third parties unless required by law or with your explicit consent. We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            <br/><br/>
            External Websites:
            Our website and platforms may contain links to external websites that are not operated by us. Please note that we have no control over the content and practices of these sites, and we cannot accept responsibility or liability for their respective privacy policies. We recommend reviewing the privacy policies of any external websites you visit.
            <br/><br/>
            Consent and Opting Out:
            By using our services, you consent to the collection and use of your personal information as outlined in this policy. You have the right to refuse our request for your personal information; however, this may limit our ability to provide you with certain services.
            <br/><br/>
            Children's Privacy:
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children without the consent of a parent or guardian. If you believe we have collected personal information from a child without proper consent, please contact us, and we will take appropriate steps to remove the information.
            <br/><br/>
            Changes to this Privacy Policy:
            We may update our privacy policy from time to time. Any changes will be reflected on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we handle your data and personal information.
            <br/><br/>
            Contact Us:
            If you have any questions or concerns regarding our privacy practices or the use of your personal information, please contact us through the contact information provided on our website.
            <br/><br/>
            This policy is effective as of 1 July 2023.
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage