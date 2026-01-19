import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { ArcherDemo } from "@/components/canvas/character/archer-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function ArcherPage() {
    const code = await getComponentCode("components/canvas/character/archer-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Character Animation - Archer"
                description="GLTF 모델 로딩 및 믹사모(Mixamo) 애니메이션 시스템을 구현합니다. useGLTF와 useAnimations를 사용하여 복잡한 스킨드 메시(Skinned Mesh)의 동작을 제어합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[-3, 1, 4]}>
                    <ArcherDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
