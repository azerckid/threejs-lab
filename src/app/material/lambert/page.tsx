import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MeshLambertDemo } from "@/components/canvas/material/mesh-lambert-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function LambertMaterialPage() {
    const code = await getComponentCode("components/canvas/material/mesh-lambert-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Mesh Lambert Material"
                description="광택이 없는(Non-shiny) 표면을 위한 재질입니다. 계산이 상대적으로 빠르며, 나무나 고무 같은 무광 재질을 표현할 때 유용합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MeshLambertDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
