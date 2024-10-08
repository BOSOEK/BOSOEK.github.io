---
title: 'Flutter 페이지 전환에 대한 고찰'
author: [Bosoek Kim]
tags: [flutter]
image: img/flutter_page_navigator.png
date: '2022-08-10T10:00:00.000Z'
draft: false
---

---

# Flutter 페이지 전환에 대한 고찰

현재 운영중인 Fitmate의 네비게이터 구조까지 발전하게된 과정들을 기록해볼까 한다.

현업자분들에게는 당연한 부분일 수 있겠지만 나의 경우 삽질을 하면서 스스로 깨달은 부분중 하나이기에 잊고 싶지 않다.

#### 1. Fitmate의 메인 화면들

초기 핏메이트는 기획부터 메인 화면이(하단 네비게이터에 있는 페이지 수가) 5개였다.

* 홈화면
* 채팅목록
* 지도
* 달력
* 프로필

당연히 이때는 각 페이지에 대한 깊은 생각은 없었고 가장 기본적인 네비게이터를 사용하여 페이지 전환을 했다.(~이때는 플러터를 시작한지도 얼마 되지 않았었다~)

```
Navigator.push(
   context,
   MaterialPageRoute(
      builder: (context) => 화면명()),
)
```

하지만 이러한 방식은 첫 배포 이후 이슈로 이어졌다.

#### 2. 기존 Navigator의 문제는?

기존 Navigator를 사용하는 방식은 첫 문제는 지도 페이지에서 일어났다. 

지도의 경우 네이버 지도 라이브러리를 사용했는데 처음 빌드시에 1-2초 정도가 소요된다. 즉 지도 페이지로 이동할때마다 사용자는 1-2초를 기다려야했다는 거다.

단순 프로젝트면 아무 문제 될 게 없지만 Fitmate는 이미 출시까지 한 서비스이기에 이런 점은 사용자 경험을 안좋게 만들 수밖에 없다.

때문에 어떻게 지도 로딩을 줄여야 할지에 대한 고민을 게속 했고, 그 결과 지도 페이지를 살려둘 수 있는 방법을 생각해낸다.

<img src="https://blog.kakaocdn.net/dn/b1j1EP/btrAcWiIeeQ/PAUT9taBoi7hkhJh4O5160/img.png" width="500">

기본적으로 어플은 스택 구조이다.(~이전에 나는 스택 구조인지도 몰랐었다~) 이걸 바탕으로 생각해낸 초기 아이디어는 지도 페이지 이전까지는 Navigator로 이동하고 지도 페이지가 나오면 그 위에 페이지들을 올리고 빼는 것이었다.

간단히 시나리오를 작성해보자면.

> 1. 사용자는 처음에 홈 화면으로 들어옴 (__push__, 스택에는 홈화면만)
> 2. 사용자가 채팅 페이지로 이동(__push__, 스택에 홈화면 삭제 후 채팅 화면만)
> 3. 사용자가 지도 페이지로 이동(__push__, 스택에는 지도 페이지만)
> 4. 사용자가 홈화면으로 이동(__push__, 스택에는 지도 - 홈)
> 5. 사용자가 채팅 페이지로 이동(__push__, 스택에는 지도 - 채팅)
> 6. 사용자가 지도 페이지로 다시 이동(__pop__, 스택에는 지도)
 
이런 식으로 스택에 한번 들어오 지도 페이지를 계속 사용해서 지도 페이지 자체의 로딩 시간을 없애는 것이다.

당시에는 이 방법으로 지도 페이지 로딩 제거에 만족했지만 곧 나는 일반 페이지의 로딩 시간도 없애야 되겠다고 생각했다.

#### 3. 일반 페이지들의 로딩

분명 내가 나왔던 페이지인데도 로딩하는 것이 이상하고(다른 사용 어플들은 이렇지 않음), 사용자의 입장에서 봤을 때 너무 느렸다.

하지만 이미 스택상에 살려두는 방법은 썻기 때문에 다른 방법을 생각해야 했고 이번에는 금방 새로운 방법을 떠올렸다.

처음 열때 서버에서 가져온 데이터들을 저장하고, 사용자가 해당 페이지를 다시 열면 서버에서 새로운 값을 가져오는 동안 기존 값을 보여주고 있는 것이다.

이번에도 시나리오로 보도록하자.

