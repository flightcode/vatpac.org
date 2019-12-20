import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if ((document.documentElement.scrollTop || document.body.scrollTop) > 50) {
      document.getElementById("navbar").classList.remove("bg-transparent");
      document.getElementById("navbar").classList.add("bg-dark");
      document.getElementById("navbar").classList.add("shadow-sm");
    } else {
      document.getElementById("navbar").classList.remove("bg-dark");
      document.getElementById("navbar").classList.remove("shadow-sm");
      document.getElementById("navbar").classList.add("bg-transparent");
    }
  }
}
