import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidate: Candidate | undefined;

  constructor(
    private canSvc: CandidateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.loadCandidate();
    this.getCandidate(1);
  }

  // loadCandidate() {
  //   this.router.navigateByUrl(`/candidate/1`);
  // }

  getCandidate(canId: number): void {
    this.canSvc.getCandidate(canId).subscribe(
      (data) => {
        this.candidate = data;

      }
    )
  }

  // loadFeed(){
  //   this.canSvc.getCandidate().subscribe(
  //     this.candidate => {
  //       this.candidate = candidate;
  //     },
  //     noTrails => {
  //       console.log("Error retreiving trails from service");
  //       console.log(noTrails);

  //     }
  //   );
  // }

}
