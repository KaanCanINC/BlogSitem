import {initializeHeader} from './header.js';
export function loadHeader() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const headerHTML = xhr.responseText;
            document.body.insertAdjacentHTML("afterbegin", headerHTML);
            initializeHeader(); // Header yüklendikten sonra initializeHeader() fonksiyonunu çağırın
        }
    };
    xhr.send();
}


/*
export function loadHeader() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const headerHTML = xhr.responseText;
      document.body.insertAdjacentHTML("afterbegin", headerHTML);
    }
  };
  xhr.send();
}

 */


