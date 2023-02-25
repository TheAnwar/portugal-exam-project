import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  step = 1;

  packages = [
    {
      name: 'Básico',
      desc: '1 Disciplina | 10 Exames | 1 Mês',
      originalPrice: '7,99€/mês',
      price: '4,99€/mês*',
      color: '#00216e',
      selected: true,
    },
    {
      name: 'Premium',
      desc: '2 Disciplinas | 20 Exames | 1 Meses',
      originalPrice: '19,99€/mês',
      price: '14,99€/mês*',
      color: '#a6a6a6',
      selected: false,
    },
    {
      name: 'Oferta limitada',
      desc: 'Todas as Disciplinas | Todos os exames | 1 Mês',
      originalPrice: '29,99€/mês',
      price: '24,99€/mês*',
      color: '#70ad47',
      selected: false,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      if (params.step) {
        this.step = +params.step;
      } else {
        this.step = 1;
      }
    });
  }

  selectPackage(index: number) {
    this.packages.forEach((p, i) => {
      if (i === index) {
        this.packages[i].selected = true;
      } else {
        this.packages[i].selected = false;
      }
    });
  }
}
