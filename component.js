class SaludosBasicoElement extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.saludo = "Hola, que tal!";
      this.pintado = false;
   }

   attributeChangedCallback(nombre, valueOld, valueNew) {
      if(nombre === 'nombre'){
         this.saludo = `Hola, ${valueNew}`;
      }
      if(this.pintado){
         this.innerHTML = this.saludo;
      }
      console.log(`${nombre} ha cambiado de ${valueOld} a ${valueNew}`)
   }

   connectedCallback() {
      this.pintado = true;
      this.innerHTML = this.saludo;
   }

   static get observedAttributes() {
      return ['nombre']
   }
}
customElements.define("saludo-basico", SaludosBasicoElement);