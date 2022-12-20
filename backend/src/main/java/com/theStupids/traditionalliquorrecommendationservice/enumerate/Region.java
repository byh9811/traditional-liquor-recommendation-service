package com.theStupids.traditionalliquorrecommendationservice.enumerate;

public enum Region {
    Seoul("서울"), Incheon("인천"), Gyeonggi("경기"), Gangwon("강원"), Daejeon("대전"),
    Gwangju("광주"), Daegu("대구"), Ulsan("울산"), Busan("부산"), Jeju("제주"),
    Chungbuk("충북"), Chungnam("충남"), Jeonbuk("전북"), Jeonnam("전남"),
    Gyeongbuk("경북"), Gyeongnam("경남");

    final private String korean;

    Region(String korean) {
        this.korean = korean;
    }

    public String getKorean() {
        return korean;
    }
}
