# 배열
> Dart 배열 종류들 

### List
> 값들로만 이루어지 배열
* 리스트의 선언법은 2가지 이다.
    ```
    List a = ['나다', '너다', '우리다'];
    List<String> b = ['모른다', '안다', '배운다'];  // 리스트 요소의 자료형 지정
    // 위의 두 방식은 같은 결과다.
    ```
* 리스트 출력
    ```
    print(a[0]);
    print(a[1]);
    print(a[2]);
    ```
* List.length : 리스트 길이
    ```
    print(a.length);  //리스트 길이 출력
    ```
### map
> 키와 값 형태로 이루어진 배열
* map의 선언 방법은 2가지 이다.
    ```
    Map d = {
       'firstKey' : '해리',
       'secKey' : '몰랑', 
    };

    Map<String, String> k = {
       'firstKey' : '해리',
       'secKey' : '몰랑', 
    };  // 맵의 키와 value의 자료형을 지정
    // 위의 두 방식은 같은 결과다.
    ```
* map.addAll({a : b}) : map에 키a와 value b를 추가
    ```
    k.addAll({
        'thirdKey' : '하하하하핳',
    });  //map 추가
    ```
* map[a] = b : map의 키 a의 값을 b로 변경
    ```
    k['firstkey'] = '체인지';  //firstKey의 value 변경
    ```
* map.remove(a) : map의 키 a값을 삭제함.
    ```
    k.remove('firstKey); // map의 firstKey를 삭제함
    ```
* map.keys : map의 키들을 반환함.
    > map.keys.toList() : map의 키들을 List로 반환함.
    ```
    print(k.keys);  //k의 key들 출력
    List L = k.keys.toList();  //L의 key들을 리스트로 반환
    ```
* map.values : map의 값들을 반환함
    > map.values.toList() : map의 값들을 List로 반환함
    ```
    print(k.values); //k의 값들을 출력
    List L2 = k.values.toList();  //L2의 value들을 리스트로 반환
    ```