export const Button=({fn,val , classname})=>{
    const clicked=()=>{
        fn(val);
        
    }
    return (<button onClick={clicked} className={classname}>{val}</button>)
}