import {
    FileText,
    Calculator,
    Users,
    Book,
    Building2,
    Receipt,
    Mail,
    Phone,
    Globe,
    ExternalLink
} from "lucide-react";

// Mapeamento de ícones para strings
const iconMap = {
    document: FileText,
    calculator: Calculator,
    users: Users,
    book: Book,
    building: Building2,
    receipt: Receipt,
    mail: Mail,
    phone: Phone,
    globe: Globe,
    file: FileText
};

const LinkButton = ({ href, icon, children, className = "" }) => {
    const IconComponent = iconMap[icon] || FileText;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        group w-full flex items-center gap-4 p-4 
        bg-white hover:bg-gray-50 
        rounded-xl shadow-sm hover:shadow-md 
        border border-transparent hover:border-secondary/20
        transition-all duration-300 transform hover:-translate-y-1
        
        /* --- CORREÇÃO DO TAMANHO --- */
        h-auto min-h-[3.5rem] /* Altura automática, mas com um mínimo */
        
        ${className}
      `}
        >
            <div className="bg-secondary/10 p-2.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                <IconComponent className="w-5 h-5 text-primary group-hover:text-white" />
            </div>

            <span className="flex-1 text-left text-navy-dark font-medium text-sm md:text-base leading-tight whitespace-normal break-words">
                {children}
            </span>

            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </a>
    );
};

export default LinkButton;