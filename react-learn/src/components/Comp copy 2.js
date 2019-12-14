import React, { Component } from 'react'

export default class Comp extends Component {

    constructor(props) {
        super(props);
        this.txt = React.createRef();

        // this.obj = { a: 0 }  // 控制台展开对象显示是当前瞬间的值
        // console.log(this.obj);
        // setInterval(() => {
        //     this.obj.a = this.obj.a + 1
        //     console.log(this.obj.a)
        // }, 1000);

    }

    handleClick = () => {
        this.txt.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.txt} type="text" />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
