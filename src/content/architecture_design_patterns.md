---
title: 'Architecture 디자인 패턴 정리'
author: [Bosoek Kim]
tags: [flutter]
image: img/flutter_design_patterns.jpeg
date: '2022-10-17T10:00:00.000Z'
draft: false
---

---
# Architecture 디자인 패턴 정리

평소 디자인 패턴에 관심은 있었는데 자세히 다뤄볼 기회가 없어서서 이번에는 일반적으로 개발시 사용하는 디자인 패턴과 flutter 개발시에 자주 사용되는 디자인 패턴을 기록해볼려 한다.

### 1. MVC(Model-View-Controller)

가장 기본적이고 단순하여 널리 사용되는 디자인 패턴이다.

<img src="https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png" width="400">

#### 구조
* Model : 데이터와 비즈니스 로직을 관리
    > 앱이 사용하는 데이터를 가지고 있고 이를 뷰에게 전달해준다. 데이터 수정시에도 뷰에게 알리며 컨트롤러에게 알릴 수도 있다.
* View : 레이아웃과 화면을 처리
    > 모델에게 표시할 데이터를 받아 사용자에게 보여준다.
* Controller : 명령을 모델과 뷰 부분으로 라우팅
    > 사용자의 입력에 대해 모델/뷰를 업데이트 한다. 

#### 동작 방식
1. 사용자가 항목 추가/삭제 버튼을 누르면 Controller에게 전송된다.
2. Controller서 Model을 추가/삭제 처리한다.
3. 바뀐 데이터를 뷰에서 새롭게 받아서 사용자에게 표시한다.
    > 이 과정에서 Model을 수정하지 않고 Controller에서 바로 처리도 가능하다.

#### 특징
* 단순하고 직관적이다.
* 기능 별로 코드를 분리하여 가독성과 코드 재사용성이 증가한다.
* View와 Model 사이의 __의존성이 높다__(둘중 하나가 바뀌면 나머지가 먹통이 될 수도 있음)
* View와 Model의 높은 의존성으로인해 서비스가 커질수록 복잡해지고, 유지보수가 어렵다

### 2. MVP(Model-View-Presenter)

MVC 패턴과 Model과 View는 같지만, Controller 대신 Presenter가 존재한다.

<img src="https://images.velog.io/images/bang/post/bc4ddaaa-64e7-4052-a657-beb97d05b556/mvp.png" width="400">

#### 구조
* Model : 데이터와 비즈니스 로직을 관리
    > 앱이 사용하는 데이터를 가지고 있다.
* View : 레이아웃과 화면을 처리
    > 사용자에게 UI를 보여주며 MVC와 달리 직접 사용자의 입력을 받는다.
* Presenter : 사용자의 입력을 받고 처리하는 부분
    > View에서 입력을 받으면 Presenter를 통해 Model을 업데이트하고 다시 Presenter를 거쳐 View를 업데이트한다.

#### 동작 방식
1. 사용자가 항목 추가/삭제 버튼을 누르면 View에 사용자 인터렉션이 들어온다.
2. View는 Presenter에 인터렉션을 전달한다.
3. Presenter는 View 인터렉션대로 Model을 구성/수정한다.
4. Update된 Presenter의 데이터를 View에 업데이트 한다.

#### 특징
* Presenter가 View & Model을 이어주는 역할을 한다.
* 뷰와 모델의 의존성이 없다(둘중 하나가 바뀌어도 나머지는 영향 X)
* 뷰와 Presenter의 의존성이 높아지게 된다.
* 앱이 커지며 Presenter의 크기가 비대해져서 시간적 절약 부분에 있어서 손해를 볼 수도 있다.

### 3. MVVM(Model-View-ViewModel)

MVC 패턴과 Model과 View는 같지만, Controller 대신 Presenter가 존재한다.

<img src="https://blog.kakaocdn.net/dn/I0Ia7/btrEaN93m03/QvgBPWN6BlfR7dcRQ9g2a0/img.jpg" width="400">

#### 구조
* Model : 데이터와 비즈니스 로직을 관리
* View : 레이아웃과 화면을 처리
* ViewModel : View에서 필요한 데이터를 처리

#### 동작 방식
1. 사용자가 항목 추가/삭제 버튼을 누르면 View에 사용자 인터렉션이 들어온다.
2. View는 ViewModel로 인터렉션을 전달한다.
3. ViewModel은 Model에 데이터를 요청하여 처리하고 저장한다
4. View는 직접 ViewModel과의 데이터 바인딩을 통해 View를 업데이트한다.
    > 이때 ViewModel은 View에 직접 데이터를 전달하지 않는다.

#### 특징
1. View와 Presenter 사이의 의존관계가 1:1인 MVP와 달리, MVVM은 View와 ViewModel사이의 관계가 1대N으로 되어있다. 
2. 데이터 바인딩을 이용한다면 View와 ViewModel 사이의 의존성을 없앨 수 있다.
3. 테스트 및 확장 용이성이 증가한다.
4. ViewModel의 설계가 쉽지 않다.

### 4. BLoC(Bussiness Logic Component)

플러터 개발시에 많이 사용되는 디자인 패턴이다.

<img src="https://www.kowanas.com/coding/wp-content/uploads/sites/5/2020/11/image-2.png" width="500">

#### 구조
* Model : 데이터와 비즈니스 로직을 관리
* View : 레이아웃과 화면을 처리
* ViewModel : View에서 필요한 데이터를 처리

#### 동작 방식
1. 사용자가 항목 추가/삭제 버튼을 누르면 View에 사용자 인터렉션이 들어온다.
2. View는 ViewModel로 인터렉션을 전달한다.
3. ViewModel은 Model에 데이터를 요청하여 처리하고 저장한다
4. View는 직접 ViewModel과의 데이터 바인딩을 통해 View를 업데이트한다.
    > 이때 ViewModel은 View에 직접 데이터를 전달하지 않는다.

#### 특징
* Presenter가 View & Model을 이어주는 역할을 한다.
* 뷰와 모델의 의존성이 없다(둘중 하나가 바뀌어도 나머지는 영향 X)
* 뷰와 Presenter의 의존성이 높아지게 된다.
* 앱이 커지며 Presenter의 크기가 비대해져서 시간적 절약 부분에 있어서 손해를 볼 수도 있다.

1. View와 Presenter 사이의 의존관계가 1:1인 MVP와 달리, MVVM은 View와 ViewModel사이의 관계가 1대N으로 되어있다. 
2. 데이터 바인딩을 이용한다면 View와 ViewModel 사이의 의존성을 없앨 수 있다.
3. 테스트 및 확장 용이성이 증가한다.
4. ViewModel의 설계가 쉽지 않다.

---

> ### 인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라. –마야 안젤루(Maya Angelou)
> You will face many defeats in life, but never let yourself be defeated. 