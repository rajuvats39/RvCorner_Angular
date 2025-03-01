import { Component } from '@angular/core';
class Movie {
  title: string | undefined;
  director: string | undefined;
}

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent {
  public title: string = "Top 5 Movies";
  public movies: any[] = [];
  public mTitle: string = "";
  public mDirector: string = "";

  ngOnInit(): void {
    this.refresh();
  }

  public remove(i: any): void {
    this.movies.splice(i, 1);
  }

  public addMovie(): void {
    this.movies.push({ title: this.mTitle, director: this.mDirector });
    this.mTitle = ""
    this.mDirector = ""
  }

  public refresh(): void {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo' },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ]
  }

  public trackByFn(index: any, item: any): void {
    return item.title;
  }

}



