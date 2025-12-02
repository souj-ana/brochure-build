import { Header } from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="space-y-6 text-foreground/90">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Rcube technologies LLC ("we", "us", or "our") operates the yourvault.art website (the "Service").
            </p>
            <p className="mt-2">
              This page explains how we collect, use, disclose, and protect personal data when you use our Service, 
              and the choices you have regarding that data.
            </p>
            <p className="mt-2">
              Use of the Service is subject to this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Controller: Rcube technologies LLC</li>
              <li>Registered address: 2439 Alameda De Las Pulgas</li>
              <li>Privacy contact: <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
            <p className="mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Personal Data</h3>
            <p className="mb-3">
              While using our Service, we may ask you to provide us with certain personally identifiable information 
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, 
              but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Social Media Profile information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Data</h3>
            <p className="mb-4">
              We may also collect information that your browser sends whenever you visit our Service or when you access 
              the Service by or through a device ("Usage Data"). Usage Data may include information such as your device's 
              Internet Protocol (IP) address, browser type and version, device identifiers, the pages of our Service that 
              you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
            </p>

            <h3 className="text-xl font-semibold mb-3">Cookies and Similar Technologies</h3>
            <p className="mb-4">
              We use cookies, pixels and similar technologies on our website. Essential cookies are required to operate 
              the Service. We may also use non-essential cookies for analytics, personalization, or advertising purposes 
              in accordance with applicable law. You can manage cookies via your browser settings.
            </p>

            <h3 className="text-xl font-semibold mb-3">Sources of Personal Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You: Information you provide (e.g., forms, account, support).</li>
              <li>Device & browser: Technical and usage data (e.g., IP address, device identifiers, logs). 
                Non-essential cookies/SDKs are used only with consent where required.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
            <p className="mb-3">Rcube technologies LLC uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Retention</h2>
            <p>
              We keep personal data only as long as necessary for the purposes described or as required by law. 
              Where specific periods are not feasible, we apply clear criteria (e.g., account lifetime + a defined period, 
              statutory limitation periods). Cookies and SDKs have varying retention periods depending on their purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Delete or Update Your Data</h2>
            <p>
              Where available, you may update certain information within your account settings. You may also request 
              that we delete Personal Data we hold about you, subject to legal exceptions (for example, if we must 
              retain data to comply with law).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of marketing emails via the unsubscribe link or by contacting us.</li>
              <li>Manage cookies through your browser settings.</li>
              <li>California residents: use our Do Not Sell or Share and Limit SPI options where applicable.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">International Transfers</h2>
            <p className="mb-3">
              Personal data may be transferred to and processed in countries outside the EEA or UK. Where such transfers occur, 
              we use appropriate safeguards such as the EU Standard Contractual Clauses (Commission Decision (EU) 2021/914) 
              and/or the UK International Data Transfer Agreement/Addendum, and we carry out transfer risk assessments with 
              supplementary measures where appropriate.
            </p>
            <p className="mb-3">
              Our hosting and service providers may be located in various jurisdictions. We ensure that all data processors 
              maintain adequate data protection standards.
            </p>

            <h3 className="text-xl font-semibold mb-3">Service Providers and Affiliates</h3>
            <p className="mb-3">
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide 
              the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. 
              We may also share information with our affiliates, in which case we require them to honor this Privacy Policy. 
              These third parties have access to Personal Data only to perform these tasks on our behalf and are obligated 
              not to disclose or use it for any other purpose.
            </p>
            <p className="mb-3">
              Typical categories of recipients include cloud hosting, analytics, advertising/remarketing partners (where enabled), 
              payment processors, customer support platforms, and security/fraud-prevention vendors.
            </p>

            <h3 className="text-xl font-semibold mb-3">Business Transfers</h3>
            <p className="mb-3">
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of 
              company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>

            <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
            <p className="mb-3">
              Rcube technologies LLC may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of Rcube technologies LLC</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Security of Data</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your Personal Data. While no method 
              of transmission or storage is 100% secure, we continuously improve our safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Automated Decision-Making</h2>
            <p>
              We do not make decisions based solely on automated processing that produce legal or similarly significant effects. 
              If this changes, we will provide required information about the logic involved and your rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Links to Other Sites</h2>
            <p className="mb-2">
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, 
              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every 
              site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any 
              third party sites or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our Services are not directed to children. For EU/UK users, where we offer information society services and 
              rely on consent, we obtain parental consent for users below the applicable age (EU up to 16; UK 13). If you 
              believe a child has provided data contrary to this policy, contact us to request deletion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-2">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page.
            </p>
            <p className="mb-2">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming 
              effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Privacy requests: <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a></li>
              <li>By email: <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Privacy;