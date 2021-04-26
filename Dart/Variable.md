# 변수(변수)
> Dart의 자료형들

### int & double
* 다트의 숫자형 자료형은 int와 double형 두가지 밖에 없다.
    ```
    int n1 = 12;  // int로 자료형 지정
    print(n1);    // n1 출력
    double n2 = 20.0  // double로 자료형 지정
    print(n2);        // n2 출력
    ```
### String
* 문자열
    ```
    String name = 'bosoek';
    String group = 'gsm';   //문자열 변수 지정

    // 문자열 합치기
    print(name + '은' + group);
    String total = name + group;

    //변수를 String 안에 쓰기
    print('$name는 $group 멤버다');
    print('${name + ' ' + group} 멤버입니다.');
    ```
### boolean
* 참 또는 거짓
    ```
    bool isTrue = true;    //true는 소문자로 시작함.
    bool isFalse = false;  //false도 소문자로 시작
    ```
### dynamic
* 자료형을 마음대로 변환 가능
    ```
    dynamic a = '나다';  // 타입 String
    a = 13;              // 타입 int
    ```
### var
* Dart의 var은 기본적으로 캐멀 캐스를 사용한다.
* var 타입은 처음 선언시 지정된 값의 타입으로 자동으로 지정되면 후에 타입 변경이 불가능하다.
    ```
    var a = '나다'; // 자동으로 자료형이 문자열로 지정됨
    a = 13;  //오류
    ```
* 단 var로 변수를 정할 때 값을 주지 않으면 중간에 타입을 바꿀수 있다
    ```
    var b;

    b = '나다';
    b = 30;  //오류 안남, dynamic으로 사용 가능
    ```


