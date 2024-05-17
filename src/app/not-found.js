import Link from "next/link"

export default function Page404() {
    return (
        <>
            <h1>Página inexistente</h1>
            <Link href="/" title="Voltar para home">Voltar para home</Link>
        </>
    )
}