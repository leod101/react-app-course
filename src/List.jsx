import React from "react";

const items = [
  {
    id: 1,
    name: "item 1 ",
    tasc: "totul ok",
    icon: "🥵",
    isCompleted: true,
  },
  {
    id: 2,
    name: "item 2 ",
    tasc: "Roma",
    icon: "⭐",
    isCompleted: false,
  },
  {
    id: 3,
    name: "item 3 ",
    tasc: "Engleza",
    icon: "🔥",
    isCompleted: false,
  },
  {
    id: 4,
    name: "item 4 ",
    tasc: "Russa",
    icon: "🔥",
    isCompleted: true,
  },
];

function List() {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} className={item.isCompleted ? "completed" : ""}>
            <section>
              <span>{item.icon}</span>
              <span>{item.name}</span>
              <span>{item.tasc}</span>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default List;
