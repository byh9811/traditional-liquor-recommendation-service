# 전통주 추천 서비스 (Traditional Liquor Recommendation Service)

<img width="20%" height="300" alt="response" src="https://user-images.githubusercontent.com/85999976/199455170-222ecf91-e0b8-4790-b1ae-8acd5a3a9efb.png">
<img width="50%" height="300" alt="indexpage" src="https://user-images.githubusercontent.com/85999976/199455801-f73f29be-446e-45ee-a28f-bf2d75bd40c0.png">

# 목차

## 1. 프로젝트 소개

- `역할 및 구성원`
  - 인프라 및 총괄: 배용현
  - 백엔드: 김동선
  - 프론트엔드: 김지성
  - 데이터: 정민혁
- `프로젝트 진행 날짜`
  - 2022-11-23 ~ 2022-12-31
- `프로젝트 설명`
  - 사용자의 취향을 파악해 `사용자가 좋아할 만한 전통주`를 추천해주고, `전국 전통주점의 위치`와, `다양한 전통주의 정보`까지 한 눈에 알아볼 수 있는 웹 서비스
- `프로젝트 동기`
  - 술을 좋아하지는 않고 잘 마시지 않는 저같은 사람에게도 어울릴만한 술이 있는지 알고싶었고, 이왕이면 흔한 술이 아닌 전통주에 접근해서 조금 더 깊게 알고 싶었습니다.
- `프로젝트 목표`
  - `Spring Boot`와 `React`를 사용한 `CSR`(Client Side Rendering) 방식의 `SPA`(Single Page Application) 개발
  - `REST API`를 이용한 Client-Server 통신 구현
  - `AWS` 클라우드 서비스를 이용하여 배포
 
## 2. 기술 스택

|                                                                                                                                         Front-End                                                                                                                                         |                                                                                                                                         Back-End                                                                                                                                          | Database                                                                                                                                   |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="https://user-images.githubusercontent.com/50614241/204125934-bcded2fc-2648-4d4e-893a-2f8c7f183d30.png" width="100" height="100"><br/><img src="https://user-images.githubusercontent.com/50614241/204125935-13e92ca0-8ea7-41e6-8f4d-59b3b50c7d26.png" width="100" height="100"> | <img src="https://user-images.githubusercontent.com/50614241/204125930-40758745-51a1-4bf8-b526-b44b6e051336.png" width="100" height="100"><br/><img src="https://user-images.githubusercontent.com/50614241/204125932-291343f7-56a9-4e56-af2b-fb2b71299c3c.png" width="150" height="100"> | <img src="https://user-images.githubusercontent.com/50614241/204125933-7474a4a7-15af-4c42-8263-a48f92664871.png" width="100" height="100"> |

- Front-End
- Back-End
  - Java 17.0.5
  - Spring Boot 3.0.0 (Gradle)
- Database

## 3. 구현 기능

- `REST API`
  - index
    - 메인페이지(GET /index)(
    - 술 취향test(GET /drinks-test/index)
    - 전통주점(GET /drinks-shop/index)
    - 전통주설명(GET /drinks-ex/index)
    - 로그인페이지(GET /auth/local/index) => 수정필요
    - 회원가입페이지(GET /auth/new/index) => 수정필요
    - 술 정렬(GET /drinks ? sort = "food") => 음식으로 정렬

  - auth
    - 로그인(POST /api/auth/local-process)
    - 회원가입(POST /api/auth/new-process)
    
  - drink
    - 술 전체조회(GET /drinks)
    - 술 등록(POST /drinks)
    - 술 하나조회(GET /drinks/:id)
    - 술 하나수정(PUT /drinks/:id)
    - 술 하나삭제(delete /drinks/:id)
    
  - users
    - 유져 전체조회(GET /users)
    - 유져 생성(POST /users)
    - 유져 수정(PUT /users/:id)
    - 유져 삭제(DELETE /users/:id)

- 버전별 기능 및 일정
  - Version 1
    - 전통주 조회 (GET /drinks/:id)
    - 메인 페이지 접속 (GET /index)
    - 전통주 검색 (GET /drinks/:name)
    - 전통주 전체 검색 (GET /drinks/:name) (필터 가능) (이름, 주종, 가격, 도수, 안주)
    - 술 페이징 처리
    - 전통주 상세 정보 페이지 접속 (GET /drinks/:id)
    - 술 취향 테스트 페이지 접속 (GET /drinks-test/index)
    - 술 취향 테스트 실행
    - 군집화 알고리즘 보완
    - 전국 전통주점 찾기 페이지 접속 (GET /drinks-shop/index) (필터 가능)
  
  - Version 2
    - 로그인
    - 회원가입