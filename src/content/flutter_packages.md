---
title: 'Flutter 쓸 거 같은 패키지들'
author: [Bosoek Kim]
tags: [flutter]
image: img/flutter_packages.png
date: '2022-12-06T10:00:00.000Z'
draft: false
---

---

# Flutter 쓸 거 같은 패키지들

Flutter는 비교적 타 프레임워크에 비해(rn 등..) 많이 어리고 관련 패키지가 적은 편이다. 하지만 이제는 몇년 전에 비해 패키지 수도 많고 재밌는 패키지도 몇게 보여서 나중에 내가 개발시에 쓸 것 같은 패키지들, 사용 자주하는 패키지들을 기록해둔다.

#### 1. flutter_svg

flutter에서 svg 이미지를 사용할 수 있는 패키지이다.

좋아요 수나 인기도가 굉장히 높고 개발시에 디자인을 적용하게 되는 경우에는 거의 필수적으로 사용하게 될 패키지라고 생각된다.

* [pub.dev에서 보기](https://pub.dev/packages/flutter_svg)
* import code : ```import 'package:flutter_svg/flutter_svg.dart';```


#### 2. cached_network_image

인터넷 이미지를 url을 통해 가져와 쓸 경우 다운로드 비용 절감을 위해 캐시로 관리해야 한다. 이를 위한 패키지이다.

좋아요, 인기 모두 높고 이 패키지 역시 개발시에 반드시 사용하게 되는 패키지라고 생각한다.

* [pub.dev에서 보기](https://pub.dev/packages/cached_network_image)
* import code : ```import 'package:cached_network_image/cached_network_image.dart';```

#### 3. easy_pip & flutter_android_pip

PIP(Picture-in-picture) 기능 구현시에 사용하는 패키지들이다. 참고로 PIP는 아래처럼 앱 위에 보여지는 기능들이다.

<img src="https://i.ytimg.com/vi/AlTbJHLcpQ4/maxresdefault.jpg" width="500">

내부 페이지 위에서 구현시 easy_pip, 외부 앱 위에서 구현시 flutter_android_pip를 사용한다.

음악이나 영상 데이터 이용시에는 필수적일 것 같다. 아직까지는 사용해 본 경험이 없지만 앞으로 개발하면서 사용하게 될 듯 싶다.

* [easy_pip pub.dev에서 보기](https://pub.dev/packages/easy_pip)
* easy_pip import code : ```import 'package:easy_pip/easy_pip.dart';```
* [flutter_android_pip pub.dev에서 보기](https://pub.dev/packages/flutter_android_pip)
* easy_pip import code : ```import 'package:flutter_android_pip/flutter_android_pip.dart';```

#### 4. flutter_local_notifications

flutter에서 로컬 push notification을 보낼 때 사용하는 패키지이다. 굳이 파베상으로 전부 처리 가능한 push notification을 로컬 패키지로 만든 이유는...

<img src="https://user-images.githubusercontent.com/68007145/205898193-931e2154-efa1-42ea-b7f1-f96b728dc8e8.jpg" width="400">

이런식으로 여러 notification 효과를 낼 수 있기 때문이다. 위 방식 외에도 정말 시간 설정, 묶음 효과 등등 별의별 방식으로 사용 가능하기에 서비스를 운영하는 과정에서 필요한 패키지일 것 같다.

* [pub.dev에서 보기](https://pub.dev/packages/flutter_local_notifications)
* easy_pip import code : ```import 'package:flutter_local_notifications/flutter_local_notifications.dart';```

#### 5. shared_preferences

flutter에서 디바이스 DB를 사용할 수 있게 해주는 패키지이다. sqflite보다 사용하기 간단하고 쉽다는 장점이 있다.

* [pub.dev에서 보기](https://pub.dev/packages/shared_preferences)
* easy_pip import code : ```import 'package:shared_preferences/shared_preferences.dart';```

#### 6. modal_bottom_sheet

아래와 같은 바텀 시트를 사용할 수 있게 해주는 패키지이다. 바텀 시트의 경우 앱에서 굉장히 다양하게 사용되기 때문에 알아두면 좋다고 생각한다.

<img src="https://github.com/jamesblasco/modal_bottom_sheet/blob/screenshots/modal_inside_modal.gif?raw=true" width="300">

참고로 modal_bottom_sheet의 경우 border radius 설정이 힘든데 이럴 때는 flutter 기본으로 제공하는 showBottomSheet를 사용하면 편하다.

* [pub.dev에서 보기](https://pub.dev/packages/modal_bottom_sheet)
* easy_pip import code : ```import 'package:modal_bottom_sheet/modal_bottom_sheet.dart';```

---

> ### 1퍼센트의 가능성, 그것이 나의 길이다. -나폴레옹(Napoléon)
> The possibility of 1 percent, that's my way.
