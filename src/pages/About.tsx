import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Trophy, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "300+", label: "Properties in Kolkata" },
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years in Business" },
    { number: "RERA", label: "Registered & Verified" },
  ];

  const team = [
    {
      name: "Jeevan Kumar",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in real estate technology",
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      description: "Expert in property management and client relations",
    },
    {
      name: "Mike Rodriguez",
      role: "Technology Director",
      description: "Full-stack developer passionate about PropTech innovation",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              About Suitespott
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Based in Kolkata, we're your trusted commercial real estate partner. With deep local market knowledge 
              and 15+ years of experience, we help businesses find prime office, retail, and industrial spaces across the city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To connect Kolkata businesses with the perfect commercial spaces through local expertise, 
                professional service, and transparent processes that drive growth across the city's business districts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-primary h-6 w-6" />
                  <span className="font-medium">Secure Transactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="text-primary h-6 w-6" />
                  <span className="font-medium">Quality Properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-primary h-6 w-6" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-primary h-6 w-6" />
                  <span className="font-medium">Award Winning</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Kolkata's most trusted commercial real estate consultancy, 
                known for our deep local knowledge, professional service, and commitment to helping 
                businesses find their ideal spaces in the city's prime locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to finding your perfect commercial space
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-orange rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary font-medium text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;