// menu
$(window).scroll(function () {
  var header = $('header');
  scroll = $(window).scrollTop();
  if (scroll >= 50) header.addClass('fixed');
  else header.removeClass('fixed');
  if (scroll >= 25) header.addClass('navScroll');
  else header.removeClass('navScroll');
});





// SEARCH FUNCTION
function searchFunction() {
  let getSearchInfo = document.querySelector('#FindFes');
  let getFesInfo = document.querySelectorAll('.FesInfo');
  var count = 0;
  getSearchInfo.value = getSearchInfo.value.toLowerCase();
  getFesInfo.forEach(function (info) {
    let text = info.innerText.toLowerCase();
    if (text.indexOf(getSearchInfo.value) > -1) {
      info.style.display = "";
      count++;
      // if(count != 0)
      // {
      //     // document.getElementById('showtext').style.display = "";
      // }
      document.getElementById('showtext').innerHTML = '';
    }
    else {
      info.style.display = "none";
      if (count != 0) {
        document.getElementById('showtext').innerHTML = '';
      }
      else {
        document.getElementById('showtext').innerHTML = 'No festivals found !!!';
      }
    }
  })

}




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const name_item = document.querySelectorAll('.name_item');
const element_cakes = document.querySelectorAll('.element_cakes');
const filter_button = document.querySelectorAll('#filter_button .btn');

// filter
Array.from(filter_button).forEach(function (button) {
  button.addEventListener('click', function (event) {

    for (let i = 0; i < filter_button.length; i++) {
      filter_button[i].classList.remove('active');
    }
    this.classList.add('active');

    let buttonAttr = event.target.dataset.filter;
    // let buttonAttr = button.getAttribute('data-filter');
    Array.from(element_cakes).forEach(function (element) {
      let elementAttr = element.dataset.item; // lấy giá trị data-* dùng getAttribute hoặc dataset
      if (buttonAttr === elementAttr || buttonAttr === 'all') {
        element.style.display = 'block';
      }
      else {
        element.style.display = 'none';
      }
    })
  })
})

// rating and comment
function dataSend() {
  event.preventDefault();

  var rating = '';
  if (document.getElementById('1').checked) {
    rating = document.getElementById('1').value;
  } else if (document.getElementById('2').checked) {
    rating = document.getElementById('2').value;
  } else if (document.getElementById('3').checked) {
    rating = document.getElementById('3').value;
  } else if (document.getElementById('4').checked) {
    rating = document.getElementById('4').value;
  } else if (document.getElementById('5').checked) {
    rating = document.getElementById('5').value;
  }

  var url = '';
  if(document.getElementById('url').value == ''){
    url = 'img/logo-rating.gif';
  } else {
    url = document.getElementById('url').value;
  }

  var userName  = document.getElementById('userName').value;
  var textarea  = document.getElementById('textarea').value;

  // time
  var today = new Date();
  var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = time + ' ' + date;
  // end time

  if (rating == '' || userName == '' || textarea == '') {
    alert("Please select rating and enter full informationil! \nThanks you!!!");
    return;
  }
  else {
    var evaluates = [];
    evaluates.push({
      rating  : rating,
      userName: userName,
      url     : url,
      textarea: textarea,
      dateTime: dateTime,
    });

    var evaluatesView = ``;

    evaluates.forEach((evaluate) => {
      evaluatesView +=  `
                          <div class="row mb-1 border-0">
                            <div class="col-3">
                              <img src="${evaluate.url}" style="width: 80px;height: 80px;border-radius: 40px;-o-object-fit: cover;object-fit: cover;-o-object-position: center;object-position: center;">
                            </div>
                            <div class="col-9 bg-white">
                              <h5>
                                ${evaluate.userName}
                              </h5>
                              <p>
                                ${evaluate.textarea}
                              </p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center mr-2">
                                  <label style="color:blue; font-size:15px; ">
                                    ${evaluate.dateTime}
                                  </label>
                                </div>
                                <div class="rat">
                                  <label>
                                    ${evaluate.rating}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
    });

    document.getElementById('list-evaluates').innerHTML = evaluatesView;
    return;
  } return;
}

// start contact
function send() {
  // Take NAME
  var getName = document.getElementById('nameNine');
  var Name = getName.value;
  var showName = "";

  // Take Gender
  var getGender = document.getElementsByTagName('input');
  var checkMale = getGender[1].checked;
  var checkFemale = getGender[2].checked;
  var GenderArray = new Array();
  for (var x = 1; x < 3; x++) {
    if (getGender[x].checked) {
      GenderArray.push(getGender[x].value);
    }
  }
  // Take EMAIL 
  var getEmail = document.getElementById('emailNine');
  var Email = getEmail.value;
  var showEmail = "";

  // Take Phone Number
  var getPhoneNumber = document.getElementById('phoneNine');
  var PhoneNumber = getPhoneNumber.value;
  var showPhoneNumber = "";

  // Take Address
  var getAddress = document.getElementById('addressNine');
  var Address = getAddress.value;


  // Take Region
  var getRegion = document.getElementsByTagName('input');
  var RegionArray = new Array();
  var check1 = getRegion[6].checked;
  var check2 = getRegion[7].checked;
  var check3 = getRegion[8].checked;
  for (var i = 6; i < 9; i++) {
    if (getRegion[i].checked) {
      RegionArray.push(getRegion[i].value);
    }
  }


  // Take Message Content
  var getMessage = document.getElementById('messageNine');
  var Message = getMessage.value;
  var showMessage = "";

  if (Name == "" && Email == "" && PhoneNumber == "" && Address == "" && Message == "") {
    alert("Please Fill In All Your Information!!!");
    return;
  }

  // Name Condition
  if (Name == "") {
    alert("Please Enter Your Name!!!");
    return;
  }

  // Email Condition
  if (Email == "") {
    alert("Please Enter Your Email!!")
    return;
  }

  // Phone Number Condition
  if (PhoneNumber == "") {
    alert("Please Enter Your Phone Number");
    return;
  }

  // Address Condition
  if (Address == "") {
    alert("Please Enter Your Address");
    return;
  }

  // Message Condition
  if (Message == "") {
    alert("Please Enter Your Message!!!");
    return;
  }

  if (isNaN(PhoneNumber)) {
    alert("Phone Number must be number only!!!");
    return;
  }

  // Region Condition
  if (check1 || check2 || check3) {

  }
  else {
    alert("Please Select Your Region!!!");
    return;
  }

  // Gender Condition
  if (checkMale || checkFemale) {

  }
  else {
    alert("Please Select Your Gender!!!");
    return;
  }

  var choice = confirm("Name: " + Name +
    "\nGender: " + GenderArray +
    "\nEmail: " + Email +
    "\nPhone Number: " + PhoneNumber +
    "\nAddress: " + Address +
    "\nRegion: " + RegionArray +
    "\nMessage: " + Message);
  if (choice = 1) {
    alert(" Message has been sent!!! \n Thanks you!!!");
    window.location = "index.html";
  }
}