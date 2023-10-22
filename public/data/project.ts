type Link = {
    name: string
    link: string
}

type Project = {
    title: string
    subject: string
    thumbnail: string
    images: string[]
    skills: string[]
    role: string
    works: string[]
    desc: string
    startAt: string
    endAt: string
    links?: Link[]
}

export const projects: Project[] = [
    {
        title: '반품마켓',
        subject: '오픈마켓 서비스',
        thumbnail: 'images/project/banpoom1.webp',
        images: [''],
        skills: ['react', 'next'],
        desc: '반품상품 중심의 오픈마켓 서비스',
        startAt: '2022.12',
        endAt: '2023.09',
        role: '프론트 엔드 개발. 공통 로직, 상품, 통계 페이지 개발',
        works: [
            '- jsDoc 팀내 작성 가이딩, Typescript TF 참여 및 가이드 진행 후 js에서 ts로 점진적 도입 진행.',
            '- React Suspense, React-query, ErrorBoundary 도입 및 팀내 가이드 역할.',
            '- 사용자 편의성 증대를 위한 에디터 라이브러리 커스텀. 최대 업로드 가능 이미지 갯수 및 사이즈 유효성 체크 등 라이브러리 미지원 기능 추가.',
            '- 리액트 테스트라이브러리 + msw 테스트 환경 구축. 복잡하고 동적 옵션 필드가 많은 상품 등록 & 수정페이지에 TDD 적용하여 버그 최소화 및 개발 시간 단축.',
            '- 입점사 페이지 webpack vite 전환하여 배포 속도 8~9분에서 4분대로 50%가량 감축.',
            '- 로딩 속도 개선을 위한 라이브러리 경량화 작업 주도 (moment dayJs, lodash lodash-es 등)'
        ],
        links: [
            { name: '반품마켓 나무위키', link: 'https://namu.wiki/w/%EB%B0%98%ED%92%88%EB%A7%88%EC%BC%93'}
        ]
    },
    {
            title: '반품마켓 파트너 페이지',
            subject: '오픈마켓 입점사용 관리 페이지',
            images: [''],
            thumbnail: 'images/project/banpoom_partner_introduce1.png',
            info: '오픈마켓 입점사용 관리 페이지',
            time: '2023',
            link: '#'
    }
]