type Congif = {
  path: string
  state: object
}

type Push = {
  (path: string): void
  (config: Congif): void
}

const push: Push = (config) => {
  if (typeof config === 'string') console.log(config)
  else {
    console.log(config.path)
  }
}

type SuperPrint = {
  <generic>(arr: generic[]): void
}

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(['1', '2', '3', 4])
