import { GraduationCap, Heart } from "lucide-react";
import Globe from "../components/GlobeAnimate";
import RotatingText from "../components/RotatingText";
import OrbitingSkills from "../components/OrbitingTech";

const About = () => {
  return (
    <div className="relative min-h-full p-8 overflow-y-auto">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-elegant-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-elegant-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header Section with 3D Element */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-elegant-purple via-elegant-pink to-elegant-blue bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-vscode-text-muted text-4xl flex items-center justify-center ">
            <span>My Name Is</span>
            <RotatingText
              texts={["Yudi", "Suryawan", "Love", "Coding"]}
              mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </p>
        </div>

        {/* 3D Animation Section */}
        <div className="mb-12">
          <Globe
            theta={0.2}
            dark={1}
            scale={1.2}
            diffuse={1.5}
            baseColor="#1a1a1a"
            markerColor="#ff0000"
            glowColor="#444444"
          />
        </div>

        {/* Introduction */}
        <div className="mb-12 bg-vscode-sidebar/50 backdrop-blur-sm p-8 rounded-2xl border border-elegant-purple/20">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Konnichiwa!
          </h2>
          <p className="text-vscode-text leading-relaxed mb-4">
            I am a web developer who is just starting my{" "}
            <span className="font-semibold">career</span> I am a web developer.
            My journey began during college, sparking a deep interest in coding,
            especially back-end development. I am now fully focused on learning
            and building user-friendly web applications.
          </p>
          <p className="text-vscode-text leading-relaxed">
            I specialize in modern web technologies and enjoy turning complex
            problems into simple, elegant solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            <span className="bg-blue-600">Skills</span>
          </h2>
          <OrbitingSkills />
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          {/* <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-vscode-sidebar/50 backdrop-blur-sm p-6 rounded-xl border border-elegant-pink/20">
                <h3 className="text-lg font-semibold text-foreground">
                  Full Stack Web Developer
                </h3>
                <p className="text-elegant-pink text-sm mb-2">
                  Tech Company • 2021 - Present
                </p>
                <p className="text-vscode-text-muted text-sm">
                  Building and maintaining web applications, collaborating with
                  cross-functional teams.
                </p>
              </div>
              <div className="bg-vscode-sidebar/50 backdrop-blur-sm p-6 rounded-xl border border-elegant-purple/20">
                <h3 className="text-lg font-semibold text-foreground">
                  Frontend Developer
                </h3>
                <p className=" text-sm mb-2">
                  Startup • 2020 - 2021
                </p>
                <p className="text-vscode-text-muted text-sm">
                  Developed responsive user interfaces and improved user
                  experience.
                </p>
              </div>
            </div>
          </div> */}

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Educations
            </h2>
            <div className="space-y-4">
              <div className="bg-vscode-sidebar/50 backdrop-blur-sm p-6 rounded-xl border border-elegant-blue/20">
                <h3 className="text-lg font-semibold text-foreground">
                  Graduate in Mathematics and Natural Sciences
                </h3>
                <p className="text-sm mb-2">SMA Negeri 1 Mirit • 2020 - 2023</p>
                <p className="text-vscode-text-muted text-sm">
                  My journey to start becoming a web developer after graduating
                  from here.
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-4">
              <div className="bg-vscode-sidebar/50 backdrop-blur-sm p-6 rounded-xl border border-elegant-blue/20">
                <h3 className="text-lg font-semibold text-foreground">
                  Undergraduade in Informatics and Computer Engineering
                  Education
                </h3>
                <p className="text-sm mb-2">
                  Universitas Negeri Semarang • 2023 - Now
                </p>
                <p className="text-vscode-text-muted text-sm">
                  I'm a new student here, I hope I can continue to develop my
                  interest in the web field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
