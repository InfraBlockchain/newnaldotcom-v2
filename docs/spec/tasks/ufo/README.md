# UFO 페이지 병렬 작업 — 에이전트 투입 가이드

> 마스터 플랜: `docs/spec/07-ufo.md`
> 실행 순서: **A(Phase 1) 먼저 → B·C·D 동시 투입 → 전원 완료 후 A(Phase 2)**
> 전원 main 직접 작업(파일 배타 소유 — 충돌 없음). 푸시 전 `npm run build` 필수 (main = Vercel 자동 배포).

아래 프롬프트를 각 에이전트에게 그대로 붙여넣으면 된다.

---

## 에이전트 A (1차 투입 — 단독 선행)

```
infrablockchain/newnaldotcom-v2 리포에서 UFO 제품 페이지(/devices/ufo) 작업의 TASK A를 수행해줘.

1. 최신 main을 pull 하고, docs/spec/07-ufo.md(마스터 플랜)와 docs/spec/tasks/ufo/TASK-A-foundation.md(너의 태스크)를 정독해.
2. TASK-A 문서의 Phase 1만 수행해: [data-theme="ufo"] 토큰(globals.css), app/devices/ufo/fonts.ts, content/ufo.ts(카피 verbatim — 07 문서 §7 기준, 한 글자도 바꾸지 말 것), components/ufo/UfoSubnav, 섹션 스텁 9개, app/devices/ufo/page.tsx 조립.
3. 소유 파일 목록 밖의 파일은 절대 수정 금지. Phase 2(허브 링크 활성화)는 지금 하지 마 — B/C/D 완료 후 별도 지시가 갈 거야.
4. npm run lint && npm run build 통과 확인 후 main에 직접 push 해. (main = Vercel 자동 배포)
5. 완료 보고에 생성한 파일 목록과 빌드 결과를 포함해.
```

## 에이전트 B (A Phase 1 머지 후 투입)

```
infrablockchain/newnaldotcom-v2 리포에서 UFO 제품 페이지(/devices/ufo)의 TASK B를 수행해줘.

1. 최신 main을 pull 하고 content/ufo.ts와 components/ufo/sections/ 스텁이 존재하는지 확인해 (없으면 중단하고 보고 — TASK A 미완료 상태).
2. docs/spec/07-ufo.md(마스터 플랜)와 docs/spec/tasks/ufo/TASK-B-hero-showcase.md(너의 태스크)를 정독해.
3. 피그마 파일 g7xkiCYymXjZTuNxgg9LzW의 노드 405:480(Sec 1 Hero), 405:500(Sec 2 Dark Showcase)에서 디자인 컨텍스트와 스크린샷을 직접 추출해서 1440px 기준 픽셀 대조로 구현해.
4. 수정 허용 파일은 UfoHero.tsx/.module.css, UfoDarkShowcase.tsx/.module.css 4개뿐이다. page.tsx·content/ufo.ts·globals.css·다른 섹션 파일은 절대 건드리지 마. 카피는 전부 content/ufo.ts에서 import, 색 토큰은 var(--ufo-deep, #346f69)처럼 리터럴 fallback 포함.
5. 반응형(390/768/1024/1440)과 prefers-reduced-motion 처리 후, npm run lint && npm run build 통과 확인하고 main에 직접 push 해.
```

## 에이전트 C (A Phase 1 머지 후 투입 — B와 동시)

```
infrablockchain/newnaldotcom-v2 리포에서 UFO 제품 페이지(/devices/ufo)의 TASK C를 수행해줘.

1. 최신 main을 pull 하고 content/ufo.ts와 components/ufo/sections/ 스텁이 존재하는지 확인해 (없으면 중단하고 보고 — TASK A 미완료 상태).
2. docs/spec/07-ufo.md(마스터 플랜)와 docs/spec/tasks/ufo/TASK-C-editorial-cinematic.md(너의 태스크)를 정독해.
3. 피그마 파일 g7xkiCYymXjZTuNxgg9LzW의 노드 405:546(Sec 3 Editorial Band), 405:599(Sec 4 Cinematic)에서 디자인 컨텍스트와 스크린샷을 직접 추출해서 1440px 기준 픽셀 대조로 구현해.
4. 수정 허용 파일은 UfoEditorialBand.tsx/.module.css, UfoCinematic.tsx/.module.css 4개뿐이다. page.tsx·content/ufo.ts·globals.css·다른 섹션 파일은 절대 건드리지 마. 카피는 전부 content/ufo.ts에서 import, 색 토큰은 var(--ufo-deep, #346f69)처럼 리터럴 fallback 포함.
5. 반응형(390/768/1024/1440)과 prefers-reduced-motion 처리 후, npm run lint && npm run build 통과 확인하고 main에 직접 push 해.
```

## 에이전트 D (A Phase 1 머지 후 투입 — B·C와 동시)

```
infrablockchain/newnaldotcom-v2 리포에서 UFO 제품 페이지(/devices/ufo)의 TASK D를 수행해줘.

1. 최신 main을 pull 하고 content/ufo.ts와 components/ufo/sections/ 스텁이 존재하는지 확인해 (없으면 중단하고 보고 — TASK A 미완료 상태).
2. docs/spec/07-ufo.md(마스터 플랜)와 docs/spec/tasks/ufo/TASK-D-closing.md(너의 태스크)를 정독해.
3. 피그마 파일 g7xkiCYymXjZTuNxgg9LzW의 노드 405:631(Sec 5), 520:2(Sec 6), 521:2(Sec 7), 521:26(Sec 8), 521:53(Sec 9)에서 디자인 컨텍스트와 스크린샷을 직접 추출해서 1440px 기준 픽셀 대조로 구현해.
4. 수정 허용 파일은 UfoPowerGauge / UfoCreator / UfoSignalGuide / UfoSpecTable / UfoCtaRow의 .tsx/.module.css 10개뿐이다. page.tsx·content/ufo.ts·globals.css·다른 섹션 파일은 절대 건드리지 마. 카피는 전부 content/ufo.ts에서 import, 색 토큰은 리터럴 fallback 포함. 섹션 6·7·8의 포인트 컬러는 피그마 그대로 블루 var(--ufo-alt-accent, #4d9fff)를 쓴다(틸 아님 — 태스크 문서 주의사항 참고).
5. LED 글로우 3종은 이미지 다운로드 없이 CSS로 구현하고 애니메이션은 prefers-reduced-motion에서 정지시켜. 반응형(390/768/1024/1440) 처리 후, npm run lint && npm run build 통과 확인하고 main에 직접 push 해.
```

## 마무리 (B·C·D 전원 완료 후 — 에이전트 A 재투입)

```
newnaldotcom-v2 UFO 작업의 TASK A Phase 2를 수행해줘. 최신 main을 pull 하고 docs/spec/tasks/ufo/TASK-A-foundation.md의 Phase 2 섹션을 따라: content/devices.ts의 ufo href 활성화, YaliSubnav 스위처의 UFO 링크 활성화, 그리고 docs/spec/07-ufo.md §8의 DoD 전 항목(피그마 대조·반응형 4개 폭·reduced-motion·헤딩 구조)을 검증해. 통과하면 main에 push 하고 Vercel 배포까지 확인해.
```
