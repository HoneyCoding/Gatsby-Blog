---
title: "TIL 2023-08-09"
description:
date: 2023-08-09
update: 2023-08-09
tags:
  - TIL
  - 2023년 TIL
series: "2023년 08월 TIL"
---

## iOS TIL

## URLSession
URLSession은 Swift Foundation에 포함된 애플에서 제공하는 네트워크 API 프레임워크이다. 해당 프레임워크를 통해 다음 기능을 수행할 수 있다
1. 데이터(예를 들면 JSON)를 다운로드하거나 업로드
2. 파일 업로드 / 다운로드
3. 백그라운드에서 네트워크 기능 수행

URLSession에는 싱글톤으로 제공되는 shared session을 제외하면 총 3가지 configuration이 존재한다
1. default
default는 shared와 유사한 session이다. 주로 delegate 패턴을 활용할 때에 default session을 생성하여 사용한다.
2. ephemeral
ephemeral은 default session에서 캐싱, 쿠키 저장 등을 하는 기능을 제외한 세션이다. 주로 브라우저 비밀 모드 등을 구현할 때 사용한다.
3. background
백그라운드 session은 백그라운드에서 콘텐츠 다운로드 / 업로드를 할 때 사용하는 session이다.

URLSession을 통해 task를 수행하고 난 후에 받아온 data는 completionHandler와 delegate 패턴 두 가지 중 한 가지를 선택하여 처리할 수 있다. 동시에 두 가지 방식을 모두 사용할 수는 없다.