import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { BoxDemo } from "@/components/canvas/geometry/box-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function BoxPage() {
  const code = await getComponentCode("components/canvas/geometry/box-demo.tsx")

  return (
    <DashboardLayout>
      <TutorialPageLayout
        title="Box Geometry"
        description="가장 기본적인 3차원 육면체 형상입니다. 가로, 세로, 높이 및 분할 수를 조절할 수 있습니다."
        codeBlock={<CodeBlock code={code} />}
      >
        <BaseCanvas>
          <BoxDemo />
        </BaseCanvas>
      </TutorialPageLayout>
    </DashboardLayout>
  )
}
