import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  uri = 'http://localhost:4000/members';

  constructor(private http: HttpClient) {}

  addMember(MemberName: string, MemberBio: string, MemberAge: number) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge,
    };

    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe((res) => console.log('Done'));
  }

  getMembers() {
    return this.http.get(`${this.uri}`);
  }

  editMember(id: any) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateMember(
    MemberName: string,
    MemberBio: string,
    MemberAge: number,
    id: number
  ) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge,
    };

    this.http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe((res) => console.log('Done'));
  }

  deleteMember(id: number) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
