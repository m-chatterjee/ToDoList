let addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
    console.log("updating your list...");
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    if (localStorage.getItem("todoitems") == null) {
        arr = [];
        arr.push([title, desc]);
        localStorage.setItem("todoitems", JSON.stringify(arr));
    }
    else {
        arr = JSON.parse(localStorage.getItem("todoitems"));
        arr.push([title, desc]);
        localStorage.setItem("todoitems", JSON.stringify(arr));
    }

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";

});

function showList() {
    let tablebody = document.getElementById("tableBody");
    arr = JSON.parse(localStorage.getItem("todoitems"));
    let str = "";
    arr.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" onclick="toDelete(${index})" class="btn btn-outline-danger">Delete</button></td>
      </tr>`;
    });
    tablebody.innerHTML = str;
}

document.getElementById("show").addEventListener("click", showList);

function toDelete(index) {
    console.log("delete " + index);
    arr = JSON.parse(localStorage.getItem("todoitems"));
    arr.splice(index, 1);
    localStorage.setItem("todoitems", JSON.stringify(arr));
    showList();
}

function clearList() {
    if (confirm("Do you really want to clear the entire list?")) {
        localStorage.setItem("todoitems", JSON.stringify(new Array()));
        showList();
    }
}