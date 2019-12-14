import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        show: true
    }

    handleClick = () => {

        // this.txt.focus();
        this.setState({
            show: !this.state.show
        });
    }

    componentDidMount() {
        console.log("didMount", this.txt);
    }

    getRef = el => {
        console.log("函数被调用了", el);
        this.txt = el;
    }

    render() {
    

        return (
            <div>
                {
                    // 这么写的话 函数只会组件加载和卸载时调用
                    this.state.show && <input ref={this.getRef} type="text" />
                }
                <button  onClick={this.handleClick}>显示/隐藏</button>

            </div>
        )
    }
}
