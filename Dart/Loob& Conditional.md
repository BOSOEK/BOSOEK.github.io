# 조건문 & 반복문

### if문
* if, else if, else문(c언어와 동일)
    ```
    int n = 2;

    if(n % 3 == 0) {  //n이 3의 배수라면
        print("3의 배수이다");
    }
    else if(n % 4 == 0) { // n이 3의 배수가 아니며내서 4의 배수라면
        print("4의 배수이다.);
    }
    else { //n이 3, 4의 배수가 아니라면
        print("모른다.)
    }
    ```
### switch문
* switch, case, default문(c언어와 동일)
    ```
    switch(n % 3) { //n을 3으로 나눈 나머지가
        case 1: //1이라면
            print("나머지가 1이다.);
            break;  //break필수
        case 2:  //2라면
            print("나머지가 2이다.);
            break;
        default : //아무것도 해당 안된다면
            print("모른다.);
            break;
    }
    ```
### for문
* 기본적인 c랑 동일
    ```
    int total = 0;
    List L = [1,1,2,3,5,8];
    for(int i = 0;i<L.lenght;i++) {
        total += L[i];
    }
    print(total); //20출력
    ```
### for in문
* 배열의 값이 지정한 변수하 순서대로 들어감
    ```
    for(int i in L) { //L리스트 값들이 하나씩 순서대로 i에 들어감
        total += i; // i에 들어온 L의 value들을 하나씩 더할 수 있음.
    }
    print(total); //20출력
    ```
### while & do while문
* 기존의 c와 동일
    ```
    while(total < 10) { //조건이 참인 경우 무한 반복
        print(total); //0~9까지 출력
        total++;
    }
    ```
> 그 외의 break와 continue도 c와 동일하기에 생략함.