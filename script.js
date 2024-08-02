e = true;
      function changer() {
        if (e) {
          document.getElementById("pword").setAttribute("type", "text");
          document.getElementById("eye").src =
            "./assets/images/eye-solid-icon.png";
          e = false;
        } else {
          document.getElementById("pword").setAttribute("type", "password");
          document.getElementById("eye").src = "./assets/images/eye-hide.png";
          e = true;
        }
      }