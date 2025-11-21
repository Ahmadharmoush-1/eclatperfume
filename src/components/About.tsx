import { Award, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Dr.Sarah Farhat Dib
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated professional committed to providing exceptional dental care with a gentle touch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Dr.Sarah Farhat Dib is a board-certified cosmetic dentist with over 15 years of experience in transforming smiles. Her passion for dentistry began at a young age, and she has dedicated her career to helping patients achieve their dream smiles through advanced cosmetic procedures.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              With a patient-first approach,Dr.Sarah combines artistic vision with cutting-edge dental technology to deliver stunning, natural-looking results. She believes that everyone deserves a smile they can be proud of.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in">
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    DDS from University of Dental Medicine<br />
                    Advanced Cosmetic Dentistry Certificate<br />
                    Continuing Education in Latest Techniques
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certifications</h3>
                  <p className="text-muted-foreground">
                    Name of  <br />
                   Certifications <br />
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    15+ Years in Cosmetic Dentistry<br />
                    5,000+ Successful Smile Transformations<br />
                    Member of ADA and AACD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
