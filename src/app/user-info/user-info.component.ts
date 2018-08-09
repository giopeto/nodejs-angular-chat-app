import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { ChatService } from '../chat/chat.service';
import { Users } from '../models/Users';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {

	public userIsAdded: boolean = false;

	constructor(private chatService: ChatService) { }

	ngOnInit() {
	}

	setUser(userName: string): void {
		let user: Users = {id: uuid(), name: userName};
		this.chatService.setUser(user);
		this.userIsAdded = true;
	}

}
