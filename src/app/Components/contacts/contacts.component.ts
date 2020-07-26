import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from '../../Services/contactService.service';
import { ContactsModel } from '../../Models/Contacts';
import { Router } from '@angular/router';
import { Globals } from 'src/app/Globals/Globals';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private contactModel = new ContactsModel();
  public contactlist: any;

  public frmfirstname = new FormControl("");
  public frmlastname = new FormControl("");
  public frmemail = new FormControl("", [Validators.required, Validators.email,
  Validators.pattern('\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b')]);
  public frmphonenumber = new FormControl("");
  public frmstatus = new FormControl(true);
  public id = new FormControl(0);

  public formFields = new FormGroup({
    frmfirstname: this.frmfirstname,
    frmlastname: this.frmlastname,
    frmemail: this.frmemail,
    frmphonenumber: this.frmphonenumber,
    frmstatus: this.frmstatus,
    id: this.id
  });

  constructor(private contactService: ContactService,
    private router: Router, private globals: Globals) {

  }

  async ngOnInit() {
    // if(!this.globals.isAuthenticated){
    //   this.router.navigate(['']);
    // }
    await this.GetAllContacts();
  }

  async SaveAction(): Promise<any> {
    if (this.formFields.valid) {
      this.contactModel.firstName = this.formFields.value.frmfirstname;
      this.contactModel.lastName = this.formFields.value.frmlastname;
      this.contactModel.email = this.formFields.value.frmemail;
      this.contactModel.phoneNumber = this.formFields.value.frmphonenumber;
      this.contactModel.status = this.formFields.value.frmstatus;
      this.contactModel.id = this.formFields.value.id;

      let res = await this.contactService.saveContact(this.contactModel);
      if (res) {
        await this.GetAllContacts();
        this.Reset();
        alert('Contact saved successfully.');
      }
    }
  }

  async Update(id: number): Promise<any> {

    let data = await this.contactService.getContactById(id);

    this.formFields.get('frmfirstname').setValue(data.firstName);
    this.formFields.get('frmlastname').setValue(data.lastName);
    this.formFields.get('frmemail').setValue(data.email);
    this.formFields.get('frmphonenumber').setValue(data.phoneNumber);
    this.formFields.get('frmstatus').setValue(data.status);
    this.formFields.get('id').setValue(data.id);
  }

  async Delete(id: number): Promise<any> {
    let res = await this.contactService.deleteContacts(id);
    if (res) {
      await this.GetAllContacts();
      alert('Contact deleted.');
    }
  }

  private Refresh(): void {
    window.location.reload();
  }

  private async GetAllContacts(): Promise<void> {
    this.contactlist = await this.contactService.getContacts();
  }

  private Reset(): void {
    this.formFields.reset();
  }
}
