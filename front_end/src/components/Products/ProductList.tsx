import Item from "./Item"
import {ItemBS} from "./Item"

function ProductList({}){
    return (
        <div style = {{display: "flex", margin : 10, }}>
            <Item/><Item/><Item/><Item/><Item/><Item/><Item/>
        </div>
    )
}

function ProdListBS({}){
    return (
        <div style = {{display: "flex"}}>
            <ItemBS /><ItemBS /><ItemBS /><ItemBS /><ItemBS />
        </div>
    )
}

export default ProductList;
export {ProdListBS};
