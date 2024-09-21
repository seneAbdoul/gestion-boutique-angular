import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPage } from './pages/clients/client.page';
import { ArticlePage } from './pages/articles/article.page';
import { DettePage } from './pages/dettes/dette.page';
import { DemandePage } from './pages/demandes/demande.page';
import { AdminPage } from './pages/utilisateurs/admin.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { LayoutSecure } from './components/layout/secure/layout.secure';
import { SideSecure } from './components/layout/secure/sidebar/sidebar.secure';
import { HeaderSecure } from './components/layout/secure/header/header.secure';
import { PaginationComponent } from './components/paggination.component';
import {  ArticleServiceArticle } from './pages/articles/article-selection.service';
import { ModalComponent } from './pages/articles/components/modal/modal.component';
import { FormComponent } from './pages/articles/components/form/form.component';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: 'boutique/client', component: ClientPage },
  { path: 'boutique/article', component: ArticlePage },
  { path: 'boutique/dette', component: DettePage },
  { path: 'boutique/demande', component: DemandePage },
  { path: 'boutique/admin', component: AdminPage },
  { path: 'boutique/dashboard', component: DashboardPage },
  { path: 'layout', component: LayoutSecure },
  { path: 'sidebar', component: SideSecure },
  { path: 'header', component: HeaderSecure },
  { path: 'servicearticle', component: ArticleServiceArticle },
  { path: 'modal', component: ModalComponent },
  { path: 'login', component: LoginPage },
  { path: 'formarticle', component: FormComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: '**', component: NotFoundPage },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
