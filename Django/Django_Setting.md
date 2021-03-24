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

* 프로젝트 생성
> 장고의 플로젝트란 하나의 웹사이트이며 하나의 프로젝트 안에는 여러 앱이 존재하고, 이러한 앱들이 모여 웹 사이트를 구성한다.

* 프로젝트 디렉터리 생성하기
> 장고는 프로젝트가 여러개가 될수 있으므로 프로젝트 __루트 디렉터리 생성__ 이 필수다.
```
D:\>mkdir projects
D:\>cd projects(루트 디렉터리 이름)
D:\projects>
```

* 프로젝트 루트 디렉터리 안에서 가상 환경에 진입하기
```
D:\projects>D:\venvs\mysite\Scripts\activate
```

* 장고 프로젝트 생성 & 이동하기
```
(가상환경명) D:\projects>mkdir mysite(장고 프로젝트를 담을 디렉터리)
(가상환경명) D:\projects>cd mysite
(가상환경명) D:\projects\mysite>
(가상환경명) D:\projects\mysite>django-admin startproject config .
```
> 장고 프로젝트는 가상 환경에서 django-admin으로 생성 가능하다.
> 이때 config 뒤의 점에 주의해야하며 점 기호는 현재 디렉터리를 프로젝트 디렉터리로 만들라는 의미이다.

* 개발 서버 구동 & 종료하기
> 'python manage.py runserver' 명령으로 개발 서버가 구동되며 'Ctrl+C'를 누르면 개발 서버가 종료된다.
> 개발 서버는 127.0.0.1:8000 또는 localhost:8000에서 장고의 기본 웹사이트를 볼수 있다.

* Path 환경변수를 통한 가상 환경 진입 -> 방법을 못찾음(추후에 커밋함)

* 장고(파이썬) 개발 에디터 파이참 설치하기.
> 파이참은 www.jetbrains.com/ko-kr/pycharm/download/#section=windows 에서 설치 가능하며 <Next>만 선택하면 된다.
> 파이참 실행 후 <Open>으로 앞에서 생성한 장고 프로젝트를 연다.(예 : D:\projects\mysite)

* 파이참 인터프리터 설정
> 파이참 메뉴에서 [File -> Setting] -> [Project: mysite -> project Interpreter] -> [Python Interpreter}의 톱니바퀴 모양에서 <Add> -> <Existing enviroment> -> [Interpreter]오른쪽의 <...> -> D:\venvs\mysite\Scripts\python.exe 선택
> 파이참에서 setting.py 파일의 [LANGUAGE_CODE]와 [TIME_ZONE]설정값을 수정한다.(언어와 시간을 한국으로 설정)

```
LANGUAGE_CODE = 'ko-kr'
TIME_ZONE = 'Asia/Seoul'
```
> 서버 구동시 언어가 한국어로 바뀌어 있다!

* 장고 개발 환경 설치 & 설정 완료!
