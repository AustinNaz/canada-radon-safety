export default function Contact() {
  return (
      <section className="bg-orange-500 py-12 px-4 text-black min-h-screen">
        <h2 className="text-center text-2xl font-bold text-white mb-6">CONTACT US</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-col lg:flex-row gap-10 px-4">
          <form className="bg-white p-6 rounded w-full lg:w-2/3 space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name*" className="border w-full px-4 py-2 border-orange-500" />
              <input type="text" placeholder="Last Name*" className="border w-full px-4 py-2 border-orange-500" />
            </div>
            <input type="email" placeholder="Email Address*" className="border w-full px-4 py-2 border-orange-500" />
            <input type="text" placeholder="Phone Number" className="border w-full px-4 py-2 border-orange-500" />
            <textarea placeholder="Message*" rows={4} className="border w-full px-4 py-2 border-orange-500" />
            <button type="submit" className="w-full sm:w-auto bg-[#00a1d6] text-white px-6 py-2 rounded">Send</button>
          </form>
          <div className="w-full lg:w-1/3 text-white space-y-3">
            <h2 className="text-2xl font-semibold">Have Questions or Ready to Take Action?</h2>
            <p className="text-2xl font-bold text-[#00384a]">We’re Here to Help!</p>
            <br />
            <br />
            <p><strong>Email:</strong> info@radonca.ca</p>
            <p><strong>Phone:</strong> 587 581 5971</p>
            <p>Calgary, AB, Canada</p>
            <div>
              <strong>Operating Hours:</strong>
              <ul className="text-sm list-disc list-inside">
                <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: 10:00 AM – 4:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}