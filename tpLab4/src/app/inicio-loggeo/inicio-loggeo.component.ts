import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inicio-loggeo',
  templateUrl: './inicio-loggeo.component.html',
  styleUrls: ['./inicio-loggeo.component.css']
})
export class InicioLoggeoComponent implements OnInit {

 user : any;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.user = localStorage.getItem('useremail');
     console.log(this.user);
  }

  ngOnInit() {
  }
}
