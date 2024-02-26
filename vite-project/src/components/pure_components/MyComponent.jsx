import React,{PureComponent} from "react";

class MyComponent extends PureComponent {
    render(){
        console.log("Component is re-rendering");
        return <div>Hello {this.props.name}</div>
    }
}

export default MyComponent;