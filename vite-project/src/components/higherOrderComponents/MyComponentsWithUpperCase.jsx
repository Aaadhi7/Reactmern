//Higher-Order component (HOC) as unctional Component
const WithUpperCase = (WrappedComponent)=>{
    return function ({text,...restProps}) {
        const upperCaseText = text.toUpperCase();
        return <WrappedComponent text={upperCaseText} {...restProps} />
    }
}

//Component
const myComponent = ({text}) => <div>{text}</div>;

//Usage of HOC
const MyComponentsWithUpperCase = WithUpperCase(myComponent);

export default MyComponentsWithUpperCase;