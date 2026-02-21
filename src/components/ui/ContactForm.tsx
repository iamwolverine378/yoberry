"use client";

export function ContactForm({ mode = "contact" }: { mode?: "contact" | "catering" }) {
  return (
    <form className="contact-form" data-reveal>
      <div className="contact-form__grid">
        <label>
          Name *
          <input type="text" name="name" required />
        </label>
        <label>
          Email *
          <input type="email" name="email" required />
        </label>
        {mode === "catering" ? (
          <>
            <label>
              Event Date *
              <input type="date" name="eventDate" required />
            </label>
            <label>
              Guest Count *
              <input type="number" name="guestCount" min={1} required />
            </label>
          </>
        ) : null}
      </div>

      <label>
        Message *
        <textarea name="message" rows={5} required />
      </label>

      <p className="form-helper">We usually respond within one business day.</p>
      <button type="submit" className="button button--primary">
        {mode === "catering" ? "Request Catering" : "Send Message"}
      </button>
    </form>
  );
}


