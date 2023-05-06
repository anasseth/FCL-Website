import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // CREATE
add(body: any) {
  return this.http.post('', body);
}

// READ All
get() {
  return this.http.get(`https://api.github.com/users/hadley/orgs`);
}

// READ By ID
getById(itemId: string) {
  return this.http.get(`https://your-api-endpoint.com/items/${itemId}`);
}

// UPDATE
update(itemId: string, item: any) {
  return this.http.put(`https://your-api-endpoint.com/items/${itemId}`, item);
}

// DELETE
delete(itemId: string) {
  return this.http.delete(`https://your-api-endpoint.com/items/${itemId}`);
}

}
