import { Component } from '@angular/core';


interface City {
  name: string;
  code: string;
}


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
  orders?: Order[];
}

export interface Order
  {
      id?: string;
      productCode?: string,
      date?: string,
      amount?: number,
      quantity?: number,
      customer?: string,
      status?: string;
  };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  countries: any[] = [ 
        {"name": "Afghanistan", "code": "AF"}, 
        {"name": "Åland Islands", "code": "AX"}, 
        {"name": "Albania", "code": "AL"}, 
        {"name": "Algeria", "code": "DZ"}
    ];
  selectedCountryAdvanced: any[] | undefined;
  filteredCountries!: any[];

  /* noting.  1st one is the one it display by */
  cities: City[] = [
    { name: '', code: '' },
   { name: 'New York', code: 'NY' },     
   { name: 'Rome', code: 'RM' },
    
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  //selectedCity: City | undefined; //= { name: 'Istanbul', code: 'IST' };
  selectedCity: City = { name: '', code: '' };// rome IF no '' exists. 

  products: Product[] = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Judds Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
        {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'Customer 1',
            status: 'PENDING'
        },
        {
          id: '1000-1',
          productCode: 'f230fh0g4',
          date: '2020-10-11',
          amount: 30,
          quantity: 1,
          customer: 'Customer 2',
          status: 'PENDING'
      }
    ]
}];


getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warning';
      case 'OUTOFSTOCK':
          return 'danger';
      default: 
          return 'danger';
  }
}

getStatusSeverity(status: string){
  switch (status) {
      case 'PENDING':
          return 'warning';
      case 'DELIVERED':
          return 'success';
      case 'CANCELLED':
          return 'danger'
      default: 
          return 'danger';
  }
}

 
  filterCountry(event: { query: any; }) {    
    let filtered: any[] = [];
    let query = event.query;    
    for (let i = 0; i < this.countries.length; i++) {      
      let country = this.countries[i];      
      if (country.name.toLowerCase().includes( query.toLowerCase() )) {        
        filtered.push(country);        
      }
    }

    this.filteredCountries = filtered;
  }
}
