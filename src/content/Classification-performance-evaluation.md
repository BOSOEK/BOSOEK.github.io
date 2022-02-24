---
title: '분류 모델 성능 평가 지표'
author: [Bosoek Kim]
tags: [ml&dl]
image: img/confusion_matrix.png
date: '2021-08-20T10:00:00.000Z'
draft: false
---

---

# 분류 모델 성능 평가 지표
분류 모델을 만들고 나면 분류기의 예측력을 검증해야 한다.

그럼 이때 정답을 맞히거나 틀리는 경우들이 뭐가 있을까?

<img src='https://user-images.githubusercontent.com/68007145/137417559-88a972d3-e7cb-4c59-ab36-88bcaf2e19c8.png'>

이때 생기는 개념이 1종 오류, 2종 오류이며 각 오류는 분류 과제 성격에 따라 검증이 다르다.

* 1종 오류(False Positive) : 좋은 것이라 예측 하였지만 실제로는 좋지 않은 것인 경우
    > 예로 중고차 성능 판별이 있다. 좋은 중고차를 나쁜차로 예측해서 구매하지 않아도 손해볼 것은 없지만 나쁜 차를 잘못 예측하여 구매하는 건 손해이다.
* 2종 오류(True Negative) : 나쁜 것이라 예측 하였지만 실제로는 좋은 것인 경우
    > 암 환자 진단시에는 암 환자를 건강하다고 판별하는 경우가 더 치명적이다.

***

## 위의 성능 평가 개념들을 바탕으로 분류 모델 성능 평가 지표를 알아본다.
* ### Accuracy(정확도)
    <img src='https://user-images.githubusercontent.com/68007145/137418639-c8e45022-8001-4d7d-9545-4e031f5c1707.png'>

    전체 예측 건수에서 정답을 맞힌 건수의 비율

    단, 이때 __Negative의 비율이 너무 높아서 Treu Negative로만 Accuracy의 높은 점수를 받는 정확도 역설(Accuracy Paradox)__ 이 발생할 수 있다.

    > 예로, 암 환자 데이터는 90% 정도가 정상이라고 라벨링 되어 있을때 모델이 전부 정상이라고 답해도 정확도가 90%에 도달한다.   
    > 하지만 정상이라는 답밖에 내놓지 못하는 모델은 당연히 실제 환자들을 진단할 때 사용할 수 없다.

* ### Recall(재현율)
    <img src='https://user-images.githubusercontent.com/68007145/137418945-0cf57f47-b04b-4838-bef9-82ebd3e05e5a.png'>

    실제 정답이 True인 것들 중 분류기가 True로 예측한 비율   

    > 때문에 True 발생 확률이 적을 때나 정확도 역설 시 사용하기 좋다.

    하지만 __True로만 답하는 모델이 있을 시 accuracy 점수는 낮지만 Recall 점수는 1로 만점__ 이 될 수 있는 문제점이 있다.

* ### Precision(정밀도)
    <img src='https://user-images.githubusercontent.com/68007145/137419012-61135a87-7127-4398-ab5f-16c290912d08.png'>

    모델이 True라고 예측한 것 중에 실제 값이 True인 비율   
    
    > True로만 답하는 모델이 있을 시 Recall에서는 1이지만 모델이 답한 True중 __실제 True인 데이터는 일부__ 이기 때문에 Precision에서는 0점에 가깝게 나온다.

    Precision은 Recall의 반대 개념 지표이다. 즉, 하나가 올라가면 하나가 내려간다. 때문에 Recall의 장점은 Precision의 단점이 되기도 한다.


* ### F1 Score
    <img src='https://user-images.githubusercontent.com/68007145/137419035-d8c184f3-8988-4d99-89ad-840d37cd62fa.png'>

    Recall과 Precision의 조화평균으로써 Recall과 Precision 둘 중 하나의 값이 낮을때 그부분이 지표에 잘 반영되도록 하기 위해 일반적인 산술 평균이 아닌 조화 평균을 사용한다.

    > 예로, recall과 precision이 각각 1과 0.01을 가졌을 때 산술 평균은 ```(1 + 0.01) / 2 = 0.505```로 절반 정도 맞히는 걸로 보이지만 조화 평균시에는 ```2 * (1 * 0.01) / (1 + 0.01) = 0.019```로 낮게 나온다.

***
## Scikit-Learn을 통한 통계 지표 확인
```
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score

labels = [1, 0, 0, 1, 1, 1, 0, 1, 1, 1]
guesses = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0]

print(accuracy_score(labels, guesses))
print(recall_score(labels, guesses))
print(precision_score(labels, guesses))
print(f1_score(labels, guesses))
```