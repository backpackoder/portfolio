"use client";

import { useAppContext } from "@/app/context/AppProvider";

// Commons
import { PARTS } from "@/commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

export function Form() {
  const { language, text, formRef } = useAppContext();

  return (
    <article ref={formRef} id={PARTS.FORM.ID} className={`form bg-gray-50 ${styles.article}`}>
      <h2 className={styles.titles.h2}>📝 {PARTS.FORM.LABEL[language]}</h2>

      <section className="p-8">
        <p
          dangerouslySetInnerHTML={{ __html: text("formDescription") }}
          className="text-center mb-4"
        ></p>

        <div className="mx-auto max-w-screen-sm bg-white p-8 rounded-lg shadow-lg">
          <form action="https://formspree.io/f/mbjeakpy" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="Nouveau message d'un client - Portfolio" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-2 rounded-lg duration-150 hover:border-black">
                <label className="sr-only" htmlFor="email">
                  {text("emailForm")}: *
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder={`${text("emailForm")} *`}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="border-2 rounded-lg duration-150 hover:border-black">
                <label className="sr-only" htmlFor="phone">
                  {text("phoneForm")} <small>({text("optionalForm")}):</small>
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder={`${text("phoneForm")} (${text("optionalForm")})`}
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>

            <div className="border-2 rounded-lg duration-150 hover:border-black">
              <label className="sr-only" htmlFor="social">
                {text("linkedInForm")} <small>({text("optionalForm")}):</small>
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder={`${text("linkedInForm")} (${text("optionalForm")})`}
                type="text"
                id="social"
                name="social"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                {text("messageForm")}
              </label>

              <textarea
                className="w-full min-h-[150px] text-sm p-3 border-2 border-gray-200 rounded-lg duration-150 hover:border-black"
                placeholder={`${text("messageForm")} *`}
                defaultValue={
                  "Bonjour Thibaut,\n" +
                  "Je suis à la recherche d'un développeur front-end pour mon projet.\n" +
                  "Pouvez-vous me contacter pour en discuter ?\n" +
                  "Merci"
                }
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full sm:w-auto bg-black px-5 font-medium text-white py-3 border-2
              border-black rounded-lg transition duration-150 ease-in-out hover:bg-white hover:text-black"
              >
                {text("sendForm")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
