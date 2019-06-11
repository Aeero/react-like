// https://github.com/MrErHu/blog/issues/23


import ReactLike from './reactLike';


function Hello(props) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  )
}

console.log(ReactLike)
class World extends ReactLike.Component {
  constructor() {
    super();

    this.state = {
      text: 1
    };
  }

  add = () => {
    this.setState({
      text: this.state.text + 1
    });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.text}></Hello>
        <button onClick={this.add}>加1</button>
      </div>
    )
  }
}

ReactLike.render(
  <div t="9">
    <World>

    </World>

    <p>萨菲罗斯解放了三菱电机fig就立即离开</p>
    <input value="898" />
  </div>,
  document.getElementById('app')
)





// import ReactLike, { Component } from 'preact/src/preact';
//
// function TT() {
//   return <div>t</div>
// }
//
// const v = (
//   <div>
//     <TT name="t">
//     {
//       [1, 2, 3, 4].map((item, index) => item + index)
//     }
//     </TT>
//   </div>
// )
//
// ReactLike.render(v, document.getElementById('app'));
