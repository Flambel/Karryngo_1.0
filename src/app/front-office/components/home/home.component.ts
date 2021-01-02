import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor( private modalService: NgbModal, private router: Router ) { 
            }

    ngOnInit(): void {
    }

    loadName(event){
        this.router.navigate(['/access/service-subcategories/', event.categoryName, event._id])
    }

    browseCategories(event){
        console.log(event);
        this.router.navigate(['/access/service-categories'])
    }

    aboutUs(event){
        console.log(event);
        this.router.navigate(['/read-more-about-us'])
    }

}
