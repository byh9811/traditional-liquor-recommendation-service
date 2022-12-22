# REST API DESIGN - Version 1.0

---

## 1. 메인&검색

### 메인 페이지 메인 캐러셀에 표시될 전통주 조회

- URI: GET /drinks/main-carousel
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - id: Integer
    - img: String
    - title: String

### 전통주 여러개 검색

- URI: GET /drinks
- Request
  - search: String
  - page: Integer
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - id: Integer
    - img: String
    - title: String
    - price: Integer
    - volume: Integer
    - type: String
    - alcohol: Double
    - food: Array (String)
  - pageData
    - startPage: Integer
    - endPage: Integer
    - totalPages: Integer
    - currentPage: Integer

### 전통주 한 개 조회

- URI: GET /drinks/:id
- Response
  - status
    - code: Integer
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

## 2. 전통주점

### 지역별 전통주점 검색

- URI: GET /stores
- Request
  - areaName: String
  - page: Integer
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - id: Integer
    - name: String
    - address: String
    - tel: String
    - menu: Array (String)
    - link: String
  - pageData
    - startPage: Integer
    - endPage: Integer
    - totalPages: Integer
    - currentPage: Integer

## 3. 전통주 용어사전

### 메인 페이지 서브 캐러셀에 표시될 전통주 용어사전

- URI: GET /guides
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - id: Integer
    - keyword: String
    - meaning: String

## 4. 전통주 취향 질문

### 취향 테스트 페이지 접속

- URI: GET /questions
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - questions: String

### 취향 테스트 수행

- URI: GET /drinks/recommendation
- Request
  - answer: Array (Integer)
- Response
  - status
    - code: Integer
    - message: String
  - data (Array)
    - id: Integer
    - img: String
    - title: String