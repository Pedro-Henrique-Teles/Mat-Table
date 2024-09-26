import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Item {
  codigo: number;
  descricao: string;
}

const DADOS_ESTATICOS: Item[] = [
  { codigo: 1, descricao: 'Maçã'},
  { codigo: 2, descricao: 'Banana' },
  { codigo: 3, descricao: 'Laranja' },
  { codigo: 4, descricao: 'Abacaxi' },
  { codigo: 5, descricao: 'Manga' },
  { codigo: 6, descricao: 'Uva' },
  { codigo: 7, descricao: 'Morango' },
  { codigo: 8, descricao: 'Melancia' },
  { codigo: 9, descricao: 'Pera' },
  { codigo: 10, descricao: 'Kiwi' },
  { codigo: 11, descricao: 'Limão' },
  { codigo: 12, descricao: 'Cereja' },
  { codigo: 13, descricao: 'Caju' },
  { codigo: 14, descricao: 'Coco' },
  { codigo: 15, descricao: 'Figo' },
  { codigo: 16, descricao: 'Goiaba' },
  { codigo: 17, descricao: 'Pêssego' },
  { codigo: 18, descricao: 'Ameixa' },
  { codigo: 19, descricao: 'Framboesa' },
  { codigo: 20, descricao: 'Amora' },
  { codigo: 21, descricao: 'Mamão' },
  { codigo: 22, descricao: 'Melão' },
  { codigo: 23, descricao: 'Pitaya' },
  { codigo: 24, descricao: 'Jabuticaba' },
  { codigo: 25, descricao: 'Graviola' },
  { codigo: 26, descricao: 'Acerola' },
  { codigo: 27, descricao: 'Tangerina' },
  { codigo: 28, descricao: 'Maracujá' },
  { codigo: 29, descricao: 'Romã' },
  { codigo: 30, descricao: 'Caqui' },
  { codigo: 31, descricao: 'Nêspera' },
  { codigo: 32, descricao: 'Carambola' },
  { codigo: 33, descricao: 'Lichia' },
  { codigo: 34, descricao: 'Jaca' },
  { codigo: 35, descricao: 'Abiu' },
  { codigo: 36, descricao: 'Açaí' },
  { codigo: 37, descricao: 'Cupuaçu' },
  { codigo: 38, descricao: 'Buriti' },
  { codigo: 39, descricao: 'Jenipapo' },
  { codigo: 40, descricao: 'Tucumã' },
  { codigo: 41, descricao: 'Pequi' },
  { codigo: 42, descricao: 'Cambuci' },
  { codigo: 43, descricao: 'Guaraná' },
  { codigo: 44, descricao: 'Sapoti' },
  { codigo: 45, descricao: 'Siriguela' },
  { codigo: 46, descricao: 'Mangaba' },
  { codigo: 47, descricao: 'Pitanga' },
  { codigo: 48, descricao: 'Umbu' },
  { codigo: 49, descricao: 'Araticum' },
  { codigo: 50, descricao: 'Cabeludinha' },
  { codigo: 51, descricao: 'Marolo' },
  { codigo: 52, descricao: 'Murici' },
  { codigo: 53, descricao: 'Uvaia' },
  { codigo: 54, descricao: 'Ameixa-amarela' },
  { codigo: 55, descricao: 'Seriguela' },
  { codigo: 56, descricao: 'Tamarindo' },
  { codigo: 57, descricao: 'Butiá' },
  { codigo: 58, descricao: 'Noni' },
  { codigo: 59, descricao: 'Biribá' },
  { codigo: 60, descricao: 'Maçã-verde' },
  { codigo: 61, descricao: 'Groselha' },
  { codigo: 62, descricao: 'Durião' },
  { codigo: 63, descricao: 'Camu-camu' },
  { codigo: 64, descricao: 'Feijoa' },
  { codigo: 65, descricao: 'Baru' },
  { codigo: 66, descricao: 'Guabiroba' },
  { codigo: 67, descricao: 'Grumixama' },
  { codigo: 68, descricao: 'Murta' },
  { codigo: 69, descricao: 'Pomelo' },
  { codigo: 70, descricao: 'Physalis' },
  { codigo: 71, descricao: 'Abacate' },
  { codigo: 72, descricao: 'Jamelão' },
  { codigo: 73, descricao: 'Tamarillo' },
  { codigo: 74, descricao: 'Mangostão' },
  { codigo: 75, descricao: 'Rambutan' },
  { codigo: 76, descricao: 'Longan' },
  { codigo: 77, descricao: 'Damasco' },
  { codigo: 78, descricao: 'Araçá' },
  { codigo: 79, descricao: 'Cacau' },
  { codigo: 80, descricao: 'Pupunha' },
  { codigo: 81, descricao: 'Cambucá' },
  { codigo: 82, descricao: 'Groselha-negra' },
  { codigo: 83, descricao: 'Castanha-do-pará' },
  { codigo: 84, descricao: 'Mirtillo' },
  { codigo: 85, descricao: 'Fruta-pão' },
  { codigo: 86, descricao: 'Maracujá-doce' },
  { codigo: 87, descricao: 'Sapucaia' },
  { codigo: 88, descricao: 'Imbu' },
  { codigo: 89, descricao: 'Caju-roxo' },
  { codigo: 90, descricao: 'Fruta-do-conde' },
  { codigo: 91, descricao: 'Jambo' },
  { codigo: 92, descricao: 'Cabeluda' },
  { codigo: 93, descricao: 'Pinha' },
  { codigo: 94, descricao: 'Ameixa-preta' },
  { codigo: 95, descricao: 'Pitomba' },
  { codigo: 96, descricao: 'Jatobá' },
  { codigo: 97, descricao: 'Murta' },
  { codigo: 98, descricao: 'Groselha-indiana' },
  { codigo: 99, descricao: 'Camu-camu' },
  { codigo: 100, descricao: 'Jamelão-roxo' }
];


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  colunasExibidas: string[] = ['codigo', 'descricao'];
  fonteDeDados = new MatTableDataSource<Item>(DADOS_ESTATICOS);

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) organizador!: MatSort;

  ngOnInit() {}

  ngAfterViewInit() {
    this.fonteDeDados.paginator = this.paginador;
    this.fonteDeDados.sort = this.organizador;
  }

  aplicarFiltro(valor: string) {
    this.fonteDeDados.filter = valor.trim().toLowerCase();
  }
}
