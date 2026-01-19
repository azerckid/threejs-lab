import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { TorusKnotDemo } from "@/components/canvas/geometry/torus-knot-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function TorusKnotPage() {
    const code = await getComponentCode("components/canvas/geometry/torus-knot-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Torus Knot Geometry"
                description="복잡하게 꼬인 원환체 매듭 형상입니다. 매듭의 꼬임 정도(P, Q)를 조절하여 다양한 형태를 만들 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <TorusKnotDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
