# Android Studio에서 Kotlin import시에 오류 해결 방법 입니다.
> 이거 해결에만 3일 걸림..

## 원인
* 안드로이드 스튜디오 설치시 코틀린 설정이 자동으로 안됨. -> 수동으로 직접 설정 해줘야 안드로이드 스튜디오에서 코틀린 사용 가능함.

## 발생 오류
* 코틀린 import 오류라 코틀린 사용이 안됨.
* 더 나아가 시뮬레이터도 안돌아감.

## 해결 방법
1. build.gradle(app)의 plugins을 찾는다
```
plugins {
    id 'com.android.application'
    id 'kotlin-android'
}
```
2. ```id'kotlin-android-extensions'``` 을 추가해 준다
