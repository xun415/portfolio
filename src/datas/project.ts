export type ProjectLink = {
    name: string
    link: string
}

export type Project = {
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
    links?: ProjectLink[]
}

export const projects: Project[] = [
    {
        title: '반품마켓',
        subject: '오픈마켓 서비스',
        thumbnail: 'images/project/banpoom1.webp',
        images: ['images/project/banpoom2.webp', 'images/project/banpoom3.webp', 'images/project/banpoom4.webp', 'images/project/banpoom5.webp', 'images/project/banpoom6.webp', 'images/project/banpoom7.webp'],
        skills: [
            'React', 'Typescript', 'SCSS', 'Bootstrap', 'React-query', 'Zustand', 'Vitest', 'AWS(cloudFront, codePipeline, codeBuild, codecommit)'
        ],
        desc: '반품상품 중심의 오픈마켓 서비스',
        startAt: '2022.12',
        endAt: '2023.09',
        role: 'Next.js 기반 하이브리드 웹앱 개발, 유지보수 및 인프라 협업 담당',
        works: [
            'SEO, 로딩속도 개선을 위한 하이브리드 렌더링 작업 진행. 메타태그용 데이터 및 일부 데이터는 ISR, 기타 실시간 데이터가 중요한 요소들과 기타 데이터들은 CSR로 구성하여 초기로딩 시간 최소화.',
            '프론트 서버 관련 인프라 협업 담당(next 서버 설정, cloudFront, PM2 설정 등)',
            'AWS codeDeploy 의 버저닝 기능을 활용한 롤백 팀내 가이드',
            '목록 페이지 최적화를 위한 가상화 적용 (react-virtualized)',
            '커스텀 hook을 사용한 로직 공통화 및 일원화 작업 (앱 공유, 내외부 링크, 스크롤, 세션스토리지, 비지니스 로직 등)'
        ],
        links: [
            { name: '웹싸이트', link: 'https://www.banpoommarket.co.kr/shop'},
            { name: '반품마켓 나무위키', link: 'https://namu.wiki/w/%EB%B0%98%ED%92%88%EB%A7%88%EC%BC%93'},
            { name: 'Play 스토어', link: 'https://play.google.com/store/apps/details?id=kr.co.banpoommarket.app&hl=ko&gl=US'},
        ]
    },
    {
            title: '반품마켓 백오피스',
            subject: '오픈마켓 입점사, 전체 관리자 페이지',
            images: ['images/project/banpoom_partner_introduce1.png', 'images/project/banpoom_partner_login.png', 'images/project/banpoom_admin_login.png'],
            thumbnail: 'images/project/banpoom_partner_introduce1.png',
            desc: '오픈마켓 입점사 운영자들을 위한 파트너사 페이지, 전체 관리자 페이지',
            role: '관리자, 입점사 페이지의 프론트엔드 개발 및 유지보수. 상품 및 통계 메인 개발',
            skills: [
                'Next.js', 'typescript', 'React-query', 'Zustand', 'Vitest', 'Bootstrap + scss', 'AWS(codePipeline, codeBuild, cloudFront, EC2, ELB)', 'PM2'
            ],
            startAt: '2022.07',
            endAt: '2023.09',
            works: [
                'jsDoc 팀내 작성 가이딩, Typescript TF 참여 및 가이드 진행 후 js에서 ts로 점진적 도입 진행.',
                'React Suspense, React-query, ErrorBoundary 도입 및 팀내 가이드 역할.',
                '사용자 편의성 증대를 위한 에디터 라이브러리 커스텀. 최대 업로드 가능 이미지 갯수 및 사이즈 유효성 체크 등 라이브러리 미지원 기능 추가.',
                '리액트 테스트라이브러리 + msw 테스트 환경 구축. 복잡하고 동적 옵션 필드가 많은 상품 등록 & 수정페이지에 TDD 적용하여 버그 최소화 및 개발 시간 단축.',
                '입점사 페이지 webpack vite 전환하여 배포 속도 8~9분에서 4분대로 50%가량 감축.',
                '로딩 속도 개선을 위한 라이브러리 경량화 작업 주도 (moment dayJs, lodash lodash-es 등)'
            ],
            links: [
                {name: '파트너 입점 안내 페이지', link: 'https://www.banpoommarket.co.kr/partner'}
            ]
    },
    {
        title: '애드리워드',
        subject: '이벤트 참가자 DB 조회 및 관리 싸이트',
        images: ['images/project/adreward_login.png'],
        thumbnail: 'images/project/adreward_login.png',
        desc: '이벤트 참가자 DB 조회 및 관리 싸이트',
        role: '데이터 분석결과 페이지 프론트엔드 담당',
        skills: [
            'React', 'Typescript', 'BootStrap + scss', 'React-query', 'Zustand', 'Vitest'
        ],
        startAt: '2023.07',
        endAt: '2023.08',
        works: [
            '유지보수성 향상을 위한 커스텀 비지니스 hook 적용. 화면 로직과 비지니스 로직의 분리에 초점.',
            'UX 개선을 위해 React Suspense 적극 활용. 로딩 시간의 최소화 및 로딩 파트를 분할하여 ux개선',
            '테스트 환경 구축 - vitest, react-test-library, msw(setupWorker, setupServer)'
        ],
    },
    {
        title: '데이토즈',
        subject: '빅데이터 분석 솔루션',
        images: ['images/project/datoz_introduce.png', 'images/project/datoz_graph1.png', 'images/project/datoz_wordcloud.png', 'images/project/datoz_networkGraph.png'],
        thumbnail: 'images/project/datoz_introduce.png',
        desc: '텍스트(Text) 기반의 빅데이터 분석 솔루션',
        role: '데이터 분석결과 페이지 프론트엔드 담당',
        skills: [
            'Vue2', 'javascript', 'Vuex', 'scss', 'AWS(codePipeline, codeBuild)'
        ],
        startAt: '2022.03',
        endAt: '2022.06',
        works: [
            '각종 그래프 구현(원형그래프, xy그래프, 네트워크 그래프, 워드 클라우드)',
            '워드클라우드 라이브러리를 요구사항에 맞도록 커스텀 및 미지원 기능 구현 (비율에 맞도록 싸이즈 유지, 주어진 영역을 최대한 채우면서 원형 유지, 호버링시 정보 노출)',
            'UX 개선을 위한 섹션 별 부분 로딩 기획 제안 및 적용'
        ],
        links: [
            { name: '웹싸이트', link: 'https://www.datoz.net/'},
            {name: '데이토즈 소개 페이지', link: 'http://bigdata.emforce.co.kr/index.php/2022082601/'}
        ]
    },
    {
        title: '위플(내손안의 건강비서)',
        subject: '헬스케어 어플리케이션(AAI 헬스케어)',
        images: ['images/project/wiple1.webp', 'images/project/wiple2.webp', 'images/project/wiple3.webp', 'images/project/wiple4.webp'],
        thumbnail: 'images/project/wiple1.webp',
        desc: '헬스케어 어플리케이션(AAI 헬스케어)',
        role: '자바웹 프론트 & 백엔드 유지보수 및 추가개발 담당',
        skills: [
            'JAVA', 'SpringBoot', 'MyBatis', 'Thymeleaf', 'SCSS', 'jQuery', 'git', 'EC2', 'Jenkins'
        ],
        startAt: '2022.07',
        endAt: '2022.02',
        works: [
            '서비스 출시 후 고질적인 문제였던 인증 토큰 로직 원인 파악 및 개선. 인증 토큰 사이즈를 80% 이상 감축하여 향후 문제 발생 가능성을 차단 및 관련 로직 개선',
            '초기담당시 3천명이였던 고객수가 2만명으로 증가하며 고객데이터 최신화 이슈가 발생. 업무 숙달 후 직접 테이블 설계 및 분산 배치 처리하여 고객사의 주요 니즈인 회원 데이터 최신화 달성.',
            '증가한 회원 데이터로 인해 엑셀 생성 문제 발생. 템플릿 변경하여 다운로드 속도 2배 이상 개선'
        ],
        links: [
            { name: 'play 스토어', link: 'https://play.google.com/store/apps/details?id=com.aaihc.wiple&hl=en_IN&gl=US'},
        ]
    },
]