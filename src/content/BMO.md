---
layout: post
title: 'BMO'
image: img/bmo.jpg
author: [Bosoek Kim]
date: 2022-01-09T10:00:00.000Z
tags: [project, ml&dl]
draft: false
---

# BMO

약 한달 가까이 진행한 BMO 프로젝트가 끝났다. 개인적으로 죽을만큼 힘들었어서 지난 한달 반을 기록해본다.

프로젝트를 시작한 계기는 GSM 페스티벌이었다. 우리 학교는 매년 GSM 페스티벌을 하는데, 간단히 애들끼리 팀짜서 프로젝트하고 전시하는 것이다. 여기서 다른 해와 다른 점은 우리는 2학년 말인 이 GSM 페스티벌이 마지막이라는 것과, 페스티벌 프로젝트는 학교에서 지원을 엄청 많이 해준다는 것이다.

때문에 정말 마지막으로 내가 하고 싶은 프로젝트가 뭔지에 대해 고민하게 되었고, 오래전부터 만들어 보고 싶었던 BMO를 만들어보자!라고 생각하게 되어 시작한 프로젝트다.

<img src="https://i1.sndcdn.com/artworks-9ZOsWrVFOXUkvPmN-P7M4SA-t500x500.jpg" width="400">

참고로 비모는 "어드벤처 타임"이라는 만화에 나오는 인공지능 로봇이다. 해당 만화를 너무 좋아하기도 하고 비모가 귀엽기도 해서 예전부터 생각했던 프로젝트였고, 주 컨셉을 대화형 친구 로봇으로 잡고 친구들을 꼬셔 팀을 만들었다.

그렇게 핵심 기능들과 필요한 재료등등을 적당히 산정했다.

1. 비모의 갑바(몸체부분)
2. 비모 얼굴이 나올 디스플레이
3. 사용자 말을 인식할 마이크, 스피커
4. 팔이 돌아갈수 있도록 모터
5. 사용자 얼굴을 아이트래킹하기 위한 카메라
6. 대화형 AI
7. STT, TTS 모델 구현
8. 비모 목소리 구현을 위한 데이터셋 구축
9. 내부 회로 납땝 및 조립

여기서 함정은 남은 기간이 약 30일 정도라는거다. 기간이 많다고 생각할 수도 있겠지만 그동안에 몸체 3D 모델링 및 프린팅(몸체 자체가 꽤 커서 - 50cm정도 - 뽑는데만 해도 꽤 시간이 걸린다), 부품은 재료 신청 후 올때까지 무작정 기다려야하고, 데이터셋은 있는지에 대한 유무도 모른다.

<img src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTJfMTM2/MDAxNTI2MTMyMTQ3MjE0.tnsuVf2u_kZiodJhynHrcss3R_435px1UWhppvnZFMYg.CKMDaNOJT1p_SE-eLDmfRv1p_p5EeStgpVJROu4IP6Yg.PNG.crictor11/DV4pD0pVAAUVWFf.png?type=w800" width = "400">

이때 살짝 아차 싶었지만 이미 팀 소집도 다 완료되었고 이제는 아이디어를 바꾸는게 힘들어서 기간보고 개발중에 안되는건 버리고 챙길수 있는 것만 챙기면서 하자며 프로젝트를 시작하게되었다.

그 후 바로 한달 기간에 대한 일정을 확실히 했다. 
* 1주일에 3D 모델링 완료, 부품 신청, 데이터셋 수집시작
* 2주일에 회로 납땜 시작, 부품 도착, 데이터셋 계속 수집
* 3주일에 부품 조립, 모델 파인튜닝
* 4주일에 전시

일정 산출 후에는 역활 분담을 확실히 했다. 다행히 팀원중 한명이 3D 모델링을 할 줄 알아서 그 친구에게 비모의 외피 모델링을 맡겼고, 나는 기존에 만들어둔 채팅 모델이 있어서 대화 데이터셋을 구축해서 대화 ai를 만들고, 남은 팀원 두명에게 애니메이션의 비모 목소리 데이터를 수집해달라고 했다.

개발 초기에는 생각보다 순탄했다. 단순히 대화만 하기에는 버튼들이 너무 많고 심심해 보이니 게임을 넣자고 해서 python으로 테트리스, 팩맨, 공룡 게임을 만들었고, 버튼을 누르면 랜덤 노래를 틀어주는 기능도 개발했다.

<img src="https://user-images.githubusercontent.com/69895365/146292384-48b7809e-ad5b-4405-bdc1-bd7078714803.png" width="500">

