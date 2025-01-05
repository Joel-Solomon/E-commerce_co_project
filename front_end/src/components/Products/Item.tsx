function Item() {
  // const CardStyling = {}
  // if (name)
  //     return <h1 style={{color: "red"}}>ITEM {name} CARD</h1>;
  // return <h1>Hello World!</h1>

  return (
    <div
      style={{
        height: 200,
        width: 170,
        backgroundColor: "#D49F9F",
        textAlign: "center",
        borderRadius: 5,
      }}
    >
      <h1
        style={{
          padding: "80px 10px",
          textAlign: "center",
          color: "white",
          fontSize: 30,
        }}
      >
        ENTER FOOD
      </h1>
    </div>
  );
}

export default Item;
