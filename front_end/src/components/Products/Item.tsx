function Item({}) {
  return (
    <div
      style={{
        height: 280,
        width: 190,
        backgroundColor: "#D49F9F",
        textAlign: "center",
        borderRadius: 5,
        margin: 30
      }}
    >
      <h1
        style={{
          padding: "10px 10px",
          textAlign: "center",
          color: "white",
          fontSize: 20,
          textDecoration: "underline"

        }}
      >
        ENTER FOOD
      </h1>
      <p style={{ fontSize: 10, textAlign: "left", padding: "0px 10px" }}>
        Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
      </p>
    </div>
  );
}

function ItemBS ({}){
  return (
    <div
      style={{
        height: 200,
        width: 170,
        backgroundColor: "#D49F9F",
        textAlign: "center",
        borderRadius: 5,
        margin: 10
      }}
    >
      <h1
        style={{
          padding: "10px 10px",
          textAlign: "center",
          color: "white",
          fontSize: 20,

        }}
      >
        ENTER BEST SELLERS
      </h1>
      <p style={{ fontSize: 10, textAlign: "left", padding: "0px 10px" }}>
        Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
      </p>
    </div>
  )
}

export default Item;
export {ItemBS};
