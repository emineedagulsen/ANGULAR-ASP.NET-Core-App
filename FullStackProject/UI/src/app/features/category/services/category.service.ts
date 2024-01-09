import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { environment } from '../../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}`, model);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/GetAll`);
  }

  getCategoryById(id:String):Observable<Category>{
    return this.http.get<Category>(`${environment.apiBaseUrl}/${id}`);
  }

  updateCategory(id:String,model:UpdateCategoryRequest):Observable<Category>{
     return this.http.put<Category>(`${environment.apiBaseUrl}/Edit/${id}`, model);
  }
  
  deleteCategoryById(id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}/Delete/${id}`);
  }
}
//addCategory fonksiyonu, kategori eklemek için HTTP POST isteği yapar ve Observable<void> türünde bir değer döner.
