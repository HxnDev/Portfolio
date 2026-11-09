import { useState } from 'react';
import {
  IconArrowUpRight,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function ContactSection() {
  const [ready, setReady] = useState(false);
  function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`);
    const body = encodeURIComponent(
      `${form.get('message')}\n\n${form.get('name')} (${form.get('email')})`
    );
    window.location.href = `mailto:hassanshahzad.dev@gmail.com?subject=${subject}&body=${body}`;
    setReady(true);
  }
  return (
    <section
      className="container section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="card contact-card" data-reveal>
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">Let’s talk.</h2>
          <p className="muted contact-lead">
            A project, a role, or a good conversation.
            <br />
            I’d love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:hassanshahzad.dev@gmail.com">
              <IconMail size={20} />
              hassanshahzad.dev@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-shahzad-2a6617212/"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandLinkedin size={20} />
              LinkedIn <IconArrowUpRight size={15} />
            </a>
            <a href="https://github.com/HxnDev" target="_blank" rel="noreferrer">
              <IconBrandGithub size={20} />
              GitHub <IconArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <div className="form-row">
            <label>
              Name
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required maxLength={200} />
            </label>
          </div>
          <label>
            Message
            <textarea name="message" rows={4} required maxLength={4000} />
          </label>
          <button className="button primary" type="submit">
            Prepare email <IconArrowUpRight size={17} />
          </button>
          <p className="form-note" role="status">
            {ready
              ? 'Your email app should open with your draft. Send it there, or use the email link above. Your message stays here until you leave.'
              : 'Opens a draft in your email app. Nothing is sent automatically.'}
          </p>
        </form>
      </div>
    </section>
  );
}
