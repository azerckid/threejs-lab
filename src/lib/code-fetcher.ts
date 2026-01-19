import fs from "fs"
import path from "path"

export async function getComponentCode(filePath: string) {
    try {
        const absolutePath = path.join(process.cwd(), "src", filePath)
        const code = fs.readFileSync(absolutePath, "utf-8")
        return code
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error)
        return "// Error reading source code"
    }
}
