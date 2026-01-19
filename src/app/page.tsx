import { DashboardLayout } from "@/components/dashboard-layout"
import { Box, Code2, Cpu, Palette } from "lucide-react"

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col items-center justify-center space-y-8 p-8 md:p-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Box className="size-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Three.js Interactive Lab
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            실시간 3D 렌더링 화면과 실제 소스 코드를 동시에 탐색하며 Three.js의 핵심 원리를 학습하는 인터랙티브 대시보드입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl">
          <FeatureCard
            icon={<Cpu className="size-6" />}
            title="Geometries"
            description="다양한 형상(Box, Sphere, Torus 등)의 구조와 속성을 시각적으로 확인합니다."
          />
          <FeatureCard
            icon={<Palette className="size-6" />}
            title="Materials"
            description="재질의 특성과 조명에 따른 반사 정도를 실시간으로 실험합니다."
          />
          <FeatureCard
            icon={<Code2 className="size-6" />}
            title="Live Code"
            description="화면에서 실행 중인 실제 React Three Fiber 코드를 즉시 확인하고 분석합니다."
          />
        </div>

        <div className="mt-8 rounded-xl border border-border/50 bg-muted/30 p-4 text-sm text-muted-foreground font-medium">
          사이드바에서 학습할 항목을 선택하여 시작하세요.
        </div>
      </div>
    </DashboardLayout>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative flex flex-col space-y-3 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex size-12 items-center justify-center rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
