import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { CylinderDemo } from "@/components/canvas/geometry/cylinder-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function CylinderPage() {
    const code = await getComponentCode("components/canvas/geometry/cylinder-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Cylinder Geometry"
                description="원통형 형상입니다. 상단/하단 반지름을 다르게 설정하여 원뿔 형태로도 변형할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <CylinderDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
