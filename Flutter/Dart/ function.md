# 함수

### 함수 선언
* 함수 반환형, 함수 이름, 매개변수 순서임(c와 동일)
    ```
    void main() {
        double res = linearExp(1,2,3);
        print(res); //5출력
    }
    //반환형, 이름, 매개변수
    double linearExp(double a, double b, double x) {
        return a * x+b;
    }
    ```
### 함수 Optional_Parameter
* 말그대로 파라미터를 옵션으로 만든다.(즉, 값을 않넣어도 상관없음.)
    ```
    double linearExp(double a, double b, [double x = 2]) { //매개변수 x를 입력하면 입력한 값으로, x값을 입력하지 않으면 2로 대체됨.
        return a*x+b;
    }
    ```
### 함수 Named_Parameter
* 기존의 파라미터들이 순서대로 들어가는 방식을 positional parameter라고 한다.
* Named Parameter는 매개변수의 이름을 지정하여 값을 준다.
    ```
    double linearExp(double a, double x, {double b}) { //네임드 파라미터 지정시 중괄호를 열고 매개변수 지정
        return a * x + b;
    }
    double res = linearExp(1, 2, b:3); // 함수 호출시 매개변수에 값을 직접 지정
    ```
### Typedef
* 함수를 저장하고 변수처럼 사용할 수 있는 방법
    ```
    void main() {
        cal(1, 2, add)  //더하기 실행
        cal(1, 2, subtract)  //빼기 실행
    }

    typedef Test(int x, int y); //함수 저장

    void add(int x, int y) {print("결과값 : ${x+y}');}
    void subtract(int x, int y){print('결과값 " ${x-y}');}
    void cal(int x, int y, Test t) {  //매개변수로 값 두개와 함수를 보냄
        t(x, y)  //받은 함수를 실행
    }
    ```
