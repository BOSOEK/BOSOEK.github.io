---
title: 'Numpy 튜토리얼'
author: [Bosoek Kim]
tags: [ml&dl]
image: img/numpy.png
date: '2021-08-20T10:00:00.000Z'
draft: false
---

---
# Numpy 튜토리얼

> 넘파이는 벡터(1차원 배열), 행렬(2차원 배열) 등 수치 연산을 하는 선형 대수(Linear algebra) 라이브러리이다.
```
# 설치 코드
pip install numpy

# 패키지 추가
import numpy as np
```

---
## 기초 개념
> Numpy에서는 모든 배열 값이 같은 타입이여야 하며, 각 차원을 축이라고 표현한다.
> Numpy에서 배열은 ```ndarray``` 또는 ```array```라고 하며 Python의 array와는 다르다.   
```
스칼라(Scalar : 0D 텐서) : 0차원 축(행 & 차원) 즉, 숫자 한개
벡터(Vector : 1D 텐서) : 1차원 축(행 & 차원)
행렬(Matrix : 2D 텐서) : 2차원 축(행 & 차원)
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
        print(np.array([[1,2,], [3,4]], dtype = complex))
        # [[1.+0.j 2.+0.j]
        #  [3.+0.j 4.+0.j]]
        ```
    - ```np.zeros(shape)``` : 0으로 구성된 N차원 배열 생성
    - ```np.ones(shape)``` : 1로 구성된 N차원 배열 생성
    - ```np.empty(shape)``` : 초기화되지 않은 N차원 배열 생성
        ```
        print(np.zeros((3,4)))
        # [[0. 0. 0. 0.]
        #  [0. 0. 0. 0.]
        #  [0. 0. 0. 0.]]
        ```
    - ```np.arange(a, b, c)``` : a이상 b미만까지 c씩 차이나는 배열 생성
    - ```np.arange(a)``` : 0 ~ a 까지의 배열 생성
    - ```np.linspace(a, b, c)``` : a ~ b까지 c등분한 배열 생성
* ### 배열 차원 변환
    - ```np.ndarray.reshape()``` : 데이터의 차원을 변경
        ```
        # [10000] 배열을 [100, 100] 배열로 변경
        print(np.arange(10000).reshape(100,100))
        ```
* ### 넘파이 연산(브로드캐스팅)
    > 브로드캐스팅은 행렬(shape)이 다른 넘파이 배열끼리의 계산시 넘파이 내부에서 자동으로 행렬(Shape)을 맞춰주는 기능
    ```
    np.array([1,2,3,4,5]) * 2 
    # Broadcasting
    np.array([1,2,3,4,5]) * np.array([2,2,2,2,2])
    ```
    > 차원(ndim)이 같고 축(axis)의 값이 같거나 1이여야 연산 가능하며, 각 축의 값이 다르면 브로드캐스팅되어 값이 복사된다.
    - ```* ``` : 각각의 원소끼리 곱셈
    - ```@ ``` : 행렬 곱셈
    - ```.dot() ``` : 행렬 내적
    > 수치 계산시 타입이 다르면 타입이 큰쪽(int < float < complex)으로 자동 변경됨
    - ```.sum(np.ndarray)``` : 모든 요소의 합
    - ```.min(np.ndarray)``` : 모든 요소 중 최소값
    - ```.max(np.ndarray)``` : 모든 요소 중 최대값
    - ```.argmax(np.ndarray)``` : 모든 요소 중 최대값의 인덱스
    - ```.cumsum(np.ndarray)``` : 모든 요소의 누적합
    > .sum(), .min(), .max(), .cumsum() 등의 연산에 axis 값을 입력하면 축을 기준으로 연산 가능하다.

## 행렬 변경
* ```np.ndarray.revel()``` : Shape을 1차원으로 변경
* ```np.ndarray.reshape()``` : Shape을 지정한 차원으로 변경
    > ```.reshpae()```을 사용할 때 차원값에 -1을 입력하면 -1 부분은 자동으로 차원을 채워준다.
* ```np.ndarray.T``` : Shapedml 행과 열의 수를 변환(4,3 이면 3,4로)
* ```np.ndarray.resize()``` : .reshape()과 동일한 기능이지만 원본 데이터 자체를 변경시킨다.
* 데이터 쌓기
    * ```np.vstack()``` : axis=0 기준으로 쌓음(세로로)
    * ```np.hstack()``` : axis=1 기준으로 쌓음(가로로)
* 데이터 쪼개기
    * ```np.hsplit()``` : 숫자 1개가 들어갈 결우 x개로 등분, 리스트를 넣을 경우 azis=1 기준 인덱스로 데이터 분할함
        ```
        print(a)
        # [[4. 4. 1. 7. 7. 8. 8. 8. 4. 3. 5. 3.]
        #  [9. 8. 7. 5. 6. 8. 9. 6. 9. 5. 4. 7.]]

        # [2,12] => [2,4] 데이터 3개로 등분
        print(np.hsplit(a, 3))
        # [array([[4., 4., 1., 7.],
        #        [9., 8., 7., 5.]]), array([[7., 8., 8., 8.],
        #        [6., 8., 9., 6.]]), array([[4., 3., 5., 3.],
        #        [9., 5., 4., 7.]])]

        # [2,12] => [:, :3], [:, 3:4], [:, 4:]로 분할
        print(np.hsplit(a, (3,4)))
        # [array([[4., 4., 1.],
        #        [9., 8., 7.]]), array([[7.],
        #        [5.]]), array([[7., 8., 8., 8., 4., 3., 5., 3.],
        #        [6., 8., 9., 6., 9., 5., 4., 7.]])]
        ```
## 데이터 복사
> 변수에 np.array를 넣으면 복사가 되는게 아닌 같은 주소를 참조할 뿐이다.
* ```a = b.view()``` : a와 b가 같은 주소값을 가르킨다(한 변수의 값을 바꾸면 다른 변수의 값도 바뀜)  
* ```a = b.copy()``` : a와 b가 같은 데이터를 가진다.(한 변수 값을 바꾸면 다른 변수 값 안바뀜)

---

> ### 기계 지능은 인류가 만들어야 할 마지막 발명품입니다. - 닉 보스 트롬(Nick Boss Tromm)
> Mechanical intelligence is the last invention that mankind should make.