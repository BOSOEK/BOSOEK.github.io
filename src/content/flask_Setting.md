---
title: 'Flask 개발 환경 구축하기'
author: [Bosoek Kim]
tags: [substack, flask]
image: img/flask.png
date: '2021-09-13T10:00:00.000Z'
draft: false
---

---

# Flask 개발 환경 구축하기

> 파이썬 설치를 전제로 한다.

### 1. 가상 환경 생성하기
> 파이썬 가상환경은 파이썬 프로젝트시 독립된 환경을 만들어준다.(상황에 따라 가상환경에서 하나의 데스크톱에 다른 버전의 파이썬을 설치할 수 도 있다.)

* cmd에서 가상환경 디렉터리(통상 venvs)를 만든다.
* 가상 환경을 만든다.
```
D:\venvs> python -m venv mysite
```
> 'python -m venv'는 파이썬 모듈중 venv를 이용하겠다는 의미이다.
> 'mysite'는 만들 가상환경 이름이다.

* 가상환경에 진입한다.
> 생성한 mysite(가상환경)에 있는 Scripts 디렉터리의 __activate 명령__ 을 수행하여 가상환경에 진입 가능.
```
D:\venvs> cd D:\venvs\mysite\Scripts
D:\venvs\mysite\Scripts> activate
(가상환경명) D:\venvs\mysite\Scripts>  # 가상환경 진입
```

* 가상환경에서 벗어닌다.
> 진입한 가상환경에서 벗어나려면 __deactivate__ 을 사용한다
```
(가상환경명) C:\venvs\mysite\Scripts> deactivate
```

* flask 설치하기
> 플라스크는 가상환경 안에 설치한다
```
(가상환경명) D:\venvs\mysite\Scripts> pip install flask
```

* 애플리케이션 만들기
```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_pybo():
    return 'Hello, Pybo!'
```
> 가장 기본적인 플라스크 서버 코드이다.   
> ```app = Flask(__name__)``` : 플라스크 애플리케이션 실행 코드, 이때 __name__에는 해당 모듈 명(파일 이름)이 들어간다.   
> ```@app.route```는 특정 URL에 접속하면 바로 다음 줄에 있는 함수를 호출하는 플라스크의 데코레이터다.   
> 위 코드에서는 기본 url로 접속시 'Hello, Pybo!' 라는 글이 출력된다.

* 기본 애플리케이션 설정하기
> 환경변수 FLASK APP에 애플리케이션을 지정한다.
```
(가상환경명) D:\venvs\mysite\Scripts> set FLASK_APP=파일명
```

* 플라스크 서버 개발 환경으로 설정
> 플라스크 서버를 개발 모드로 연다.
```
(가상환경명) D:\venvs\mysite\Scripts> set FLASK_ENV=development
```

* 플라스크 개발 환경 설치 & 설정 완료!