# Django 개발 환경 구축하기

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

* 장고 설치하기
> 장고는 가상환경안에서 설치한다.
```
(가상환경명) D:\venvs\mysite\Scripts> pip install django==3.1.3
(가상환경명) D:\venvs\mysite\Scripts> python -m pip install --upgrade pip
```
> 첫번째 pip는 장고 3.1.3 버전을 설치하라는 명령어.
> 두번재 pip는 장고를 최신 버전으로 설치하라는 명령어.

