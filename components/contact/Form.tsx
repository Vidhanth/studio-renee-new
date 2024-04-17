import { Field } from "./Field";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export default function ContactForm() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrgnrgly";

  return (
    <form name="contact-form" method="POST" action={FORMSPREE_ENDPOINT}>
      <div className="grid grid-cols-12 gap-y-8">
        <input
          type="hidden"
          name="_subject"
          value="New submission from Studio Reneé Contact Form"
        />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="_gotcha" />
          </label>
        </p>

        <Field label="Name" className="col-span-12">
          <Input
            required
            type="text"
            autoComplete="name"
            name="name"
            id="name"
          />
        </Field>

        <Field
          label="Phone Number"
          className="col-span-12 md:mr-3 sm:col-span-6"
        >
          <Input
            required
            type="text"
            autoComplete="tel"
            name="phone_number"
            id="phone_number"
          />
        </Field>

        <Field label="Email" className="col-span-12 md:ml-3 sm:col-span-6">
          <Input
            required
            autoComplete="email"
            type="email"
            name="email"
            id="email"
          />
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
  );
}
