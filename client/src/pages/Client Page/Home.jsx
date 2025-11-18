
import { useNavigate } from 'react-router-dom';
import Header from "./Navbars/headerPages"

const Home = () => {
  const navigate = useNavigate();
  
  const partners = [
    {
      id: 1,
      partnerName: "UNHCR, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 2,
      partnerName: "DRC, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 3,
      partnerName: "FilmAid International",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 4,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 5,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 6,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 7,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 8,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 9,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    },
    {
      id: 10,
      partnerName: "YEDA, Kenya",
      logo: "/images/trial no bg image.png"
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Mwangi",
      logo: "/images/trial no bg image.png",
      testimony: "The Creative Arts Centre has been a lifeline for our community. Through their programs, I've not only learned new skills but also found healing and hope. The supportive environment has helped me rebuild my confidence and connect with others who understand my journey."
    },
    {
      name: "Ahmed Hassan",
      logo: "/images/trial no bg image.png",
      testimony: "As a refugee, finding a place where I can express my culture while adapting to a new environment was crucial. CAC provided exactly that - a space where my heritage is celebrated and my future is being shaped through creative expression and skill development."
    },
    {
      name: "Grace Akinyi",
      logo: "/images/trial no bg image.png",
      testimony: "The leadership programs at CAC have transformed me from a shy newcomer to a confident community advocate. I now help other refugees navigate their new lives while preserving their cultural identity through art and community engagement."
    },
    {
      name: "Mohammed Ali",
      logo: "/images/trial no bg image.png",
      testimony: "CAC's English training program opened doors I never thought possible. Combined with their creative arts workshops, I've developed both practical skills and emotional resilience. This organization truly understands the holistic needs of refugees."
    },
  ];
  
  
  
  
  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
    <Header text="Creative Arts Center" />
    {/* Hero Section */}
     {/* Hero Section */}
      <div className="relative overflow-hidden mt-15">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/30 z-10"></div>
        <img src="/images/displayerpic.png" alt="Creative Arts Centre" className="object-cover w-full h-[40vh] md:h-[50vh]"/>
           
        {/* CAC Logo */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <img src="/images/trial no bg image.png" alt="CAC Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white/90 rounded-full p-2 shadow-lg"/>
        </div>
       
       {/* Hero Content */}
       <div className="absolute inset-0 flex items-center justify-center z-20 pt-20">
         <div className="text-center text-white px-4">
           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
             PRESERVING REFUGEES IDENTITY
           </h1>
           <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
           <p className="text-lg md:text-xl max-w-4xl mx-auto drop-shadow-md leading-relaxed">
             Creative Arts Centre (CAC) operates on a structured governance system designed to promote effective leadership, participation, accountability, community engagement and effective programs and services delivery.
           </p>
         </div>
       </div>
       
       {/* Decorative Circle */}
       <div className="absolute top-16 left-8 w-20 h-20 bg-blue-800/30 rounded-full border-4 border-blue-100/50 hidden md:block"></div>
     </div>
       
    {/* Our Overview Section */}
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
              OUR OVERVIEW
            </h2>
            <div className="w-24 h-1 bg-white mt-4"></div>
          </div>
          <div className="ml-8">
            <img src="/images/trial no bg image.png" alt="CAC Overview" className="w-24 h-24 object-contain bg-white/20 rounded-full p-4"/>
          </div>
        </div>
      </div>
    </div>
 
 
    {/* Additional Mission, Vision, Objectives Section */}
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">To empower refugees through creative arts, education, and community development programs that preserve cultural identity while fostering integration and personal growth.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A world where refugees can thrive through creative expression, maintaining their cultural heritage while building bridges to new communities and creating sustainable opportunities.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">O</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Objective</h3>
                <p className="text-gray-600 text-sm leading-relaxed">To provide accessible creative arts programs, build strong community partnerships, develop leadership skills, and create platforms for refugee voices to be heard and celebrated.</p>
            </div>
        </div>
      </div>
    </div>
 
 
 
 
    {/* Programs Section Header */}
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-800 rounded-full"></div>
            </div>
            <div className="text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                Programs and Their Benefits
              </h2>
              <div className="w-32 h-1 bg-white mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    {/* Detailed Programs Section */}
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          
          {/* English Training Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <img src="/images/displayerpic.png" alt="English Training Program" className="w-full h-64 object-cover rounded-xl shadow-lg"/>
              <h3 className="text-2xl font-bold text-blue-800 uppercase">
                English Training in Centres
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive English language program provides refugees with essential communication skills needed for successful integration into their host communities. Through structured lessons, practical exercises, and cultural immersion activities, participants develop confidence in both written and spoken English.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-blue-800 text-xl font-bold uppercase mb-6">
                Benefits of the Program
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced communication skills for daily interactions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Improved employment opportunities and career prospects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Greater independence in navigating community services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Increased confidence in social and professional settings</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Better integration with local communities and neighbors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Creative Arts Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <img src="/images/displayerpic.png" alt="Creative Arts Program" className="w-full h-64 object-cover rounded-xl shadow-lg"/>
              <h3 className="text-2xl font-bold text-blue-800 uppercase">
                Creative Arts Workshops
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our creative arts workshops provide a therapeutic and expressive outlet for refugees to process their experiences while preserving and sharing their cultural heritage. Through various art forms including painting, music, dance, and storytelling, participants find healing and build connections.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-blue-800 text-xl font-bold uppercase mb-6">
                Benefits of the Program
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Emotional healing through creative expression and art therapy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Preservation and celebration of cultural heritage and traditions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Development of marketable artistic and creative skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Building community connections through shared creative experiences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Increased self-confidence and personal empowerment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Leadership Development Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <img src="/images/displayerpic.png" alt="Leadership Development Program" className="w-full h-64 object-cover rounded-xl shadow-lg"/>
              <h3 className="text-2xl font-bold text-blue-800 uppercase">
                Leadership Development Program
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our leadership development program empowers refugees to become active community leaders and advocates. Through workshops on communication, project management, and community organizing, participants develop skills to lead positive change in their communities.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-blue-800 text-xl font-bold uppercase mb-6">
                Benefits of the Program
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Development of essential leadership and management skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced public speaking and communication abilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Opportunities to advocate for refugee community needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Building networks and partnerships with local organizations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Increased capacity to mentor and support fellow refugees</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Community Integration Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <img src="/images/displayerpic.png" alt="Community Integration Program" className="w-full h-64 object-cover rounded-xl shadow-lg"/>
              <h3 className="text-2xl font-bold text-blue-800 uppercase">
                Community Integration Program
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our community integration program facilitates meaningful connections between refugees and their host communities. Through cultural exchange events, volunteer opportunities, and collaborative projects, we build bridges of understanding and mutual support.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-blue-800 text-xl font-bold uppercase mb-6">
                Benefits of the Program
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Foster understanding and acceptance between communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Create opportunities for cultural exchange and learning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Build supportive networks and friendships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Reduce social isolation and promote mental wellbeing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Develop skills for navigating local systems and services</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>




{/* The Board */}
<div className="bg-gray-50 py-12 mt-8">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-blue-800 uppercase relative inline-block">
        Our Leadership Team
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-800"></div>
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our dedicated board members bring diverse expertise and passion to guide our organization's mission of empowering refugees through creative arts.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Kollen Simon Kollen", post: "Program Manager", bio: "Leading our program initiatives with over 10 years of experience in community development and refugee support services." },
          { name: "Jane Doe", post: "Executive Director", bio: "Guiding our strategic vision with expertise in nonprofit management and international humanitarian work." },
          { name: "John Smith", post: "Creative Director", bio: "Bringing artistic vision and cultural expertise to our creative programs and community initiatives." }
        ].map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <img className="w-full h-64 object-cover" src="/images/samplepro.jpg" alt={member.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-200 italic text-sm">{member.post}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>

   {/* COMMUNITY IMPACT */}
   <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-16 mt-12">
     <div className="container mx-auto px-4">
       <div className="text-center mb-10">
         <h2 className="text-3xl font-bold text-white uppercase relative inline-block">
           Community Impact
           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white"></div>
         </h2>
         <p className="text-white mt-4 max-w-2xl mx-auto opacity-90">
           Our programs have created meaningful change in refugee communities through creative arts and education.
         </p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 border border-white border-opacity-20">
           <div className="text-5xl font-bold text-red-500 mb-2">10,000+</div>
           <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
           <p className=" text-lg opacity-95">Refugees supported through our programs and initiatives</p>
         </div>
         
         <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 border border-white border-opacity-20">
           <div className="text-5xl font-bold text-blue-500 mb-2">5,000+</div>
           <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
           <p className=" text-lg opacity-95">Youth transformed into community-responsive leaders</p>
         </div>
         
         <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 border border-white border-opacity-20">
           <div className="text-5xl font-bold text-green-500 mb-2">5+</div>
           <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
           <p className=" text-lg opacity-95">Programs fostering connection, youth fitness, and mental wellbeing</p>
         </div>
       </div>
       
       <div className="text-center mt-10">
         <button 
           onClick={() => navigate('/programs')}
           className="bg-white hover:bg-blue-100 text-blue-800 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
         >
           Explore Our Programs
         </button>
       </div>
     </div>
   </div>
   
   {/* Partners Section */}
   <div className="bg-white py-16">
     <div className="container mx-auto px-4">
       <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-800 uppercase relative inline-block mb-4">
           Our Partners & Collaborators
           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-800"></div>
         </h2>
         <p className="text-gray-600 max-w-2xl mx-auto">
           We work with trusted organizations and partners to deliver impactful programs and services to refugee communities.
         </p>
       </div>
       
       {/* Horizontal Scrolling Partners */}
       <div className="relative">
         <div className="overflow-x-auto scrollbar-hide">
           <div className="flex space-x-8 pb-4" style={{width: 'max-content'}}>
             {partners.map((partner) => (
               <div key={partner.id} className="flex-shrink-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px] text-center group">
                 <div className="mb-4">
                   <img 
                     src={partner.logo} 
                     alt={partner.partnerName}
                     className="w-16 h-16 mx-auto object-contain rounded-lg bg-gray-50 p-2 group-hover:scale-110 transition-transform duration-300"
                   />
                 </div>
                 <h3 className="text-sm font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                   {partner.partnerName}
                 </h3>
               </div>
             ))}
           </div>
         </div>
         
         {/* Gradient fade effects */}
         <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
       </div>
       
       {/* Scroll indicator */}
       <div className="text-center mt-6">
         <p className="text-gray-500 text-sm">
           <span className="inline-block animate-bounce">←</span> Scroll to see all our partners <span className="inline-block animate-bounce">→</span>
         </p>
       </div>
     </div>
   </div>

    {/* Testimonials Section */}
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 uppercase relative inline-block mb-4">
            Testimonials
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-800"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their transformative experiences with our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testi.logo} 
                    alt={testi.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {testi.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testi.testimony}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Share Feedback Section */}
        <div className="text-center mb-12">
          <button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Share Your Feedback
          </button>
        </div>
        
        {/* Email Subscription Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              Join Our Email List
            </h2>
            <p className="text-gray-600 italic">
              Get updates directly to your email about our programs and community events
            </p>
          </div>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Your First Name" 
              className="w-full p-4 text-lg border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full p-4 text-lg border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
            <button 
              type="button"
              className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              JOIN EMAIL LIST
            </button>
          </div>
        </div>
      </div>
    </div>
     
     
     
     </div>
     )
}

export default Home;