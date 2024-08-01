const ContactPage = () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" className="border p-2" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" className="border p-2" />
        </div>
        <div>
          <label>Message:</label>
          <textarea className="border p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
      </form>
    </div>
  );
  
  export default ContactPage;
  