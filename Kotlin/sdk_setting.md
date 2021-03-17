# 안드로이드 스튜디오 SDK 오류 문제 해결
> 나중에 안드로이드 스튜디오 재설치시 같은 문제가 생길것 같아서 기록합니다.

## 원인
* 안드로이드 스튜디오를 여러번 설치 & 삭제시 __SDK 설정__ 이 자동으로 안된다.

## 발생 오류
1. SDK 설정을 하라는 알림창이 지속적으로 나타남
2. design창의 로딩이 느려짐 -> 결국 출력 안됨.

## 해결 방법
1. Tools -> SDK managers -> Appearance & Behavior -> System Settings -> Android SDK로 들어간다.
2. 창 위의 Android SDK Location의 우측의 Edit를 눌른다.
3. SDK Components Setup 창의 next -> next로 SDK를 재설정한다.
4. 안스를 다시 켠다.
