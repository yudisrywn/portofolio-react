import { ExternalLink, Github } from "lucide-react";
import eventverseImg from "../assets/images/projects/eventverse.png";
import portofolioImg from "../assets/images/projects/portofolio.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Personal portofolio like vs code",
      image: portofolioImg,
      tech: ["Tailwind", "Typescript", "React", "Vite"],
      status: "Develop",
      github: "https://github.com/yudisrywn/EventVerse",
      live: "#",
      color: "purple",
    },
    {
      id: 2,
      title: "EventVerse",
      description:
        "A platform that manages events at Semarang State University, featuring event storage on the main dashboard, favorites, event submissions, event filters, and an admin dashboard. Built with Laravel technology for optimal performance.",
      image: eventverseImg,
      tech: ["Tailwind", "PHP", "Laravel 12", "MySQL"],
      status: "Completed",
      github: "https://github.com/yudisrywn/EventVerse",
      live: "#",
      color: "pink",
    },
    {
      id: 3,
      title: "TK Rodhatul Huda",
      description:
        "Profile of Rodhatul Huda Kindergarten to help others learn about the kindergarten and its activities. Includes an admin dashboard to change the appearance, such as the gallery and vision and mission.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tech: ["Bootsraps", "PHP", "MySQL"],
      status: "Completed",
      github: "https://github.com/yudisrywn/rodhatulHuda",
      live: "#",
      color: "purple",
    },
    {
      id: 4,
      title: "Banana Rippes Level Detection",
      description:
        "Detection of banana ripeness in three levels, namely unripe, ripe, and rotten, using CNN architecture.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tech: ["Python"],
      status: "Completed",
      github: "https://github.com/yudisrywn/",
      live: "#",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: {
        border: "border-elegant-pink/30 hover:border-elegant-pink",
        shadow: "hover:shadow-xl hover:shadow-elegant-pink/20",
        badge: "bg-elegant-pink/20 border-elegant-pink/30",
      },
      purple: {
        border: "border-elegant-purple/30 hover:border-elegant-purple",
        shadow: "hover:shadow-xl hover:shadow-elegant-purple/20",
        badge: "bg-elegant-purple/20 border-elegant-purple/30",
      },
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="relative min-h-full p-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-elegant-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-elegant-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-elegant-purple via-elegant-pink to-elegant-blue bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg">
            <span className="bg-blue-600">
              A collection of projects I've worked on
            </span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const colors = getColorClasses(project.color || "purple");
            return (
              <div
                key={project.id}
                className={`bg-vscode-sidebar rounded-lg border ${colors.border} ${colors.shadow} transition-all overflow-hidden group`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vscode-sidebar to-transparent" />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${colors.badge} text-sm bg-blue-600`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-vscode-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-vscode-bg rounded border text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-600">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 hover:shadow-lg transition-all text-white hover:text-blue-600 hover: rounded-lg hover: border hover:shadow-blue-800">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects */}
        <div className="text-center mt-12">
          <p className="text-vscode-text mb-4">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/yudisrywn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-blue-600">
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
