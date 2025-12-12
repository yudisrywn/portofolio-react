import { CodeBlock } from "../components/CodeBlock";

const README = () => {
  return (
    <div className="font-mono relative min-h-full p-8">
      {/* Elegant decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-elegant-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-elegant-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-elegant-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto bg-vscode-sidebar rounded-lg border border-vscode-border p-8 shadow-2xl">
        <CodeBlock>
          <div className="space-y-1">
            {/* Header with gradient */}
            <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-elegant-purple via-elegant-pink to-elegant-blue bg-clip-text text-transparent">
              # Web Developer Portfolio
            </div>

            <div className="h-px bg-gradient-to-r from-elegant-pink/50 via-elegant-purple/50 to-elegant-blue/50 my-4" />

            {/* About Section */}
            <div className="text-xl font-semibold text-elegant-blue mb-2">
              ## About This Project
            </div>
            <div className="text-syntax-gray ml-4 mb-4">
              A personal portfolio website designed to look like Visual Studio
              Code,
              <br />
              <span className="text-elegant-pink">
                with an elegant and professional aesthetic
              </span>
            </div>

            {/* Features Section */}
            <div className="text-xl font-semibold text-elegant-purple mb-2 mt-4">
              ## Features
            </div>
            <div className="ml-4 space-y-1 mb-4">
              <div className="text-elegant-blue">
                - VS Code-inspired interface with authentic syntax highlighting
              </div>
              <div className="text-elegant-purple">
                - Elegant gradients and professional color scheme
              </div>
              <div className="text-syntax-gray">- Beautiful dark theme</div>
              <div className="text-elegant-blue">
                - Smooth animations and transitions
              </div>
            </div>

            {/* Technologies Section */}
            <div className="text-xl font-semibold text-elegant-blue mb-2 mt-4">
              ## Technologies Used
            </div>
            <div className="ml-4 space-y-1 mb-4">
              <div className="text-elegant-purple">
                - <span className="text-elegant-pink font-bold">React</span> +{" "}
                <span className="text-elegant-blue font-bold">TypeScript</span>
              </div>
              <div className="text-elegant-blue">
                -{" "}
                <span className="text-elegant-purple font-bold">
                  Tailwind CSS
                </span>
              </div>
              <div className="text-syntax-gray">
                - <span className="text-elegant-pink font-bold">Vite</span>
              </div>
            </div>

            {/* Structure Section */}
            <div className="text-xl font-semibold text-elegant-purple mb-2 mt-4">
              ## Structure
            </div>
            <div className="ml-4 bg-vscode-sidebar p-4 rounded border border-elegant-purple/30 mb-4">
              <pre className="text-elegant-blue">
                {`src/
├── components/
│   ├── VSCodeLayout.tsx    `}
                <span className="text-elegant-pink">// Main layout</span>
                {`
├── pages/
│   ├── Home.tsx            `}
                <span className="text-elegant-blue">// Landing page</span>
                {`
│   ├── About.tsx           `}
                <span className="text-elegant-purple">// About me</span>
                {`
│   ├── Projects.tsx        `}
                <span className="text-syntax-gray">// My work</span>
                {`
│   ├── Contact.tsx         `}
                <span className="text-elegant-pink">// Get in touch</span>
                {`
│   └── README.tsx          `}
                <span className="text-elegant-purple">// You are here!</span>
                {`
└── App.tsx                 `}
                <span className="text-elegant-blue">// App entry</span>
              </pre>
            </div>

            {/* Contact Section */}
            <div className="text-xl font-semibold bg-gradient-to-r from-elegant-pink to-elegant-purple bg-clip-text text-transparent mb-2 mt-4">
              ## Contact
            </div>
            <div className="ml-4 text-syntax-gray">
              <span className="text-elegant-blue">
                Feel free to reach out through the contact page!
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-elegant-purple/50 to-transparent my-6" />

            {/* Footer */}
            <div className="text-center text-sm">
              <span className="text-elegant-pink">Made with </span>
              <span className="text-elegant-purple">code</span>
              <span className="text-elegant-blue"> and needed</span>
            </div>
          </div>
        </CodeBlock>
      </div>
    </div>
  );
};

export default README;
