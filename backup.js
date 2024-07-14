const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

debugger;
// Get the modal
var modal = document.getElementById("portfolioModal");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var portfolioItems = document.querySelectorAll('.grid-item');

portfolioItems.forEach(function(item) {
  if (item.classList.contains('mechanical-engineering')) {
    item.addEventListener('click', function() {
      var title = this.querySelector('.img-description h3').innerText;
      //var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;
  
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `      
        <h4>Project Overview</h4>
        <p>This project involves the implementation of a controller into a prototype vehicle. The controller's primary function is to manage, order, direct, or regulate the vehicle's behavior by taking inputs from sensors and using them to control actuators.</p>
        <h4>Necessary Assumptions</h4>
        <ul>
          <li>The prototype vehicle includes the necessary sensors and actuators to interface with the controller.</li>
          <li>A microcontroller with appropriate processing power and memory is used.</li>
          <li>The vehicle operates in a specified environment with minimal variations.</li>
          <li>The engineering team possesses the technical expertise required for implementation.</li>
        </ul>
        <h4>Major Goals</h4>
        <ul>
          <li>Ensure vehicle stability and safety.</li>
          <li>Optimize the vehicle's motion efficiency.</li>        
        </ul>
        <h4>Case Studies</h4>
        <ul>
          <li> <strong> Maximum Tilt:</strong> The maximum tilt is achieved when the radius of curvature of the turn is minimized. The lower the angle (alpha), the more the tilt, resulting in a lower radius (R).</li>
          <li> <strong> Zero Lateral Force: </strong> When the lateral force (S) is zero, increasing the angle (alpha) alone will increase the velocity (v), given constant R and m.</li>
          <li> <strong> Behavior of Masses:</strong> The square of the velocity (v^2) is directly proportional to the angle of tilt (alpha).</li>        
        </ul>
        
        <h4>Accelerometer Data Analysis</h4>
        <h5>Data Gathering </h5>      
        <p>Using the Vibration meter app, accelerometer data was collected in x, y, and z directions while driving through a parking lot. The data included events like steady-state velocity, acceleration, braking, and encountering bumps.</p>
        <!-- <img src="${imgSrc}" alt="Project Image"> -->
  
        <h4>Scenario Analysis</h4>
        <ul>
        <li> <strong> Acceleration: </strong> A peak value indicates maximum acceleration, which may involve measurement errors or sudden jerks. </li>
        <li> <strong> De-acceleration: </strong> Braking data is less noisy compared to acceleration, correlating with human perception that braking is easier to control.</li>
        <li> <strong> Bump Encounter: </strong>  Excitations in the Z-axis while encountering a bump indicate the damping of vertical excitations, correlating to the physical jerk felt by passengers. </li>
  
        </ul>
        <h4>Conclusion</h4>
        <ul>
          <li> <strong> Physical Actuators:</strong> Effective for larger undulations (>0.3 m/s^2) but less so for micro-vibrations and high-frequency noise (>100 Hz), which are beyond the capacity of physical actuators.</li>
          <li> <strong> Comfort vs. Noise: </strong> Comfort, measured below 50 Hz, and noise, perceived above 400 Hz, require different considerations. Active suspension has less influence on noise characteristics compared to comfort.</li>
     
        </ul>
      `;
  
      modal.style.display = "block";
    });
  };

  if (item.classList.contains('finite-elements-engineering')) {
    item.addEventListener('click', function() {
      var title = this.querySelector('.img-description h3').innerText;
      //var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;
  
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `        
        <h4>Project Overview</h4>
        <p>Finite Elements in Engineering Project 03 – Individual Project</p>
        <p><strong>FEM model description:</strong></p>
        <p><strong>Material Properties</strong></p>
        <p>The material used for this design is PMMA with properties assumed to be Young’s Modulus 3310 MPa and Poisson Ratio 0.35 - 0.40.</p>
        <p><strong>Mesh Details:</strong></p>
        <ul>
          <li>Nodes: 15804</li>
          <li>Elements: 15686</li>
          <li>Element Type: 15115 linear quadrilateral elements of type CPS4R and 471 linear triangular elements of type CPS3.</li>
        </ul>
        <p>The bolt notch has been changed from a conical shape to a semicircle to reduce the Max Principal stress. And a few sharp corners were given a fillet to smooth them out.</p>
        <p><strong>Mesh Size and Results:</strong></p>
        <ul>
          <li>Mesh Size: 0.03</li>
          <li>No. of Elements: 6757</li>
          <li>Load (N): 1200</li>
          <li>Maximum Principal Stress (MPa): 34.44</li>
          <li>Displacement (U2) (mm): 0.01069</li>
        </ul>
        <p><strong>Improvements/Corrections in the FEM modeling:</strong></p>
        <p>The ‘cross’ part of the design has been chamfered to a radius of about 2 mm for each edge. The stress values from the original design compared to the modified design:</p>
        <ul>
          <li>S22: Modified design: 39.06 MPa</li>
          <li>U: Modified design: 1.0888 mm</li>
        </ul>
        <!-- <img src="${imgSrc}" alt="Project Image">  -->
      `;
  
      modal.style.display = "block";
    });
  
  
  };

  if (item.classList.contains('cfd')) {
    item.addEventListener('click', function() {
      var title = this.querySelector('.img-description h3').innerText;
      var description = this.querySelector('.img-description h5').innerText;
      var imgSrc = this.querySelector('img').src;
  
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerHTML = `        
      <h4>Role: CFD Analyst</h4>
      <p><strong>Objective:</strong> To optimize the thermal performance of a water heater using CFD simulations.</p>
      <p><strong>Overview:</strong> This project involved modeling a cylindrical water heater in SolidWorks and performing CFD analysis in ANSYS to evaluate its thermal efficiency.</p>
      <p><strong>Tools and Software:</strong> SolidWorks, ANSYS, MATLAB</p>
      <h5>Technical Details</h5>
      <ul>
        <li><strong>Design Process:</strong> Developed a CAD model in SolidWorks, iterated based on thermal analysis.</li>
        <li><strong>Analysis:</strong> Conducted CFD simulations to assess temperature distribution and flow patterns.</li>
        <li><strong>Prototyping:</strong> Built a prototype and conducted thermal testing to validate the simulation results.</li>
      </ul>
      <h5>Key Deliverables</h5>
      <ul>
        <li>Contour plots of temperature distribution</li>
        <li>Y-velocity contour plots</li>
        <li>Average temperature calculations and graphs</li>
      </ul>
      <h5>Challenges and Solutions</h5>
      <p><strong>Challenges:</strong> Ensuring accurate mesh generation for complex geometry.</p>
      <p><strong>Solutions:</strong> Refined mesh in critical areas and validated with experimental data.</p>
      <h5>Outcome and Impact</h5>
      <p><strong>Results:</strong> Achieved a 15% improvement in thermal efficiency.</p>
      <p><strong>Impact:</strong> Provided valuable insights for redesigning the water heater for better performance.</p>
      <h5>Reflection</h5>
      <p><strong>Learnings:</strong> Gained experience in CFD simulations and thermal analysis.</p>
      <p><strong>Future Applications:</strong> Applying CFD analysis in other thermal systems for performance optimization.</p>
      `;
  
      modal.style.display = "block";
    });
  
  
  };
  
});


