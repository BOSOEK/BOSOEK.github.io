# Object Detection
컴퓨터 비전의 3가지 Task(검출, 인식, 추적)중 하나로 __Object의 존재 유무만 판단__ 하는 물체 검출이다.
> 객체 인식전에 검출이 이루어져야 하며 때문에 Detection은 Recongnition보다 더 작은 범위이다.
     
일반적인 Object Detection 알고리즘은 찾고자 하는 Object의 feature를 사정에 추출하고, 주어진 영상 내에서 해당 특징을 검출(detection)하는 방식이 주로 쓰인다.

 <img src = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQ5gE0%2FbtqCHwaMcJO%2FigK4jSdKsFmfYHlKKc3Sc1%2Fimg.png' width=400>

## Object Detection의 역사
#### 1. 영상처리 시대(~2012) : 2012년 이전에는 영상처리로만 문제를 해결해왔다.
#### 2. DNN 시대(2012~2014) : 컴퓨티파워와 데이터의 발전으로 CNN같은 이미지 특화 __딥러닝__ 으로 문제를 해결하기 시작했다.
* Two-shot-detection : DNN이 영상을 Sliding하며 네트워크를 돌리고 이미지 한장에 여러 네트워크를 사용하며 Detection을 실시하며 연산량이 매우 크다
    > 발전 모델 :  CNN -> R-CNN(0.05 FPS) -> Fast R-CNN(0.5 FPS) -> Faster R-CNN(7 FPS) 
* One-show-detection : Two-show처럼 이미지를 하나씩 보는게 아닌 하나의 신경망을 통과해 바로 bounding box와 class를 예측하게 하는 방식이다.
    > 대표 모델 : YOLO, SSD, RetinaNet 등
현재는 One-stage와 Two-stage가 모두 개발중이다.

## 장단점
> One-show-detection과 Two-show-detection은 각각 장단점이 있다.
> 
||One-show-detection|Two-show-detection|
|--|--|--|
|장점|정확도가 Two-stage보다 낮음|정확도가 높음|
|단점|속도가 높다|속돠 느리다|
