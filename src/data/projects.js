export const projects = [
    {
        id: 1,
        title: "거울 앞, 하루가 스마트해진다: Inside Mirror",
        period: "2024.09 - 2025.09 / 1년",
        teamSize: 5,
        position: "팀원",
        role: "모바일 UI, 시선 추적 및 LLM 챗봇 기능 구현",
        type: "프로젝트",
        techStack: [
            "React",
            "Spring Boot",
            "Llama API",
            "FastAPI",
            "WebSocket",
            "FaceNet",
            "iTracker",
            "JavaScript",
            "Python",
            "Github"
        ],
        sections: {
            planning: [
                "스마트 미러 기반 개인 맞춤형 정보 제공 시스템 ‘Inside Mirror’ 개발",
                "사용자 환경 분석을 기반으로 UI/UX 구조 설계 및 주요 기능 우선순위 정의"
            ],
            development: [
                "React 기반 모바일 UI 설계·구현으로 사용자 인터페이스 직관성 강화",
                "WebSocket을 통해 시선 추적 좌표 데이터를 프론트엔드로 실시간 전송"
            ],
            ai_feature: [
                "FaceNet을 이용한 얼굴 인식 및 시선 추적 데이터 통합 처리",
                "Llama API 기반 음성 입력 챗봇 기능 구현"
            ],
            integration: [
                "FastAPI로 얼굴 인식 기능을 웹 환경에서도 실행 가능하도록 확장",
                "FastAPI + WebSocket 기반 실시간 데이터 연동 구조 설계"
            ],
            improvement: [
                "LLM 챗봇 응답 품질 향상을 위한 프롬프트 설계 및 API 요청 구조 최적화"
            ]
        },
        contributions: [
            {
                category: "AI 기능 구현 및 통합",
                details: [
                    "시선 추적, 얼굴 인식, LLM 챗봇 등 주요 AI 기능 직접 구현 및 통합",
                    "FastAPI WebSocket 기반의 실시간 데이터 연동 구조 설계"
                ]
            },
            {
                category: "프론트엔드 개발",
                details: [
                    "React 기반 모바일 UI 구현 및 시각적 피드백 구조 개선"
                ]
            },
            {
                category: "프롬프트 엔지니어링",
                details: [
                    "Llama API 기반 챗봇 응답 품질 개선을 위한 프롬프트 설계"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "리뷰 요약기 (LLM Summarizer)",
        period: "2024.09 - 2024.12 / 3개월",
        teamSize: 3,
        position: "팀원",
        type: "프로젝트",
        role: "데이터 수집, 요약문 생성 과정 및 모델 학습 설계",
        techStack: [
            "Python",
            "T5",
            "Gemini API",
            "Beautiful Soup",
            "Flask",
            "FastAPI",
            "Pandas",
            "Github"
        ],
        sections: {
            planning: [
                "리뷰 요약 자동화 시스템 설계 및 데이터 파이프라인 구조 정의",
                "데이터 수집 → 요약문 생성 → 학습 → 평가로 이어지는 프로세스 자동화 설계"
            ],
            development: [
                "Python 기반으로 데이터 수집, 학습, 평가 과정을 자동화",
                "Flask 기반 REST API를 설계하여 모델 결과를 웹 서비스로 연동"
            ],
            ai_feature: [
                "T5 Transformer 모델을 이용한 한줄 요약 모델 학습 및 추론 스크립트 개발",
                "Gemini API를 활용해 요약문 자동 생성 구조 구현 및 내부 모델과 통합"
            ],
            integration: [
                "Flask API를 통해 학습된 모델 결과를 서비스 환경에 실시간 반영",
                "LLM API와 내부 모델을 통합하여 실제 배포 가능한 구조 구현"
            ],
            improvement: [
                "Rouge 점수 기반 반복 평가를 통해 모델 성능을 지속적으로 개선",
                "데이터 증강 및 학습률 조정으로 요약 품질 고도화"
            ]
        },
        contributions: [
            {
                category: "데이터 처리 및 파이프라인 설계",
                details: [
                    "네이버·카카오맵 식당 리뷰 약 2,000건을 자동 크롤링 및 전처리",
                    "데이터 품질 분석 및 불균형 보정으로 학습 효율 향상"
                ]
            },
            {
                category: "LLM 및 모델 학습 담당",
                details: [
                    "Gemini API를 통한 요약문 자동 생성 구조 구현",
                    "T5 기반 요약 모델 학습 및 Rouge 점수 기반 성능 개선 주도"
                ]
            },
            {
                category: "서비스 구조 설계",
                details: [
                    "Flask 기반 REST API를 개발하여 모델 결과를 실시간 호출 가능 형태로 구현",
                    "모델 학습 결과를 서비스 구조에 통합해 LLM 응용 서비스 프로토타입 완성"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "UWB 실내 위치 측정 연구",
        period: "2023.09 - 2025.12 / 2년 3개월",
        teamSize: 3,
        position: "학부연구생",
        type: "학부연구생",
        role: "실내 위치 모니터링 프로그램 및 데이터 처리 파이프라인 개발",
        techStack: [
            "Python",
            "C++",
            "PySide6",
            "PySerial",
            "FilterPy (UKF)",
            "Notion",
            "Github"
        ],
        sections: {
            planning: [
                "UWB 기반 실내 측위 정밀도 향상 연구를 위한 실험 설계 및 데이터 파이프라인 구조 정의",
                "비정상 거리값 및 신호 잡음 문제 분석을 통해 데이터 정제·보정 로직 설계"
            ],
            development: [
                "PySerial 기반 통신 구조로 UWB 앵커·태그 간 거리 데이터를 실시간 수집",
                "PySide6 기반 GUI 프로그램을 구현해 측정값과 위치 추정 결과를 실시간 시각화",
                "자동 저장·복원 기능을 포함한 데이터 수집 파이프라인을 구축하여 반복 실험 효율화"
            ],
            ai_feature: [
                "Unscented Kalman Filter (UKF)를 적용해 센서 노이즈 및 다중 경로 반사 문제를 보정",
                "이상치 탐지 및 적응형 임계값 조정 알고리즘을 설계하여 측정 신뢰도 향상",
                "필터링 전후 RMSE 비교를 통해 평균 오차 약 20% 감소 성능 달성"
            ],
            integration: [
                "데이터 수집 파이프라인과 UI를 연동해 실험자 개입 없이 자동 갱신되는 구조 구현",
                "로그 자동 저장 및 오류 표시 기능을 추가해 디버깅·분석 효율 개선"
            ],
            improvement: [
                "데이터 품질 향상을 위한 이상치 탐지·보정 로직 최적화",
                "측위 성능 개선 결과를 기반으로 학술 논문 작성 및 학회 발표 진행"
            ]
        },
        contributions: [
            {
                category: "데이터 수집 및 처리 자동화",
                details: [
                    "UWB 실험 환경의 비효율성을 개선하기 위해 데이터 수집·저장·시각화 과정을 자동화",
                    "실시간 로그 누락 방지를 위한 자동 저장 구조 설계로 반복 실험 안정성 확보"
                ]
            },
            {
                category: "필터링 알고리즘 구현 및 검증",
                details: [
                    "UKF 기반 거리 보정 알고리즘을 직접 구현하여 노이즈 및 반사 문제를 해결",
                    "RMSE 및 평균 오차 비교를 통한 정량적 성능 향상 검증"
                ]
            },
            {
                category: "이상치 탐지 및 품질 개선 로직 개발",
                details: [
                    "전파 간섭 및 신호 손실 상황을 고려한 이상치 탐지 알고리즘 설계",
                    "데이터 분포 변화에 따라 임계값을 동적으로 조정하는 적응형 로직 구현"
                ]
            },
            {
                category: "실시간 모니터링 인터페이스 개발",
                details: [
                    "PySide6 기반 GUI를 통해 거리·위치 변화를 실시간 시각화",
                    "데이터 파이프라인과 UI를 연동해 실험 상태를 자동 갱신 및 표시"
                ]
            },
            {
                category: "연구 논문 작성 및 발표",
                details: [
                    "UWB 측위 성능 개선 실험 결과를 토대로 논문 작성 및 학회 발표",
                    "‘허상 제거 기법을 이용한 실내 UWB 측위 정확도 개선에 관한 연구’ 발표 및 우수논문상 수상"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "TalenTree: 재능 공유의 숲",
        period: "2024.09 - 2024.11 / 2개월",
        teamSize: 5,
        position: "팀원",
        type: "프로젝트",
        role: "학생들을 위한 재능 거래 플랫폼 / 프론트엔드 및 백엔드 개발",
        techStack: [
            "React",
            "Spring Boot",
            "MySQL",
            "FastAPI",
            "JavaScript",
            "Java",
            "Github"
        ],
        sections: {
            planning: [
                "React + Spring Boot 기반 재능 매칭 플랫폼 ‘TalenTree’ 기획 및 개발",
                "사용자 정보 및 프로젝트 데이터를 통합 관리할 수 있는 구조 설계"
            ],
            development: [
                "Spring Boot 기반 RESTful API를 설계하고 MySQL 데이터베이스 모델링에 참여",
                "사용자 인증, 프로젝트 등록·조회·수정·삭제(CRUD) 기능 구현",
                "React로 클라이언트 UI를 개발해 직관적인 재능 매칭 인터페이스 구축"
            ],
            ai_feature: [],
            integration: [
                "CORS 설정 및 데이터 응답 오류를 해결해 서버-클라이언트 간 연동 안정화",
                "비동기 통신 및 API 호출 구조를 최적화하여 응답 지연 최소화"
            ],
            improvement: [
                "검색 및 필터링 기능을 추가해 카테고리별 인재 탐색 UX 개선",
                "클라이언트-서버 간 구조를 직접 설계하며 전체 서비스 아키텍처 이해도 향상"
            ]
        },
        contributions: [
            {
                category: "플랫폼 설계 및 서비스 구현",
                details: [
                    "재능 공유 플랫폼 ‘TalenTree’의 전반적 서비스 구조 기획 및 구현 참여",
                    "React + Spring Boot 기반 클라이언트-서버 구조 직접 설계"
                ]
            },
            {
                category: "백엔드 개발",
                details: [
                    "Spring Boot 기반 RESTful API 설계 및 데이터베이스 스키마 정의",
                    "사용자 인증 및 CRUD 로직 구현으로 서비스 핵심 기능 완성"
                ]
            },
            {
                category: "프론트엔드 개발 및 UX 개선",
                details: [
                    "React 기반 사용자 인터페이스 구현 및 데이터 연동 최적화",
                    "검색·필터 기능 추가로 사용자 중심 UX 강화"
                ]
            },
            {
                category: "시스템 통합 및 성능 개선",
                details: [
                    "CORS 및 비동기 통신 문제 해결을 통해 서버-클라이언트 연동 안정화",
                    "API 요청 구조 개선 및 응답 속도 향상으로 서비스 품질 개선"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "반려견 백내장 진단 시스템",
        period: "2024.11 - 2024.12 / 2개월",
        teamSize: 1,
        position: "개인 프로젝트",
        type: "프로젝트",
        role: "객체 탐지 및 단계 분류 모델 설계",
        techStack: [
            "Python",
            "PyTorch",
            "YOLOv8",
            "ResNet-18",
            "OpenCV",
            "NumPy",
            "Pandas",
            "Jupyter Notebook",
            "Google Colab"
        ],
        sections: {
            planning: [
                "반려견 백내장 조기 진단을 목표로 한 딥러닝 기반 판별 시스템 기획",
                "YOLOv8을 이용해 눈 영역을 검출하고, ResNet-18을 통해 백내장 단계를 ‘정상–초기–비성숙–성숙’으로 분류하는 2단계 구조 설계"
            ],
            development: [
                "반려견 얼굴 및 눈 데이터셋을 직접 수집·라벨링하여 학습용 데이터 구축",
                "YOLOv8 학습을 위한 YAML 구성 및 데이터 증강 적용",
                "ResNet-18 기반 단계 분류 모델 학습 및 테스트 수행"
            ],
            ai_feature: [
                "YOLOv8을 통한 객체 탐지 모델과 ResNet-18 분류 모델을 결합한 2단계 판별 파이프라인 구현",
                "SGD 옵티마이저와 학습률 스케줄링 적용으로 분류 정확도 향상",
                "백내장 진행 단계를 정량적으로 비교·평가할 수 있는 모델 검증 절차 설계"
            ],
            integration: [
                "Jupyter Notebook 환경에서 모델 학습–테스트–시각화를 자동화하여 실험 효율 향상",
                "OpenCV를 활용한 검출 결과 시각화 및 모델 간 데이터 연동 검증"
            ],
            improvement: [
                "객체 탐지와 분류 모델 통합 과정에서 데이터 흐름 설계의 중요성을 인식",
                "모델 구조 실험과 하이퍼파라미터 조정을 반복하며 문제 해결 능력 및 모델 성능 향상 경험"
            ]
        },
        contributions: [
            {
                category: "데이터 구축 및 전처리",
                details: [
                    "강아지 얼굴·눈 영역 데이터를 직접 수집 및 라벨링",
                    "YOLOv8 학습용 데이터셋 구성 및 품질 관리로 학습 안정성 확보"
                ]
            },
            {
                category: "딥러닝 모델 설계 및 학습",
                details: [
                    "YOLOv8을 이용한 눈 영역 검출 및 ResNet-18을 통한 단계 분류 모델 구현",
                    "SGD 옵티마이저와 학습률 조정으로 성능 고도화"
                ]
            },
            {
                category: "시스템 통합 및 검증",
                details: [
                    "객체 탐지와 분류 모델을 결합한 2단계 AI 파이프라인 설계",
                    "Jupyter Notebook 환경에서 학습·테스트 자동화 및 시각화 구현"
                ]
            },
            {
                category: "성과 및 학습",
                details: [
                    "백내장 단계별 분류 정확도를 정량 분석하여 모델 성능 평가 체계 구축",
                    "모델 간 데이터 흐름 설계 및 실험 반복을 통해 AI 통합 설계 역량 강화"
                ]
            }
        ]
    }
];
