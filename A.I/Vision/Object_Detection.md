# Object Detection
컴퓨터 비전의 3가지 Task(검출, 인식, 추적)중 하나로 __Object의 존재 유무만 판단__ 하는 물체 검출이다.
> 객체 인식전에 검출이 이루어져야 하며 때문에 Detection은 Recongnition보다 더 작은 범위이다.
     
일반적인 Object Detection 알고리즘은 찾고자 하는 Object의 feature를 사정에 추출하고, 주어진 영상 내에서 해당 특징을 검출(detection)하는 방식이 주로 쓰인다.

 <img src = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQ5gE0%2FbtqCHwaMcJO%2FigK4jSdKsFmfYHlKKc3Sc1%2Fimg.png' width=300>

## Object Detection의 역사
* 영상처리 시대 : 2012년 이전에는 영상처리로만 문제를 해결해왔다.
* DNN : 