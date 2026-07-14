# 05 — Companion Devices 허브 스펙 (`/devices`)

> 토큰·공용 컴포넌트는 `00-foundation.md`를 따른다.
> 카피 출처: Figma `CompanionDevices` 프레임(node `324:3318`)은 이미지 중심이라 텍스트가 없음 → 카피는 세부 기획안 "대문" 카피로 `[보완]`. 디바이스별 한 줄 소개는 각 제품 페이지 히어로에서 발췌.

---

## 0. 페이지 기획

- **역할**: 디바이스 라인업의 관문. YALI만 상세 페이지가 있으므로 **YALI로 보내는 것**이 실질 목표. ILLI/UFO는 기대감만 형성(상세 진입 비활성)
- **분량**: 히어로 + 디바이스 아코디언 + 푸터. 1.5~2화면
- **톤**: 라이트 기반, 디바이스별 시그니처 컬러가 아코디언 패널에서 드러남 (YALI=보라 / ILLI=웜 앰버 / UFO=다크 그린)

## 1. 페이지 구조

```
S1  Hero       대문 카피
S2  Accordion  디바이스 3패널 (YALI 확장 기본)
```

## 2. 섹션별 스펙

### S1 — Hero

**카피** `[보완 — 세부 기획안 대문 verbatim]`
- H1: `AI companions for the lives we actually live.`
- Lead: `Powered by Newnal AIOS, our devices are built for the relationships, routines, and moments that make life personal.`
- 4행 리듬 카피(행별 리빌): `For the artist you love.` / `For the family you care for.` / `For the world waiting outside.` / `All centered around you.`

**레이아웃**: 700px 높이, 좌측 정렬 텍스트. 4행 카피의 앞 3행은 각 디바이스의 시그니처 컬러 점(6px)을 행머리에 — YALI 보라 / ILLI 앰버 / UFO 그린. 마지막 행 `All centered around you.`만 `--ink` 강조

### S2 — Device Accordion

Figma 초안의 가로 아코디언(확장 1194px + 접힘 74/82/90px) 구성을 재현.

- 패널 3개: **YALI**(기본 확장) / **ILLI** / **UFO**
- 확장 패널: 디바이스 키 이미지 풀블리드 + 하단에 이름·한 줄 소개·CTA
  - YALI: `YALI — AI Artist Companion` / `Your artist should live in your life, not just your feed.` / CTA `Explore YALI →` (`/devices/yali`)
  - ILLI: `ILLI — AI Companion for the Golden Generation` / `The people you love should remain part of your everyday life.` / CTA `Coming soon` (비활성)
  - UFO: `UFO — Real-World Adventure Device` / `Screens off. Step outside. Start the hunt.` / CTA `Coming soon` (비활성)
- 접힘 패널: 세로 쓰기 디바이스명(mono) + 시그니처 컬러 1px 좌측 보더
- 인터랙션: hover/클릭·포커스로 확장 전환(`--dur-reveal`, width transition). 키보드 접근 가능(패널 = button, `aria-expanded`)
- 모바일: 가로 아코디언 → 세로 카드 스택 3장으로 degrade
- 에셋: 디바이스 키 이미지 3장 — YALI는 `yali-hero.png` 보유, ILLI/UFO는 placeholder 규칙

## 3. 수용 기준

- [ ] ILLI/UFO의 상세 진입이 비활성(`aria-disabled`)이며 죽은 링크 없음
- [ ] 아코디언이 키보드로 조작 가능, `prefers-reduced-motion`에서 즉시 전환
- [ ] 모바일 세로 스택 degrade
- [ ] YALI CTA가 `/devices/yali`로 정상 연결
