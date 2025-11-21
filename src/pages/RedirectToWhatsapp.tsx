import { useEffect } from "react";

const RedirectToWhatsApp = () => {
    useEffect(() => {
        window.location.href = "https://wa.me/1832657176";
    }, []);

    return null;
};

export default RedirectToWhatsApp;
