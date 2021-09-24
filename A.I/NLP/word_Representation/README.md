# 단어 표현 방식 정리

* ### 국소 표현(Local Representation) 
    * 해당 단어 자체만 보며, 각 단어에 특정값을 맵핑하여 단어를 표현한다.
    * 이산 표현(Discrete Representation)이라고도 한다.

    > 예로 딱딱한, 연필, 보석이라는 단어에 1, 2, 3이라는 숫자를 맵핑할 수 있다.

    __하지만 단순히 단어를 숫자로 바꾸기만 했기에 맵핑된 숫자들에 아무 의미가 없어서 단어의 의미, 뉘앙스가 표현 되지 않는다.__ 

* ### 분산 표현(Distributed Representation) 
    * 해당 단어 표현을 위해 주변 단어와의 관계를 참고해 표현한다.
    * 연속 표현(Continuous Represnetation)이라고도 한다.
    
    > 예로 연필은 딱딱하지는 않지만 보석은 딱딱하기에 보석이라는 단어는 딱딱한 느낌이다로 단어를 정의한다.

    __단어의 의미, 뉘앙스를 표현할 수 있다.__

* ### Word Representation 카테고리
    <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcbdEOR%2FbtqCoSeoMqR%2FGz15kGaPfBEPZSOQA9jOl0%2Fimg.png' >
