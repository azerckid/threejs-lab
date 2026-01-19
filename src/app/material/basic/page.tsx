import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MeshBasicDemo } from "@/components/canvas/material/mesh-basic-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function BasicMaterialPage() {
    const code = await getComponentCode("components/canvas/material/mesh-basic-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Mesh Basic Material"
                description="광원(Light)의 영향을 받지 않는 가장 단순한 재질입니다. 그림자나 하이라이트 없이 설정된 색상이나 텍스처를 그대로 보여줍니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MeshBasicDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
