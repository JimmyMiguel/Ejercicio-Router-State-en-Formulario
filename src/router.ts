 import { welcomFun } from "./component.ts/welcomCom";
import { forlularioFun } from "./component.ts/formCom";
export function router(contenedor:HTMLElement){

    const rutasArray = [
        {
            path:/^\/$/,
            accionFun:(goTo:Function)=>{
            return welcomFun(goTo)
                        

            }
        },
                {
            path:/^\/header$/,
            accionFun: ()=>{
                return forlularioFun()
            }
        }
    ]

     function handlerRoute(ruta:string){

        for (const route of rutasArray) {
            if (route.path.test(ruta)) {
                contenedor.innerHTML = '';
                contenedor.appendChild(route.accionFun(goTo));
                return                  
            }
        }
        contenedor.innerHTML = '<h2>404 - Página no encontrada</h2>'
    }

        function goTo(path: string) {
            history.pushState({}, '', path);
            handlerRoute(path);
        }


            window.addEventListener('popstate', () => {
            handlerRoute(location.pathname);
        });

        handlerRoute(location.pathname)

        return {goTo}

}