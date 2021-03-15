# 아두이노


## 보드 종류(특성)
### 1. 우노(Uno)
![image](https://user-images.githubusercontent.com/68007145/109980863-b3ef0900-7d43-11eb-96c8-c2f33b0366f5.png)
```
아두이노 우노는 가장 많이 사용되는 기본적인 아두이노 보드이다. 이 보드의 핀 배열이 거의 표준과 같이 사용된다
```
### 2. 나노(nano)
![image](https://user-images.githubusercontent.com/68007145/109981429-3bd51300-7d44-11eb-8d62-3bdb36767246.png)
```
아두이노 나노(nano)는 우노와 거의 동일한 구성을 가지고 있다. 빵판에서 실험할 수 있도록 작은 크기와 핀배열을 가진다.
```
### 3. 프로(pro), 프로미니
![image](https://user-images.githubusercontent.com/68007145/110044299-3b606a80-7d8c-11eb-8674-ec85918af4cb.png)
```
다량의 완성품에 장착하기 용이하게 소형화시키고, usb 시리얼 변환 칩을 제거한 제품이다. 
따라서 프로그래밍을 위한 별도의 usb시리얼 변환기가 필요하다. 
Atmega328 혹은 Atmega168 기반으로서 아두이노 우노와 거의 동일한 스팩을 가진다.
```

### 4. 레오나르도(leonardo

![캡처](https://user-images.githubusercontent.com/68007145/110209776-8e900580-7ed1-11eb-9f1d-a2f23bb6b316.PNG)
```
USB 기능이 내장된 ATmega32u4를 메인 프로레서로 사용한 제품이다
(우노 보드는 usb 통신을 위해서 메인 프로레서와 별도의 칩을 사용)
프로그램 다운로드와 시리얼 통신 포트가 독립적으로 동작된다.
키보드/마우스/조이스틱 같은 주변기기로 인식시킬 수 있어서 활둉도가 높다.
```

### 5. 마이크로(micro)
![캡처2](https://user-images.githubusercontent.com/68007145/110209777-90f25f80-7ed1-11eb-8975-686dd91eb0cc.PNG)
```
아두이노 마이크로는 레오나르도 보드와 동일한 프로세서를 사용한 소형 보드이다
```

### 6. 메가 2560 / 메가 ADK
![image](https://user-images.githubusercontent.com/68007145/110209909-5c32d800-7ed2-11eb-9dd7-95ec9fcba937.png)
```
프로세서로 ATmega2560을 사용하여 우노 보드보다 기능과 핀수가 많은 보드이다.
```

### 7. 두에(due)
![캡처](https://user-images.githubusercontent.com/68007145/110210066-470a7900-7ed3-11eb-8eb4-f950ca05b746.PNG)
```
타 아두니오 제품들이 8-bit 마이크로 콘트롤러인 AVR 기반인것과 달리
32-bit ARM core 프로세서를 사용한다.
기능과 성능이 높고 핀수가 많아서 전문적인 제품 개발과 연구 목적으로 사용 가능하다.
```

### 8. 제로(zero)
![캡처2](https://user-images.githubusercontent.com/68007145/110210069-496cd300-7ed3-11eb-82cf-773830d0ddd3.PNG)
```
Atmel사와 아두이노가 공동 개발한 것으로 프로세서는 AVR이 아니라 ATSAMD21이라는
ARM 계열의 32비트 프로세서를 사용함.
48MHz의 클럭 주파수로 동작하며 이것만 보면 우노 성능의 3배이다.
특이한 점은 0번과 1번을 제외한 모든 디지털 핀에서 PWM(펄스 폭 변조)기능을 사용할 수 있고
플래시 메모리가 265KB로 우노의 8배 정도라는 것이다.
개발 한경에서 별도의 usb 통신 단자를 통해 atmel의 EDBG 기능을 사용할 수 있어서
디버깅에 별도의 장치가 필요없다.(12비트 ADC이다)
```

### 9. 융(yun)
![캡처3](https://user-images.githubusercontent.com/68007145/110210072-4d98f080-7ed3-11eb-9216-e67414c9e892.PNG)
```
레오나르도 기판과 HTTP 통신과 같은 온갖 텍스트 기반의 작업을 처리하는 
리눅스 변형 OS(Linino)를 구동하는 WI-FI 리눅스 기판을 내장함
USB 통신 뿐만 아니라 Wi-Fi를 통해 프로그래밍 가능하다.
```

# 10. 갈릴레오 보드
![캡처4](https://user-images.githubusercontent.com/68007145/110210074-4ffb4a80-7ed3-11eb-87ce-e6b9dba13f4c.PNG)
```
인텔의 쿼크(Quark) 프로세서 X1000를 이용한 고성능의 아두이노 호환 보드이다.
최대 400MHz의 클럭 속도를 가지는 초전력 x86 기반의 프로세서이다.
```

