import { type ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <div className="font-mono text-sm leading-6 space-y-1">{children}</div>
  );
};

interface CodeLineProps {
  children?: ReactNode;
  indent?: number;
}

export const CodeLine = ({ children, indent = 0 }: CodeLineProps) => {
  return (
    <div
      className="hover:bg-vscode-border/30 transition-colors"
      style={{ paddingLeft: `${indent * 1}rem` }}>
      {children}
    </div>
  );
};

export const Keyword = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-purple"}>{children}</span>;

export const Function = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-yellow"}>{children}</span>;

export const String = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-orange"}>{children}</span>;

export const Comment = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-green"}>{children}</span>;

export const Variable = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-cyan"}>{children}</span>;

export const Type = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-syntax-blue"}>{children}</span>;

export const Property = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={className || "text-vscode-text"}>{children}</span>;
