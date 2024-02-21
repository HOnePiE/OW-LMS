const addLectureModal = document.getElementById("addLectureModal");
const addSectionModal = document.getElementById("addSectionModal");
const addLectureButton = document.getElementById("addLectureButton");
const addSectionButton = document.getElementById("addSectionButton");

const lectureContainer1 = document.getElementById("courseOne");
const inputLectureName = document.getElementById("inputLectureName");
let collapseListNumber = 0;
// console.dir(lectureContainer);
console.dir(inputLectureName);
console.dir(addLectureModal);
console.dir(addSectionModal);
// document.addEventListener("DOMContentLoaded", function () {
// addSectionButton.addEventListener("click", function (event){
// console.log("clicked");
//     event.preventDefault();
//     var sectionName = getSection.value;
//     if (sectionName.trim() !== "") {
//         var sectionItem = document.createElement("div");
//         sectionItem.classList.add("bg-light");
//         sectionItem.classList.add("rounded");
//         sectionItem.classList.add("p-2");
//         sectionItem.classList.add("mb-4");
//         sectionItem.innerHTML = `
//                 <h4>${sectionName}</h4>
//                 <div class="list-group list-group-flush border-top-0" id="courseListSecond${sectionName}">
//                 </div>
//                 <a href="#" class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#addLectureModal">Add Lecture +</a>
//               `;
//         document.getElementsByClassName("card-body")[0].appendChild(sectionItem);
//         $("#addSectionModal").modal("hide");
//     }
// })

addLectureButton.addEventListener("click", function (event) {
  collapseListNumber++;
  event.preventDefault();
  var lectureName = inputLectureName.value;
  if (lectureName.trim() !== "") {
    var lectureItem = document.createElement("div");
    // lectureItem.classList.add('list-group-item');
    // lectureItem.classList.add('rounded');
    // lectureItem.classList.add('px-3');
    // lectureItem.classList.add('text-nowrap');
    // lectureItem.classList.add('mb-1');
    lectureItem.innerHTML = `
    <div class="list-group-item rounded px-3 text-nowrap mb-1">
    <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0 text-truncate">
            <a href="#" class="text-inherit">
                <i class="fe fe-menu me-1 align-middle"></i>
                <span class="align-middle">${lectureName}</span>
            </a>
        </h5>
        <div>
            <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" title="Edit">
                <i class="fe fe-edit fs-6"></i>
            </a>
            <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" title="Delete">
                <i class="fe fe-trash-2 fs-6"></i>
            </a>
            <a
                href="#"
                class="text-inherit"
                data-bs-toggle="collapse"
                data-bs-target="#collapselist-${collapseListNumber}"
                aria-expanded="false"
                aria-controls="collapselist-${collapseListNumber}">
                <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
            </a>
        </div>
    </div>
    <div id="collapselist-${collapseListNumber}" class="collapse" aria-labelledby="sample" data-bs-parent="#courseList">
        <div class="p-md-4 p-2">
            <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
            <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
        </div>
    </div>
</div>
        `;
    lectureContainer1.appendChild(lectureItem);
    // $("#addLectureModal").modal("hide");
  }
});

// addSectionModal.addEventListener("submit", function (event) {
//   event.preventDefault();
//   var sectionName = document.getElementById("sectionName").value;
//   if (sectionName.trim() !== "") {
//     var sectionItem = document.createElement("div");
//     sectionItem.classList.add("bg-light");
//     sectionItem.classList.add("rounded");
//     sectionItem.classList.add("p-2");
//     sectionItem.classList.add("mb-4");
//     sectionItem.innerHTML = `
//             <h4>${sectionName}</h4>
//             <div class="list-group list-group-flush border-top-0" id="courseListSecond${sectionName}">
//             </div>
//             <a href="#" class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#addLectureModal">Add Lecture +</a>
//           `;
//     document.getElementsByClassName("card-body")[0].appendChild(sectionItem);
//     $("#addSectionModal").modal("hide");
//   }
// });
