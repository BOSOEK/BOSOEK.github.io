# Numpy

> 넘파이는 벡터(1차원 배열), 행렬(2차원 배열) 등 수치 연산을 하는 선형 대수(Linear algebra) 라이브러리이다.
```
# 설치 코드
pip install numpy

# 패키지 추가
import numpy as np
```

## 1. 기초 개념
> Numpy에서는 모든 배열 값이 같은 타입이여야 하며, 각 차원을 축이라고 표현한다.
> Numpy에서 배열은 ```ndarray``` 또는 ```array```라고 하며 Python의 array와는 다르다.   
```
1차원 축(행) : axis(축) 1 -> Vector
2차원 축(행) : axis(축) 2 -> Matrixw
``` 

* ### ```numpy.ndarray```의 대표 속성값
    - ```ndarray.shape``` : 배열의 각 축(axis)의 크기
    - ```ndarray.ndim``` : 축의 개수
    - ```ndarray.dtype``` : 각 요소의 타입
    - ```ndarray.itemsize``` : 각요소의 타입의 bytes 크기
    - ```ndarray.size``` : 전체 요소의 개수
* ### 배열 생성
    - ```np.array()```에 __튜플이나 리스트__ 를 입력하여 ```numpy.ndarray```를 만들수 있다
    - ```dtype = complex```로 복소수 값 생성 가능하다.
        ```
        ex) print(np.array([[1,2,], [3,4]], dtype = complex))
        # [[1.+0.j 2.+0.j]
        #  [3.+0.j 4.+0.j]]
        ```
        