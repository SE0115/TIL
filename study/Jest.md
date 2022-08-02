# Jest

Jest는 페이스북에서 만든 단순함에 초첨을 둔 자바스크립트 테스트 프레임워크로 비교적 사용이 간단하고
`Babel`, `TypeScript`, `Node`, `React`, `Angular`, `Vue` 등을 사용하는 프로젝트에서 사용할 수 있다.

또한, Jest는 라이브러리 하나만 설치하면 Test Runner와 Test Mathcher 그리고 Test Mock 프레임워크까지 제공해준다.

<br/>

## Jest 설치

`npm install --save-dev jest`

`yarn add --dev jest`

<br/>

## Package.json 파일 스크립트 수정

```json
"script" : {
    "test": "jest"
}
```

`package.json` 파일을 위와 같이 수정해주면, <br/>
`npm test` 명령어를 통해 `jest` 명령어를 실행할 수 있다.

<br/>

## 테스트 코드 작성

`npm test`로 Jest를 실행하면 Jest는 프로젝트 내 모든 테스트 파일을 찾아 테스트를 실행해준다.

기본적으로 `test.js`로 끝나는 파일이나 `__test__` 폴터 안의 파일들을 모두 테스트 파일로 인식한다.

만약, 특정 테스트 파일만 실행하고 싶다면 `npm test [파일명이나 경로]`로 특정 파일만 테스트를 실행할 수 있다.

```js
test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});

// 예시
test("sum(1,2)", () => {
  expect(sum(1, 2)).toBe(3);
});
```

<br/>

### Test Matcher

Jest는 Matcher를 사용하여 다양한 방식으로 값을 테스트할 수 있다.

- `.toBe(x)`
- `.toEqual(obj)`

📑 [공식문서 Matcher 참고](https://jestjs.io/docs/using-matchers)

<br/>

## Jest에서 ES6 모듈 사용

Jest에서 `import`, `export`를 사용하면 오류가 발생한다.<br/>
이러한 오류가 발생하는 이유는 Jest가 ES6를 지원하지 않기 때문이다.<br/>

이와 같은 문제를 해결하기 위한 방법은 2가지가 있다.

1. Babel 사용하여 ES6를 commonjs로 변환
2. Jest의 Expremental Support 사용

### 1. Babel 사용

먼저, `@types/jest @babel/core @babel/preset-env`를 설치해준다.<br/>
`npm i -D jest @types/jest @babel/core @babel/preset-env`

<br/>

그 다음, `babel.config.json` 파일을 생성하고 아래와 같이 작성해준다.

```json
{
  "presets": ["@babel/preset-env"]
}
```

<br/>

### 2. Jest의 Expremental Support 사용

아래와 같이 `package.json` 파일의 스크립트 부분을 수정해주기만 하면 된다.

```json
 "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
```
