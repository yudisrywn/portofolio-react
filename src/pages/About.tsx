import { GraduationCap, Heart } from "lucide-react";
import Globe from "../components/GlobeAnimate";
import RotatingText from "../components/RotatingText";

const About = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    // { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

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
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8"
            style={{ perspective: "1000px" }}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 p-5 bg-vscode-sidebar/50 backdrop-blur-sm rounded-xl border border-elegant-purple/20 hover:border-elegant-pink/60 hover:bg-vscode-sidebar/80 transition-all duration-500 animate-fade-in cursor-pointer hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: "preserve-3d",
                }}>
                <div
                  className="relative w-20 h-20 flex items-center justify-center transition-all duration-700 group-hover:[transform:rotateY(360deg)_scale(1.3)]"
                  style={{
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                    transformStyle: "preserve-3d",
                  }}>
                  {/* 3D Glow Effect - Intensifies on hover */}
                  <div
                    className="absolute inset-[-10px] rounded-full bg-elegant-purple/20 blur-xl group-hover:bg-elegant-pink/60 group-hover:inset-[-20px] transition-all duration-500"
                    style={{ transform: "translateZ(-20px)" }}
                  />

                  {/* Shadow Layer */}
                  <div
                    className="absolute w-14 h-3 bg-elegant-purple/20 rounded-full blur-md group-hover:bg-elegant-pink/40 group-hover:w-16 transition-all duration-500"
                    style={{
                      transform:
                        "translateZ(-30px) translateY(35px) rotateX(90deg)",
                      animation: `pulse-glow 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  />

                  {/* Main Logo with 3D Effect */}
                  <div
                    className="relative transition-all duration-500"
                    style={{
                      transform: "translateZ(25px)",
                      filter:
                        "drop-shadow(0 10px 20px rgba(139, 92, 246, 0.3))",
                      transformStyle: "preserve-3d",
                    }}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 object-contain group-hover:w-16 group-hover:h-16 transition-all duration-500"
                      style={{
                        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>

                  {/* Floating Particles - More visible on hover */}
                  <div
                    className="absolute w-2 h-2 bg-elegant-purple rounded-full opacity-40 group-hover:opacity-100 group-hover:w-3 group-hover:h-3 transition-all duration-300"
                    style={{
                      animation: `float 2s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                      top: "-5px",
                      left: "15%",
                    }}
                  />
                  <div
                    className="absolute w-2 h-2 bg-elegant-pink rounded-full opacity-30 group-hover:opacity-90 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300"
                    style={{
                      animation: `float 2.5s ease-in-out infinite reverse`,
                      animationDelay: `${index * 0.4}s`,
                      bottom: "0",
                      right: "5%",
                    }}
                  />
                  <div
                    className="absolute w-1.5 h-1.5 bg-elegant-blue rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"
                    style={{
                      animation: `float 1.8s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`,
                      top: "15%",
                      right: "-5px",
                    }}
                  />
                  <div
                    className="absolute w-1 h-1 bg-elegant-purple rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300"
                    style={{
                      animation: `float 2.2s ease-in-out infinite reverse`,
                      animationDelay: `${index * 0.6}s`,
                      bottom: "20%",
                      left: "-5px",
                    }}
                  />

                  {/* Sparkle Effects on Hover */}
                  <div
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      animation: `pulse-glow 1s ease-in-out infinite`,
                      top: "10%",
                      left: "50%",
                    }}
                  />
                  <div
                    className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300"
                    style={{
                      animation: `pulse-glow 1.2s ease-in-out infinite`,
                      animationDelay: "0.3s",
                      bottom: "15%",
                      left: "30%",
                    }}
                  />
                </div>
                <span className="text-vscode-text-muted text-sm font-semibold text-center group-hover:text-elegant-pink group-hover:scale-105 transition-all duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
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
