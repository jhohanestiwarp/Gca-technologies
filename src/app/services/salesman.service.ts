import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject, computed } from '@angular/core';
import {
  IResponseSaleman,
  ISalesman,
  ISalesmanDto,
} from '@interfaces/salesman';

interface stateList {
  salesmanList: ISalesmanDto[];
}

@Injectable({
  providedIn: 'root',
})
export class SalesmanService {
  private http = inject(HttpClient);

  #stateList = signal<stateList>({
    salesmanList: [],
  });

  public salesmanList = computed(() => this.#stateList().salesmanList);

  public saleManSelected = signal<ISalesmanDto | undefined>(undefined);
  public saleManSelectedPrev = signal<ISalesmanDto | undefined>(undefined);

  constructor() {
    this.getSalesman();
  }

  getSalesman() {
    this.http
      .get<ISalesmanDto[]>('http://74.235.109.154/api/salesman')
      .subscribe((res) => {
        this.#stateList.set({
          salesmanList: res.filter((r) => r.id),
        });
      });
  }

  addSaleman(saleMan: ISalesmanDto) {
    this.#stateList.set({
      salesmanList: [saleMan, ...this.salesmanList()],
    });
  }

  createSalesman(saleMan: ISalesman) {
    return this.http.post<IResponseSaleman>(
      'http://74.235.109.154/api/salesman',
      saleMan
    );
  }
}
