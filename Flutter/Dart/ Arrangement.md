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
### List get 메소드
* List.length : 리스트 길이
    ```
    print(a.length);  //리스트 길이 출력
    ```
* List.first : 첫번째 요소 반환
    ```
    print(a.first); //'나다' 출력
    ```
* List.isEmpty : 공백 여부 반환
    ```
    print(a.isEmpty); // 'false' 출력
    ```
* List.isNotEmpty : 공백이 아닌지의 여부 반환
    ```
    print(a.isNotEmpty); //'true' 출력
    ```
* List.last : 마지막 요소 반환
    ```
    print(a.Last); //'우리다' 출력
    ```
* List.reversed : 요소들 거꾸로 반환
    ```
    print(a.isNotEmpty); //'우리다, 너다, 나다' 출력
    ```
### List add 메소드
* List.add(요소) : 요소 한개 추가
    ```
    a.add('모두'); //a가 '나다, 너다, 우리다, 모두'가 됨
    ```
* List.addAll(요소, 요소...) : 요소 여러개 추가
### List 탐색 메서드
* List.firstWhere(조건) : 첫번째로 조건에 해당되는 것 
    ```
    List mem = [
        {
            'id' : 1,
            'name': '문어'
        },
        {
            'id' : 2,
            'name': '오징어'
        }
    ]
    print(mem.firstWhere((item) => item['id'] == 1)); //'{id:1, name:문어}' 출력
    ```
* List.indexWhere(조건) : 조건에 해당하는 인덱스 출력
    ```
    print(mem.indexWhere((item) => item['id'] == 1)); //'1' 출력
    ```
* List.indexOf(값) : 값과 일치하는 인덱스 반환
    ```
    print([10,20,30].indexOf(20)); //'1'출력
    ```
* List.contains(값) : 리스트에 값이 있는지 유무를 반환
    ```
    print([10,20,30].contains(30)); //'true'출력
    ```
### 리스트 누핑
* List.forEach : 요소들이 순서대로 반환됨.
    ```
    mem.forEach((item) {
        print(item);
    }); 
    //{id:1, name:문어}
    //{id:2, name:오징어} 가 출력됨
    ```
* List.map() : 맵핑
    ```
    print(mem.map((item) {
        return item['name'];
    }));
    //'(문어, 오징어)'가 출력됨
    ```
* List.fold(시작값, (total, element)) : 시작값부터 시작해서 토탈에 element를 더하거나 빼게 할수 있다.
    ```
    print(mem.fold(0, (t, e) {
        return t+e['id']; 
    }))  //3출력
    ```
* List.reduce((total, item)) : fold와 비슷하지만 total과 item의 자료형이 같아야한다.
    ```
    print([1,2,3,4,5].reduce((t,i) => t+i)); //15출력
    // 토탈에 각각의 item들을 더한값을 반환함
    ```
### 그 외
* List.remove(a) : 리스트의 a값을 삭제함.
* List.removeAt(a) : 리스트의 인덱스 a값을 삭제함.
* List.removeWhere((e) => e==50) : 리스트중 50인 것(조건이 맞는것)을 삭제함
* List.shuffle() : 리스트 무작위로 섞임.

***

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
### List get 메소드
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
* map.length : map의 길이 반환
    ```
    print(k.length); //2의 출력
    ```
* map.isEmpty : map이 공백인지 여부 반환
    ```
    print(k.isEmpty); //false 출력
    ```
* map.isNotEmpty : map이 공백이 아닌지 여부 반환 
    ```
    print(k.isNotEmpty); //true 출력
    ```

### Map add 메소드
* map.addAll({a : b}) : map에 키a와 value b를 추가
    ```
    k.addAll({
        'thirdKey' : '하하하하핳',
    });  //map 추가
    ```
* map.addEntries() : map에 키와 값을 추가함
    ```
    k.addEntries([
        MapEntry('sdfs', 2323424),
        MapEntry('does', 224),
    ]);  //map에 값들 추가함.
    ```
* map[a] = b : map의 키 a의 값을 b로 변경 또는 새로운 키와 값 넣기
    ```
    k['firstkey'] = '체인지';  //firstKey의 value 변경
    ```
### Map Update 메서드
* map.update() : map의 키에 해당하는 value 값을 변경한다.
    ```
    k.update('firstKey', (prev) {  //prev에는 원래 firstkey에 해당하는 value값이 들어감
        return prev * 10; //기본 value에 10을 곱한 값이 다시 들어간다.
    });
    ```
    > 또한 호출한 키가 없을 상황에 대한 예외처리도 가능하다 ( __ifAbsent__ 사용)
    ```
    k.update('Key', (prev) {  //key라는 값이 있으면  
        return prev * 10;     // 첫번째 return문이 실행
    }, ifAbsent : () {        // 없으면 ifAbsent문이 실행됨
        return 2222;          //결과적으로 Key : 2222라는 값이 들어감
    });
    ```
* map.putIfAbsent() : update와 동일하지만 좀더 단순함.
    ```
    k.putIfAbsent('kkk', () => 333333); // kkk가 있으면 값이 바뀌고 없으면 새로 생김
    ```
* map.updateAll() : 모든 요소들을 업데이트 하며 return값으로 변화를 줄 수 있음
    ```
    k.updateAll((k, v) {  //키와 value들을 받아옴
        return v.toString() + '원';  //모든 value들을 문자열로 변환후 원을 붙임
    });
    ```
### Map delete 메서드
* map.remove(a) : map의 키 a값을 삭제함.
    ```
    k.remove('firstKey); // map의 firstKey를 삭제함
    ```
* map.removeWhere() : 키와 값을 모두 받아오며 return 조건에 따라 삭제함
    ```
    k.removeWhere((k, v) {
        return k == 'firstKey';
    });  //키가 firstKey인 값을 삭제함.
    ```

