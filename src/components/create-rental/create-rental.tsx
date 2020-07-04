import { Component, h, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare const Formio: any;

@Component({
  tag: 'create-rental',
})
export class CreateRental {
  formRef: any;

  @Prop() history: RouterHistory;

  @State() submitDone: boolean = false;

  async componentDidLoad() {
    Formio.icons = 'fontawesome';
    const formIO = await Formio.Formio.createForm(this.formRef, 'https://waugsllxhrnpqpd.form.io/rentalinformation');
    formIO.on('submitDone', () => {
      alert('Rental Information created');
      this.history.push('/handover');
    });
  }

  render() {
    return (
      <div>
        <h2>New Rental</h2>
        <div ref={(el) => (this.formRef = el)}></div>
      </div>
    );
  }
}