모델링도 꽤 빨리나와서 프린트가 금방끝났고, 아이트래킹 기능 개발과 비모 표정 디자인도 첫주에 대부분 끝낼 수 있었다.

대화 AI쪽도 순조로웠다. 케글에서 어드벤처 타임 만화의 대화 데이터셋을 찾아서 해당 파일을 번역해 데이터셋 구축후 약간의 수정을 거쳐 내가 기존에 만들었던 모델에 파인튜닝을 했다. 초반에는 자기 이름이 핀과 제이크라는둥의 문제도 있었지만 노가다를 통해 해결했다. 

STT쪽도 시간상 라이브러리를 가져와 구현하는 것에는 성공했는데, 문제는 TTS였다. 애니메이션 자체에 비모의 등장 타임이 타 캐릭터 대비 많지가 았았고, 아득 바득 음성 대사를 따서 배경 음악 제거등의 작업을 다 했을때 구해지는 시간이 30분 정도였다. 후에 HBO에 올라온 특별편의 대사까지 포함시에 50분 정도... 

해당 데이터셋만으로 학습시에 역시나 기계음만 가득한 목소리가 나왔고, 추가적인 데이터 셋을 구하기 위해 여자 목소리를 편집해서 쓰기도 하고, 카툰네트워크측에 저작권 문제로 내려간 애니메이션을 줄 수 있는지 문의하고, 비모 애니메이션 성우에게 메일을 보내기도 했다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/398d2301-81ee-44fa-aebd-99843475a04e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221206T013626Z&X-Amz-Expires=86400&X-Amz-Signature=034405b07846949201b4b51c899f3ef96a6f38ade3433ae53b3475ae96eef12c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width ="400">

카툰과 성우측에게는 답변을 받을 수 없었지만 여자 목소리를 편집해 사용한 데이터셋이 그나마 효과가 있었고, 그 덕에 겨우 비모와 비슷한 목소리를 구현할 수 있었다.

그와중에 다행인지 하드웨어는 크게 문제는 없었다. 

<img src="https://user-images.githubusercontent.com/68007145/205798120-5db63df0-5e76-476f-965c-634c23b0ff8d.jpeg" width="400">

> 3D 프린터 후 도색작업중

<img src="https://user-images.githubusercontent.com/68007145/205799050-84229982-e69a-464c-a9b6-bfe59f4141a9.jpeg" width="400">

> 내부 회로 연결

이 외에도 모델 생성을 하며 학습 시간이 너무 오래 걸려 문제가 생기기도 했고(TTS 학습에만 4일.. ㄷㄷ), 소프트웨어 코드 병합 과정에서 모델 응답 속도가 느려 웹 벡엔드로 따로 빼서 돌리는 등의 별별일이 다 있었다.

그렇게 한달 내내 밤샘 작업이 진행되었다. 지금 생각해보면 한달 안에 인공지능 모델 4개 이상 만든다는 거부터가 말이 안되는 계획이었다.(아이트래킹, 감정 분류, 대화 모델, TTS, STT)

그리고 드디어 대망의 페스티벌날

<img src="https://user-images.githubusercontent.com/68007145/205803730-70cdbed0-a1fd-45e1-9905-068935359054.jpg" width="400">

아무래도 알고 있는 만화 캐릭터여서 그런지 학생들의 관심이 많았다. 간단한 게임과 음악 재생, 대화 등을 하며 조금 어눌했지만 우리가 원했던 대로 친구라는 컨셉을 느낄 수 있어서 다행이었다.

덕분인지 정말 다행히도 페스티벌에서 동상을 수상할 수 있었고 그로 인해 대한민국 교육 박람회에서 작품 전시를 할 수 있는 기회를 얻었다.

<img src="https://user-images.githubusercontent.com/68007145/205804636-0e6c696d-1903-487f-8d78-3262b535f18d.jpg" width="400">

## 마치며

개발 과정 중이 늘 좋지 만은 않았다. 신청한 부품이 늦게 오기도 하고 데이터 수 관련으로 팀원들과 대립이 생기기도 했다. 하지만 결국 팀원들이 나를 믿어줬고, 또 함께 밤샘 작업을 해줬기에 성공적으로 완성할 수 있지 않았나 싶다.

과정은 고생뿐이었지만 끝난 지금 시점에서는 재밌었고 잊지 못할 것 같다.

---

>### 성장한다는 것은 정말 혼란스러운 일인것 같아. -비모(BMO)
> Growing up is really confusing
