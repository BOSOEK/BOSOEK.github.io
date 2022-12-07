---
title: 'Newmorphism'
author: [Bosoek Kim]
tags: [flutter]
image: img/neumorphism.png
date: '2022-09-15T10:00:00.000Z'
draft: false
---

---

# Newmorphism

현재 핏메이트 MVP2 디자인이 나왔다. 디자인을 리뉴얼하면서 뉴모피즘 디자인을 적용시키자는 팀 의견이 나와서 뉴모피즘 기반의 디자인으로 리뉴얼을 진행할텐데 뉴모피즘에 대해 간단히 알아보고 구현을 기록하려고 한다.

#### 1. Newmorphism이란?

실물과 가깝게 디자인하는 스큐어모피즘이라는 디자인의 나은 버전이다.

기존의 스큐어모피즘은 디테일이 요구되어 작업 속도가 느리고, 사용자의 시선을 분산시키는 문제점이 있어서 스큐어모피즘의 3차원을 2차원으로 단순화하여 심플한 디자인으로 사용자가 보기 편하게 만든것이다.

참고로 뉴모피즘에 유리 느낌을 더하면 글래스모피즘이 된다. 뉴모피즘과 다른점은 투명도가 강조됐다는 점 정도..?


#### 2. Newmorphism의 특징

뉴모피즘 특징은 객체와 배경의 구분을 그림자와 빛만으로 하며, 둥글둥글하고 부드러운 인상을 준다. 전체적으로 UI가 생동감 넘치며, 단순 그래픽을 넘어 UI가 촉각적으로 다가오고 약간 미래적인 느낌이 추가된다.(이 부분들이 핏메이트에서 튜모피즘을 채택한 이유)

물론 단점도 있는데 내용이 많으면 전체적인 가독성이 떨어지고, 빛과 그림자로 객체를 구분하기에 디자인 영역이 커지고 이로 인해 인터페이스 배치가 방해될 수도 있다.

#### 4. Newmorphism 구현

뉴모피즘은 구현이 크게 어렵지 않다. ```boxshadow```만 잘 쓰면 된다.

```
Container(
   width: 100,
   height: 100,
   decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(50),
      color: Color(0xFFF2F3F7),
      boxShadow: [
         BoxShadow(
         color: Color(0xFFffffff),
         spreadRadius: 2,
         blurRadius: 8,
         offset: Offset(-2, -2),
         ),
         BoxShadow(
         color: Color.fromRGBO(55, 84, 170, 0.1),
         spreadRadius: 2,
         blurRadius: 2,
         offset: Offset(2, 2),
         ),
      ],
   ),
),
```

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a06b8ce9-540e-43c5-a538-f5f9bff3d985/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221206T084233Z&X-Amz-Expires=86400&X-Amz-Signature=deb4712d0334115c2e531d2fbe9edf8220146b90fe9e8608b5eb04419a62ef17&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width="400">

핵심은 그림자 두개를 대각선으로 반대되게 배치하는 것이다. 

하얀색 그림자를 왼쪽 위에, 검은색 그림자를 오른쪽 아래에 둠으로써 입체감을 느낄 수 있도록 만드는 것이 핵심이다. 막상 해보니 구현은 어렵지 않다. 그럼 이제 버튼 클릭 효과를 구현해보자.

```
GestureDetector(
   onTap: () async {
      setState(() {
         click = !click;
      });
      await Future.delayed(Duration(milliseconds : 80),() {
         setState(() {
         click = !click;
         });
      });
   },
   child: AnimatedContainer(
      duration: Duration(milliseconds : 80),
      curve: Curves.fastOutSlowIn,
      width: 100,
      height: 100,
      decoration: BoxDecoration(
         borderRadius: BorderRadius.circular(50),
         color: Color(0xFFF2F3F7),
         boxShadow: click ? null : [
         BoxShadow(
            color: Color(0xFFffffff),
            spreadRadius: 2,
            blurRadius: 8,
            offset: Offset(-2, -2),
         ),
         BoxShadow(
            color: Color.fromRGBO(55, 84, 170, 0.1),
            spreadRadius: 2,
            blurRadius: 2,
            offset: Offset(2, 2),
         ),
         ],
      ),
   ),
),
```

버튼 클릭 시의 시간은 사용자가 보기 답답하지 않으면서도 들어갔다 나오는 효과를 인지할 수 있도록 80 milliseconds가 적당한것 같다.

글래스 모피즘의 경우 pub.dev에 패키지가 몇개 있던데 뉴모피즘은 간단해서 그런지 pub.dev에 없었다. 나중에 클릭효과 반응 속도를 올리거나 long tap 등의 케이스 처리를 해서 패키지로 만들어 올려도 괜찮을 것 같다.

#### 5. 마치며

개인적으로 디자인에 관심이 많고 이런 새로운 디자인들을 접하고 시도하는걸 좋아하는 편이다. 

하지만 동시에 사람들이 실제로 사용하기에는 많이 부담스럽고 보기 간편하지 않을 지도 모르겠다는 생각이 든다. 추후 프로젝트에서는 좀 더 디자인 선택을 신중히 해야 할 것 같다.

---

> ### 콘셉트가 형태보다 중요하다. -리히하르트 후텐(Richhard Houten)
> Concept is more important than form
