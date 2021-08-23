import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  products:Product[]=[];

  displayedColumns: string[] = [
    'PRODUCTOCODPROVEEDOR',
    'PRODUCTONOMBRE',
    'PRODUCTOCODEQUIVALENTE',
    'PRODUCTODISTRIBCOD',
    'PROVEEDORID',
    'PRODUCTOACTIVO',
    'ProductoTipo',
    'Rest',
    'Negocio',
    'Marca',
    'Categoria',
    'Linea',
    'Piso',
    'Pallet',
    'FecIngreso',
    'Dto'
  ];

  // ProductoTipo. Si ProductoTipo es “S”, la descripción en la grilla debe mostrar “Simple”. Si ProductoTipo es “T”, la descripción en la grilla debe mostrar “Custom”. Sino debe
  // mostrar “Combo Abierto”
  // Rest. Siempre debe estar “desmarcado”
  // Negocio. Siempre debe mostrar –SIN DEFINIRMarca. Siempre debe mostrar –SIN DEFINIRCategoría. Siempre debe mostrar –SIN DEFINIRLínea. Siempre debe mostrar –SIN DEFINIRPiso = PRODUCTOCNTPISO
  // Pallet = PRODUCTOCNTPALET
  // F. Ingreso = PRODUCTODTINS
  // Dto. Siempre debe mostrar “0.00”

  constructor( private productService:ProductsService) { }

  ngOnInit(): void {

    this.productService.products.subscribe( resp => {

  
      let {sProductosAll} = resp;

      // sProductosAll = sProductosAll.map( e => {
      //   return {
      //     PRODUCTOCODPROVEEDOR: e.PRODUCTOCODPROVEEDOR
      //   };  
      // });

      this.products = sProductosAll;

      console.log(resp);

    })

  }

}
