---
title: 'Flutter 파이어베이스 로그인 구현'
author: [Bosoek Kim]
tags: [flutter]
image: img/flutter_firebase_login.png
date: '2022-08-27T10:00:00.000Z'
draft: true
---

---
# Flutter 파이어베이스 로그인 구현

핏메이트를 개발하며 파이어베이스를 이용해 구글 로그인, 페이스북 로그인, 카카오톡 로그인을 구현했었는데, 개발 외적으로 해줘야 할 것들이 있고, 또 로그인 뿐만 아니라 회원가입, 로그 아웃, 자동 로그인들도 구현하려니 너무 힘들었어서 추후 같은 삽질을 안하기 위해 간단히 글로 남겨본다.

파이어베이스 설정은 기본적이라 패스한다.

### 1. 

---

> ### 고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. 마약과 IT -에드워드 터프테
> There are only two industries that call customers 'users'. Drugs and IT