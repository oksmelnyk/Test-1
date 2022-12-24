let colorsState;

const createElements = (element, count) => {
  return Array.from({ length: count }).map(() => {
    return document.createElement(element);
  });
};

document.getElementById("edit").addEventListener("click", () => {
  document.querySelector(".style").classList.add("d-none");
  document.querySelector(".editText").classList.remove("d-none");

  const text = document.querySelector(".result").innerHTML;
  document.getElementById("floatingTextarea2").value = text;
});

document.getElementById("save").addEventListener("click", () => {
  document.querySelector(".result").innerHTML =
    document.getElementById("floatingTextarea2").value;
});

document.getElementById("style").addEventListener("click", () => {
  document.querySelector(".editText").classList.add("d-none");
  document.querySelector(".style").classList.remove("d-none");
});

document.querySelectorAll(".radioBTN").forEach((element) => {
  element.addEventListener("change", (event) => {
    document.querySelector(".result").style.fontSize = event.target.value;
  });
});

document.getElementById("position").addEventListener("change", (event) => {
  document.querySelector(".result").style.fontFamily = event.target.value;
});

document.getElementById("textColor").addEventListener("click", () => {
  document.querySelector(".blockColors").classList.remove("d-none");
  colorsState = "text";
});

document.getElementById("backgroundColor").addEventListener("click", () => {
  document.querySelector(".blockColors").classList.remove("d-none");
  colorsState = "background";
});

document.querySelectorAll(".blockColors").forEach((element) => {
  element.addEventListener("click", (e) => {
    if (colorsState === "text") {
      document.querySelector(".result").style.color = getComputedStyle(
        e.target
      ).backgroundColor;
    } else {
      document.querySelector(".result").style.backgroundColor =
        getComputedStyle(e.target).backgroundColor;
    }
    document.querySelector(".blockColors").classList.add("d-none");
  });
});

document.getElementById("bold").addEventListener("change", (event) => {
  if (event.target.checked) {
    document.querySelector(".result").style.fontWeight = "bold";
  } else {
    document.querySelector(".result").style.fontWeight = "normal";
  }
});

document.getElementById("cursive").addEventListener("change", (event) => {
  if (event.target.checked) {
    document.querySelector(".result").style.fontStyle = "italic";
  } else {
    document.querySelector(".result").style.fontStyle = "normal";
  }
});

document.getElementById("btnADD").addEventListener("click", () => {
  document.querySelector(".result").classList.add("d-none");
  document.querySelector(".buttons").classList.add("d-none");
  document.querySelector(".constructor").classList.add("d-none");
  document.querySelector(".choose").classList.remove("d-none");
});

document.getElementById("chooseList").addEventListener("click", () => {
  console.log("lll");
  document.getElementById("listForm").classList.remove("d-none");
  document.getElementById("tableForm").classList.add("d-none");
});

document.getElementById("listForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const count = document.getElementById("listCount").value;
  const listType = document.getElementById("listType").value;

  const generateList = () => {
    const ulList = document.createElement("ul");
    ulList.classList.add(`${listType}-list`);

    createElements("li", count).forEach((element, index) => {
      element.innerText = `item ${index + 1}`;
      ulList.appendChild(element);
    });
    document.querySelector(".result").appendChild(ulList);
  };
  generateList();

  document.querySelector(".choose").classList.add("d-none");
  document.querySelector(".result").classList.remove("d-none");
  document.querySelector(".buttons").classList.remove("d-none");
  document.querySelector(".constructor").classList.remove("d-none");
});

document.getElementById("chooseTable").addEventListener("click", () => {
  document.getElementById("tableForm").classList.remove("d-none");
  document.getElementById("listForm").classList.add("d-none");
});

document.getElementById("tableForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const countTR = document.getElementById("tableCountTR").value;
  const countTD = document.getElementById("tableCountTD").value;

  const heightTD = document.getElementById("heightTD").value;
  const widthTD = document.getElementById("widthTD").value;
  const borderWidth = document.getElementById("tableBorder").value;
  const borderType = document.getElementById("borderType").value;
  const borderColor = document.getElementById("tableColor").value;

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  createElements("tr", countTR).forEach((tr) => {
    createElements("td", countTD).forEach((td) => {
      td.innerText = "TD";
      td.style.height = `${heightTD}px`;
      td.style.width = `${widthTD}px`;
      td.style.borderWidth = `${borderWidth}px`;
      td.style.borderStyle = borderType;
      td.style.borderColor = borderColor;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
  table.appendChild(tableBody);
  document.querySelector(".result").appendChild(table);

  document.querySelector(".choose").classList.add("d-none");
  document.querySelector(".result").classList.remove("d-none");
  document.querySelector(".buttons").classList.remove("d-none");
  document.querySelector(".constructor").classList.remove("d-none");
});
