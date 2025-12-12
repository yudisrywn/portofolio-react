import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FileCode,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  FileText,
  Bot,
} from "lucide-react";
import { GridBackgroundDemo } from "./SquareGrid";
import { AIChatPanel } from "./AIChatPanel";

interface VSCodeLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  path: string;
  name: string;
  extension: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { path: "/", name: "home", extension: ".tsx", icon: Home },
  { path: "/about", name: "about", extension: ".tsx", icon: User },
  { path: "/projects", name: "projects", extension: ".tsx", icon: Briefcase },
  { path: "/contact", name: "contact", extension: ".tsx", icon: Mail },
  { path: "/readme", name: "README", extension: ".md", icon: FileText },
];

export const VSCodeLayout = ({ children }: VSCodeLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState<string[]>(["/"]);
  const [pagesExpanded, setPagesExpanded] = useState(true);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClose = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== path);
    setOpenTabs(newTabs);

    if (location.pathname === path && newTabs.length > 0) {
      navigate(newTabs[newTabs.length - 1]);
    }
  };

  const handleNavClick = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-vscode-bg text-vscode-text relative">
      <GridBackgroundDemo
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#392e4e"
        gridScale={0.1}
        scanColor="#FF9FFC"
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
      {/* Title Bar */}
      <div className="h-9 bg-vscode-sidebar border-b border-vscode-border flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-syntax-blue" />
          <span className="text-xs">Portfolio - Yudi</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 hover:bg-vscode-border rounded">
          {mobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-vscode-sidebar border-r border-vscode-border flex flex-col items-center py-2 gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 hover:bg-vscode-border rounded transition-colors ${
              sidebarOpen
                ? "bg-vscode-border border-l-2 border-l-syntax-blue"
                : ""
            }`}
            title="Explorer (Toggle Sidebar)">
            <FolderOpen
              className={`w-5 h-5 ${sidebarOpen ? "text-syntax-blue" : ""}`}
            />
          </button>
          <button
            onClick={() => setAiChatOpen(!aiChatOpen)}
            className={`p-2 hover:bg-vscode-border rounded transition-colors ${
              aiChatOpen
                ? "bg-vscode-border border-l-2 border-l-syntax-purple"
                : ""
            }`}
            title="AI Assistant">
            <Bot
              className={`w-5 h-5 ${aiChatOpen ? "text-syntax-purple" : ""}`}
            />
          </button>
        </div>

        {/* Sidebar - File Explorer */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } bg-vscode-sidebar border-r border-vscode-border transition-all duration-300 overflow-hidden md:block ${
            mobileMenuOpen
              ? "block absolute left-12 top-9 h-full z-50"
              : "hidden md:block"
          }`}>
          <div className="p-2">
            <div className="flex items-center gap-1 text-xs uppercase text-vscode-text-muted mb-2 font-semibold">
              <ChevronDown className="w-3 h-3" />
              <span>Explorer</span>
            </div>
            <div className="pl-2">
              <div className="flex items-center gap-1 text-xs mb-2">
                <ChevronDown className="w-3 h-3" />
                <FolderOpen className="w-4 h-4 text-syntax-blue" />
                <span className="font-medium">portfolio</span>
              </div>
              <div className="pl-4 space-y-1">
                {/* src folder */}
                <div>
                  <div className="flex items-center gap-1 text-xs mb-1">
                    <ChevronDown className="w-3 h-3" />
                    <FolderOpen className="w-4 h-4 text-syntax-blue" />
                    <span className="font-medium">src</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    {/* pages folder */}
                    <div>
                      <button
                        onClick={() => setPagesExpanded(!pagesExpanded)}
                        className="flex items-center gap-1 text-xs mb-1 hover:bg-vscode-border rounded px-1 w-full">
                        {pagesExpanded ? (
                          <ChevronDown className="w-3 h-3" />
                        ) : (
                          <ChevronRight className="w-3 h-3" />
                        )}
                        <FolderOpen className="w-4 h-4 text-syntax-blue" />
                        <span className="font-medium">pages</span>
                      </button>
                      {pagesExpanded && (
                        <div className="pl-4 space-y-1">
                          {navItems.slice(0, -1).map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                              <button
                                key={item.path}
                                onClick={() => handleNavClick(item.path)}
                                className={`flex items-center gap-2 px-2 py-1 rounded text-sm hover:bg-vscode-border transition-colors w-full text-left ${
                                  isActive ? "bg-vscode-border" : ""
                                }`}>
                                <item.icon className="w-3 h-3 text-syntax-cyan" />
                                <span className="text-syntax-orange">
                                  {item.name}
                                </span>
                                <span className="text-syntax-green">
                                  {item.extension}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* README.md at root */}
                <button
                  onClick={() => handleNavClick("/readme")}
                  className={`flex items-center gap-2 px-2 py-1 rounded text-sm hover:bg-vscode-border transition-colors w-full text-left ${
                    location.pathname === "/readme" ? "bg-vscode-border" : ""
                  }`}>
                  <FileText className="w-3 h-3 text-syntax-cyan" />
                  <span className="text-syntax-orange">README</span>
                  <span className="text-syntax-green">.md</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <div className="h-9 bg-vscode-sidebar border-b border-vscode-border flex items-center overflow-x-auto">
            {openTabs.map((tabPath) => {
              const item = navItems.find((nav) => nav.path === tabPath);
              if (!item) return null;
              const isActive = location.pathname === tabPath;

              return (
                <div
                  key={item.path}
                  className={`flex items-center gap-2 px-3 h-full border-r border-vscode-border text-xs group relative ${
                    isActive
                      ? "bg-vscode-editor border-t-2 border-t-syntax-blue"
                      : "bg-vscode-tabInactive hover:bg-vscode-tabActive"
                  }`}>
                  <NavLink to={item.path} className="flex items-center gap-2">
                    <item.icon className="w-3 h-3" />
                    <span>
                      {item.name}
                      {item.extension}
                    </span>
                  </NavLink>
                  <button
                    onClick={(e) => handleTabClose(item.path, e)}
                    className="ml-2 p-0.5 hover:bg-vscode-border rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Close">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Editor Content with Line Numbers */}
          <div className="flex-1 overflow-auto bg-vscode-editor">
            {openTabs.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-vscode-text-muted">
                  <FileCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">No file open</p>
                  <p className="text-xs mt-2">
                    Select a file from the explorer to begin
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full">
                {/* Line Numbers */}
                <div className="w-12 bg-vscode-editor border-r border-vscode-border flex-shrink-0 pt-4 text-right pr-4 select-none">
                  {Array.from({ length: 50 }, (_, i) => (
                    <div
                      key={i}
                      className="text-vscode-text-dim text-xs leading-6 font-mono">
                      {i + 1}
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 p-4 overflow-auto">{children}</div>
              </div>
            )}
          </div>
        </div>

        {/* AI Chat Panel */}
        <AIChatPanel isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-vscode-statusbar text-white flex items-center justify-between px-4 text-xs">
        <div className="flex items-center gap-4">
          <span>main</span>
          <span>TypeScript React</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>Prettier</span>
        </div>
      </div>
    </div>
  );
};
