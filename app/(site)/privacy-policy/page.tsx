import { archivo } from "@/fonts";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-6 my-10">
      <h1 className={`${archivo.className} text-3xl lg:mb-4 lg:text-[2.5rem] font-bold`}>
        Privacy Policy
      </h1>
      <br />
      Studio Renee (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects
      your privacy and is committed to protecting the personal information you
      provide to us. This Privacy Policy explains how we collect, use, and
      safeguard your information when you visit our website or communicate with
      us.
      <div className="font-bold py-2">Consent</div>
      By providing us with your personal information, you consent to the
      collection, use, and disclosure of that information as described in this
      Privacy Policy. You may withdraw your consent at any time by contacting us
      using the information provided at the end of this policy.
      <div className="font-bold py-2">Information Collection</div>
      We collect personal information that you voluntarily provide to us when
      you interact with our website, such as when you fill out contact forms or
      communicate with us via email. The types of personal information we may
      collect include your name, email address, phone number, and any other
      information you choose to provide.
      <div className="font-bold py-2">Use of Information</div>
      We use the information we collect solely to respond to your inquiries and
      provide you with the information or services you request.
      <div className="font-bold py-2">Disclosure of Information</div>
      We do not disclose your personal information to third parties unless
      required by law or to comply with legal obligations.
      <div className="font-bold py-2">Data Security</div>
      We take reasonable measures to protect the security of your personal
      information and prevent unauthorized access, disclosure, alteration, or
      destruction. However, please be aware that no method of transmission over
      the internet or electronic storage is completely secure, and we cannot
      guarantee the absolute security of your information.
      <div className="font-bold py-2">Retention of Information</div>
      We will retain your personal information for as long as necessary to
      fulfil the purposes outlined in this Privacy Policy, unless a longer
      retention period is required or permitted by law.
      <div className="font-bold py-2">Changes to this Privacy Policy</div>
      We reserve the right to update or modify this Privacy Policy at any time.
      Any changes will be effective immediately upon posting the revised policy
      on our website. We encourage you to review this Privacy Policy
      periodically for any updates.
      <div className="font-bold py-2">Contact Us</div>
      If you have any questions or concerns about this Privacy Policy or our
      data practices, please contact us at{" "}
      <a href="mailto:studioreneedesigns@gmail.com">
        studioreneedesigns@gmail.com
      </a>
      .
    </div>
  );
}
