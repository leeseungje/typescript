type NickName = string
type Team = 'red' | 'blue' | 'yellow' // concrete 타입
type Health = 1 | 5 | 10

interface Player {
  // reactjs에서 많이 쓰이는 방식  오로지 Object만 가능
  nickName: NickName
  team: Team
  health: Health
}

const leeseungje: Player = {
  nickName: 'Crows',
  team: 'red',
  health: 1
}
