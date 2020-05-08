import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    const body: User = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Password: user.Password,
      UserName: user.UserName,
    };

    return this.http
      .post(environment.rootURL + "/api/user/register", body)
      .toPromise();
  }
}
