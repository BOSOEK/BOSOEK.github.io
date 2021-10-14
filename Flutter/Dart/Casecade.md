# Cascade Operator
* 다트만의 코드를 줄이는 특이한 구문이다.
* 케스 케이드(..)는 동일한 개체에 대해 일련의 작업을 수행할 수 있고 코드와 단계를 절약할 수 있다.
```
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```
* ### 위는 생성한 객체를 계속 사용한다. 
    ```
    querySelector('#confirm')   //오브젝트를 얻는다.
    ..text = 'Confirm'          //얻은 오브젝트의 멤버를 .. 문법을 이용해 바로 사용한다.
    ..classes.add('important')  //얻은 오브젝트의 멤버를 .. 문법을 이용해 바로 사용한다.
    ..onClick.listen((e) => window.alert('Confirmed!')); //동일한 방법으로 계속 사용한다.
    ```
* ### 케스 케이드를 사용하면 생성한 오브젝트를 계속 생성 가능하다.

* ### 또한 케스 케이드는 중첩도 가능하다.
    ```
    final addressBook = (AddressBookBuilder()
            ..name = 'jenny'
            ..email = 'jenny@example.com'
            ..phone = (PhoneNumberBuilder()
                        ..number = '415-555-0100'
                        ..label = 'home').build())
            .build();
    ```

* ### 케스케이드의 주의점은 객체를 반환하는 함수만 사용 가능하다는 점이다.
    ```
    var sb = StringBuffer();
    var returnWrite = sb.write('foo');  //write에서 리턴되는 변수는 없기때문에 1차 문제가 되고
    // write함수에서 리턴된 변수의 없는 멤버 write라는 함수에 접근하려고 하니 에러가 발생한다.
    returnWrite.write('bar');
    ```
* ### 즉 케스 케이드는 객체를 반환받은 다음 사용할 수 있다는 것!
    > 위의 코드를 제대로 사용하려면 아래와 같이 구성하면 된다.
    ```
    var sb = StringBuffer()
           ..write('foo')
           ..write('bar');
    ```