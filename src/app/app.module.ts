import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
	declarations: [
		AppComponent,
		ChatComponent,
		UserInfoComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [ChatService],
	bootstrap: [AppComponent]
})
export class AppModule { }
