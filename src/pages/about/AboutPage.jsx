import React from 'react';
import { 
  Heart, 
  Scissors, 
  Sparkles, 
  Users, 
  Award, 
  Clock, 
  Shield,
  Star,
  CheckCircle,
  Palette,
  Droplets,
  Flower,
  Zap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-rose-50 via-white to-purple-50">
      
      {/* Top Banner with Parallax Effect */}
      <section className="relative h-[70vh] overflow-hidden">
  {/* Banner Image */}
  <img
    src="/assets/images/banner/about-banner.png"
    alt="About Banner"
    className="absolute inset-0 object-cover w-full h-full"
  />

  {/* Optional overlay (remove if not needed) */}
  {/* <div className="absolute inset-0 bg-black/30"></div> */}

  {/* Content on banner */}
  {/* <div className="relative z-10 flex items-center h-full px-6 md:px-16">
    <div className="max-w-2xl text-white">
      <h1 className="mb-4 text-5xl font-bold md:text-6xl">
        About Us
      </h1>
      <p className="text-lg text-white/90">
        Crafting beauty with passion and precision.
      </p>
    </div>
  </div> */}
</section>


      {/* About Us Section with Diamond Shape Image */}
      <section className="relative px-6 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-40 h-40 rounded-full top-20 left-10 bg-rose-300 blur-3xl"></div>
          <div className="absolute bg-purple-300 rounded-full bottom-20 right-10 w-60 h-60 blur-3xl"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Diamond Shape Image with Layered Card */}
         <div className="relative">
  {/* Main Diamond Shape Container */}
  <div className="relative mx-auto w-96 h-96">
    {/* Diamond Shape Frame with Image */}
    <div className="absolute inset-0 rotate-45 rounded-[30%] shadow-2xl overflow-hidden border-8 border-white">
      {/* Your Image Goes Here */}
      <img 
        src="/assets/images/Artist/artist-img.png" 
        alt="Beauty Parlor Interior"
        className="absolute inset-0  rotate-[-45deg] scale-125 object-cover w-full h-full"
      />
    </div>
    
    {/* Decorative Floating Elements */}
    <div className="absolute w-32 h-32 shadow-xl -top-6 -left-6 rotate-12 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl opacity-80"></div>
    <div className="absolute w-40 h-40 shadow-xl -bottom-8 -right-8 -rotate-12 bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl opacity-80"></div>
    
    {/* Floating Icon Badges */}
    <div className="absolute p-3 bg-white rounded-full shadow-2xl -top-4 right-20">
      <Award className="text-rose-600" size={28} />
    </div>
    <div className="absolute p-3 bg-white rounded-full shadow-2xl bottom-20 -left-4">
      <Star className="text-purple-600" size={28} />
    </div>
  </div>
  
  {/* Background Card Layer */}
  <div className="absolute -z-10 top-12 left-12 w-96 h-96 rotate-6 bg-gradient-to-br from-rose-100 to-purple-100 rounded-[30%] shadow-lg"></div>
