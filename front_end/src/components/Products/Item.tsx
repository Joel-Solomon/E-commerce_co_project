function Item({}) {
  // const CardStyling = {}
  // if (name)
  //     return <h1 style={{color: "red"}}>ITEM {name} CARD</h1>;
  // return <h1>Hello World!</h1>

  return (
    <div
      style={{
        height: 280,
        width: 190,
        backgroundColor: "#D49F9F",
        textAlign: "center",
        borderRadius: 5,
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

export default Item;