document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const closeBtn = document.getElementById('close-btn');
  const readMoreContent = document.getElementById('read-more-content');

  readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    readMoreContent.style.display = 'block';
    window.scrollTo({
      top: readMoreContent.offsetTop,
      behavior: 'smooth'
    });
  });

  closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    readMoreContent.style.display = 'none';
    window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const hiremeText = document.getElementById('hireme-text');
  const contactText = document.getElementById('contact-text');
  const contactAddress = document.getElementById('contact-address');
  const contactEmail = document.getElementById('contact-email');
  const contactPhone = document.getElementById('contact-phone');
  const readMoreBtn = document.getElementById('read-more-btn');
  const readLessBtn = document.getElementById('read-less-btn');
  const moreContent = document.getElementById('more-content');
  const formResponse = document.getElementById('form-response');
  const contactForm = document.getElementById('contact-form');

  // Harshal Tingre's information from the resume
  const hiremeDescription = "I am Harshal Tingre, a Mechanical Engineer with a Master's degree from Arizona State University and a Bachelor's degree from Savitribai Phule Pune University. Let's discuss how we can collaborate on your next project.";
  const contactDescription = "Feel free to reach out to me via email or phone for any inquiries or project discussions.";
  const address = "Arizona, USA";
  const email = "htingre@asu.edu";
  const phone = "+1-602 738 3155";

  // Updating the HTML content with the resume information
  hiremeText.textContent = hiremeDescription;
  contactText.textContent = contactDescription;
  contactAddress.textContent = address;
  contactEmail.textContent = email;
  contactPhone.textContent = phone;

  // Show more content on clicking 'Read more'
  readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    moreContent.style.display = 'block';
    readMoreBtn.style.display = 'none';
  });

  // Hide more content on clicking 'Read less'
  readLessBtn.addEventListener('click', function(event) {
    event.preventDefault();
    moreContent.style.display = 'none';
    readMoreBtn.style.display = 'block';
  });

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show confirmation message
    formResponse.style.display = 'block';
  
    // Hide the confirmation message after 5 seconds
    setTimeout(function() {
      formResponse.style.display = 'none';
    }, 5000);
  
    // Reset form fields
    contactForm.reset();
  });
});


// JavaScript function to handle CV download
function downloadCV() {
  const cvFilePath = 'img/cv.pdf'; // Path to the CV file
  const link = document.createElement('a');
  link.href = cvFilePath;
  link.download = 'cv.pdf'; // The name of the file to be downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach the downloadCV function to the button click event
document.getElementById('downloadCVBtn').addEventListener('click', downloadCV);






