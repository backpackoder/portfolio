import { useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Commons
import { ROUTE_HOME_LABEL } from "../../commons/commons";

// Types
import { AppProviderContextTypes } from "../../types/types";

export function Form() {
  const { formRef }: AppProviderContextTypes = useContext(AppContext);
  const { language, text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <section ref={formRef} className="form">
      <h2>📝 {ROUTE_HOME_LABEL[language]}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("formDescription") }}></p>

      <form action="https://formspree.io/f/mbjeakpy" method="POST">
        <input type="hidden" name="_subject" value="Nouveau message d'un client - Portfolio" />

        <label htmlFor="email">{text("emailForm")}: *</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="phone">
          {text("phoneForm")} <small>({text("optionalForm")}):</small>
        </label>
        <input type="tel" name="phone" id="phone" />

        <label htmlFor="social">
          {text("linkedInForm")} <small>({text("optionalForm")}):</small>
        </label>
        <input type="social" name="social" id="social" />

        <label htmlFor="title">{text("subjectForm")}: *</label>
        <input type="text" name="title" id="title" placeholder="Écrivez le titre..." required />

        <label htmlFor="message">{text("messageForm")}: *</label>
        <textarea
          name="message"
          id="message"
          required
          defaultValue="Bonjour Thibaut, Je suis à la recherche d'un développeur React pour mon projet. Pouvez-vous me contacter pour en discuter ? Merci"
          placeholder="Écrivez votre message..."
        />

        <button type="submit">{text("sendForm")}</button>
      </form>
    </section>
  );
}
