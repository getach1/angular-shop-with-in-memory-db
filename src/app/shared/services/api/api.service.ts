import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import urlJoin from "url-join";

// interface ListResponse<T> {
//     page: number;
//     pageSize: number;
//     rows: T[];
//     total: number;
//     totalPages: number;
// }

export abstract class APIService<T> {
  protected readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private endpoint: string) { }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(urlJoin(this.apiUrl, this.endpoint))
  }
  get(id: string): Observable<T> {
    return this.http.get<T>(urlJoin(this.apiUrl, this.endpoint, `${id}`));
  }

  create(product: T): Observable<T> {
    return this.http.post<T>(urlJoin(this.apiUrl, this.endpoint), product);
  }

  patch(id: string, product: Partial<T>): Observable<T> {
    return this.http.put<T>(
      urlJoin(this.apiUrl, this.endpoint, `${id}`),
      product,
    );
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(
      urlJoin(this.apiUrl, this.endpoint, `${id}`),
    );
  }
}
