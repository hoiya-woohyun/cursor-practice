# 📋 Cursor Rules 폴더 구조

이 폴더는 Cursor AI의 동작을 제어하는 규칙들을 체계적으로 관리합니다.

## 📁 파일 구조

```
.cursor/rules/
├── README.md                    # 이 파일 - 폴더 구조 설명
├── basic-coding-rules.mdc       # 기본 코딩 규칙
├── variable-naming-rules.mdc    # 변수명 규칙
├── logic-pattern-rules.mdc      # 로직 패턴 규칙
├── verification-rules.mdc       # 검증 관련 규칙
├── learning-objectives.mdc      # 학습 목표 및 가이드
└── test2.mdc                    # GUI로 생성한 테스트 규칙
```

## 🎯 각 파일의 역할

- **basic-coding-rules.mdc**: 전반적인 코딩 스타일과 기본 규칙
- **variable-naming-rules.mdc**: 변수명 규칙과 명명 컨벤션 (배열은 'List'로 끝나야 함)
- **logic-pattern-rules.mdc**: 조건문, 반복문 등의 로직 패턴 (if-else, for loop 사용)
- **verification-rules.mdc**: 코드 검증 및 리뷰 규칙
- **learning-objectives.mdc**: 교육적 목표와 학습 가이드
- **test2.mdc**: GUI로 생성한 테스트 규칙 파일

## 🔄 파일 형식 변경 사항

- **기존**: `.md` 형식의 마크다운 파일들
- **현재**: `.mdc` 형식의 Cursor Project Rules 파일들
- **이유**: Cursor의 Project Rules에서 제대로 인식되도록 `.mdc` 형식으로 변환

## 📝 .mdc 파일 형식 특징

- **YAML 헤더**: `description`, `globs`, `alwaysApply` 설정 포함
- **적용 범위**: TypeScript, JavaScript 파일들 (`**/*.ts`, `**/*.tsx`, `**/*.js`, `**/*.jsx`)
- **자동 적용**: `alwaysApply: true`로 설정하여 항상 적용
- **Project Rules**: Cursor의 Project Rules에서 자동으로 인식됨

## 🎯 Verify 브랜치 특화 규칙

이 프로젝트는 Verify 브랜치의 특별한 규칙들을 포함합니다:

- 배열 변수명은 'List'로 끝나야 함
- filter 메서드 사용 금지
- if-else 문과 for loop 사용 권장
- 의미있는 변수명 사용 필수
