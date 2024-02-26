
const addSectionModal = document.getElementById("addSectionModal");
const addSectionButton = document.getElementById("addSectionButton");
const lectureContainer1 = document.getElementById("lectureContainer");
const sectionContainer = document.getElementById("sectionContainer")
const inputSectionName = document.getElementById("inputSectionName");

let term = 0;

addSectionButton.addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    term++

    const modalId = 'addLectureModal-' + term;
    const inputLectureNameId = 'inputLectureName-' + term;
    const secTionId = "section-" + term;
    const courseId = "course-" + term;
    const courseListId = "courseList-" + term;
    const sectionName = inputSectionName.value;
    if (sectionName.trim() !== "") {
        const sectionItem = document.createElement("div");
        sectionItem.innerHTML = `
        <div id="${secTionId}" class="bg-light rounded p-2 mb-4">
        <h4>${sectionName}</h4>
        <!-- List group -->
        <div class="list-group list-group-flush border-top-0" id="${courseListId}">
            <div id="${courseId}">
                
            </div>
        </div>
        <a href="#"  class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">Add Lecture +</a>
    </div>

    <form class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="addLectureModalLabel" aria-hidden="true" name="lec1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="addLectureModalLabel">Add New Lecture</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input id="${inputLectureNameId}" class="input_model form-control mb-3" type="text" placeholder="Add new lecture " />
                        <button id="addNewLecture_btn" class="addNewLecture_btn btn btn-primary" type="submit">Add New Lecture</button>
                        <button class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" type="Button">Close</button>
                    </div>
                </div>
            </div>
        </form>
              `;
        sectionContainer.appendChild(sectionItem)
        inputSectionName.value = "";

        const addLectureModal = document.getElementById(modalId);

        addLectureModal.addEventListener('submit', function (event) {
            event.preventDefault();
            term++;
            const inputLectureName = event.target.querySelector(".input_model");;
            const lectureName = inputLectureName.value;
            const lectureId = "lecture-" + term;
            const collapselistId = "collapselist-" + term;
            if (lectureName.trim() !== "") {
                const lectureItem = document.createElement("div");
                lectureItem.innerHTML = `
            <div class="list-group-item rounded px-3 text-nowrap mb-1" id="${lectureId}">
                <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0 text-truncate">
                        <a href="#" class="text-inherit">
                            <i class="fe fe-menu me-1 align-middle"></i>
                            <span id="lectureName" class="align-middle">${lectureName}</span>
                        </a>
                    </h5>
                    <div>
                        <a id="editbtn" href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Edit">
                            <i class="fe fe-edit fs-6"></i>
                        </a>
                        <a id="deleteBtn" href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top"
                            title="Delete">
                            <i class="fe fe-trash-2 fs-6"></i>
                        </a>
                        <a href="#" class="text-inherit" data-bs-toggle="collapse"
                            data-bs-target="#${collapselistId}" aria-expanded="false"
                            aria-controls="${collapselistId}">
                            <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                        </a>
                    </div>
                </div>
                <div id="${collapselistId}" class="collapse" aria-labelledby="${lectureId}"
                    data-bs-parent="#${courseListId}">
                    <div class="p-md-4 p-2">
                        <a href="#" class="btn btn-secondary btn-sm"}>Add Article +</a>
                        <a href="#" class="btn btn-secondary btn-sm"data-bs-toggle="modal" data-bs-target="#newCatgory">Add Description +</a>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="newCatgory" tabindex="-1" role="dialog" aria-labelledby="newCatgoryLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title mb-0" id="newCatgoryLabel">Create New Category</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="needs-validation" novalidate>
              <div class="mb-3 mb-2">
                <label class="form-label" for="title">
                  Title
                  <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" placeholder="Write a Category" id="title" required />
                <small>Field must contain a unique value</small>
                <div class="invalid-feedback">Please enter category.</div>
              </div>
              <div class="mb-3 mb-2">
                <label class="form-label">Slug</label>
                <label for="basic-url" class="form-label">Your vanity URL</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon3">https://example.com</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <small>Field must contain a unique value</small>
              </div>
              <div class="mb-3 mb-2">
                <label class="form-label" for="parent">Parent</label>
                <select class="form-select" id="parent" required>
                  <option selected value="">Select</option>
                  <option value="Course">Course</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Company">Company</option>
                </select>
              </div>
              <div class="mb-3 mb-3">
                <label class="form-label">Description</label>
                <div id="editor">
                  <br />
                  <h4>One Ring to Rule Them All</h4>
                  <br />
                  <p>
                    Three Rings for the
                    <i>Elven-kingsunder</i>
                    the sky,
                    <br />
                    Seven for the
                    <u>Dwarf-lords</u>
                    in halls of stone, Nine for Mortal Men,
                    <br />
                    doomed to die, One for the Dark Lord on his dark throne.
                    <br />
                    In the Land of Mordor where the Shadows lie.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div class="mb-2">
                <label class="form-label">Enabled</label>
                <div class="form-check form-switch">
                  <input type="checkbox" class="form-check-input" id="customSwitch1" checked />
                  <label class="form-check-label" for="customSwitch1"></label>
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Add New Category</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
                `;
                document.querySelector('#' + courseId).appendChild(lectureItem);
                inputLectureName.value = "";
            }

            document.querySelectorAll('#editbtn').forEach((editButton) => {
                editButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    const lectureElement = event.target.closest('.list-group-item');
                    const lectureNameElement = lectureElement.querySelector('#lectureName');
                    const currentLectureName = lectureNameElement.textContent;
                    const inputElement = document.createElement('input');

                    inputElement.type = 'text';
                    inputElement.style = 'border: none; border-bottom: 1px solid #000;outline: none;padding:2px; background-color: #1e293b;color: #fff;font-family:"Inter",sans-serif;'
                    inputElement.value = currentLectureName;

                    lectureNameElement.innerHTML = '';
                    lectureNameElement.appendChild(inputElement);
                    inputElement.focus();

                    inputElement.addEventListener('blur', updateLectureName);
                    inputElement.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            updateLectureName(event);
                        }
                    });

                    function updateLectureName(event) {
                        event.preventDefault();
                        const newLectureName = inputElement.value;
                        lectureNameElement.textContent = newLectureName;
                        inputElement.removeEventListener('blur', updateLectureName);
                        inputElement.removeEventListener('keydown', updateLectureName);
                    }
                });
            });

            document.querySelectorAll('#deleteBtn').forEach((deleteButton) => {
                deleteButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    const lectureElement = event.target.closest('.list-group-item');
                    lectureElement.remove();
                });
            });


        });
    }
});

