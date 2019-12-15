import React from 'react'

// 函数组件使用ref转发

function A(props, ref) {
    return <h1 ref={ref}>
        组件A
        <span>{props.words}</span>
    </h1>
}

//传递函数组件A，得到一个新组件NewA
const NewA = React.forwardRef(A);

export default class App extends React.Component {

    ARef = React.createRef()

    componentDidMount() {
        console.log(this.ARef);
    }


    render() {
        return (
            <div>
                {/* 这里可以将ref看成NewA的一个属性，他会将ref传递给A的第二个参数 */}
                <NewA ref={this.ARef} words="asfsafasfasfs" />

            </div>
        )
    }
}