</div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-rose-100 text-rose-700">
                <span className="w-2 h-2 mr-2 rounded-full bg-rose-500"></span>
                SINCE 2020
              </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2020, Glamour Studio began as a small salon with a big vision: to provide exceptional beauty services in a relaxing, luxurious environment.
              </p>
              <p className="mb-4 text-gray-600">
                What started as a single-chair salon has now grown into a premier beauty destination with multiple locations and a team of 50+ certified professionals.
              </p>
              <p className="mb-6 text-gray-600">
                Our commitment to quality, hygiene, and customer satisfaction has earned us the trust of thousands of clients and numerous industry awards.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500">
                      <Heart className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800">Personalized Care</h3>
                    <p className="text-gray-600">Every service is tailored to your unique needs and style preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                      <Zap className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Innovative Techniques</h3>
                    <p className="text-gray-600">We continuously update our methods with the latest beauty innovations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Hexagon Shapes */}
      <section className="overflow-hidden py-14 bg-gradient-to-b from-white to-rose-50">
        <div className="container max-w-6xl px-6 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600"> Mission & Vision</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Guiding principles that shape our services and client experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission Card */}
            <div className="relative group">
              {/* Hexagon Background Shape */}
              <div className="absolute -inset-4">
                <div className="w-full h-full rotate-45 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-[40px]"></div>
              </div>
              
              <div className="relative p-10 transition-all duration-300 bg-white border shadow-xl rounded-3xl border-rose-100 group-hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-16 h-16 shadow-lg bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl">
                      <Flower className="text-white" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    <div className="w-20 h-1 mt-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500"></div>
                  </div>
                </div>
                
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  To nurture beauty from within, providing transformative experiences that enhance confidence while maintaining the highest standards of safety, hygiene, and environmental responsibility.
                </p>
                
                <ul className="space-y-4">
                  {['Holistic beauty approaches', 'Sustainable practices', 'Client empowerment', 'Community engagement'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-rose-100">
                        <CheckCircle className="text-rose-600" size={18} />
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative group">
              {/* Hexagon Background Shape */}
              <div className="absolute -inset-4">
                <div className="w-full h-full rotate-45 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-[40px]"></div>
              </div>
              
              <div className="relative p-10 transition-all duration-300 bg-white border border-purple-100 shadow-xl rounded-3xl group-hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-16 h-16 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                      <Sparkles className="text-white" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                    <div className="w-20 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  </div>
                </div>
                
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  To redefine the beauty industry by creating a global network of sanctuaries where innovation meets tradition, and where every individual discovers their most authentic, radiant self.
                </p>
                
                <ul className="space-y-4">
                  {['Global expansion by 2028', 'Beauty-tech integration', 'Educational initiatives', 'Industry leadership'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
                        <CheckCircle className="text-purple-600" size={18} />
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Our Values Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">The principles that guide every service we provide</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 text-center transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-pink-100 rounded-full">
                <Shield className="text-pink-600" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Hygiene & Safety</h3>
              <p className="text-gray-600">We maintain the highest standards of cleanliness and sterilization for your safety.</p>
            </div>
            
            <div className="p-8 text-center transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full">
                <Scissors className="text-purple-600" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Expert Craftsmanship</h3>
              <p className="text-gray-600">Our team consists of highly trained professionals with years of experience.</p>
            </div>
            
            <div className="p-8 text-center transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-pink-100 rounded-full">
                <Clock className="text-pink-600" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Punctuality</h3>
              <p className="text-gray-600">We respect your time. Appointments start and end as scheduled.</p>
            </div>
            
            <div className="p-8 text-center transition bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Personalized Care</h3>
              <p className="text-gray-600">Every service is tailored to your unique needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section with Geometric Shapes */}
      <section className="px-6 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-rose-900 via-purple-800 to-pink-700 rounded-[40px] p-12 overflow-hidden">
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-white rounded-full translate-x-1/4 translate-y-1/4"></div>
              <div className="absolute w-24 h-24 rotate-45 -translate-x-1/2 -translate-y-1/2 border-4 border-white top-1/2 left-1/2"></div>
            </div>
            
            <div className="relative z-10 text-center text-white">
              <h2 className="mb-6 text-4xl font-bold md:text-4xl">
                Experience the
                <span className="text-rose-200"> Glamour Difference </span>
              </h2>
              <p className="max-w-2xl mx-auto mb-10 text-xl text-white/90">
                Experience the perfect blend of luxury, expertise, and personalized care
              </p>
              
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <button className="relative px-10 py-4 overflow-hidden text-lg font-bold transition-all duration-300 bg-white rounded-full shadow-2xl group text-rose-700 hover:scale-105">
                  <span className="relative z-10">Book Your Session Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-rose-100"></div>
                </button>
                
                <div className="flex items-center text-white/80">
                  <Phone className="mr-3" size={20} />
                  <span className="text-lg font-medium">Call: +91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Add CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;