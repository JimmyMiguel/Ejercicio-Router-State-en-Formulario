import { welcomeCom } from "./component.ts/welcomCom";
import { footerCom } from "./component.ts/footerCom";
import { headerCom } from "./component.ts/headerCom";
import { formularioCom } from "./component.ts/formCom";
import { router } from "./router";

(function () {
    const app = document.getElementById("app");

    //   componentes 
    const welcomeTag = document.createElement('welcome-com')
    const footertag = document.createElement('footer-com')
    const headerTag = document.createElement('header-com')
    const formTag = document.createElement('form-tag')

    // componenetes
    customElements.define('welcome-com', welcomeCom);
    customElements.define('footer-com', footerCom);
    customElements.define('header-com', headerCom);
    customElements.define('form-tag', formularioCom);
    

    // componentes

    app?.appendChild(headerTag)

    router("./")

     app?.appendChild(footertag)






})()