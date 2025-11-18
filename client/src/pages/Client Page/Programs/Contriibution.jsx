const Contribution = ({ programColor = "blue" }) => {
  const programStatus = {
    active: true,
  };

  const colorVariants = {
    blue: { primary: "blue-600", hover: "blue-700" },
    green: { primary: "green-600", hover: "green-700" },
    purple: { primary: "purple-600", hover: "purple-700" },
    red: { primary: "red-600", hover: "red-700" },
    orange: { primary: "orange-600", hover: "orange-700" }
  };

  const colors = colorVariants[programColor] || colorVariants.blue;
  
  const InputFeilds = ({placeholders, buttonText}) => {
    return (
      <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        {placeholders.map(place => (
          <div key={place.placeholder} className="mb-3">
            <input 
              className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 
                text-sm text-gray-700 placeholder-gray-400
                focus:border-${colors.primary} focus:ring-2 focus:ring-${colors.primary}/20 
                transition-all duration-200 outline-none`}
              placeholder={place.placeholder} 
            />
          </div>
        ))}
        <button className={`w-full px-4 py-3.5 bg-${colors.primary} hover:bg-${colors.hover} 
          text-white font-semibold rounded-lg shadow-md hover:shadow-lg
          transition-all duration-200 text-sm uppercase tracking-wider
          transform hover:-translate-y-0.5`}>
          {buttonText}
        </button>
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-secondary-800 border-b-2 border-primary-100 pb-2">
          Join this programme
        </h2>
        
        {programStatus.active === false ? (
          <div className="space-y-4">
            <p className="text-secondary-600 leading-relaxed">
              Please input your data here the program is now running openly for applications. 
              Please make sure you input all the data required and sincerely.
            </p>
            <InputFeilds 
              placeholders={[
                {placeholder: "First Name"}, 
                {placeholder: "Last Name"}, 
                {placeholder: "Age"}, 
                {placeholder: "Gender"}, 
                {placeholder: "Email"}, 
                {placeholder: "Phone"}
              ]} 
              buttonText="Apply Now"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-secondary-600 leading-relaxed">
              The program is actively on its learning period. However, you can leave your 
              contacts here to be considered for the next cohort
            </p>
            <InputFeilds 
              placeholders={[
                {placeholder: "Full Names"}, 
                {placeholder: "Phone"}, 
                {placeholder: "Email"}
              ]} 
              buttonText="join waitlist"
            />
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-100 pb-2">
          Sponsor This Program
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Are you an individual or an organisation who is passionate about helping youths 
          from vulnerable communities like refugees to stay focused and physically fit 
          while practicing their arts? Contribue to us. The information are below.
        </p>
        <button className={`w-full py-4 px-6 bg-${colors.primary} hover:bg-${colors.hover} 
          text-white font-bold rounded-lg shadow-md hover:shadow-lg
          transition-all duration-200 text-lg tracking-wide
          transform hover:-translate-y-0.5 active:translate-y-0`}>
          CONTRIBUTE NOW
        </button>
        
        <p className="text-secondary-600 leading-relaxed mt-6">
          Feel free to get in touch with our Human Resources Officer in case you might 
          want to specify the execution of your contribution or monitor your contribution.
        </p>
        
        <img 
          className="w-full rounded-xl shadow-lg" 
          src="/images/hr.png" 
          alt="HR Officer"
        />
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="py-3.5 px-4 bg-gray-800 hover:bg-gray-900 
            text-white font-semibold rounded-lg shadow-md hover:shadow-lg
            transition-all duration-200 text-sm uppercase tracking-wider
            transform hover:-translate-y-0.5">
            Request a Call
          </button>
          <button className={`py-3.5 px-4 bg-${colors.primary} hover:bg-${colors.hover} 
            text-white font-semibold rounded-lg shadow-md hover:shadow-lg
            transition-all duration-200 text-sm uppercase tracking-wider
            transform hover:-translate-y-0.5`}>
            Send an Email
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contribution;