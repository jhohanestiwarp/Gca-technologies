export const validatePhoto = (photo: string = ''): string => {
  const photos = ['person1', 'person2', 'person3', 'person4', 'person5'];
  return photos.includes(photo) ? photo + '.jpg' : 'personDefault.png';
};

export const validateVehicle = (vehicle: string = ''): string => {
  const vehicles = [
    'ambulancia',
    'grua',
    'moto',
    'carro',
    'pin1',
    'pin2',
    'pin3',
    'pin4',
    'pin10',
  ];
  return vehicles.includes(vehicle) ? vehicle + '.svg' : 'sinvehiculo.svg';
};
