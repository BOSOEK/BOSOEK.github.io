# Keras 모델 생성 방법
> Keras에는 3가지의 모델 생성 방법이 존재한다.

### 1. Sequential()을 이용한 모델 생성

* Sequential() 함수로 model 박스를 생성 후 add() 함수로 레이어들을 선택해 모델에 넣어준다.

__직관적이고 ML 책에서 많이 사용되는 방식이다.__

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

### 2. Model Class를 이용한 모델 생성
* input Layer를 변수에 정의한다.
* Dense Layer를 선언시에는 이전 레이어의 변수 정보를 레이어 선언 뒤에 ()가로로 넣어줘야한다.
* Model Class 방식은 __input layer를 input 함수__ 로, __Dense layer를 output 함수__ 로 넣어 모델을 만든다.

__multi input과 multi output의 정의가 용이하다.__
```
from keras.models import Model
from keras.layers import Input, Dense

a = Input(shape=(32,))
b = Dense(32)(a)
model = Model(inputs=a, outputs=b)
```
***
### 3. Kers layer로 인공지능 망 만들기
* __init__ 함수로 클래스의 매개변수를 지정한다.
* 매개변수 정보를 이용해 layer들을 선언한다
* call 같은 특정 함수로 모델을 반환한다.

__모델 레이어를 세세하게 수정하고, 모델을 여러번 만들어야 하는 연구등에 사용된다.__

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