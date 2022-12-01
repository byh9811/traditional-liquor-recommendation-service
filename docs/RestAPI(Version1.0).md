# REST API DESIGN - Version 1.0

----------------

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

### 전통주 한 개 검색
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