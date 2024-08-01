import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ContactPage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Contact Us</h1>
    <form>
      <div className="p-float-label mt-4">
        <InputText id="name" />
        <label htmlFor="name">Name</label>
      </div>
      <div className="p-float-label mt-4">
        <InputText id="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="p-float-label mt-4">
        <InputText id="message" />
        <label htmlFor="message">Message</label>
      </div>
      <Button label="Submit" icon="pi pi-send" className="p-button-primary mt-4" />
    </form>
  </div>
);

export default ContactPage;
