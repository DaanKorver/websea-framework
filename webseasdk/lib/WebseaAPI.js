let WebSeaAPI = {
    query: (file)=>{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
          }
        };
        xmlhttp.open("GET", `./app/sql/${file}.php`, true);
        xmlhttp.send();
    }
}

export default WebSeaAPI;
