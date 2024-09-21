import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientPage } from './pages/clients/client.page';
import { DettePage } from './pages/dettes/dette.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ArticlePage } from './pages/articles/article.page';
import { AdminPage } from './pages/utilisateurs/admin.page';
import { DemandePage } from './pages/demandes/demande.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { LayoutSecure } from './components/layout/secure/layout.secure';
import { SideSecure } from './components/layout/secure/sidebar/sidebar.secure';
import { HeaderSecure } from './components/layout/secure/header/header.secure';
import { ListeComponent } from './pages/articles/components/liste/liste.component';
import { ApproComponent } from './pages/articles/components/appro/appro.component';

// Modules Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaginationComponent } from './components/paggination.component';
import { ArticleServiceArticle } from './pages/articles/article-selection.service';
import { ModalComponent } from './pages/articles/components/modal/modal.component';
import { FormComponent } from './pages/articles/components/form/form.component';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    ClientPage,
    DettePage,
    DashboardPage,
    ArticlePage,
    AdminPage,
    DemandePage,
    NotFoundPage,
    LayoutSecure,
    SideSecure,
    HeaderSecure,
    ListeComponent,
    ApproComponent,
    PaginationComponent,
    ArticleServiceArticle,
    ModalComponent,
    FormComponent,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
