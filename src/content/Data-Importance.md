---
title: '데이터 중요도 파악'
author: [Bosoek Kim]
tags: [ml&dl]
image: img/data_importance.png
date: '2021-08-20T10:00:00.000Z'
draft: false
---

---

# 데이터 중요도 파악
모델의 레이블에 영향을 주는 Feature의 중요도를 __Sklearn의 Permutation Importance__ 를 사용해 파악한다.

* ### Permutation Importance
    __모델 예측시 가장 영향을 많이 주는 Feature를 파악하는 방법__

    모델의 훈련이 끝난 후 계산되며 __모델이 특정 Feature를 안썻을때, 성능 손실에 얼마나 영향을 주는지로 그 Feature의 중요도를 파악하는 방법__ 이다.

    > 어떤 모델이든 적용 가능하다!
* ### Permutation Importance의 장점
    기존에는 특정 Feature를 제거후 모델을 학습해서 중요도를 파악했지만 자원 소모가 너무 크다.

    때문에 Permutation Importance는 __특정 Feature를 무작위로 섞어 Target과의 연결 고리를 끊어 해당 Feature를 안쓰는 것처럼(노이즈)__ 만든다.

    그후 예측값과 실제값의 차이가 더 생겼는지로 해당 Feature의 영향력을 파악한다.

    이러한 과정 덕분에 __모델의 재학습이 필요없다!__

    > 훈련 모델과 데이터만 있으면 변수 중요도를 봅을 수 있다. 반대로 모델 학습 과정, 내부 구조 정보가 필요 없어서 어느 모델이든 적용 가능하다.

    #### __Permutation Importance의 다른 특징은 각 Feature의 중요도에는 다른 Feature와의 상호작용도 포함된다는 것이다!__
    ```특정 Feature를 섞으면 다른 Feature와의 관계가 끝어져서 해당 Feature와의 모든 상호작용이 사라진다. 때문에 두 Feature간 상호작용의 영향은 두개의 Feature Importance에 중복 포함된다.```

* ### Permutation Importance의 단점
    * 특정 Feature를 무작위로 섞어서 실행시마다 Feature Importance 결과가 달라진다.
        > 섞는 횟수를 늘려 예측 에러 분산을 감소할 수 있지만 Feature 개수가 많을 경우 연살량이 증가하기 때문에 Permutation의 적절한 회수를 선택해야한다.
    * Feature를 무작위로 섞기에 비현실저인 데이터 조합이 생길 수 있다.
        > Feature간 상관관계가 높을 경우 발샐할 수 있으며 이런 데이터의 비개연성, 비현실성이 증가하면 예측값에 영향을 미칠 가능성이 있고 우리가 원하던 결과가 아니기에 이를 염두하고 해석해야한다.   

        예로, 키와 몸무게를 랜덤하게 섞다보면 키가 2m인데 몸무게가 30kg인 데이터가 만들어 질 수도 있다.
* ### 실행 코드 
```
from sklearn.inspection import permutation_importance # sklearn 22 버전부터 해당
from sklearn.metrics import make_scorer

# MAPE
def mean_absolute_percentage_error(y_test, y_pred):
    y_test, y_pred = np.array(y_test), np.array(y_pred)
    return np.mean(np.abs((y_test - y_pred) / y_test)) * 100

# fix_model : 훈련된 모델
# X_train : 훈련데이터 Feature
# y_train : 훈련데이터 Target
# scoring : Feature 를 Shuffler 한 뒤, 예측값과 실제값을 어떤 Metric 을 사용해 비교할지
# n_repeats : 특정 Feature 를 몇번 Shuffle 할 것인지
# random_state : 난수 고정
result = permutation_importance(fix_model, X_train, y_train, scoring = make_scorer(mean_absolute_percentage_error,greater_is_better=False),
                            n_repeats=30,
                            random_state=0)
# Feature label
Feature = train[['lr','lc','rc','ld','rd','lnnz','rnnz','lr*lc','lc*rc','lr*rc']] 

# Feature 중요도를 오름차순으로 정렬한 뒤, 해당 Feature 의 index 를 저장
sorted_result = result.importances_mean.argsort()

# 결과를 DataFrame 화
importances = pd.DataFrame(result.importances_mean[sorted_result], index=Feature.columns[sorted_result]).sort_values(0, ascending=False)   
importances
```