var acc = document.getElementsByClassName("drop");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    var x = this.nextElementSibling;
    if (x.style.display === "block") {
      this.classList.remove("active");
      x.style.display = "none";
      if (window.innerWidth <= 768) {
        this.querySelector(".arrow").style.borderWidth = "0 3px 3px 0";
      }
      
    } else {
      for (j = 0; j < acc.length; j++) {
        acc[j].classList.remove("active");
        var panel = acc[j].nextElementSibling;
        panel.style.display = "none";
        if (window.innerWidth <= 768) {
          if (acc[j].querySelector(".arrow") != null){
            acc[j].querySelector(".arrow").style.borderWidth = "0 3px 3px 0";
        }
        }
      }
      this.classList.toggle("active");
      x.style.display = "block";
      if (window.innerWidth <= 768) {
        this.querySelector(".arrow").style.borderWidth = "3px 0 0 3px";
      }
    }
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            alert('Thank you for your message. We will get back to you soon.');
        } else {
            alert('Sorry, there was an error. Please try again later.');
        }
    };
    xhr.send(formData);
});