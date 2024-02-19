import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IResponseSaleman } from '@interfaces/salesman';
import { MapService } from '@services/map.service';
import { SalesmanService } from '@services/salesman.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-create-saleman',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-create-saleman.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCreateSalemanComponent {
  photos = [
    {
      name: 'Persona 1',
      value: 'person1',
    },
    {
      name: 'Persona 2',
      value: 'person2',
    },
    {
      name: 'Persona 3',
      value: 'person3',
    },
    {
      name: 'Persona 4',
      value: 'person4',
    },
    {
      name: 'Persona 5',
      value: 'person5',
    },
  ];

  vehicles = [
    {
      name: 'Moto',
      value: 'moto',
    },
    {
      name: 'Carro',
      value: 'carro',
    },
    {
      name: 'Grua',
      value: 'grua',
    },
    {
      name: 'Ambulancia',
      value: 'ambulancia',
    },
  ];

  categories = [
    {
      name: 'Operador',
    },
    {
      name: 'Logistico',
    },
    {
      name: 'Administrador',
    },
    {
      name: 'Jefe de Area',
    },
  ];

  public toastr = inject(ToastrService);
  public mapService = inject(MapService);
  public salesManService = inject(SalesmanService);

  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef;

  saleManForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    category: ['', Validators.required],
    address: ['', Validators.required],
    photo: ['', Validators.required],
    vehicle: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSave() {
    if (this.saleManForm.invalid) {
      this.saleManForm.markAllAsTouched();
      this.toastr.warning('Revisa los datos', 'Invalido');
      return;
    }

    this.salesManService
      .createSalesman(this.saleManForm.value)
      .subscribe((res: IResponseSaleman) => {
        if (res.statusCode === 'OK') {
          this.salesManService.addSaleman(res.body);
          const htmlElement = this.mapService.createIconMarker(res.body.vehicle);
          this.mapService.createMarker(res.body, htmlElement);

          this.toastr.success('Registro exitoso!', 'Registrado');
          this.btnCloseModal.nativeElement.click();
          this.cleanForm();
        } else {
          this.toastr.error('Error al guardar', 'Error');
        }
      });
  }

  cleanForm() {
    this.saleManForm.reset();
  }
}
