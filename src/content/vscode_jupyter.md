---
layout: post
title: 'VSCode에서 Jupyter notebook 사용하기'
image: img/vscode_jupyter.png
author: [Bosoek Kim]
date: 2021-08-22T10:00:00.000Z
tags: [substack]
excerpt: 
---

---

# VSCode에서 Jupyter notebook 사용하기

Machine Learning을 공부하는 사람들 이라면 대부분이 처음에 Jupyter Notebook(Lab)을 접할테지만 자동완성, 다크모드 등을 지원하는 코랩과는 다르게 원조인 Jupyter Notebook은 특유의 답답함으로 개발자 편의성이 중요해진 요즘에는 사용이 다소 꺼려집니다.

하지만 모든 코드를 코랩에서만 할 수는 없기에 이번 시간에는 vscode로 편하게 Jupyter Notebook을 사용하는 방법을 포스팅 해 보도록 하겠습니다.😝

### 1. 우선 vscode에 들어가서 python과 jupyter Extentions을 설치합니다

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fme1xP%2FbtrcMGclmyB%2FkGpqTLFr9DSwdAnPauDy1k%2Fimg.png" width="700">

---

### 2. 프로젝트의 가상 환경에서 jupyter를 설치 합니다
```
python -m venv <가상환경 이름>
<가상환경 이름>\Scripts\activate
pip install jupyter
```
---
   
### 3. 새로운 .ipynb 파일을 만들고 __<커널 선택>__ 과 <Ctrl + Shift + P> -> \<Select Interpreter> 로 가상 환경을 선택하고 jupyter를 실행합니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCtuEh%2FbtrcMWFM8YV%2FkAvUidFRnBixZMK53SWvj1%2Fimg.png" width="700">

이러면 끝~! 다들 즐거운 ML 코딩 하세요~😝

<img src="https://user-images.githubusercontent.com/68007145/152316247-ec5c30b2-b506-4ed8-99db-db64e7b49053.png" width="200">

### # Trouble Shooting
설치 과정에서 생기는 에러는 대부분 2개입니다. 각각의 해결법을 남겨놓겠습니다.

1. Kernel died with exit code 1073741845......
   * 사용자의 이름이 한글인지 확인하고 수정합니다.
 
2. Kernel died with exit code 1......
   * python만 사용하시는 경우 python 재설치 
   * Anaconda 사용하시는 경우 ```conda install ipykernel --update-deps --force-reinstall```

---


>### 올바로 동작하지 않더라도 걱정말아라.
> Don't worry if it doesn't work right.
>### 모든 것이 그랬다면, 넌 직업을 잃었을테니까. -소프트웨어 공학에서의 모셔의 법칙(Mosher's Law)
> If everything did, you'd be out of a job.