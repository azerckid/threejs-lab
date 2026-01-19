import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MeshPhysicalDemo } from "@/components/canvas/material/mesh-physical-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function PhysicalMaterialPage() {
    const code = await getComponentCode("components/canvas/material/mesh-physical-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Mesh Physical Material"
                description="Standard Material의 확장 버전으로, 더 진보된 물리 법칙이 적용됩니다. 투명도(Transmission), 코팅(Clearcoat) 등 복잡한 전자기적 성질을 시뮬레이션할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MeshPhysicalDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
