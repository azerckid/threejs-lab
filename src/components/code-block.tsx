import { codeToHtml } from "shiki"

interface CodeBlockProps {
    code: string
    language?: string
}

export async function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
    const html = await codeToHtml(code, {
        lang: language,
        theme: "github-dark-dimmed",
    })

    return (
        <div
            className="shiki-container text-xs leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
