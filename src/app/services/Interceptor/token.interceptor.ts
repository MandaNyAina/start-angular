import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import { ToastService } from '../Message/toast.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private toast: ToastService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    return next.handle(request).pipe(tap(() => { }, 
      (err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status >= 401) {
            this.toast.showError('Erreur serveur', 'Requête non authorisé');
          } else if (err.status >= 500) {
            this.toast.showError('Erreur serveur', 'Ereur au niveau du serveur');
          }
        }
      }
    ));

  }


}
