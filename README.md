# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Temas puntuales de la sección
# GifsApp - Aplicacion para buscan imagenes

¿Qué veremos en esta sección?
La sección contendrá nuestra primera aplicación real de Angular, este es un breve listado de los temas fundamentales:

* Modularización de la aplicación
* Estructura de la aplicación de media a gran escapa
* Componentes
* ViewChild
* Servicios
* Historial de búsquedas
* Uso de Api Keys
* LocalStorage
* Peticiones HTTP
* Animaciones mediante css

Recuerden que siempre tienen el código fuente al final de la sección para que lo puedan descargar y comparar contra el suyo en caso de que sea necesario.

# Temas aprendidos
* [Bootstrap 5](https://getbootstrap.com/)
* [Flex de bootstrap](https://getbootstrap.com/docs/5.0/utilities/flex/)

* [@ViewChild](https://angular.io/api/core/ViewChild) 
(Nota: Para mas sencillo tambien se puede utilizar
FormsModule vista en el proyecto anterior, pero 
no necesitamos importar un modulo solo para tratar
con informacion de un Input de HTML y es por eso
que utilizamos @ViewChild)

* [Evento KeyUp en angular, (keyup.enter)](https://www.geeksforgeeks.org/angular-keyup-event/#:~:text=(keyup)%3A,the%20(keyup)%20event%20occurs.)

* [El simbolo #](https://es.stackoverflow.com/questions/263924/para-que-sirve-estas-etiquetas-angular) cuando esta dentro de un input 
    * El símbolo numeral (#) indica que se creará una Template reference variable, la cual es una variable que es una referencia al elemento DOM del template en donde se declara.
    * ```html
        <input type="email" #email name="email" />
        <!-- Crea una variable que referencia al elemento input, por consiguiente, podemos hacer algo como: -->
        {{ email.value }}
        ```
    * ```typescript
        // en el la clase de typescript
        @ViewChild('email') email: TemplateRef<HTMLInputElement>

        const emailInput = this.email.nativeElement as HTMLInputElement
        emailInput.value // o .focus() o cualquier propiedad/método disponible en HTMLInputElement
        ```
* [Template variables con # en angular](https://angular.io/guide/template-reference-variables)
* [Referencia local con #](https://www.htmlquick.com/es/tutorials/links.html#linking-to-fragments) 
    * ```html
        <a href="#concept">Volver a la sección "Concepto"</a>
        ```

* [Using the non-null assertion operator --> !](https://learntypescript.dev/07/l2-non-null-assertion-operator)
    * > El operador de aserción no nulo es un signo de exclamación ( !), y se coloca después de la variable o expresión que queremos decirle a TypeScript que no es nullo undefined.
    * ```
        return text!.concat(text!);
        ```
* [Non-null assertion operator desde www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

* Crear servicio con AngularCLI
    * `ng generate service gifs/services/gifs --skipTests`
        * Nota. A partir de la version 4 en adelante
            angular dise que los servicios tienen que
            funcionar de manera global y eso lo hace
            a traves del `providedIn:'root'`.
            ```typescript
                @Injectable({
                providedIn: 'root'
                })
            ```
            y ya con esto no es necesario especificar
            el servicio en los provided del modulo.

* [Pipe **titlecase**](https://angular.io/api/common/TitleCasePipe)

* https://developers.giphy.com/ de consumo gratuito

* API api.giphy.com/v1/gifs/search?api_key=PonerKey=naruto&limit=10

* [Uso de HTTPClientModule](https://angular.io/guide/http) 
para hacer peticiones http con Angular (estos trabajan con 
observable)

* Estableciendo el valor de una propiedad en el URL de 
una imagen para que pueda visualizarse
    * ```html
        <img [src]="gif.images.downsized_medium.url" [alt]="gif.title">
        ```

* Conocer la escrucutura de un Json a traves de https://quicktype.io/

* [LocalStorage y SessionStorage](https://www.w3schools.com/html/html5_webstorage.asp)
    * LocalStorage no es un lugar para guardar informacion
        sensible como targetas de credito

* [JSON.stringyfy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#:~:text=Description-,JSON.stringify(),a%20replacer%20array%20is%20specified.) 
y [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

* Tecnica para devolver otro dato en caso de que el valor
real sea un null
    * ```typescript
        //  //En caso de que lo que devuelva el parse sea
        //  //  null o undefined, entonces regresa el arreglo ya que eso pesa mas que un null o undefined
        this._historial = JSON.parse(localStorage.getItem('historial')!)  || [];
        ```







































































































