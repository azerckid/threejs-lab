# 01_IMPLEMENTATION_PLAN.md

본 문서는 실시간 3D 캔버스와 소스 코드 뷰어가 결합된 'Three.js Tutorial Dashboard'의 개발 구현 계획을 기술합니다.

## 1. 개요
기존 Create React App 기반의 Three.js 학습 프로젝트를 Next.js 15 프레임워크로 마이그레이션하고, 학습 효율을 높이기 위한 인터랙티브 대시보드 형태로 재구성합니다.

## 2. 기술 스택
- **Framework**: Next.js 15.1.4 (App Router)
- **Styling**: Tailwind CSS v4, shadcn/ui (radix-vega 스타일)
- **3D Engine**: Three.js, @react-three/fiber, @react-three/drei
- **State/UI Controls**: Leva (3D 속성 실시간 조절)
- **Code Display**: shiki 또는 react-syntax-highlighter
- **Icons**: Lucide React

## 3. 시스템 아키텍처
### 3.1 디렉토리 구조
- `src/app`: 라우팅 및 페이지 레이아웃
- `src/components/canvas`: Three.js 관련 컴포넌트 (RSC/RCC 경계 처리)
- `src/components/ui`: 대시보드 인터페이스 컴포넌트 (shadcn)
- `src/lib`: 유틸리티 및 전역 상태 상스
- `legacy/`: 참조용 기존 CRA 소스 코드

### 3.2 핵심 컴포넌트 설계
1. **Scene Layout**: 좌측 사이드바(메뉴), 상단 헤더, 중앙 3D 캔버스, 우측 코드 패널로 구성된 반응형 레이아웃.
2. **Interactive Canvas**: @react-three/fiber 기반의 3D 렌더링 영역.
3. **Source Viewer**: 현재 페이지에서 렌더링 중인 3D 컴포넌트의 소스 코드를 읽어와 문법 강조와 함께 표시.
4. **Tutorial Navigation**: 기초(Geometry), 중급(Material), 하급(Advanced)으로 분류된 튜토리얼 리스트.

## 4. 구현 단계별 계획

### Phase 1: 기반 시스템 구축
- [x] 워크스페이스 정리 및 Next.js 초기화
- [x] shadcn/ui 및 Tailwind CSS v4 설정
- [ ] 글로벌 테마 (다크 모드 중심) 및 대시보드 기본 레이아웃 구현

### Phase 2: 3D 에코시스템 통합
- [ ] React Three Fiber 캔버스 기반 컴포넌트 생성
- [ ] 범용적인 3D 관리 헬퍼 (OrbitControls, Lights, Environment) 구축
- [ ] Leva를 활용한 실시간 속성 조절 시스템 연동

### Phase 3: 코드 뷰어 및 인터랙티브 UI
- [ ] 소스 코드 파싱 및 문법 강조 뷰어 구현
- [ ] 실시간 3D 화면과 코드 패널 간의 레이아웃 전환 기능 (Split View)

### Phase 4: 레거시 코드 마이그레이션
- [ ] Geometry 예제 마이그레이션
- [ ] Material 예제 마이그레이션
- [ ] Character 및 Advanced 예제 마이그레이션

### Phase 5: 고도화 및 품질 검증
- [ ] 페이지 전환 애니메이션 (Framer Motion 등) 적용
- [ ] Vercel 성능 최적화 가이드 준수 확인
- [ ] 최종 사용자 가이드 문서 작성

## 5. 핵심 규칙 및 제약 사항
- **CSR/SSR 관리**: 3D 캔버스는 클라이언트 컴포넌트(`'use client'`)로 엄격히 분리하여 서버 컴포넌트와 공존하도록 설계.
- **코드 스타일**: TypeScript의 엄격한 타입을 적용하며, 모든 컴포넌트는 재사용성을 고려하여 원자 단위로 분할.
- **데이터 백업**: DB가 포함되지 않은 프론트엔드 중심 프로젝트이나, 주요 변경 사항마다 Git 체크포인트를 수행.

---
최종 수정일: 2026-01-19
작성자: Antigravity Assistant
