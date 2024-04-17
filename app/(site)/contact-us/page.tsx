import Divider from "@/components/Divider";
import { Field, Input, Textarea } from "@/components/Form";
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
              <a href="mailto:studioreneedesigns@gmail.com">
                studioreneedesigns@gmail.com
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
                Studio Renée <br />
                No. 89/2, 2nd floor <br />
                East Anjaneya Temple Road, Basavanagudi <br />
                Bengaluru 560004
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

      <div className="mx-auto max-w-4xl px-6">
        <form
          className="mt-10"
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <div className="grid grid-cols-12 gap-y-8">
            {/* Honeypot field to prevent spam. */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <Field label="Name" className="col-span-12">
              <Input required type="text" name="first_name" id="first_name" />
            </Field>

            <Field
              label="Phone Number"
              className="col-span-12 md:mr-3 sm:col-span-6"
            >
              <Input
                required
                type="text"
                name="phone_number"
                id="phone_number"
              />
            </Field>

            <Field label="Email" className="col-span-12 md:ml-3 sm:col-span-6">
              <Input required type="email" name="email" id="email" />
            </Field>

            <Field label="Message" className="col-span-12">
              <Textarea required name="message" id="message" />
            </Field>
          </div>

          <div className="my-10 flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
