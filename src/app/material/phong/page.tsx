import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MeshPhongDemo } from "@/components/canvas/material/mesh-phong-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function PhongMaterialPage() {
    const code = await getComponentCode("components/canvas/material/mesh-phong-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Mesh Phong Material"
                description="빛의 반사와 하이라이트(Specular)를 표현할 수 있는 재질입니다. 은은하게 빛나는 플라스틱이나 금속 질감을 표현하기에 적합합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MeshPhongDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
