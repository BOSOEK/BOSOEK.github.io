# Class

### 클래스 선언
* 클래스는 객체를 만드는 하나의 틀이다
* 클래스 선언은 class 클래스명 {} 형태이다.
    ```
    class Idol {
        String name = "레드벨벳";  //클래스 지역변수

        void Say() {  //클래스 메소드
            print("저는 ${this.name}입니다.");
        } //this.name은 클래스 내의 변수 name을 의미한다.
    }
    ```
### 클래스 객체 만들기
* 클래스명 객체 명 = new 클래스명()
    ```
    void main() {
        Idol vel = new Idol();  //클래스 객체 만들기
        vel.Say();  //클래스의 함수 사용
    }
    ```
### Constructor
* 클래스 객체 만들때 매개변수를 받아 사용하기.
* 클래스 안에 클래스 이름을 괄호친다음 사용한다.
    ```
    class Idol {
        final name;  
        final _id;  
        Idol (
            String name, //String형을 하나 받고
        ) : this.name = name;  //클래스 안의 name에 저장함
    }
    void main() {
        Idol vel = new Idol("나다");
    }
    ```
* Dart에서 private 변수는 '_'뒤에 쓴다.
* Dart에서 private 변수는 class단위가 아닌 파일단위이다.
### Constructor Overloading
* 클래스명.오버로드명(자료형 변수명) 형태로 사용함
    ```
    class Idol {
        final name;  
        final group; 
        Idol.fromMap(
            Map values,
        ) : this.name = values['name'],
            this.group = values['group'];
    }
    ```
* 객체 생성은 중괄호를 열고 Map형태로 직접 지정하여 값을 전달한다.
    ```
    void main() {
        Idol vel = new Idol.fromMap({
            'name' : '슬기',
            'group' : '레드벨벳',
        });
    }
    ```
### Getter and Setter
* Getter : 'get 이름{}' 형태로 사용한다.
    ```
    class Idol{
        int a;
        get id{
            return this.id;
        }
    }
    ```
* Setter : 'set 이름(매개변수){}' 형태로 사용한다.
    ```
    class Idol{
        int a;
        set id(int id) {
            this.id = id;
        }
    }
    ```
### 상속(Inheritance)
* '클래스 뒤에 extends 클래스' 형태로 사용한다.
* 또한 Constructor는 __super__ 키워드를 이용하여 부모 클래스에 전달한다.
* 부모 클래스의 변수, 메서드를 사용할 때에는 __super.변수명__ , __super.메소드명__ 형태로 사용한다.
    ```
    class Group extends Idol {
        Group (
            String name, 
            String group,
        ) : super (
            name, group,
        );
        //Group의 독자적인 메서드도 생성 가능
    }
    ```
### Method Overriding
* 부모 클래스의 함수를 정의하기 전에 '@override'라고 적어서 명시한다.
    ```
    class Parent {
        int cal() {
            print("부모다");
        }
    }
    class Child extends Parent {
        @override
        int cal() {
            print("자식이다"); //메소드 오버라이딩
        }
    }
    ```
### Static 키워드
* 객체 생성 없이 클래스 자체에 내장되는 변수 및 메서드
    ```
    class EP {
        static String build;  //EP.build로 사용가능
        static void Printy() {  //EP.Printy로 사용 가능
            print(build);
        }
    }

    ```
### Interface
* Interface 키워드는 없고 클래스 자체를 __implements__ 키워드로 상속 받아 사용한다.
    ```
    class Ido {
        void say() {}
    }

    class youD implements Ido {  //상속받음
        void say() {  //상속받은 메서드를 만듦(꼭 만들어야함)
            print("상속 받았다.);
        }
    }
    ```

