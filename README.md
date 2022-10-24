# typescript

Typescript로 블록체인 만들기

## Call Signatures

- 함수나 변수를 지정할 때 호출(a, b) 값이 어떤 타입인지.. 또는
- 반환(return)시 정확한 타입값을 선언 해주는 것

```javascript
type Add = (a: number, b: number) => number // 이 방식이 Call Signatures

const add: Add = (a, b) => a + b // Add type값 호출
```

## Overloading

- 함수가 여러개의 call signatures를 가지고 있을 때 발생

```javascript
type Config = {
  path: string
  state: object
}

type Push = {
  (path: string): void
  (config: Config): void
}

const push: Push = (config) => {
  if (typeof config === 'string') console.log(config) // Push.
  else {
    console.log(config.path, config.state)
  }
}
```

## generic

- 타입의 placeholder 같은 역할

```javascript
type SuperPrint = {
  <Generic>(arr: Generic[]): Generic // 이런식으로 generic값을 넣어주면 하나의 call Signatures로 모든 타입을 읽을 수 있다.
}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(['1', '2', '3', 4])
```
