import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { SphereDemo } from "@/components/canvas/geometry/sphere-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function SpherePage() {
    const code = await getComponentCode("components/canvas/geometry/sphere-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Sphere Geometry"
                description="가장 널리 사용되는 구체 형상입니다. 반지름과 정밀도(세그먼트), 그리고 구의 절단면 등을 세밀하게 조절할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <SphereDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
