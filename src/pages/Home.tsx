// import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypingAnimation } from "@/components/TypingAnimation";

const Home = () => {
  const codeLines = [
    "const developer = {",
    "  name: 'Yudi Suryawan',",
    "  role: 'Web Developer',",
    "  skills: ['Tailwind', 'Javascript', 'NodeJs', 'Express', 'React', 'MySQL', 'MongoDB', 'Typescript'],",
    "  passion: 'Each line tells about your logic',",
    "  status: 'Available for projects'",
    "};",
    "",
    "// Connect with me:",
    "// GitHub: github.com/yudisrywn",
    "// LinkedIn: linkedin.com/in/yudisuryawan",
    "// Email: disurya.one@gmail.com",
    "",
    "",
    "",
    "",
    "// Let's work together! ✨",
  ];

  return (
    <div className="relative min-h-full flex items-center justify-center p-8">
      {/* Elegant background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-elegant-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-elegant-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-elegant-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Code Editor Section */}
        <div className="bg-[#000000] border border-[#131314] rounded-lg overflow-hidden shadow-2xl">
          {/* macOS Terminal Header */}
          <div className="bg-[#1e1f29] px-4 py-3 flex items-center gap-2 border-b border-[#19191e]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
          </div>

          {/* Code Content */}
          <div className="p-8 bg-[#030305]">
            <TypingAnimation lines={codeLines} speed={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
