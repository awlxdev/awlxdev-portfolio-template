import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function Contact() {
  const { contact, brand } = siteConfig

  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-label">04 / GET IN TOUCH</div>

      <h2>
        {contact.heading}
        <br />
        <span>{contact.highlight}</span>
      </h2>

      <p className="section-intro">
        {contact.description}
      </p>

      {contact.email && (
        <>
          <a
            className="contact-link"
            href={`mailto:${contact.email}`}
          >
            <Mail size={19} />
            {contact.button}
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-email">
            {contact.email}
          </div>
        </>
      )}

      {!contact.email && (
        <p className="section-intro">
          Add your email address in src/data/profiles/blank.js.
        </p>
      )}

      <div className="contact-signature">
        {brand.first}
        <span>{brand.second}</span>
        <i>{brand.suffix}</i>
      </div>
    </section>
  )
}
