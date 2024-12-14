import React from 'react';

const ContactUsPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6">
      <div className="grid lg:grid-cols-3 items-center">
        <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
          <ContactInfo
            icon={OfficeIcon}
            title="Visit office"
            description="123 Main Street, Durban, South Africa"
          />
          <ContactInfo
            icon={PhoneIcon}
            title="Call us"
            description="031 456 7899"
          />
          <ContactInfo
            icon={ChatIcon}
            title="Chat to us"
            description="info@AWBooking.com"
          />
          <ContactInfo
            icon={FaxIcon}
            title="Fax"
            description="+27-548-2588"
          />
        </div>

        <div className="lg:col-span-2 bg-[#003060] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <h2 className="text-3xl text-white text-center font-bold mb-6">Contact us</h2>
          <form onSubmit={handleSubmit}>
            <div className="max-w-md mx-auto space-y-3">
              <InputField type='text' placeholder='Name' />
              <InputField type='email' placeholder='Email' />
              <InputField type='text' placeholder='Phone No.' />
              <Textarea placeholder='Message' rows="6" />
              <button type='submit' className="text-gray-800 w-full relative bg-[#68BBE3] hover:bg-[#0E86D4] font-semibold rounded-lg text-sm px-6 py-3 !mt-6">
                <SendIcon />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
    <Icon />
    <h4 className="text-gray-800 text-base font-bold mt-4">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
  />
);

const Textarea = ({ placeholder, rows }) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
  />
);

const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#003060]" viewBox="0 0 512 512">
    {/* SVG Path for Office Icon */}
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#003060]" viewBox="0 0 473.806 473.806">
    {/* SVG Path for Phone Icon */}
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#003060]" viewBox="0 0 32 32">
    {/* SVG Path for Chat Icon */}
  </svg>
);

const FaxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-[#003060]" viewBox="0 0 100 100">
    {/* SVG Path for Fax Icon */}
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
    {/* SVG Path for Send Icon */}
  </svg>
);

export default ContactUsPage;
