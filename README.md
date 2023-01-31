# react_basic

(복습- 기본) 생활코딩 - react 2022 개정판

### 0. 리엑트 설치 및 수정

- 리엑트 설치
  - npx create-react-app .
- 리엑트 시작
  - npm start
- 수정
  - 빈 화면 나오게끔 html, css, js 파일 수정
- 배포 방법
  - serve -s build
    - build 폴더 생김 (배포 시 사용하며 파일을 최대한 다이어트 시킨 녀석이 만들어짐)

### 1. 리엑트 컴퍼넌트 만들기

- Header
- Nav
- Article

### 2. Read 구현

- 클릭 시, Article 내용 바뀌게끔 구현
- id가 바뀌면, Article 컴퍼넌트에서 Read 해서 화면에 뛰우기

### 3. Create 구현

- 새로운 topic Create

- Mode 컴퍼넌트 추가

  - mode === 'Read' 일 때,
    - id=0 이면, **Create 버튼** 표시
    - id!=0 이면, **Update, Delete 버튼** 표시

- Create 버튼 누를 시
  - Read -> Create mode로 변환
    - Article 컴퍼넌트 / Read mode => title, desc 화면에 띄우기
    - Article 컴퍼넌트 / Create mode => form 형태 화면 띄우기
      - submit 누를시
        - topics에 정보 push
        - Read mode로 다시 전환

### 4. Delete 구현

- Delete 버튼 누를 시
  - Read -> Delete mode로 변환
  - tmp_topics 리스트를 만들고, topics 리스트에서 Delete id 뺀 나머지 채워넣기
  - id를 리스트의 인덱스 순서대로 다시 설정하기 (id 번호 재설정)

### 5. Update 구현

- Upate 버튼 누를 시
  - Read -> Update mode로 변환
  - Article 컴퍼넌트 / Update mode 이면, Update 컴퍼넌트로 이동
    - Update 컴퍼넌트
      - form value에 state 인 {title}, {desc} 넣기
      - form 값이 변경 시 마다 setState 변경 됨
      - onSubmit 이벤트 발생 시, 최종 title, desc 값 넘기기
