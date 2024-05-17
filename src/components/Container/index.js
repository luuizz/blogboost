import { twMerge } from "tailwind-merge";

export default function Container({ children, className }) {

    const defaultClass = 'w-full max-w-grid mx-auto px-3';
    const combinedClassess = twMerge(defaultClass, className)

    return (
        <div className={combinedClassess}>{children}</div>
    )
}