export interface ISalesman {
  id: string;
  name: string;
  category: string;
  address: string;
  photo: string;
  vehicle: string;
}
export interface ISalesmanDto extends ISalesman {
  isActive: boolean;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
  height: number;
}

export interface IResponseSaleman {
  body: ISalesmanDto;
  statusCode: string;
  statusCodeValue: number;
}
