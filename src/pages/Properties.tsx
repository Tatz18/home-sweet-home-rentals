import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Building2, Users, Award, TrendingUp, CheckCircle, MapPin, Calendar, Target, BarChart } from "lucide-react";

const Properties = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const completedProjects = [
    {
      id: 1,
      title: "Salt Lake Sector V IT Park - Phase 2",
      client: "Tech Corp India",
      location: "Salt Lake, Kolkata",
      type: "Office Complex",
      area: "45,000 sq ft",
      completion: "2024",
      image: "/src/assets/office-space.jpg",
      description: "Premium Grade A office space with modern amenities for leading IT companies",
      achievements: ["LEED Certified", "100% Occupied", "Smart Building"],
      caseStudy: {
        challenge: "Client needed a modern, tech-enabled workspace that could accommodate 500+ employees with future scalability.",
        solution: "Designed and delivered a state-of-the-art IT park with smart building technology, flexible workspaces, and premium amenities.",
        results: ["Achieved 100% occupancy within 3 months", "Reduced operational costs by 25%", "LEED Gold certification achieved"],
        timeline: "12 months from concept to completion",
        investment: "₹45 Crore"
      },
    },
    {
      id: 2,
      title: "Park Street Retail Boulevard",
      client: "Retail Ventures Ltd",
      location: "Park Street, Kolkata",
      type: "Retail Complex",
      area: "80,000 sq ft",
      completion: "2023",
      image: "/src/assets/commercial-space.jpg",
      description: "High-street retail development in Kolkata's premier shopping district",
      achievements: ["30+ Premium Brands", "Footfall 50k/day", "Prime Location"],
      caseStudy: {
        challenge: "Transform a heritage building into a modern retail space while preserving its architectural character.",
        solution: "Carefully restored the facade while creating contemporary interiors with modern retail infrastructure and amenities.",
        results: ["Attracted 30+ premium brands", "Daily footfall of 50,000+", "20% higher rental yields than area average"],
        timeline: "18 months including heritage clearances",
        investment: "₹80 Crore"
      },
    },
    {
      id: 3,
      title: "New Town Business Hub",
      client: "Corporate Solutions Group",
      location: "New Town, Rajarhat",
      type: "Business Center",
      area: "65,000 sq ft",
      completion: "2024",
      image: "/src/assets/office-space.jpg",
      description: "State-of-the-art business center with flexible workspace solutions",
      achievements: ["Co-working Spaces", "Conference Facilities", "24/7 Access"],
      caseStudy: {
        challenge: "Create a versatile business hub catering to startups, SMEs, and corporate satellite offices.",
        solution: "Developed flexible spaces with modular design, advanced IT infrastructure, and comprehensive business support services.",
        results: ["95% occupancy rate", "Hosted 80+ companies", "Became New Town's premier business address"],
        timeline: "10 months from design to operation",
        investment: "₹60 Crore"
      },
    },
    {
      id: 4,
      title: "Dankuni Industrial Complex",
      client: "Manufacturing Inc",
      location: "Dankuni, Howrah",
      type: "Warehouse & Industrial",
      area: "120,000 sq ft",
      completion: "2023",
      image: "/src/assets/commercial-space.jpg",
      description: "Modern warehouse facility with excellent logistics connectivity",
      achievements: ["Strategic Location", "High Ceiling", "Loading Docks"],
      caseStudy: {
        challenge: "Develop a logistics facility meeting international standards for manufacturing and e-commerce clients.",
        solution: "Built a high-bay warehouse with advanced material handling systems, temperature-controlled zones, and excellent road-rail connectivity.",
        results: ["Reduced logistics costs by 30%", "24/7 operations capability", "Compliant with international warehouse standards"],
        timeline: "14 months including infrastructure development",
        investment: "₹95 Crore"
      },
    },
    {
      id: 5,
      title: "Gariahat Shopping Plaza",
      client: "Metro Retail Partners",
      location: "Gariahat, Kolkata",
      type: "Mixed-Use Commercial",
      area: "55,000 sq ft",
      completion: "2024",
      image: "/src/assets/commercial-space.jpg",
      description: "Mixed-use development combining retail and office spaces",
      achievements: ["Mixed-Use Design", "High Visibility", "Parking Facility"],
      caseStudy: {
        challenge: "Maximize land value by creating a harmonious mixed-use development in a high-traffic area.",
        solution: "Designed a vertical mixed-use complex with retail on lower floors and office spaces above, with dedicated access and parking.",
        results: ["100% retail leasing", "Premium office rentals 15% above market", "Landmark development in Gariahat"],
        timeline: "16 months completion",
        investment: "₹55 Crore"
      },
    },
    {
      id: 6,
      title: "Dhulagarh Logistics Park",
      client: "Supply Chain Solutions",
      location: "Dhulagarh",
      type: "Logistics & Warehousing",
      area: "95,000 sq ft",
      completion: "2023",
      image: "/src/assets/office-space.jpg",
      description: "Modern logistics facility with cutting-edge storage solutions",
      achievements: ["Cold Storage", "24/7 Security", "Rail Connectivity"],
      caseStudy: {
        challenge: "Create a multi-purpose logistics facility serving diverse supply chain needs including cold storage.",
        solution: "Developed a specialized facility with temperature-controlled zones, advanced security, and direct rail connectivity for bulk cargo.",
        results: ["Serving 15+ major clients", "Zero downtime in operations", "30% improvement in supply chain efficiency"],
        timeline: "15 months with phased commissioning",
        investment: "₹85 Crore"
      },
    },
  ];

  const categories = ["All Projects", "Office", "Retail", "Industrial", "Mixed-Use"];
  const stats = [
    { icon: Building2, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Showcasing Kolkata's finest commercial real estate developments. A legacy of excellence in transforming business spaces across the city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-2xl shadow-sm">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All Projects" ? "default" : "secondary"}
                className="cursor-pointer px-6 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Completed Projects</h2>
            <p className="text-muted-foreground">{completedProjects.length} successful projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <div key={project.id} className="group bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary">
                      {project.completion}
                    </Badge>
                  </div>
                  
                  {/* Property Type */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Client: {project.client}</span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (() => {
            const project = completedProjects.find(p => p.id === selectedProject);
            if (!project) return null;
            
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                  <DialogDescription className="text-lg">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-6">
                  {/* Project Overview */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-semibold">{project.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Total Area</p>
                          <p className="font-semibold">{project.area}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Completion Year</p>
                          <p className="font-semibold">{project.completion}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Client</p>
                          <p className="font-semibold">{project.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Study Details */}
                  {project.caseStudy && (
                    <>
                      <div className="border-t pt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-bold">Challenge</h3>
                        </div>
                        <p className="text-muted-foreground">{project.caseStudy.challenge}</p>
                      </div>

                      <div className="border-t pt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-bold">Solution</h3>
                        </div>
                        <p className="text-muted-foreground">{project.caseStudy.solution}</p>
                      </div>

                      <div className="border-t pt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-bold">Results</h3>
                        </div>
                        <ul className="space-y-2">
                          {project.caseStudy.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 border-t pt-6">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Project Timeline</p>
                          <p className="font-semibold text-lg">{project.caseStudy.timeline}</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Investment</p>
                          <p className="font-semibold text-lg text-primary">{project.caseStudy.investment}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Achievements */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="px-4 py-2">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Properties;