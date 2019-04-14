import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {BASE_URL} from '../config';

interface IResponse {
  data: any;
}

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  public constructor(@Inject(BASE_URL) private baseURL: string) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json');

    const jsonReq = req.clone({
      headers,
      url: `${this.baseURL}${req.url}`,
    });

    return next.handle(jsonReq).pipe(
      filter(this.isHttpResponse),
      map((res: HttpResponse<IResponse>) => {
        return res.clone({body: res.body && res.body.data});
      })
    );
  }

  private isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IResponse> {
    return event instanceof HttpResponse;
  }
}
