import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MatildaDemo } from "@/components/canvas/advanced/matilda-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function MatildaPage() {
    const code = await getComponentCode("components/canvas/advanced/matilda-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Complex Model - Matilda"
                description="수많은 파트로 구성된 복잡한 GLTF 모델의 구조를 분석하고 렌더링합니다. 각 노드의 재질 할당 및 최적화된 로딩 기법을 학습합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[-5, 2, 5]}>
                    <MatildaDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
