const addLectureModal = document.getElementById("addLectureModal");
const addSectionModal = document.getElementById("addSectionModal");

const addSectionButton = document.getElementById("addSectionButton");

const lectureContainer1 = document.getElementById("lectureContainer");
const sectionContainer = document.getElementById("sectionContainer")
const inputSectionName = document.getElementById("inputSectionName");

let collapseListNumber = 0;
let courseSectionOrder = 0;
let courseLectureOrder = 0;
let sectionIdOrder = 0;
let lectureIdOrder = 0;
let sectionModelId = 0;

// console.dir(inputLectureName);
// console.dir(addLectureModal);
// console.dir(addSectionModal);

let currentSectionId = "";

console.log(document.getElementById("SectionSample").parentElement.id);

addSectionButton.addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    sectionIdOrder++
    var modalId = 'addLectureModal-' + sectionIdOrder;
    var sectionName = inputSectionName.value;
    if (sectionName.trim() !== "") {
        var sectionItem = document.createElement("div");
        sectionItem.innerHTML = `
        <div id="section-${sectionIdOrder}" class="bg-light rounded p-2 mb-4">
        <h4>${sectionName}</h4>
        <!-- List group -->
        <div class="list-group list-group-flush border-top-0" id="courseList">
            <div id="course-${courseLectureOrder}">
                
            </div>
        </div>
        <a href="#"  class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">Add Lecture +</a>
    </div>

    <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="addLectureModalLabel" aria-hidden="true" name="lec1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="addLectureModalLabel">Add New Lecture</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input id="inputLectureName" class="form-control mb-3" type="text" placeholder="Add new lecture " />
                        <button id="addLectureButton" class="btn btn-primary" type="button">Add New Lecture</button>
                        <button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                    </div>
                </div>
            </div>
        </div>
              `;
        sectionContainer.appendChild(sectionItem)
        // const currentSectionId2 = document.getElementsByClassName('bg-light')[1].id;
        // console.log(currentSectionId2);
        // define addLectureButton and inputLectureName before section is renderedx
        const addLectureButton = document.getElementById("addLectureButton");
        const inputLectureName = document.getElementById("inputLectureName");

        addLectureButton.addEventListener('click', function() {
            console.log("clicked add lectured");
            var lectureName = inputLectureName.value;
            console.log(lectureName);
            var lectureId = 0;
            if (lectureName.trim() !== "") {
                var lectureItem = document.createElement("div");
                lectureItem.innerHTML = `
                <div class="list-group-item rounded px-3 text-nowrap mb-1" id="${lectureId}">
                <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0 text-truncate">
                        <a href="#" class="text-inherit">
                            <i class="fe fe-menu me-1 align-middle"></i>
                            <span class="align-middle">${lectureName}</span>
                        </a>
                    </h5>
                    <div>
                        <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Edit">
                            <i class="fe fe-edit fs-6"></i>
                        </a>
                        <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Delete">
                            <i class="fe fe-trash-2 fs-6"></i>
                        </a>
                        <a href="#" class="text-inherit" data-bs-toggle="collapse"
                            data-bs-target="#collapselistFive" aria-expanded="false"
                            aria-controls="collapselistFive">
                            <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                        </a>
                    </div>
                </div>
                <div id="collapselistFive" class="collapse" aria-labelledby="${lectureId}"
                    data-bs-parent="#courseListSecond">
                    <div class="p-md-4 p-2">
                        <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                        <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                    </div>
                </div>
            </div>
                `;
                document.querySelector('#section-' + sectionIdOrder).appendChild(lectureItem);
            }
        });
    }
});


