# REST API DESIGN - Version 1.0

---

#### 1. 전통주

### 전통주 여러개 검색

- URI: GET /drinks
- Request
  - search: String
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

### 전통주 등록(관리자)

- URI: POST /drinks
- Request
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
- Response
  - status: Integer
  - message: String

#### 2. index(주요 기능)

### 메인 페이지

- URI: GET /index
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

### 취향 테스트 페이지

- URI: GET /drinks-test/index
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

### 전통주점 메인 페이지

- URI: GET /drinks-shop/index
- Response
  - status: Integer
  - message: String
  - data
    - area: String

### 전통주 용어 설명 페이지

- URI: GET /drinks-guide/index
- Response
  - status: Integer
  - message: String
  - data
    - keyword: String
    - meaning: String

#### 3.전통주점(지역)

### 서울

- URI: GET /drinks-shop/areaName=seoul
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

### 경기

- URI: GET /drinks-shop/areaName=gyeonggi
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

### 인천

- URI: GET /drinks-shop/areaName=inchon
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

### 충청도

- URI: GET /drinks-shop/areaName=chungcheong
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

### 경상도

- URI: GET /drinks-shop/areaName=gyeongsang
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

### 부산

- URI: GET /drinks-shop/areaName=busan
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

### 전라도

- URI: GET /drinks-shop/areaName=jeolla
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

### 제주도

- URI: GET /drinks-shop/areaName=jeju
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

#### 4. 유저(관리자)

### 유저 조회

- URI: GET /users
- Response
  - status: Integer
  - message: String
  - data
    - email: String
    - password: String
    - userName: String
    - result_type: String

### 유저 등록

- URI: POST /users
- Request
  - email: String
  - password: String
  - userName: String
- Response
  - status: Integer
  - message: String
