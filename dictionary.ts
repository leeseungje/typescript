// type 정의
type Words = {
  [key: string]: string
}

class Dict {
  private words: Words
  constructor() {
    this.words = {} // 빈 객체
  }
  add(word: Word) {
    // 추가
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def
    }
  }
  get(term: string) {
    // 받기
    return this.words[term]
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def
    }
  }
  delete(term: string) {
    // 삭제
    if (this.words[term] !== undefined) {
      // term 값이 있을때 예외 처리
      delete this.words[term]
    }
  }
  showAll() {
    // 아이템 추가된 Object
    console.log(Object.keys(this.words))
  }
  count() {
    // 갯수
    console.log(Object.keys(this.words).length)
  }
}

// 사전에 입력 받을 단어의 타입 정의
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '맛있어')
const pork = new Word('pork', '부드러워')

const dict = new Dict()
dict.add(kimchi) // kimchi 변수 추가
dict.add(pork) // pork 변수 추가
console.log('김치:', dict.get('kimchi'))
console.log('돼지고기:', dict.get('pork'))

dict.showAll()
dict.count()

dict.update(new Word('kimchi', '매워도 너무너무너무 매워 힘들어 ㅠㅠ'))
console.log('김치:', dict.get('kimchi'))

dict.delete('kimchi')
dict.showAll()
