import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").classList.remove("bg-transparent");
      document.getElementById("navbar").classList.add("bg-dark");
    } else {
      document.getElementById("navbar").classList.remove("bg-dark");
      document.getElementById("navbar").classList.add("bg-transparent");
    }
  }
}
