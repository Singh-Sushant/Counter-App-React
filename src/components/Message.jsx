export const Message=({msg,classname,value=''})=>{

    const myclass = `text-center ${classname}`;
    return(<h2 className={myclass}>{msg}{value}</h2>);

}