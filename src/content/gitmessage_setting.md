---
title: 'Git commit 규칙 설정'
author: [Bosoek Kim]
tags: [toolkit]
image: img/git_message.jpeg
date: '2022-11-20T10:00:00.000Z'
draft: false
---

---
# Git commit 규칙 설정

협업시에 깃을 사용하여 버전 관리 및 커밋을 남겼는데 최근 인턴으로 일하며 커밋 메시지의 중요성에 대해 생각하게 되었다. 기존에는 너무 난잡하게 작성하는 경우가 많았고 또 회사에서 사용하지 않는 태그도 있다는걸 알게되었다.(이태까지 ADD를 회사에서도 사용하는 줄 알았다)

협업으로 깃을 사용한다면 커밋 메시지의 일관성은 매우 중요하고, 다른 사람들이 내 코드를 읽을 때와, 커밋 메시지로 업무 내용을 파악하기도 하기에 Git commit 규칙을 설정하여 커밋 일관성을 지켜볼려고 한다.


### 1. .gitmessage.txt 생성
위치는 어디든 크게 상관은 없지만 편하게 파악하기 위해 루트나 .gitignore와 같은 위치를 추천한다.


### 2. 커밋 규칙 작성
.gitmessage.txt 파일에 커밋 메시지 규칙을 작성한다.

회사나 팀에서 회의 후 결정된 사항들을 적는다 

> 아래는 예시 파일
```
# <타입> : <제목> 형식으로 작성하며 제목은 최대 50글자 정도로만 입력
# 제목을 아랫줄에 작성, 제목 끝에 마침표 금지, 무엇을 했는지 명확하게 작성

################
# 본문(추가 설명)을 아랫줄에 작성

################
# 꼬릿말(footer)을 아랫줄에 작성 (관련된 이슈 번호 등 추가)

################
# FEAT : 새로운 기능
# FIX : bug fix
# REFACTOR : 리팩토링
# TEST : 테스트용
# CHORE : 빌드 및 패키징 관련
################
```

### 3. git config 설정
git commit시에 .gitmessage.txt 파일을 참조할 수 있도록 설정해야 한다.
```
git config --global commit.template [.gitmessage.txt 파일 경로]
```

이러면 commit 규칙 설정은 끝이다. 이후부터 commit 시에 ```git commit -m ""``` 이 아니라 ```git commit```만 작성하면 위에 작성한 템플릿이 뜬다

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/80feee19-9476-40a3-a325-e83a62924d69/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221206T023816Z&X-Amz-Expires=86400&X-Amz-Signature=117526759e35e2b59f4740171eb13bdba16572d44fd6cc99f8eb1e6cb4733e44&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width="500">

i 또는 a를 입력하여 커밋 메시지 작성 후 esc + ```:wq```를 작성하면 된다.

따로 노션등에 커밋 규칙을 작성하는 방법보다 커밋 시에 바로 바로 보면서 작성이 가능하기에 훨씬 더 효과적인 방법인 것 같다.

---

> ### 고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. 마약과 IT - 에드워드 터프테
> There are only two industries that call customers 'users'. Drugs and IT