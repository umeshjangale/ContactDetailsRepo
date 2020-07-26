import { Injectable } from '@angular/core';
import { HttpClientService } from './httpClient.service';
import { ContactsModel } from '../Models/Contacts';
import { apiconstants } from '../Constants/apiconstants';
import { AuthModel } from '../Models/Auth';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private httpClient: HttpClientService) {
    }

    async saveContact(contactModel: ContactsModel): Promise<any> {
        return this.httpClient.post(apiconstants.BaseUrl + apiconstants.SaveContacts, contactModel)
            .pipe().toPromise()
            .then(t => { return t as boolean; })
            .catch(x => { return false; });
    }

    async authenticate(authModel: AuthModel): Promise<boolean> {
        return this.httpClient.post(apiconstants.BaseUrl + apiconstants.Authenticate, authModel)
            .pipe().toPromise()
            .then(t => { return t as boolean; })
            .catch(x => { return false; });
    }

    async getContacts(): Promise<ContactsModel> {
        return this.httpClient.get(apiconstants.BaseUrl + apiconstants.GetContacts)
            .pipe()
            .toPromise()
            .then(t => { return t; })
            .catch(x => { console.log("-----Error:-----" + x); return null; });
    }

    async getContactById(id: number): Promise<ContactsModel> {
        return this.httpClient.get(apiconstants.BaseUrl + apiconstants.GetContactById + id)
            .pipe()
            .toPromise()
            .then(t => { return t; })
            .catch(x => { console.log("-----Error:-----" + x); return null; });
    }

    //  map((con: any) => ({
    //     FirstName: con.FirstName,
    //     LastName: con.LastName,
    //     Email: con.Email,
    //     PhoneNumber: con.PhoneNumber,
    //     IsActive: con.IsActive,
    // }))

    async deleteContacts(contactId: number): Promise<boolean> {
        return this.httpClient.get(apiconstants.BaseUrl + apiconstants.Deletecontact + contactId)
            .pipe().toPromise()
            .then(t => { return t as boolean; })
            .catch(x => { return false; });
    }
}