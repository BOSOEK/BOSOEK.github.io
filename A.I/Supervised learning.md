# 모델 학습 방법
> 머신러닝 모델은 학습 방법에 따라 크게 지도학습, 비지도 학습, 강화 학습으로 나뉜다.

### 카테고리
* #### [지도 학습](#지도학습(Supervised-learning))
* #### [비지도 학습](#비지도학습(Unsupervised-Learning))
* #### [강화학습](#강화학습(Reinforcement-Learning))

## 지도학습(Supervised learning)
지도 학습은 __정답이 있는 데이터를__ 활용해 데이터를 학습시키는 것이다. 입력 값(X data)이 주어지면 입력값에 대한 Label(Y data)를 주어 학습시키며 대표적으로 분류, 회귀 문제가 있습니다.
> 예로, 입력 데이터 셋을 3*5, 32*44 등을 주고 라벨 데이터 셋을 입력 데이터셋의 정답인 15, 1408등을 주면 해당 모델은 주어지지 않은 데이터 셋 9*3의 정답을 해결할 수 있게 됩니다.

### 지도 학습 종류
#### 1. 분류(Classification)  
* 분류는 주어진 데이터를 정해진 __카테고리(라벨)에 따라 분류__ 하는 문제이다. 분류는 맞다, 아니다 등의 이진 분류 또는 사과, 바나나, 포노 등의 2가지 이상으로 분류하는 다중 분류 문제가 있다.(예로 입력 데이터로 메일을 주고 라벨을 스팸메일이다/아니다를 주면 모델은 새로운 메일이 들어올 때 이 메일일 스팸인지 아닌지 분류를 할 수 있음)  
* darknet의 YOLO, network architecture는 GoodLeNet for Image classification으로 이미지를 분류하고 있다.
> 알고리즘 : KNN, Naive Bayes, Support Vector, Machine Decision

#### 2. 회귀(Regression)
* 회귀는 데이터들의 __Feature(특징)를 기준__ 으로, 연속된 값(그래프)을 예측하는 문제로 주로 패턴이나 트랜스, 경향을 예측할 때 사용된다. 즉, 답이 분류처럼 1 / 0 으로 딱 떨어지는 것이 아닌 어떤 수나 실수로 예측될 수 있음.  
* 예로 서울에 있는 20평대 아파트 집값 가격, 30평대 아파트 가격, 지방의 20평대 아파트 가격들을 입력 데이터로 주고 결과를 보면 30평대 아파트 가격이 어느정도 인지 __예측 가능__ 해짐.
> 알고리즘 : Linear Regression, Locally Weighted Linear, ridge, Lasso

***

## 비지도학습(Unsupervised Learning)
비지도 학습은 __정답을 알려주지 않고(Label 없이)__ 비슷한 데이터들을 군집화 하는 것으로 일종의 그룹핑 알고리즘이다.
라벨링 없는 데이터로부터 __패턴 & 형태__ 를 찾아야 해서 지도학습보다 난이도가 높다.
지도 학습에서 적절한 __피처(특성)을 찾기 위한 전처리 방법__ 으로 비지도 학습을 이용하기도 한다.
__군집화나 차원축소를 사용한다.__  
> 알고리즘 : 클러스터링(Clustering), Dimentionality Reduction, Hidden Markov Model, K Means, Density Estimation, Exception Maximization, Pazen Window, DBSCAN

***

## 강화학습(Reinforcement Learning)
