import { Injectable } from '@angular/core';

import { Country } from 'src/app/shared/country';
import { State } from 'src/app/shared/state';
import { ServiceTypes } from 'src/app/shared/service_types';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {

//   constructor() { }
// }



@Injectable()
export class SelectService {

  getCountries() {
    return [
     new Country(1, 'Nissan-Union Place' ),
     new Country(2, 'Rajagiriya Service Center' ),
     new Country(3, 'Peliyagoda Service Center' ),
     new Country(4, 'Pitstop-Negombo' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Honda' ),
     new State(2, 1, 'Nissan' ),
     new State(3, 1, 'BMW'),
     new State(4, 1, 'Audi'),
     new State(5, 2, 'Honda' ),
     new State(6, 2, 'Nissan'),
     new State(7, 2, 'BMW' ),
     new State(8, 3, 'Audi' ),
     new State(9, 3, 'Suzuki' ),
     new State(10, 3, 'Toyota' )
    ];
  }
  getServiceTypes(){
    return[
    new ServiceTypes(1,'Body Wash'),
    new ServiceTypes(2,'Oil and filter change'),
    new ServiceTypes(3,'New air filter'),
    new ServiceTypes(4,'Brake cylinders, pipes and hoses checked for leaks or damage'),
    new ServiceTypes(5,'Full service')
  ];
    

  }

}
