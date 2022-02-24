---
title: 'Keras 모델 생성 방법'
author: [Bosoek Kim]
tags: [substack, django]
image: img/keras_model.png
date: '2021-08-20T10:00:00.000Z'
draft: false
---

---

# Keras 모델 생성 방법
> 케라스의 구현 방식에는 Sequential API, Functional API, Subclassing API 총 3가지 구현 방식이 존재합니다.   
> <img src='https://wikidocs.net/images/page/106897/1_WzwKtnA0LEhiCGdWTTpLaA.png'>

### 1. Sequential API를 사용한 모델 생성

* Sequential() 함수로 model 박스를 생성 후 add() 함수로 레이어들을 선택해 모델에 넣어준다.

__직관적이고 ML 책에서 많이 사용되는 방식이다.__

* 장점 : 단순하게 층을 샇는 방식으로 쉽고 사용하기가 간단하다.
* 단점 : 다수의 입출력을 가진 모델 또는 층 간의 연결이나 덧셈 같은 연산 모델 구현에는 적합하지 않다.

```
from keras.models import Sequential
from keras.layers import Dense, Activation

model = Sequential([
    Dense(32, activate='relu', input_shape=(784,)),
    Dense(10, activate='softmax')
])
```
```
model = Sequential()
model.add(Dense(32, activate='relu', input_dim=784))
model.add(Dense(10, activate='softmax'))
```


***

### 2. Functional API를 이용한 모델 생성
* input Layer를 변수에 정의한다.
* Dense Layer를 선언시에는 이전 레이어의 변수 정보를 레이어 선언 뒤에 ()가로로 넣어줘야한다.
* Model Class 방식은 __input layer를 input 함수__ 로, __Dense layer를 output 함수__ 로 넣어 모델을 만든다.

__multi input과 multi output의 정의가 용이하다.__

* 장점 : 구현하기 어려운 복잡한 모델들을 구현할 수 있다.
* 단점 : 입력층을 모델의 앞단에 정의해야 한다.

```
inputs = Input(shape=(1,)) # <-- 해당 부분
output = Dense(1, activation='linear')(inputs)
linear_model = Model(inputs, output)

sgd = optimizers.SGD(lr=0.01)

linear_model.compile(optimizer=sgd, loss='mse', metrics=['mse'])
linear_model.fit(X, y, epochs=300)
```
***
### 3. Subclassing API로 인공지능 망 만들기
* __init__ 함수로 클래스의 매개변수를 지정한다.
* 매개변수 정보를 이용해 layer들을 선언한다
* call 같은 특정 함수로 모델을 반환한다.

__모델 레이어를 세세하게 수정하고, 모델을 여러번 만들어야 하는 연구등에 사용된다.__

* 장점 : Functional API로도 구현 안되는 모델들도 구현이 가능하다.
* 단점 : 객체 지향 프로그래밍에 익숙해야 하고 코드 사용이 까다롭다.

```
import keras

class SimpleMLP(keras.Model):
    def __init__(self, num_classes=10):
        super(SimpleMLP, self).__init__(name='mlp')
        self.num_classes = num_classes

        self.dense1 = keras.layers.Dense(32, activation='relu')
        self.dense2 = keras.layers.Dense(num_classes, activation='softmax')

    def call(self, inputs):
        x = self.dense1(inputs)
        return self.dense2(x)

model = SimpleMLP()
model.compile(...)
model.fit(...)
```