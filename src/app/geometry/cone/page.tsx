import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { ConeDemo } from "@/components/canvas/geometry/cone-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function ConePage() {
    const code = await getComponentCode("components/canvas/geometry/cone-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Cone Geometry"
                description="원뿔 형태의 형상입니다. 반지름, 높이, 세그먼트 수를 조절하여 다양한 뾰족한 입체를 만들 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <ConeDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
