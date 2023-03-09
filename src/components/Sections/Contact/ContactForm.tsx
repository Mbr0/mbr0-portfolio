import emailjs from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useRef, useState} from 'react';

emailjs.init('cNRBGhv5rCFpIP-6_');

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Create a useRef hook to get a reference to the form element

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data]
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!formRef.current) {
        return;
      }
      try {
        await emailjs.sendForm(
          'service_bte37n6',
          'template_j1ltxaf',
          formRef.current, // Pass the formRef to the sendForm method
          process.env.REACT_APP_EMAILJS_USER_ID
        );
        console.log('Message sent successfully!');
        setMessageSent(true); // Set the messageSent state to true
      } catch (error) {
        console.log('Error sending message:', error);
      }

      console.log('Data to send: ', data);
    },
    [data]
  );

  const inputClasses =
    'bg-neutral-300 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-emerald-700 rounded-md placeholder:text-neutral-600 placeholder:text-sm text-neutral-600 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={formRef}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-emerald-800 bg-emerald-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
      {messageSent && <p>Success, your mail has been sent!</p>}
    </form>
  );
});

export default ContactForm;
