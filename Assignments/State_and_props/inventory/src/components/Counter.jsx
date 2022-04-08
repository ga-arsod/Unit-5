import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
      books: 12,
      pen: 9,
      notebook: 14
  });

  let total = inv.books + inv.notebook + inv.pen;

  const handleChange = (value, item) => {
    if(item == "book") {
        if(inv.books == 0) {
            if(value == -1) {
                return;
            }
        }
        setInv(changeState => {
        return { ...changeState, books: inv.books + value}
        })
    }

    if(item == "note") {
        if(inv.notebook == 0) {
            if(value == -1) {
                return;
            }
        }
        setInv(changeState => {
        return { ...changeState, notebook: inv.notebook + value}
        })
    }

    if(item == "pen") {
        if(inv.pen == 0) {
            if(value == -1) {
                return;
            }
        }
        setInv(changeState => {
        return { ...changeState, pen: inv.pen + value}
        })
    }
}
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button 
        onClick={() => {
          handleChange(1, "book")
          }}
        className="circlularButton">+</button>
        <button
        onClick={() => {
          handleChange(-1, "book")
          }}
        className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>

      <div className="items">
        <span>Notebooks: </span>
        <button 
        onClick={() => {
          handleChange(1, "note")
          }}
        className="circlularButton">+</button>
        <button
        onClick={() => {
          handleChange(-1, "note")
          }}
        className="circlularButton">-</button>
        <span>{inv.notebook}</span>
      </div>

      <div className="items">
        <span>Pens: </span>
        <button 
        onClick={() => {
          handleChange(1, "pen")
          }}
        className="circlularButton">+</button>
        <button
        onClick={() => {
          handleChange(-1, "pen")
          }}
        className="circlularButton">-</button>
        <span>{inv.pen}</span>
      </div>
      
      total: {total}
    </div>
  );
};