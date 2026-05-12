import { useEffect } from "react";

export const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            revealElements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.16,
            }
        );

        revealElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
};
