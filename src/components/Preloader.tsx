const Preloader = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 min-h-[200px]">
            <div className="relative flex items-center justify-center">
                {/* Anel Externo (Fixo e clarinho para dar base) */}
                <div className="absolute w-12 h-12 border-4 border-gray-200 rounded-full"></div>

                {/* Anel Interno (Giratório com a cor da marca) */}
                {/* Nota: Substitua 'border-blue-900' pela sua cor 'border-navy-dark' se tiver configurado no tailwind.config */}
                <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
            </div>

            {/* Texto pulsante opcional */}
            <span className="mt-4 text-sm font-medium text-gray-500 animate-pulse">
                Carregando atualizações...
            </span>
        </div>
    );
};

export default Preloader;