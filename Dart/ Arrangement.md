# 배열
> Dart 배열 종류들 

### List
> 값들로만 이루어지 배열
* 리스트의 선언법은 2가지 이다.
    ```
    List a = ['나다', '너다', '우리다'];
    List<String> b = ['모른다', '안다', '배운다'];  // 
    // 위의 두 방식은 같은 결과다.
    ```
* 리스트 출력
    ```
    print(a[0]);
    print(a[1]);
    print(a[2]);
    ```
* 리스트 길이
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

    Map<String, String> d = {
       'firstKey' : '해리',
       'secKey' : '몰랑', 
    };
    ```