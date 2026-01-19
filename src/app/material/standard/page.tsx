import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MeshStandardDemo } from "@/components/canvas/material/mesh-standard-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function StandardMaterialPage() {
    const code = await getComponentCode("components/canvas/material/mesh-standard-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Mesh Standard Material"
                description="물리 기반 렌더링(PBR)의 표준 재질입니다. 거칠기(Roughness)와 금속성(Metalness)을 조절하여 사실적인 물리적 질감을 표현할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MeshStandardDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
