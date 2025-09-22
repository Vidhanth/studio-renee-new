import ContactForm from "@/components/contact/Form";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { defaultMetadata } from "@/constants";
import { FadeIn } from "@/transitions";
import { FadeInLeft } from "@/transitions/FadeInLeft";
import {
  MdOutlineLocationOn,
  MdOutlineLocalPhone,
  MdOutlineEmail,
} from "react-icons/md";

export const metadata = {
  ...defaultMetadata,
  title: `Contact Us - ${defaultMetadata.title}`,
};

export default function ContactPage() {
  return (
    <div>
      <Header
        title="Get In Touch"
        subtitle="We would love to hear from you. Contact us for inquiries or collaborations."
        bgTexture="pre-footer"
      />

      <div
        className={`max-w-6xl mx-auto px-6 pt-10 flex flex-col text-start md:text-start md:flex-row md:justify-between justify-center flex-wrap items-stretch`}
      >
        <div className="md:w-1/2 flex-grow flex flex-col gap-y-10 py-10">
          <div className="flex flex-col gap-y-0">
            <FadeInLeft delay={0.2}>
              <MdOutlineEmail className="text-3xl text-secondary" />
              <div className="font-bold text-lg pt-2">Email</div>
              <a href="mailto:info@studiorenee.co.in">
                info@studiorenee.co.in
              </a>
            </FadeInLeft>
          </div>
          <div className="flex flex-col gap-y-0">
            <FadeInLeft delay={0.4}>
              <MdOutlineLocalPhone className="text-3xl text-secondary" />
              <div className="font-bold text-lg pt-2">Phone</div>
              <a href="tel:9901897130"> +91 9901897130</a>
            </FadeInLeft>
          </div>
          <div className="flex flex-col gap-y-0">
            <FadeInLeft delay={0.6}>
              <MdOutlineLocationOn className="text-3xl text-secondary" />
              <div className="font-bold text-lg pt-2">Office</div>
              <div>
                Studio Reneé <br />
                No. 17, 3rd cross <br />
                N. S. Iyengar Street, Seshadripuram <br />
                Bengaluru 560020
              </div>
            </FadeInLeft>
          </div>
        </div>
        <div className="md:w-1/2 h-56 md:h-auto flex-grow">
          <FadeIn className="h-full w-full" delay={0.8}>
            <iframe
              className="h-full w-full shadow-md border border-tertiary rounded-sm "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.84196751461!2d77.59030941524074!3d12.917876719549044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bfd1934751%3A0xd421098a499824c6!2sStudio%20Ren%C3%A9e!5e0!3m2!1sen!2sin!4v1632890998681!5m2!1sen!2sin"
              // style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeIn>
        </div>
      </div>

      <Divider />

      <div className="mx-auto max-w-4xl px-6 pt-10">
        <ContactForm />
      </div>
    </div>
  );
}
