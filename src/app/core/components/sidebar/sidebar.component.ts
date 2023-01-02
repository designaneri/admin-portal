import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public navMenuStatus: boolean = true;

  constructor(private appService: AuthService) { }

  ngOnInit(): void {
    console.log(this.navMenuStatus);
  }

  public toggleMobileMenu() {
    this.navMenuStatus = !this.navMenuStatus;
  }
  public navItem(){
    if(window.innerWidth < 768){
      this.navMenuStatus = true;
    }
  } 
  
  public onLogout(){
    this.appService.logout()
  }
}
