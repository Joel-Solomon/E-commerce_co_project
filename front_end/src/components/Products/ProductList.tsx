import Item from "./Item"

function ProductList(){
    return (
        <div style={{ display: "flex", gap: "30px", margin: 30}}>
            <Item/><Item/><Item/><Item/><Item/>
        </div>
    )
}
export default ProductList;