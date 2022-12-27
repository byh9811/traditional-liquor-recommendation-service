# REST API DESIGN - Version 1.0

---

## 1. 전통주

### 메인 캐러셀 전통주 조회 - `GET /drinks/main-carousel`
- Response
  - data (Array)
    - id: Integer
    - img: String

### 전통주 여러개 검색 - `GET /drinks`
- Request
  - search: String
  - limit: Integer
  - page: Integer
- Response
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

### 전통주 한 개 조회 - `GET /drinks/:id`
- Response
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
    - material: String
    - company: String

### 취향 전통주 조회 - `GET /drinks/recommendation`
- Request
  - answer: String
- Response
  - data (Array)
    - id: Integer
    - img: String
    - title: String

## 2. 전통주점

### 지역별 전통주점 검색 - `GET /stores`
- Request
  - areaName: String
  - limit: Integer
  - page: Integer
- Response
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

### 전통주 용어사전 조회 - `GET /guides`
- Response
  - data (Array)
    - id: Integer
    - keyword: String
    - meaning: String

## 4. 전통주 취향

### 취향 테스트 질문 조회 - `GET /questions`
- Response
  - data (Array)
    - id: Integer
    - question: String