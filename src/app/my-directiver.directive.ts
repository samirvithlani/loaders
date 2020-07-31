import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirectiver]'
})
export class MyDirectiverDirective {

  constructor(private element: ElementRef,private renderer:Renderer2) {

   
  }
  @HostListener('mouseover') mouseover(){

    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow')
    
  }
  @HostListener('mouseout') mouseout(){

    console.log(this.renderer.setStyle)
    console.log(this.renderer.addClass)
    this.renderer.addClass(this.element.nativeElement,'a')
    console.log(this.renderer.removeAttribute)
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','grey')
  }

}
