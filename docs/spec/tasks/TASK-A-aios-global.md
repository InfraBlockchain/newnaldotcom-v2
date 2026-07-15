# TASK A — 전역(헤더·푸터·토큰·폰트) + `/aios` 재스킨

> 담당: Codex. 작성: 2026-07-15.
> 스펙 원본: `docs/spec/06-figma-final-aios-devices.md` — **§1(전역), §2(/aios)가 이 태스크의 범위다.**
> TASK B(Copilot, `/devices`)와 **동시 진행**된다. 아래 파일 소유권을 벗어나면 충돌하므로 절대 넘지 말 것.

## 브랜치 / PR

- 브랜치: `feat/figma-aios-global` (main에서 분기)
- 완료 시 main으로 PR 생성 (main 직접 push 금지 — 저장소 룰)

## 범위

1. **§1-3~1-5 폰트·토큰**: `app/layout.tsx`에 Syne(400·500)·Inter(400·500·700) `next/font/google` 추가(`--font-syne`, `--font-inter`). 기존 Instrument Serif/Sans·IBM Plex Mono는 **유지**. `app/globals.css`에 `--fg-*` 토큰 12개 추가.
   - **Pretendard는 이 태스크 범위 아님** (TASK B가 로컬 인스턴스로 처리. `/aios`에는 한글이 없다.)
2. **§1-1 헤더 전역 교체**: `components/site/header.tsx` — pill 네비(로고 Syne 500 17px, 메뉴 Inter 14px, active = 1px `#848484` 보더 pill).
3. **§1-2 푸터 전역 교체**: `components/site/footer.tsx` — 한 줄 미니멀형.
4. **§2 `/aios` 전면 재스킨**: S1~S6 피그마 카피·토큰 적용(`app/aios/page.tsx` + `page.module.css`, `content/aios.ts` 카피 갱신), **S7 `<IpPortfolio />`는 무변경 유지**, 기존 보라 글로우·serif 헤드라인 제거.
5. §4 반응형 규칙 적용 (aios + 헤더/푸터).

## 수정 허용 파일 (이 목록이 전부)

```
app/layout.tsx
app/globals.css
app/aios/page.tsx
app/aios/page.module.css
content/aios.ts
components/site/header.tsx  + header.module.css
components/site/footer.tsx  + footer.module.css
components/shared/*          (aios가 쓰는 것만: EmphasizedText, Reveal 등 — IpPortfolio는 수정 금지)
```

## 수정 금지 (TASK B 소유 / 스코프 밖)

- `app/devices/**` (yali 포함), `content/devices.ts`, `components/devices/**`
- `package.json` / `package-lock.json` — **npm install 금지** (B가 pretendard를 추가한다)
- `components/shared/IpPortfolio.*`, `content/home.ts`, `content/privatePhone.ts`, `content/yali.ts`
- `app/page.tsx`, `app/private-phone/**` (헤더/푸터 컴포넌트 교체로 자연히 바뀌는 것 외에 페이지 자체는 손대지 않음)

## 완료 기준

- [ ] `npm run lint` + `npm run build` 통과
- [ ] 1440px에서 `docs/figma-refs/aios-full.png`와 섹션별 시각 대조 일치 (IP 섹션 제외)
- [ ] IP Portfolio 섹션이 변경 전과 픽셀 동일
- [ ] 헤더/푸터 교체 후 `/`·`/private-phone`·`/devices`·`/devices/yali` 레이아웃 파손 없음 (390/768/1024/1440)
- [ ] `--fg-*` 토큰이 globals.css에 정의됨 (B의 fallback이 이 값과 일치하는지는 통합 시 확인)

## 통합 (둘 다 머지된 뒤 — 어느 쪽이 먼저 머지돼도 무방, 파일 겹침 없음)

1. B가 로컬 인스턴스화한 Syne/Inter를 layout 변수로 통합(선택, 후속 커밋).
2. 시각 대조 재확인 → 프로덕션 배포(`vercel deploy --prod` 또는 main 반영 확인)는 사용자/메인 세션이 수행.
