import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';

export const routes: Routes = [
  {
    path: 'controlflow',
    component: ControlFlowComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
];
