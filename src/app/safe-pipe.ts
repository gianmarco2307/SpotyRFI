import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { transform } from "typescript";

@Pipe({
    name:'safe'
})

export class SafePipe implements PipeTransform{

    constructor(private sanitizer: DomSanitizer){}

    transform(url: any){
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
