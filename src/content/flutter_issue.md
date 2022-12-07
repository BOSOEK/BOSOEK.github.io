---
title: 'Flutter 개발 시의 이슈들'
author: [Bosoek Kim]
tags: [flutter, record]
image: img/flutter_issue.jpeg
date: '2022-08-01T10:00:00.000Z'
draft: false
---

---

# Flutter 개발 시의 이슈들

플러터 개발시에 자주 생기는 오류들, 배포시에 발생하는 이슈들을 정리한다

### 1. Exception caught by widgets library

```
Cannot provide both a color and a decoration
To provide both, use "decoration: BoxDecoration(color: color)".
'package:flutter/src/widgets/container.dart':
Failed assertion: line 273 pos 15: 'color == null || decoration == null'
```
Container 사용시에 decoration을 안쓴다면 바로 color를 지정해도 되지만 decoration 속성 사용시에는 반드시 decoration 안에 색을 지정해야한다.

---

> ### 나는 실패한 게 아니고, 다만 전구가 안되는 이치를 발견했을 뿐이다. -토머스 에디슨(Thomas Edison)
> I didn't fail, I just found out that the light bulb didn't work.
