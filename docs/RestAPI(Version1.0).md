# REST API DESIGN - Version 1.0

---

#### 1. 전통주
### 메인 페이지 메인 캐러셀에 표시될 전통주 조회

- URI: GET /main-carousel
- Response
  - status: Integer
  - message: String
  - data
    - id: Integer
    - img: String
    - title: String

### 전통주 여러개 검색

- URI: GET /drinks
- Request
  - search: String
  - flavor_type: List<Integer>
  - page: Integer
  - sort: Integer
- Response
  - status: Integer
  - message: String
  - data
    - id: Integer
    - img: String
    - title: String
    - price: Integer
    - volume: Integer
    - type: String
    - alcohol: Double
    - food: Array (String)
    - totalData: Integer
    - dataPerPage: Integer
    - pageCount: Integer
    - currentPage: Integer

### 전통주 한 개 조회

- URI: GET /drinks/:id
- Response
  - status: Integer
  - message: String
  - data
    - id: Integer
    - title: String
    - price: Integer
    - volume: Integer
    - type: String
    - alcohol: Double
    - food: Array (String)
    - sweet: Integer
    - sour: Integer
    - body: Integer
    - cool: Integer
    - material: Array (String)
    - company: String
    - flavor_type: Integer

#### 2. 전통주점
### 지역별 전통주점 검색

- URI: GET /drink-shops/:areaName
- Response
  - status: Integer
  - message: String
  - data
    - id: Integer
    - img: String
    - name: String
    - address: String
    - phone: String
    - menu: Array (String)
    - link: String

#### 3. 전통주 용어사전
### 메인 페이지 서브 캐러셀에 표시될 전통주 용어사전

- URI: GET /drink-guides
- Response
  - status: Integer
  - message: String
  - data
    - keyword: String
    - meaning: String

#### 4. 전통주 취향 질문
### 취향 테스트 페이지 접속

- URI: GET /drink-test/index
- Request
  - response: Array (String)
- Response
  - status: Integer
  - message: String
  - data
    - questionType: Integer
    - question: String
    - response: Array (String)
    - result_type: String

### 취향 테스트 수행