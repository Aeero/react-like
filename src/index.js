import ReactLike from './reactLike';


function Hello(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.children}</span>
    </div>
  )
}

console.log(ReactLike)
class World extends ReactLike.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>World</div>
    )
  }
}

ReactLike.render(
  <div t="9">
    <Hello name="123456789">987654321</Hello>
    <World></World>
    <div>world</div>
    <p>萨菲罗斯解放了三菱电机fig就立即离开</p>
    <input value="898" />
  </div>,
  document.getElementById('app')
)




//
// import ReactLike, { Component } from 'react';
//
// function TT() {
//   return <div>t</div>
// }
//
// const v = <div><TT name="t">00</TT></div>
//
// debugger
