import { ReactNode } from "react";

interface LinkSectionProps {
    title: string;
    children: ReactNode;
    delay?: number;
}

const LinkSection = ({ title, children, delay = 0 }: LinkSectionProps) => {
    return (
        <section
            className="animate-slide-up mb-8"
            style={{ animationDelay: `${delay}ms` }}
        >
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
                {title}
            </h2>
            <div className="space-y-3">
                {children}
            </div>
        </section>
    );
};

export default LinkSection;
