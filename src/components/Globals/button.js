import Link from "next/link";

export default function Button({ text, url, title, variant = 'primary', onClick }) {

    const baseClasses = "rounded-lg py-4 px-8 inline-block text-center transition-all ease-linear duration-300";

    const variants = {
        primary: "border font-semibold text-pink-brand border-[rgba(246,122,203,.55)] text-base hover:bg-pink-brand hover:text-white"
    }

    const buttonClasses = `${baseClasses} ${variants[variant] || variants.primary}`;

    return (
        <Link title={title} className={buttonClasses} onClick={onClick} href={url}>{text}</Link>
    )
}