import { useEffect, useState, useRef } from "react";

const CounterCard = ({ end, text, suffix = "", millions = false, decimals = 0 }) => {
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    let start = 0;
                    const duration = 1800;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setValue(end);
                            clearInterval(timer);
                        } else {
                            setValue(start);
                        }
                    }, 16);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [end, hasAnimated]);

    const formatted =
        millions
            ? value.toFixed(decimals) + " milhões"
            : Math.floor(value) + suffix;

    return (
        <div
            ref={ref}
            className="p-6 bg-background rounded-lg shadow-xl"
        >
            <h3 className="text-4xl font-bold text-primary mb-2">{formatted}</h3>
            <p className="text-muted-foreground">{text}</p>
        </div>
    );
};


export default CounterCard;