> 1. 사용자가 홈 화면으로 들어옴
> 2. 로딩 화면 출력 후 컨텐츠 나열 - 해당 데이터들은 앱단에 저장
> 3. 사용자가 다른 페이지로 이동 후 다시 홈화면으로 옴
> 4. 서버에서 값을 가져오며 일단 기존에 가져온 데이터로 컨텐츠 나열 후 서버에서 값이 다 가져와지면 컨텐츠 바꿈

해당 방식으로 서버 값 대기에 따른 페이지 로딩을 없앨 수 있었다. 코드상으로는 다음과 같다.

```
FutureBuilder<List> (
   future: 서버에서 값 가져오는 함수(),
   builder: (context, snapshot) {
      if (snapshot.hasData) {
         snapshot 데이터로 출력
      }
      if(처음 여는 페이지라면) {로딩 화면}
      기존 값 출력
   },
),
```

하지만 이 방법도 곧 또 다른 불편함으로 이어진다.

#### 4. 또 다른 불편함?

바로 사용자가 보는 와중에 화면이 끊긴다는 것이다.

즉, 사용자가 기존에 보는 화면을 스크롤 중이라면, 어플이 새로운 서버 값으로 교체함에 따라 다시 스크롤의 맨 위로 화면이 강제 이동 된다. 결국 근본적으로 페이지 자체를 살려 두는 것이 베스트여서 찾아 보고 ```AutomaticKeepAliveClientMixin``` 등도 사용해봤지만 효과는 없었다.

때문에 또 며칠을 골머리를 앓고 있었는데, 그때 친구가 나한테 회사 과제 구현하는데 도와달라고 했다. 나는 알겠다고 하고 소스코드를 봐주다가 처음으로 PageView라는 것을 알게되었다. 해당 친구가 내가 생각한 방식으로 사용한 것은 아니지만 pageview와 navigator를 활용하면 처음 생각대로 화면 자체를 저장하는 것이 가능할 것 같았다.

때문에 바로 검색을 해봤고 역시나 pageview를 사용해 화면 저장이 가능했고 즉시 pageview를 사용하는 형태로 어플을 수정했다. 왜 이전에 검색시에는 pageview 관련은 아무것도 안나왔는지가.....

코드로 확인하면 다음과 같다.

```
Scaffold(
  extendBody: true,
  body: PageView(
    controller: pageController,
    onPageChanged: onPageChanged,
    children: [
      페이지 목록들
    ],
    physics: NeverScrollableScrollPhysics(), // No sliding
  ),
  bottomNavigationBar: child: BottomNavigationBar(
              elevation: 10,
              backgroundColor: whiteTheme,
              showSelectedLabels: false,
              showUnselectedLabels: false,
              type: BottomNavigationBarType.fixed,
              onTap: (int index) {
                pageController.jumpToPage(index);
              },
              currentIndex: _currentIndex,
              items: [
                BottomNavigationBarItem(
                  icon: SvgPicture.asset(
                          // 5
                          "${iconSource}home_icon.svg",
                          width: iconSize,
                          height: iconSize,
                        ),
                  label: 'Home',
                ),
                BottomNavigationBarItem(
                  icon: SvgPicture.asset(
                          // 5
                          "${iconSource}chatting_icon.svg",
                          width: iconSize,
                          height: iconSize,
                        ),
                  label: 'Chatting',
                ),
        ]),
);
```

페이지 목록들과 BottomNavigationBarItem의 수만 일치시키면 되며, 각 페이지 클래스들은 ```with AutomaticKeepAliveClientMixin``` 를 붙여야한다.

#### 5. 마치며

어쩌면 나의 이 고민들이 남들 눈에는 뻘짓으로 보일지도 모르겠다.

하지만 나에게는 개발중에 생긴 문제를 포기하지 않고 끝까지 잡고 늘어졌고, 틀린 방식이라곤 해도 나만의 방식으로 조금씩 해결해나갔다는 점이 중요했고, 그 때문에 가장 기본적인 내용이지만 글로 남기고 싶었다.

앞으로도 개발중에 적어도 문제를 포기하는 것만큼은 하고 싶지 않다.

---

> ### 혁신을 시도하다보면 실수를 할 때가 있다. 빨리 실수를 인정하고, 당신의 다른 혁신들을 서둘러 개선해나가야 한다. -스티브 잡스(Steven Jobs)
> Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.
