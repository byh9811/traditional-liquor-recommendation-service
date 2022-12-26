package com.theStupids.traditionalliquorrecommendationservice.enumerate;

public enum Region {
    Seoul("^서울"), Incheon("^인천"), Gyeonggi("^경기"), Gangwon("^강원"), Daejeon("^대전"),
    Gwangju("^광주"), Daegu("^대구"), Ulsan("^울산"), Busan("^부산"), Jeju("^제주"), Sejong("^세종"),
    Chungcheong("^충북|^충남|^충청"), Jeolla("^전북|^전남|^전라"), Gyeongsang("^경북|^경남|^경상");

    final private String exp;

    Region(String exp) {
        this.exp = exp;
    }

    public String getExp() {
        return exp;
    }
}
